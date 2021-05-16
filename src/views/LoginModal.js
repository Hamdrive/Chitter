import React from "react";
import ReactDOM from "react-dom";

function LoginModal({ modalOpen, close }) {
  if (!modalOpen) return null;

  return ReactDOM.createPortal(
    <div>
      <div className="z-10 bg-gray-500 opacity-70 absolute top-0 left-0 right-0 bottom-0"></div>
      <div className="z-20 absolute top-2/4 left-2/4">
        <h1>This is the login modal</h1>
        <button onClick={close}>Close</button>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default LoginModal;
