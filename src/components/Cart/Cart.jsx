import { useContext, useState } from 'react'
import CartContext from '../../context/cart-context'
import Modal from '../UI/Modal'
import CartItem from './CartItem'
import styles from './Cart.module.css'
import Checkout from './Checkout'
import { toast } from 'react-hot-toast'

const Cart = (props) => {
  const cartCtx = useContext(CartContext)
  const [isCheckout, setIsCheckout] = useState(false)

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hastItems = cartCtx.items.length > 0

  const cartItemAddHandler = (item) => {
    cartCtx.addItems({ ...item, amount: 1 })
  }

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  }

  const cartItems = (
    <ul className={styles['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          {...item}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  )

  const orderHandler = () => {
    setIsCheckout(true)
  }

  const submitOrderHandler = (userData) => {
    toast.loading('Creating Order', { duration: 400 })
    fetch('https://food-app-9d417-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST',
      body: JSON.stringify({ user: userData, orderItems: cartCtx.items })
    })

    toast.success(
      `${userData.name.split(' ')[0]}, your order has been created successfully`
    )

    cartCtx.clearCart()
  }

  return (
    <Modal onClose={props.onClose}>
      {!isCheckout && (
        <>
          {cartItems}
          <div className={styles.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
          </div>
          <div className={styles.actions}>
            <button className={styles['button--alt']} onClick={props.onClose}>
              Close
            </button>
            {hastItems && (
              <button className={styles.button} onClick={orderHandler}>
                Order
              </button>
            )}
          </div>
        </>
      )}
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
    </Modal>
  )
}

export default Cart
