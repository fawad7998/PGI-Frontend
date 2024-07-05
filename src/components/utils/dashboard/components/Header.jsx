import React, { useState } from "react";
import Profile from "../../../../image/Profile.png";
import Dashboard from "../../../../image/Dashboard.svg";
import Location from "../../../../image/Location.svg";
// import Navebar, { Link } from "./Navebar";
import Triangle from "../../../../image/Triangle.svg";
import Report from "../../../../image/Report.svg";
import Group from "../../../../image/Group.svg";
import Group1 from "../../../../image/Group1.svg";
import Group2 from "../../../../image/Group2.svg";
import Group3 from "../../../../image/Group3.svg";
import Group4 from "../../../../image/Group4.svg";
import Group6 from "../../../../image/Group6.svg";
import Group7 from "../../../../image/Group7.svg";
import Notification from "../../../../image/Notification.svg";
import Group8 from "../../../../image/Group8.svg";
import Mail from "../../../../image/Mail.svg";
// import DropdownInput from "../DropdownInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Navebar, { Link } from "../../naveBarComponents/Navebar";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-secondary text-white p-0">
        <div className="container  flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {/* <div className="text-xl font-bold">Logo</div> */}
            <div className="hidden md:flex start-4 ">
              <Navebar
                title="Dashboard"
                iconSrc={Dashboard}
                handle={() => console.log("Dashboard clicked")}
              />
              <div className=" bg-blue-900 w-px mx-1px"></div>
              <Navebar
                title={"Time Clock"}
                iconSrc={Group}
                handle={() => console.log("Dashboard clicked")}
              />
              <div className=" bg-blue-900 w-px mx-1px"></div>
              <Navebar
                title={"Location"}
                iconSrc={Location}
                handle={() => console.log("Dashboard clicked")}
              />
              <div className=" bg-blue-900 w-px mx-1px"></div>
              <Navebar
                title={"Absences"}
                iconSrc={Group1}
                handle={() => console.log("Dashboard clicked")}
              />
              <div className=" bg-blue-900 w-px mx-1px"></div>
              <Navebar
                title={"People"}
                iconSrc={Group2}
                handle={() => console.log("Dashboard clicked")}
              />
              <div className=" bg-blue-900 w-px mx-1px"></div>
              <Navebar
                title={"Pay & Charge"}
                iconSrc={Group6}
                handle={() => console.log("Dashboard clicked")}
              />
              <div className=" bg-blue-900 w-px mx-1px"></div>
              <Navebar
                title={"Reports"}
                iconSrc={Report}
                handle={() => console.log("Dashboard clicked")}
              />
              <div className=" bg-blue-900 w-px mx-1px"></div>
              <Navebar
                title={"Documents"}
                iconSrc={Group7}
                handle={() => console.log("Dashboard clicked")}
              />
            </div>
          </div>
          <div className=" flex items-center space-x-4">
            <div className=" flex items-center space-x-4">
              <div className="">
                <Navebar iconSrc={Mail} />
              </div>
              <Navebar iconSrc={Group3} />
              <Navebar iconSrc={Group4} />
              <Navebar iconSrc={Notification} />
            </div>
            <a href="/" className="hover:underline">
              Help
            </a>
            <div className=" flex items-center">
              <div>
                <img
                  className="w-50 h-50 rounded-full object-cover"
                  src={Profile}
                  alt="Profile"
                />
              </div>
              <div className="pl-5  text-white justify-center flex flex-col items-center">
                <div className="relative inline-block">
                  <div className="relative inline-block text-left">
                    <div className="w-150px flex items-center">
                      <button
                        type="button"
                        className="inline-flex justify-center w-full shadow-sm px-2 py-2  text-sm font-medium text-white hover:bg-gray-500 focus:outline-none"
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                        onClick={toggleDropdown}
                      >
                        Setting
                      </button>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="absolute right-2 text-gray-500 pointer-events-none"
                      />
                    </div>

                    {isOpen && (
                      <div
                        className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-light-gray ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabIndex="-1"
                      >
                        <div className="py-1" role="none">
                          <Link
                            text={" Account settings"}
                            toggleDropdown={toggleDropdown}
                          />
                          <Link
                            text={"support"}
                            toggleDropdown={toggleDropdown}
                          />
                          <Link
                            text={"Profile"}
                            toggleDropdown={toggleDropdown}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              className="text-black bg-black"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={`md:hidden ${menuOpen ? "block" : "hidden"}`}>
          <a href="/" className="block py-2 hover:underline">
            Dashboard
          </a>
          <a href="/" className="block py-2 hover:underline">
            Assets
          </a>
          <a href="/" className="block py-2 hover:underline">
            Site Data
          </a>
          <a href="/" className="block py-2 hover:underline">
            Incidents
          </a>
          <a href="/" className="block py-2 hover:underline">
            Reports
          </a>
          <a href="/" className="block py-2 hover:underline">
            People
          </a>
          <a href="/" className="block py-2 hover:underline">
            Patrol History
          </a>
          <a href="/" className="block py-2 hover:underline">
            Scenarios
          </a>
          <a href="/" className="block py-2 hover:underline">
            Resources
          </a>
          <a href="/" className="block py-2 hover:underline">
            Help
          </a>
          <a href="/" className="block py-2 hover:underline">
            Profile
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
