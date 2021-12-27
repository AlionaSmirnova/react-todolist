import React, { useState } from "react";
import "./App.css";

import DateTimePicker from "react-datetime-picker";

const Modal = (props) => {
  const [value, onChange] = useState(new Date());
  return (
    <div
      className={`modal ${props.isOpen ? "open" : "close"}`}
      // style={{ ...props.style }}
    >
      <div className="modalContent">
        <div className="modalClose" onClick={props.onModalClose}>
          ❌
        </div>
        <h3>{props.title}</h3>
        <hr />
        {props.children}
        <button type="submit" className="btn" onClick={props.submitBtn}>
          Submit
        </button>

        <DateTimePicker onChange={onChange} value={value} />
      </div>
    </div>
  );
};

export default Modal;
