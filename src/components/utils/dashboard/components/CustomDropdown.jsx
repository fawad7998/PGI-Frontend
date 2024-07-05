import React from "react";

export default function CustomDropdown({
  options = [],
  onChange,
  className = "",
  style = {},
}) {
  return (
    <select
      className={`pl-2  border border-gray rounded h-36px ${className}`}
      onChange={onChange}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export function CustomLabelDropdown({
  options = [],
  onChange,
  style = {},
  title,
  downClass,
  mainClassName,
}) {
  return (
    <div
      className={`relative inline-block text-left ${mainClassName}`}
      style={style}
    >
      <div className="flex flex-col pl-2 border border-gray rounded h-36px  bg-white text-gray-700 hover:bg-gray-50 relative">
        <span className="text-xs">{title}</span>
        <div className="flex items-center">
          <select
            className={`${downClass}appearance-none text-gray bg-transparent text-sm focus:outline-none w-full`}
            onChange={onChange}
          >
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {/* <svg
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg> */}
        </div>
      </div>
    </div>
  );
}
