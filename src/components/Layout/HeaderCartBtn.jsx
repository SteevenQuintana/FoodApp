import { useContext, useEffect, useState } from "react";
import CartContext from "../../context/cart-context";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartBtn.module.css";

const HeaderCartBtn = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const { items } = cartCtx;

  const cartItems = items.reduce(
    (currNumber, item) => currNumber + item.amount,
    0
  );

  const buttonStyles = `${styles.button} ${
    btnIsHighlighted ? styles.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={buttonStyles} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{cartItems}</span>
    </button>
  );
};

export default HeaderCartBtn;
