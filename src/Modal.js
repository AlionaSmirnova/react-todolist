import React from "react";
import "./App.css";

const Modal = (props) => {
  return (
    <div
      className={`modal ${props.isOpen ? "open" : "close"}`}
      style={{ ...props.style }}
    >
      <div className="modalContent">
        <div className="modalClose" onClick={props.onModalClose}>
          ❌
        </div>
        <h3>{props.title}</h3>
        <hr />
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
