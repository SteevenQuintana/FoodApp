import { useContext } from "react";
import CartContext from "../../../context/cart-context";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.meal.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItems({
      id: props.meal.id,
      price: props.meal.price,
      name: props.meal.name,
      description: props.meal.description,
      price: props.meal.price,
      amount: amount,
    });
  };
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={styles.description}>{props.meal.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
