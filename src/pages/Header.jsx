/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { ReactComponent as Dashboard } from "../image/Dashboard.svg";
import { ReactComponent as Report } from "../image/Report.svg";
import { ReactComponent as Group } from "../image/Group.svg";
import { ReactComponent as Group1 } from "../image/Group1.svg";
import { ReactComponent as Group2 } from "../image/Group2.svg";
import { ReactComponent as Group3 } from "../image/Group3.svg";
import { ReactComponent as Group4 } from "../image/Group4.svg";
import { ReactComponent as Group6 } from "../image/Group6.svg";
import { ReactComponent as Group7 } from "../image/Group7.svg";
import { ReactComponent as Group8 } from "../image/Group8.svg";
import { ReactComponent as Location } from "../image/Location.svg";
import { ReactComponent as Mail } from "../image/Mail.svg";
import { ReactComponent as Notification } from "../image/Notification.svg";
import { ReactComponent as Triangle } from "../image/Triangle.svg";
// import { ReactComponent as Profile } from "../image/Profile.png";
import Profile from "../image/Profile.png";
import Navebar, { Link } from "../components/utils/naveBarComponents/Navebar";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-secondary text-neutral-100 lg:col-span-2 lg:row-span-1 lg:grid-area-two">
      <div className="flex justify-end ">
        <div className=" h-16  bg-custom-blue flex  flex-row">
          <Navebar
            title={"Dashboard"}
            icon={<Dashboard handle={console.log("new")} />}
          />
          <Navebar title={"Schedule"} icon={<Group8 />} />
          <Navebar title={"Time Clock"} icon={<Group />} />
          <Navebar title={"Location"} icon={<Location />} />
          <Navebar title={"Absences"} icon={<Group1 />} />
          <Navebar title={"People"} icon={<Group2 />} />
          <Navebar title={"Pay & Charge"} icon={<Group6 />} />
          <Navebar title={"Reports"} icon={<Report />} />
          <Navebar title={"Documents"} icon={<Group7 />} />
          <div className="ml-20 pl-5 pr-5 text-white justify-center flex flex-col items-center">
            <Mail />
          </div>
          <Navebar icon={<Group3 />} />
          <Navebar icon={<Group4 />} />
          <Navebar icon={<Notification />} />

          <div className="ml-5 pl-5 pr-5 text-white justify-center flex flex-row items-center">
            {/* <div className="flex justify-center items-center h-screen bg-gray-100"> */}
            <div>
              <img
                className="w-16 h-16 rounded-full object-cover"
                src={Profile}
                alt="Profile"
              />

              {/* <img
              className="w-40 h-10 rounded-full border-2 border-gray-300 shadow-md"
              src={Profile}
              alt="Profile"
            /> */}
            </div>
            {/* </div> */}
            {/* <div>
            <img className="w-10 h-10" src={Profile} />
          </div> */}
            <div className="ml-5 pl-5 pr-5 text-white justify-center flex flex-col items-center">
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-2 py-2  text-sm font-medium text-white hover:bg-gray-500 focus:outline-none"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={toggleDropdown}
                  >
                    Profile
                    <svg
                      className="-mr-1 ml-2 h-5 w-5"
                      xmlns={Triangle}
                      viewBox="0 0 10 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 00-.894.553L7.382 7H4a1 1 0 100 2h3.382l1.724 3.447A1 1 0 0010 14a1 1 0 00.894-.553L12.618 9H16a1 1 0 100-2h-3.382l-1.724-3.447A1 1 0 0010 3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                {isOpen && (
                  <div
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
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
                      <Link text={"support"} toggleDropdown={toggleDropdown} />
                      <Link text={"Profile"} toggleDropdown={toggleDropdown} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
