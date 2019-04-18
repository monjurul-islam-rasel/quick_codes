 CheckExist = (cart_items, ProductId) => {
    let i = null;

    Object.keys(cart_items).forEach(function eachKey(key) {
      if (cart_items[key].id === ProductId) i = key;
    });

    return i;
  };
  
  
  incrimentCartItem = itemIndex => {
    //console.log(itemIndex)
    let cart_items = this.state.cart_items;
    cart_items[itemIndex].quantity =
      Number(cart_items[itemIndex].quantity) + Number(1);
    this.setState({
      cart_items: cart_items
    });
  };
  
  
  delCartItem = e => {
    this.setState({
      cart_items: [...this.state.cart_items.filter(item => item.id !== e)]
    });
  };
  
  // ====== decrimentCartItem by id ...
  decrimentCartItem = itemIndex => {
    //console.log(itemIndex)
    let cart_items = this.state.cart_items;
    if (cart_items[itemIndex].quantity > 1) {
      cart_items[itemIndex].quantity =
        Number(cart_items[itemIndex].quantity) - Number(1);
      this.setState({
        cart_items: cart_items
      });
    } else {
      alert("Cart Item Must not be empty..!");
      return false;
    }
  };

  // ======= Incriment Cart Item by itemIndex ....
  incrimentCartItem = itemIndex => {
    //console.log(itemIndex)
    let cart_items = this.state.cart_items;
    cart_items[itemIndex].quantity =
      Number(cart_items[itemIndex].quantity) + Number(1);
    this.setState({
      cart_items: cart_items
    });
  };


AddToCartHandler = (ProductId, Title, start_price) => {
    let cart_items = this.state.cart_items;

    let item_obj_index = this.CheckExist(cart_items, ProductId);

    if (item_obj_index == null) {
      cart_items.push({
        id: ProductId,
        title: Title,
        start_price: start_price,
        quantity: 1
      });
    } else {
      cart_items[item_obj_index].quantity =
        Number(cart_items[item_obj_index].quantity) + Number(1);
    }
    this.setState({ cart_items });
  };
  
  
   changeAmount = e => {
    if (this.state.items.hasOwnProperty("flavors")) {
      let item_flavo = this.state.item_flavor_selected;
      let variations = this.state.items.variations[e + "_" + item_flavo];

      this.setState({
        isLoaded: true,
        item_month_selected: e,
        item_price: variations.sale_price
      });
    } else {
      let variations = this.state.items.variations[e];

      //console.log(variations);

      this.setState({
        isLoaded: true,
        item_month_selected: e,
        item_price: variations.sale_price
      });
    }
  };
  
  
  
