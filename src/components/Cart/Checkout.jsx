import { useRef } from 'react'
import styles from './Checkout.module.css'
import { toast } from 'react-hot-toast'

const isEmpty = (value) => value.trim() === ''
const isFiveCharacter = (value) => value.trim().length === 5

const Checkout = ({ onCancel, onConfirm }) => {
  const nameInputRef = useRef()
  const streetInputRef = useRef()
  const postalCodeInputRef = useRef()
  const cityInputRef = useRef()

  const confirmHandler = (event) => {
    event.preventDefault()

    const enteredName = nameInputRef.current.value
    const enteredStreet = streetInputRef.current.value
    const enteredPostalCode = postalCodeInputRef.current.value
    const enteredCity = cityInputRef.current.value

    const nameIsValid = !isEmpty(enteredName)
    const streetIsValid = !isEmpty(enteredStreet)
    const postalCodeIsValid = isFiveCharacter(enteredPostalCode)
    const cityIsValid = !isEmpty(enteredCity)

    const isValidForm =
      nameIsValid && streetIsValid && cityIsValid && postalCodeIsValid

    if (isValidForm) {
      onConfirm({
        name: enteredName,
        street: enteredStreet,
        postalCode: enteredPostalCode,
        city: enteredCity
      })
      onCancel()
    } else {
      !nameIsValid && toast.error(`please enter your name`)
      !streetIsValid && toast.error(`please enter your street`)
      !postalCodeIsValid &&
        toast.error(`please enter a correct postal code (5 digits)`)
      !cityIsValid && toast.error(`please enter your city`)
    }
  }
  return (
    <form onSubmit={confirmHandler}>
      <div className={styles.control}>
        <label htmlFor='name'>Your name</label>
        <input type='text' id='name' ref={nameInputRef} />
      </div>

      <div className={styles.control}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef} />
      </div>

      <div className={styles.control}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalCodeInputRef} />
      </div>

      <div className={styles.control}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef} />
      </div>

      <div className={styles.actions}>
        <button
          className={styles['button--alt']}
          type='button'
          onClick={onCancel}
        >
          Cancel
        </button>
        <button className={styles.button}>Confirm</button>
      </div>
    </form>
  )
}

export default Checkout
