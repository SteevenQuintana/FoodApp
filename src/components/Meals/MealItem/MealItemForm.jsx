import React from "react";
import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const inputObj = {
    id: `meal_${props.id}`,
    type: "number",
    min: "1",
    max: "5",
    step: "1",
    defaultValue: "1",
  };

  return (
    <form className={styles.form}>
      <Input label="Amout" input={inputObj} />
      <button>+ add</button>
    </form>
  );
};

export default MealItemForm;
