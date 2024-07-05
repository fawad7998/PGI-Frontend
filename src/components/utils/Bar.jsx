// src/Bar.js
import React from "react";
import Group2 from "../../image/Group2.svg";
import Profile from "../../image/Profile.png";

const people = [
  { name: "Ed Green", img: Profile },
  { name: "Tony Samson", img: Profile },
  { name: "Ashley Hartwell", img: Profile },
  { name: "Matthew Smith", img: Profile },
];

const Bar = () => {
  return (
    // <div className="bg-red-800">hallo</div>
    <div className="w-250px bg-primary text-white p-6 h-screen">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 rounded bg-gray-700 text-light-gray border-none outline-none"
        />
      </div>
      <div>
        <div className=" flex items-center space-x-2">
          <div>
            <img src={Group2} />
          </div>
          <div className="flex items-center ">
            <h3 className="mb-4 text-lg font-semibold">Invite People</h3>
          </div>
        </div>
        {people.map((person, index) => (
          <div key={index} className="flex items-center mb-4">
            <img
              src={person.img}
              alt={person.name}
              className="w-10 h-10 rounded-full mr-3"
            />
            <span className="text-md">{person.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bar;
