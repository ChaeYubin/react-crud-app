import React from "react";

function Modal({ message, color }) {
  const setColor = {
    backgroundColor: color,
  };

  return (
    <div style={setColor} className="alert-modal">
      <p>{message}</p>
    </div>
  );
}

export default Modal;
