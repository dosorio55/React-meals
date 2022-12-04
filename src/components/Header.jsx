import mealsPhoto from "../assets/mealsPhoto.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShowCart={onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsPhoto} alt="Table full of delicious food" />
      </div>
    </>
  );
};

export default Header;
