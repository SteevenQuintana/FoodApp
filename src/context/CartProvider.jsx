import React, { useReducer } from "react";
import CartContext from "./cart-context";
import { cartReducer } from "./cartReducer";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const addItems = (item) => {
    dispatchCart({ type: "ADD", item });
  };

  const removeItem = (id) => {
    dispatchCart({ type: "REMOVE", id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItems,
    removeItem,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
