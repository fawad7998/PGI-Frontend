import React, { Children } from "react";

function CustomButton({ text, className, Children, onClick, ...props }) {
  return (
    <div>
      <button
        className={`rounded text-16 flex items-center text-white font-normal bg-blue-button-color p-1 ${className}`}
        onClick={onClick}
        {...props}
      >
        {text}
        {Children}
      </button>
    </div>
  );
}

export default CustomButton;
