import React, { useEffect, useState } from "react";
import Group2 from "../../../../image/Group2.svg";
import Profile from "../../../../image/Profile.png";
import InvitePeople from "../../../../image/InvitePeople.svg";
import { Link } from "../../naveBarComponents/Navebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLocation } from "react-router-dom";
import { AppRoutes } from "../../../../route/RoutConstant";
import CustomDropdown from "./CustomDropdown";
import CustomInput from "./CustomInput";
import CustomHr from "./CustomHr";

const people = [
  { name: "Ed Green", img: Profile },
  { name: "Tony Samson", img: Profile },
  { name: "Ashley Hartwell", img: Profile },
  { name: "Matthew Smith", img: Profile },
];

const Sidebar = () => {
  const [status1, setStatus1] = useState("Active");
  const [status2, setStatus2] = useState("Active");
  const [status3, setStatus3] = useState("Active");
  const [payRateSet, setPayRateSet] = useState("isSet");
  const [payRateFrom, setPayRateFrom] = useState("");
  const [payRateTo, setPayRateTo] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [sidebarHeight, setSidebarHeight] = useState(window.innerHeight);
  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const location = useLocation();
  const currentRoute = location.pathname;

  const options = [
    { value: "", label: "Department" },
    { value: "reason1", label: "Reason 1" },
    { value: "reason2", label: "Reason 2" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const updateSidebarHeight = () => {
      setSidebarHeight(window.innerHeight + window.scrollY);
    };
    window.addEventListener("scroll", updateSidebarHeight);
    return () => {
      window.removeEventListener("scroll", updateSidebarHeight);
    };
  }, []);

  const renderSidebarContent = () => {
    switch (currentRoute) {
      case `${AppRoutes.Dashboard}`:
        return (
          <div className="dashboard">
            <div className="w-full mb-25px mt-50px">
              <div className="text-medium-sky-blue justify-center flex flex-col items-center">
                <div className="relative inline-block">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full shadow-sm px-2 py-2 text-sm font-medium text-medium-sky-blue hover:bg-gray-500 focus:outline-none"
                    aria-expanded={isOpen}
                    onClick={toggleDropdown}
                  >
                    Department
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="absolute right-2 text-gray-500 pointer-events-none"
                    />
                  </button>
                  {isOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-200px rounded-md shadow-lg bg-secondary ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Link text={"Account settings"} toggleDropdown={toggleDropdown} />
                        <Link text={"Support"} toggleDropdown={toggleDropdown} />
                        <Link text={"Profile"} toggleDropdown={toggleDropdown} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-2 rounded bg-gray-700 text-light-gray border-none outline-none"
              />
            </div>
            <div className="flex items-center space-x-2">
              <img src={Group2} alt="Group" />
              <h3 className="mb-4 text-lg font-semibold">Invite People</h3>
            </div>
            {people.map((person, index) => (
              <div key={index} className="flex items-center mb-4">
                <img src={person.img} alt={person.name} className="w-10 h-10 rounded-full mr-3" />
                <span className="text-md">{person.name}</span>
              </div>
            ))}
          </div>
        );
      case `${AppRoutes.Dashboard}${AppRoutes.ShiftList}`:
        return (
          <div className="shift-list">
            <div className="text-white p-4 h-screen">
              <h2 className="text-xl font-bold mb-4">Shifts List</h2>
              <div className="mb-4">
                <label className="block mb-2">All people & shifts</label>
                <select className="w-full p-2 bg-primary border-secondary border-2 text-blue-button-color mb-2">
                  <option>Current week</option>
                  <option>1 week</option>
                  <option>2 week</option>
                </select>
              </div>
              <div>
                <DatePicker
                  placeholderText="Hallo"
                  selected={date}
                  onChange={(date) => setDate(date)}
                  className="w-full p-2 bg-primary border-secondary border-2 text-blue-button-color mb-2"
                />
              </div>
              <div className="mb-4">
                <label className="block">Start Date</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="w-full p-2 bg-primary border-secondary border-2 text-blue-button-color mb-2"
                />
                <label className="block mb-2">End Date</label>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  className="w-full p-2 bg-primary border-secondary border-2 text-blue-button-color mb-2"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Departments</label>
                <select className="w-full p-2 bg-primary border-secondary border-2 text-blue-button-color mb-2">
                  <option>Current week</option>
                  <option>1 week</option>
                  <option>2 week</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2">Location</label>
                <select className="w-full p-2 bg-primary border-secondary border-2 text-blue-button-color mb-2">
                  <option>Current week</option>
                  <option>1 week</option>
                  <option>2 week</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2">Shift status</label>
                <div className="flex flex-wrap gap-2">
                  <button className="flex-1 p-2 bg-secondary hover:bg-bright-sky-blue transition rounded">
                    Confirmed
                  </button>
                  <button className="flex-1 p-2 bg-secondary hover:bg-bright-sky-blue transition rounded">
                    Requests
                  </button>
                  <button className="flex-1 p-2 bg-secondary hover:bg-bright-sky-blue transition rounded">
                    Applications
                  </button>
                  <button className="flex-1 p-2 bg-secondary hover:bg-bright-sky-blue transition rounded">
                    Open
                  </button>
                </div>
              </div>
              <button className="w-full p-2 bg-secondary hover:bg-bright-sky-blue transition rounded mt-4">
                + Add Filter
              </button>
            </div>
          </div>
        );
      case `${AppRoutes.Dashboard}${AppRoutes.ScheduleCalendar}`:
        return (
          <div className="schedule-calendar flex flex-col items-start">
            <CustomDropdown
              options={options}
              placeholder="Department"
              className="pl-2 bg-primary border-none w-177px rounded mt-35px"
            />
            <CustomInput
              placeholder="Search"
              className="bg-secondary border-none mt-25px"
              style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.10)" }}
            />
            <div className="flex mt-26px">
              <img src={InvitePeople} alt="Invite" />
              <span className="ml-35px">Invite People</span>
            </div>
            {people.map((person, index) => (
              <div
                key={index}
                className="w-full flex mt-15px items-center justify-between mb-4"
              >
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-40px h-40px rounded-full"
                />
                <div className="text-white ml-14px text-14px font-bold">
                  {person.name}
                </div>
                <div className="ml-auto">
                  <span className="block w-2 h-2 bg-blue-300 rounded-full"></span>
                </div>
              </div>
            ))}
          </div>
        );
      case `${AppRoutes.Dashboard}${AppRoutes.payRulesList}`:
        return (
          <div className="pay-rules-list">
            <div className="text-white p-4 w-64">
              <h2 className="text-xl font-bold mb-4">Pay Rules</h2>
              <CustomDropdown
                options={options}
                className="w-full p-1 bg-primary border-secondary border-2 text-22px text-blue-button-color mb-2"
              />
              <div className="flex justify-end">
                <span className="text-16px font-normal text-medium-sky-blue">
                  Save View
                </span>
              </div>
              <hr className="border-t-1 border-lighter-gray mt-20px" />
              <span className="text-16px font-normal text-medium-sky-blue mt-20px">
                Status
              </span>
              <div className="mb-4 rounded">
                <div className="flex flex-col w-full rounded">
                  <button className="h-40px rounded-tl-sm rounded-tr-sm flex-1 p-2 w-full bg-blue-button-color">
                    Active
                  </button>
                  <hr className="border-t-1 border-gray" />
                  <div className="w-full flex justify-between">
                    <button
                      className={`flex-1 h-40px ${
                        status1 === "Ended"
                          ? "bg-blue-button-color"
                          : "bg-white text-black"
                      }`}
                      onClick={() => setStatus1(status1 === "Ended" ? "" : "Ended")}
                    >
                      Ended
                    </button>
                    <div className="border-t-2 w-2px border-gray bg-gray h-auto"></div>
                    <button
                      className={`flex-1 h-40px ${
                        status2 === "Starts in future"
                          ? "bg-blue-button-color"
                          : "bg-white text-black"
                      }`}
                      onClick={() => setStatus2(status2 === "Starts in future" ? "" : "Starts in future")}
                    >
                      Starts in future
                    </button>
                  </div>
                  <hr className="border-1 border-gray" />
                  <div className="w-full bg-red-500">
                    <button
                      className={`flex-1 w-full h-40px rounded-bl-sm rounded-br-sm ${
                        status3 === "Draft"
                          ? "bg-blue-button-color"
                          : "bg-white text-black"
                      }`}
                      onClick={() => setStatus3(status3 === "Draft" ? "" : "Draft")}
                    >
                      Draft
                    </button>
                  </div>
                </div>
              </div>
              <label className="block mb-2 text-gray">Pay rate</label>
              <div className="mb-4 flex flex-col justify-center items-center bg-white border-1 rounded">
                <div className="w-full">
                  <div className="flex">
                    <button
                      className={`flex-1 border-1 rounded-tl-sm w-full p-2 ${
                        payRateSet === "isSet"
                          ? "bg-blue-button-color"
                          : "bg-white text-black"
                      }`}
                      onClick={() => setPayRateSet("isSet")}
                    >
                      Is set
                    </button>
                    <button
                      className={`flex-1 rounded-tr-sm w-full p-2 ${
                        payRateSet === "notSet"
                          ? "bg-blue-button-color"
                          : "bg-white text-black"
                      }`}
                      onClick={() => setPayRateSet("notSet")}
                    >
                      Not set
                    </button>
                  </div>
                  <hr className="border-t-1 border-lighter-gray" />
                  {payRateSet === "isSet" && (
                    <div className="flex mt-2 space-x-2 pb-20px p-10px">
                      <input
                        type="number"
                        className="w-full border border-gray rounded p-2 text-black"
                        placeholder="From"
                        value={payRateFrom}
                        onChange={(e) => setPayRateFrom(e.target.value)}
                      />
                      <input
                        type="number"
                        className="w-full p-2 border border-gray rounded text-black"
                        placeholder="To"
                        value={payRateTo}
                        onChange={(e) => setPayRateTo(e.target.value)}
                      />
                    </div>
                  )}
                </div>
              </div>
              <CustomHr />
              <CustomDropdown
                className="w-full p-1 bg-primary border-secondary border-2 text-22px text-blue-button-color mt-20px mb-20px"
                options={options}
              />
              <CustomHr />
              <CustomDropdown
                className="w-full p-1 bg-primary border-secondary border-2 text-22px text-blue-button-color mt-20px mb-20px"
                options={options}
              />
              <CustomHr />
              <CustomDropdown
                className="w-full p-1 bg-primary border-secondary border-2 text-22px text-blue-button-color mt-20px mb-20px"
                options={options}
              />
              <button className="w-full p-2 bg-blue-button-color rounded">
                + Add Filter
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-primary text-white p-6" style={{ height: sidebarHeight }}>
      {renderSidebarContent()}
    </div>
  );
};

export default Sidebar;
