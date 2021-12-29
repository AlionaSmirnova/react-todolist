import React, { useState } from "react";
import "./App.css";

import DateTimePicker from "react-datetime-picker";

const Modal = ({ title, isOpen, onModalClose, submitBtn, children, style }) => {
  const [value, onChange] = useState(new Date());
  return (
    <div
      className={`modal ${isOpen ? "open" : "close"}`}
      style={{ ...style }}
    >
      <div className="modalContent">
        <div className="modalClose" onClick={onModalClose}>
          ❌
        </div>
        <h3>{title}</h3>
        <hr />
        {children}
        <button className="btn" onClick={submitBtn}>
          Submit
        </button>

        <DateTimePicker onChange={onChange} value={value} />
      </div>
    </div>
  );
};

export default Modal;
