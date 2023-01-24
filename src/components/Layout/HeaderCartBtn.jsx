import { useContext } from "react";
import CartContext from "../../context/cart-context";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartBtn.module.css";

const HeaderCartBtn = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItems = cartCtx.items.reduce(
    (currNumber, item) => currNumber + item.amount,
    0
  );

  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{cartItems}</span>
    </button>
  );
};

export default HeaderCartBtn;
