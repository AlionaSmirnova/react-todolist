import React, { useState } from "react";
import "./App.css";

import DateTimePicker from "react-datetime-picker";

const Modal = ({ title, isOpen, onModalClose, submitBtn, ...props}) => {
  const [value, onChange] = useState(new Date());
  return (
    <div
      className={`modal ${() => isOpen ? "open" : "close"}`}
      // style={{ ...props.style }}
    >
      <div className="modalContent">
        <div className="modalClose" onClick={() => this.onModalClose()}>
          ❌
        </div>
        <h3>{props.title}</h3>
        <hr />
        {props.children}
        <button className="btn" onClick={() => this.submitBtn()}>
          Submit
        </button>

        <DateTimePicker onChange={onChange} value={value} />
      </div>
    </div>
  );
};

export default Modal;
