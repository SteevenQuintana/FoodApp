export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const updatedItems = state.items.concat(action.item);
      const newAmout =
        state.totalAmount + action.item.amount * action.item.price;
      return {
        items: updatedItems,
        amount: newAmout,
      };

    default:
      return state;
  }
};
