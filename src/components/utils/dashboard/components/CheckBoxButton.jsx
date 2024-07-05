// CheckBoxButton.js
import React, { useState } from "react";
import PropTypes from "prop-types";

const CheckBoxButton = ({ label, onCheckChange, className }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onCheckChange(newCheckedState);
  };

  return (
    <div className="">
      <button
        className={`bg-blue-600 p-2 flex items-center rounded ${className}`}
      >
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="form-checkbox h-5 w-5 text-blue-600"
        />
        <span className="ml-10px">{label}</span>
      </button>
    </div>
  );
};

CheckBoxButton.propTypes = {
  label: PropTypes.string.isRequired,
  onCheckChange: PropTypes.func.isRequired,
};

export default CheckBoxButton;
