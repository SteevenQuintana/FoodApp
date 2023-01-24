import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = (props) => (
  <div className={styles.backdrop} onClick={props.onClose}></div>
);

const ModalOverlay = (props) => (
  <div className={styles.modal}>
    <div>{props.children}</div>
  </div>
);

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <Backdrop onClose={props.onClose} />
          <ModalOverlay>{props.children}</ModalOverlay>
        </>,
        portalElement
      )}
    </>
  );
};

export default Modal;
