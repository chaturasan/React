import React from "react";

export const Button = ({ color, children, onClick }) => {
  return (
    <button type="button" onClick={onClick} className={"btn btn-" + color}>
      {children}
    </button>
  );
};
