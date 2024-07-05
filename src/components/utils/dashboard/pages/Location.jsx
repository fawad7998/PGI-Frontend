import React, { useState } from "react";
import MapComponent from "../components/MapComponent";
import GoogleMapComponent from "../components/GoogleMap";
import CustomDropdown from "../components/CustomDropdown";
import { MdArrowDropDown } from "react-icons/md";
import CustomInput from "../components/CustomInput";

function Location() {
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="w-[100%]">
      <div className="p-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <CustomDropdown
              options={options}
              placeholder="Department"
              className="pl-2  border-white w-177px rounded mr-10px"
            />
            <button className="w-70px h-34px text-white rounded flex justify-center bg-blue-button-color items-center">
              List
            </button>
            <text className="text-18px font-normal ml-28px">
              Inactive location
            </text>
          </div>
          <div className="flex">
            <button className="w-110px h-34px text-white rounded flex justify-center bg-blue-button-color items-center">
              Add Location
            </button>
            <button className="w-110px h-34px ml-10px text-white rounded flex justify-center bg-blue-button-color items-center">
              Import
            </button>
            <button
              className="relative w-110px h-34px ml-10px text-white rounded flex justify-center bg-blue-button-color items-center"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              Actions
              <MdArrowDropDown className="w-30px h-30px" />
            </button>
            {isOpen && (
              <div
                className="absolute right-0 mt-35px w-48 bg-white rounded-md shadow-lg z-10"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <a
                  href="#"
                  className="block px-4  hover:bg-light-sky-blue py-2 text-gray-800 hover:bg-gray-100"
                >
                  Option 1
                </a>
                <a
                  href="#"
                  className="block px-4  hover:bg-light-sky-blue py-2 text-gray-800 hover:bg-gray-100"
                >
                  Option 2
                </a>
                <a
                  href="#"
                  className="block px-4  hover:bg-light-sky-blue py-2 text-gray-800 hover:bg-gray-100"
                >
                  Option 3
                </a>
              </div>
            )}
          </div>
        </div>
        <hr className="border-t-1 border-lighter-gray" />

        <div className="flex">
          <div className="w-300px">
            {/* <MapComponent /> */}
            <GoogleMapComponent />
          </div>
          <div className="w-full  flex flex-col">
            <div className=" w-full  p-[36px] flex justify-between">
              <CustomInput placeholder="new" className="w-319px md:w-280px" />
              <CustomInput placeholder="new" className="w-319px md:w-280px" />
              <CustomInput placeholder="new" className="w-319px md:w-280px" />

              <CustomDropdown options={options} className="" />
            </div>
            <hr className="border-t-1 border-lighter-gray" />

            <div className="w-full">
              <div className="overflow-x-auto bg-white">
                <table className="min-w-full bg-white ">
                  <thead>
                    <tr>
                      <th className="px-6 py-2 text-xs text-left text-gray-500">
                        <input type="checkbox" />
                      </th>
                      <th className="px-6 py-2 text-xs text-left text-gray-500">
                        Date
                      </th>
                      <th className="px-6 py-2 text-xs text-left text-gray-500">
                        Time
                      </th>
                      <th className="px-6 py-2 text-xs text-left text-gray-500">
                        Hours
                      </th>
                      <th className="px-6 py-2 text-xs text-left text-gray-500">
                        Break
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-200">
                    <tr>
                      <td colSpan={8}>
                        <hr className="border-t-1 border-lighter-gray" />
                      </td>
                    </tr>
                    {data.map((item, index) => (
                      <tr key={index} className="whitespace-nowrap">
                        <td className="px-6 py-4 text-sm text-gray-500">
                          <input type="checkbox" />
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {item.date}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {item.time}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {item.hours}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
