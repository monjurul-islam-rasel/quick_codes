import React from "react";

export default class Form extends React.Component {
  state = {
    firstname: "abc",
    lastname: "",
    username: "",
    email: "",
    password: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <form>
        <input
          name="firstname"
          placeholder="First name"
          value={this.state.firstname}
          onChange={e => this.change(e)}
        />
        <input
          name="lastname"
          placeholder="Last name"
          value={this.state.lastname}
          onChange={e => this.change(e)}
        />
        <input
          name="username"
          placeholder="User name"
          value={this.state.username}
          onChange={e => this.change(e)}
        />
        <input
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={e => this.change(e)}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={e => this.change(e)}
        />

        <button onClick={e => this.onSubmit(e)}>Submit Form</button>
      </form>
    );
  }
}
