import { useCallback, useState } from 'react'
import Cart from './components/Cart/Cart'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import CartProvider from './context/CartProvider'
import ToasterProvider from './provider/ToasterProvider'

function App() {
  const [cartIsShow, setCartIsShow] = useState(false)

  const showCartHandler = useCallback(() => {
    setCartIsShow(true)
  }, [])

  const hideCartHandler = () => {
    setCartIsShow(false)
  }

  return (
    <CartProvider>
      <ToasterProvider />
      {cartIsShow && <Cart onClose={hideCartHandler} />}
      <Header onCartClick={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  )
}

export default App
