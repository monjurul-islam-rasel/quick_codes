componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("cart_items", JSON.stringify(nextState.cart_items));
  }
