import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
import { Link } from "react-router-dom";

export class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      error: "",
      message: "",
      login_stat: null,
      login_data: []
    };
  }

  componentWillMount() {
    sessionStorage.getItem("login_data") &&
      this.setState({
        login_data: JSON.parse(sessionStorage.getItem("login_data")),
        login_stat: JSON.parse(sessionStorage.getItem("login_stat"))
      });
  }

  formHandler = e => {
    let target = e.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });

    if (name === "re_password") {
      if (value !== this.state.password) {
        this.setState({
          error: "password not match"
        });
      } else {
        this.setState({
          error: ""
        });
      }
    }
  };

  handleSubmit = event => {
    event.preventDefault();

    var querystring = require("querystring");
    axios
      .post(
        "http://192.168.50.31/api.prestigelabs/user/login",
        querystring.stringify({
          api_key: "123456",
          user_login: this.state.email,
          password: this.state.password,
          site: "distributor"
        })
      )
      .then(result => {
        //console.log(result.data.response.status)

        if (result.data.response.status === "userError") {
          this.setState({
            message: result.data.response.message
          });
        } else {
          this.setState({
            message: result.data.response.message,
            login_stat: 1,
            login_data: result.data.response.data
          });

          sessionStorage.setItem(
            "login_stat",
            JSON.stringify(this.state.login_stat)
          );
          sessionStorage.setItem(
            "login_data",
            JSON.stringify(this.state.login_data)
          );

          this.props.history.push("/Dashboard");
        }
      });
  };

  render() {
    //console.log(this.state.login_stat);

    if (this.state.login_stat === 1) {
      return (
        <div>
          {this.state.message}

          <h3>Welcome, {this.state.login_data.displayname}</h3>

          <Link to="/" exact>
            Browse Products
          </Link>
        </div>
      );
    } else {
      return (
        <div>
          <Header />
          <h3>Login Form</h3>
          <form id="Login_form" onSubmit={this.handleSubmit} method="post">
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={this.state.email}
              onChange={this.formHandler}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={this.state.password}
              onChange={this.formHandler}
            />

            <small className="warning">{this.state.error}</small>

            <br />
            <input type="submit" value="Submit" />
          </form>

          {this.state.message}
        </div>
      );
    }
  }
}

export default Login;
