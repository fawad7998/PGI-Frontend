// import React from "react";

// const CustomInput = ({ type = "", className = "", onChange, ...props }) => {
//   return (
//     <input
//       type={type}
//       className={`border rounded h-36px pl-2 border-gray ${className}`}
//       onChange={onChange}
//       {...props}
//     />
//   );
// };

// export default CustomInput;

import React from "react";

const CustomInput = ({
  type = "text",
  className = "",
  icon,
  onChange,
  ...props
}) => {
  return (
    <div className="relative flex items-center">
      {icon && <div className="absolute left-3">{icon}</div>}
      <input
        type={type}
        className={`border rounded h-36px pl-2 border-gray ${className}`}
        // className={`pl-10 pr-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default CustomInput;
