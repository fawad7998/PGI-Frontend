import React from "react";

const CheckboxWithLabel = ({ checked, onChange, label, value, className }) => {
  return (
    <div
      className={`${className} flex items-center justify-center space-x-2 ${
        checked ? "bg-primary" : "bg-repeat-medium-sky-blue"
      } p-2 h-42px rounded-sm`}
    >
      <input
        type="checkbox"
        id={`custom-checkbox-${value}`}
        className="hidden"
        checked={checked}
        onChange={() => onChange(value)}
      />
      <label
        htmlFor={`custom-checkbox-${value}`}
        className={`flex items-center justify-center cursor-pointer ${
          checked ? "text-primary" : "text-gray-700"
        }`}
      >
        <div
          className={`w-5 h-5 flex items-center justify-center  rounded ${
            checked ? "bg-blue-500 border-blue-500" : "bg-white border-gray-300"
          }`}
        >
          {checked && (
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
        <span className="ml-2 text-white">{label}</span>
      </label>
    </div>
  );
};

export default CheckboxWithLabel;
