import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

const Dropdown = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className={`${className} inline-flex justify-center w-full rounded  shadow-sm px-4 py-2  text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none`}
      >
        <i className="fas fa-bars">
          <MdArrowDropDown className="w-22px h-22px text-white" />
        </i>
      </button>{" "}
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              href="#"
              onClick={toggleDropdown}
              className="block px-4 py-2 hover:bg-slate-400 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Option 1
            </a>
            <a
              href="#"
              onClick={toggleDropdown}
              className="block px-4 py-2 hover:bg-slate-400 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Option 2
            </a>
            <a
              href="#"
              onClick={toggleDropdown}
              className="block px-4 py-2 hover:bg-slate-400 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Option 3
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
