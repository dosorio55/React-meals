import classes from "./Modal.module.css";

const Backdrop = ({ onClose }) => {
  return <div onClick={onClose} className={classes.backdrop}></div>;
};

export default Backdrop;
