import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

function DropdownInput({
  items,
  className,
  width,
  height,
  value,
  onChange,
  placeholder,
  ...props
}) {
  const [inputValue, setInputValue] = useState(value || "");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleItemClick = (value) => {
    setInputValue(value);
    setDropdownVisible(false);
    onChange && onChange(value);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div
      className={`relative inline-block ${className}`}
      style={{ width, height }}
      {...props}
    >
      <div className="relative flex items-center">
        <input
          type="text"
          // value={inputValue}
          // onClick={toggleDropdown}
          // onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          onClick={toggleDropdown}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full px-2 h-45px  border-2 rounded focus:outline-none"
          placeholder={placeholder}
        />
        <FontAwesomeIcon
          icon={faChevronDown}
          className="absolute right-2 text-gray-500 pointer-events-none"
        />
      </div>
      {dropdownVisible && (
        <ul className="absolute w-full bg-white border border-gray-300 rounded mt-1 z-10">
          {items.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray cursor-pointer"
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

DropdownInput.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

DropdownInput.defaultProps = {
  className: "",
  width: "16rem", // Default width is 16rem (64 units)
  height: "2.5rem", // Default height is 2.5rem (40px)
};

export default DropdownInput;
