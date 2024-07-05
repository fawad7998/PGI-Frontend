import React from 'react'

function CustomIconText({ icon, text, className }) {
  return (
    <div className={`flex items-center `}>
      {/* <i className={`mr-2 ${icon}`}></i> */}
      {icon}
      <span className={`ml-6px text-16px font-semibold text-blue-button-color ${className}`}>{text}</span>
    </div >
  )
}

export default CustomIconText
