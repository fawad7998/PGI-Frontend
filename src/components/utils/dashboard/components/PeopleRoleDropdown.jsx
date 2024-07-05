// import React, { useEffect, useRef, useState } from "react";
// import CustomDropdown from "./CustomDropdown";

// function PeopleRoleDropdown({ options, title }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeDropdown = () => {
//     setIsOpen(false);
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       closeDropdown();
//     }
//   };

//   useEffect(() => {
//     if (isOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isOpen]);

//   return (
//     <div className="w-[20%]" ref={dropdownRef}>
//       <div className="flex justify-between mb-22px">
//         <div>
//           <span className="text-16px font-normal">{title}</span>
//         </div>
//         <div>
//           <button className="text-blue-button-color" onClick={toggleDropdown}>
//             + Add
//           </button>
//         </div>
//       </div>
//       <div>
//         <hr className="border-t-2 border-blue-button-color" />
//       </div>
//       {isOpen && (
//         <div>
//           <div className="mt-20px">
//             <CustomDropdown options={options} className="w-full" />
//           </div>
//           <div className="mt-20px">
//             <CustomDropdown options={options} className="w-full" />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default PeopleRoleDropdown;

import React, { useState, useRef } from "react";
import { useClickAway } from "react-use";
import CustomDropdown from "./CustomDropdown";

function PeopleRoleDropdown({ options, title }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useClickAway(dropdownRef, closeDropdown);

  return (
    <div className="w-300px" ref={dropdownRef}>
      <div className="flex justify-between mb-22px">
        <div>
          <span className="text-16px font-normal">{title}</span>
        </div>
        <div>
          <button className="text-blue-button-color" onClick={toggleDropdown}>
            + Add
          </button>
        </div>
      </div>
      <div>
        <hr className="border-t-2 border-blue-button-color" />
      </div>
      {isOpen && (
        <div>
          <div className="mt-20px">
            <CustomDropdown options={options} className="w-full" />
          </div>
          <div className="mt-20px">
            <CustomDropdown options={options} className="w-full" />
          </div>
        </div>
      )}
    </div>
  );
}

export default PeopleRoleDropdown;
