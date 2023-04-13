import { defaultCartState } from './CartProvider'

export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const newAmout =
        state.totalAmount + action.item.amount * action.item.price
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      )

      const existingCartItem = state.items[existingCartItemIndex]

      let updatedItems

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount
        }
        updatedItems = [...state.items]
        updatedItems[existingCartItemIndex] = updatedItem
      } else {
        updatedItems = state.items.concat(action.item)
      }

      return {
        items: updatedItems,
        totalAmount: newAmout
      }

    case 'REMOVE':
      const existing_CartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      )
      const existingItem = state.items[existing_CartItemIndex]

      const updatedTotalAmount = state.totalAmount - existingItem.price

      let updated_Items

      if (existingItem.amount === 1) {
        updated_Items = state.items.filter((item) => item.id !== action.id)
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1
        }
        updated_Items = [...state.items]
        updated_Items[existing_CartItemIndex] = updatedItem
      }

      return {
        items: updated_Items,
        totalAmount: updatedTotalAmount
      }

    case 'CLEAR':
      return defaultCartState

    default:
      return state
  }
}
