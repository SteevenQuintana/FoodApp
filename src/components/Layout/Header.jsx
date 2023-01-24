import meals from "../../assets/meals.jpg";
import styles from "./Header.module.css";
import HeaderCartBtn from "./HeaderCartBtn";

const Header = (props) => (
  <>
    <header className={styles.header}>
      <h1>FoodApp</h1>
      <HeaderCartBtn onClick={props.onCartClick} />
    </header>
    <div className={styles["main-image"]}>
      <img src={meals} alt="A table with delicious food!" />
    </div>
  </>
);

export default Header;
