import React from "react";

function CustomHr({ className }) {
  return (
    <div>
      <hr className={`border-t-1 border-gray${className}`} />
    </div>
  );
}

export default CustomHr;
