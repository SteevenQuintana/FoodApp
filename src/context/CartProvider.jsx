import React from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItems = (item) => {};

  const removeItems = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItems,
    removeItems,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
