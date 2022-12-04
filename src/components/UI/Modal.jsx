import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";
import ReactDOM from "react-dom";

const portalElement = document.getElementById("overlays");

const Modal = ({ children, onClose }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
