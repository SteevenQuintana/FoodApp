import { useRef, useState } from "react";
import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [isValidAmout, setIsValidAmout] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 0 ||
      enteredAmountNumber > 5
    ) {
      setIsValidAmout(false);
      return;
    }
    setIsValidAmout(true);
    props.onAddToCart(enteredAmountNumber);
  };

  const inputObj = {
    ref: amountInputRef,
    id: `meal_${props.id}`,
    type: "number",
    min: "1",
    max: "5",
    step: "1",
    defaultValue: "1",
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input label="Amout" input={inputObj} />
      <button>+ add</button>
      {!isValidAmout && <p>please enter a valid amount (1 - 5)</p>}
    </form>
  );
};

export default MealItemForm;
