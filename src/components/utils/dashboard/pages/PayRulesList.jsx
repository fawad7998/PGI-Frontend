import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import Dropdown from "../components/ToggleDropdown";
import CustomDropdown, {
  CustomLabelDropdown,
} from "../components/CustomDropdown";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { CiSearch } from "react-icons/ci";

function PayRulesList() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Positions");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const options = [
    { value: "", label: "Department" },
    { value: "reason1", label: "Reason 1" },
    { value: "reason2", label: "Reason 2" },
  ];

  const data = [
    {
      date: "Mon,03.Jun",
      time: "06:00 - 15:00",
      hours: 9.0,
      break: "0.0h",
      person: "Akmal Hussain",
      contact: "+44 7488853551",
      position: "Security officer",
      client: "TEAM H",
      location: "GXO Bathgate",
      event: "event",
      Pay: "dummy",
      TotalPay: "dummy",
      Charges: "dummy",
      TotalCharges: "dummy",
      Expenses: "dummy",
      Pattern: "dummy",
      Rout: "dummy",
      Tag: "dummy",
    },
  ];
  return (
    <div className="p-4">
      <div className="flex justify-between xs:flex-wrap lg:flex-nowrap">
        <div>
          <CustomInput
            type="text"
            placeholder="Search"
            className="pl-30px  rounded-lg"
            icon={<CiSearch className="text-gray-400" />}
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
        <div className="flex w-full flex-wrap justify-end">
          <div className="flex">
            <div className="flex">
              <CustomButton
                className="h-45px p-20px  bg-blue-button-color "
                text="Create pay role"
              />
            </div>
            <div className=" ml-5px mt-0 pt-0">
              <Dropdown className="w-37px  h-45px bg-blue-button-color" />
            </div>
          </div>
          <div className="flex ml-20px">
            <div className="flex">
              <CustomButton
                className="h-45px p-20px bg-primary"
                text="Export"
              />
            </div>
            <div className=" ml-5px mt-0 pt-0">
              <Dropdown className="w-37px  h-45px bg-primary" />
            </div>
            <button className="inline-flex border  h-45px border-gray ml-20px items-center px-4 py-2 bg-gray-100 text-gray-700 font-medium text-sm rounded-md shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">
              <div className="flex items-center space-x-2">
                <span>|||</span> <span>Columns</span>
              </div>
            </button>
            <CustomDropdown
              className="border-gray ml-20px text-gray w-80px h-45px"
              options={options}
            />
          </div>
        </div>
        {/* <div>
          <div className="flex space-x-2 ">
            <div className="relative inline-block text-left">
              <button className="inline-flex items-center px-4 py-2 bg-blue-500 text-white font-medium text-sm rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Export
                <FaAngleDown className="ml-2 -mr-1 h-5 w-5 text-white" />
              </button>
            </div>
            <button className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 font-medium text-sm rounded-md shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">
              <div className="flex items-center space-x-2">
                <span>|||</span>{" "}
                <span>Columns</span>
              </div>
            </button>
          </div>
        </div> */}
      </div>
      <div className="flex justify-between mt-10px mb-16px">
        <div>
          {/* <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                id="options-menu"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={toggleDropdown}
              >
                <span className="text-xs">{selectedOption}</span>
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
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
                </svg>
              </button>
            </div>
            {isOpen && (
              <div
                className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div className="py-1" role="none">
                  <button
                    className="text-gray-700 block px-4 py-2 text-sm w-full text-left hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => handleOptionClick("Option 1")}
                  >
                    Option 1
                  </button>
                  <button
                    className="text-gray-700 block px-4 py-2 text-sm w-full text-left hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => handleOptionClick("Option 2")}
                  >
                    Option 2
                  </button>
                  <button
                    className="text-gray-700 block px-4 py-2 text-sm w-full text-left hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => handleOptionClick("Option 3")}
                  >
                    Option 3
                  </button>
                </div>
              </div>
            )}
          </div> */}
          {/* <CustomDropdown options={options} className="w-400px" /> */}
          <CustomLabelDropdown
            title="View"
            options={options}
            mainClassName="w-281px"
          />
          {/* <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                id="options-menu"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={toggleDropdown}
              >
                <div className="flex flex-col">
                  <span className="text-xs">View</span>
                  <span>{selectedOption}</span>
                </div>
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
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
                </svg>
              </button>
            </div>
            {isOpen && (
              <div
                className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div className="py-1" role="none">
                  <button
                    className="text-gray-700 block px-4 py-2 text-sm w-full text-left hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => handleOptionClick("Option 1")}
                  >
                    Option 1
                  </button>
                  <button
                    className="text-gray-700 block px-4 py-2 text-sm w-full text-left hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => handleOptionClick("Option 2")}
                  >
                    Option 2
                  </button>
                  <button
                    className="text-gray-700 block px-4 py-2 text-sm w-full text-left hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => handleOptionClick("Option 3")}
                  >
                    Option 3
                  </button>
                </div>
              </div>
            )}
          </div> */}
        </div>
        <div className="flex justify-end">
          <div className="ml-40px">
            <div className="text-12px  text-gray font-400px">Position</div>
            <div className="text-20px text-gray font-400px">219</div>
          </div>
          <div className="ml-40px">
            <div className="text-12px text-gray font-400px">Pay rule</div>
            <div className="text-20px text-gray font-400px">219</div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto bg-white">
        <table className="min-w-full bg-white border border-gray">
          <thead>
            <tr>
              <th className="px-6 py-2 text-xs text-gray-500">
                <input type="checkbox" />
              </th>
              <th className="px-6 py-2 text-xs text-gray-500">Date</th>
              <th className="px-6 py-2 text-xs text-gray-500">Time</th>
              <th className="px-6 py-2 text-xs text-gray-500">Hours</th>
              <th className="px-6 py-2 text-xs text-gray-500">Break</th>
              <th className="px-6 py-2 text-xs text-gray-500">Person</th>
              <th className="px-6 py-2 text-xs text-gray-500">Contact</th>
              <th className="px-6 py-2 text-xs text-gray-500">Position</th>
              <th className="px-6 py-2 text-xs text-gray-500">Client</th>
              <th className="px-6 py-2 text-xs text-gray-500">Location</th>
              <th className="px-6 py-2 text-xs text-gray-500">Event</th>
              <th className="px-6 py-2 text-xs text-gray-500">Pay</th>
              <th className="px-6 py-2 text-xs text-gray-500">Total Pay</th>
              <th className="px-6 py-2 text-xs text-gray-500">Charges</th>
              <th className="px-6 py-2 text-xs text-gray-500">Total Charges</th>
              <th className="px-6 py-2 text-xs text-gray-500"> Expenses</th>
              <th className="px-6 py-2 text-xs text-gray-500"> Pattern</th>
              <th className="px-6 py-2 text-xs text-gray-500"> Rout</th>
              <th className="px-6 py-2 text-xs text-gray-500"> Tag</th>
            </tr>
          </thead>
          <tbody className="bg-gray-200">
            {data.map((item, index) => (
              <tr key={index} className="whitespace-nowrap">
                <td className="px-6 py-4 text-sm text-gray-500">
                  <input type="checkbox" />
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{item.date}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{item.time}</td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.hours}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.break}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.person}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.contact}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.position}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.client}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.location}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.event}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.event}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.event}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.event}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.event}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.event}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.event}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.event}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.event}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PayRulesList;
