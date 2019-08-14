import React from "react";
import ReactDom from "react-dom";
import "./modal.css";
const Modal = props => {
  return ReactDom.createPortal(
    <div onClick={props.onDismiss(false)} className="modal">
      <div onClick={e => e.stopPropagation()} className="modal-content">
        <span onClick={props.onDismiss(false)} className="close">
          &times;
        </span>
        <h1>{props.title}</h1>
        <div className="content">
          <p>{props.content}</p>
        </div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
