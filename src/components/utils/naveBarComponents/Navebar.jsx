import React from "react";

export default function Navebar({ title, iconSrc, handle }) {
  return (
    <div className=" hover:bg-primary hover:text-white justify-center flex flex-col items-center p-2 ">
      <div
        className="hover:text-white justify-center flex flex-col items-center"
        onClick={handle}
      >
        <img src={iconSrc} className="w-20px h-20px" />{" "}
        {/* Adjust size if needed */}
        <a href="/" className="hover:underline">
          <text className="text-16px font-medium text-medium-sky-blue hover:text-white">
            {title}
          </text>
        </a>
      </div>
    </div>
  );
}

export function Link({ text, url, toggleDropdown }) {
  return (
    <a
      href={url}
      className="text-gray-700 block px-4 py-2 text-sm text-black  hover:bg-medium-sky-blue "
      role="menuitem"
      tabIndex="-1"
      id="menu-item-0"
      onClick={toggleDropdown}
    >
      {text}
    </a>
  );
}

export function Testimonial({
  imgSrc,
  altText,
  name,
  position,
  quote,
  description,
  className,
  handle,
  icon,
  title,
}) {
  return (
    <article className={`testimonial p-4 ${className}`}>
      <div className="flex items-center mb-4">
        <img
          src={imgSrc}
          alt={altText}
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h2 className="name font-semibold text-lg">{name}</h2>
          <p className="position text-sm text-gray-600">{position}</p>
        </div>
      </div>
      <p className="mb-2 font-medium">{quote}</p>
      <p className="text-sm text-gray-700">{description}</p>
      <div className="lg:pl-5 lg:pr-5 md:pl-2 md:pr-2 hover:bg-sky-700 hover:text-white justify-center flex flex-col items-center ">
        <div
          className=" hover:text-white justify-center flex flex-col items-center"
          onClick={handle}
        >
          {/* onClick={handle} */}
          {icon}
          {/* <Group8 /> */}
          <div>{title}</div>
        </div>
      </div>
    </article>
  );
}
