import { useState } from "react";
import React from "react";
import CustomInput from "../components/CustomInput";
import CustomDropdown from "../components/CustomDropdown";
import CheckboxWithLabel from "../components/CheckboxWithLabel";
import { GiSpeaker } from "react-icons/gi";
import { VscScreenFull } from "react-icons/vsc";
import { VscDebugPause } from "react-icons/vsc";

function TimeClock() {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (value) => {
    setCheckedItems((prevCheckedItems) =>
      prevCheckedItems.includes(value)
        ? prevCheckedItems.filter((item) => item !== value)
        : [...prevCheckedItems, value]
    );
  };

  const options = [
    { value: "", label: "Department" },
    { value: "reason1", label: "Reason 1" },
    { value: "reason2", label: "Reason 2" },
  ];

  const tableHeaders = [
    { text: "Date" },
    { text: "Name" },
    { text: "Shift time" },
    { text: "Clock time" },
    { text: "Start" },
    { text: "End" },
    { text: "Breaks" },
    { text: "Breaks e" },
    { text: "Hours" },
    { text: "Break" },
  ];
  const tableData = [
    {
      dateCancelled: "2024-06-01",
      reason: "Sick",
      shiftTime: "08:00 - 16:00",
      absence: "John Doe",
      personName: "Jane Smith",
      positionEvent: "Nurse",
      cancelledBy: "Jane Smith",
      cancelled: "Jane Smith",
      cancelled: "Jane Smith",
      cancelled: "Jane Smith",
    },
  ];

  const handleRedirect = (path) => {
    // history.push(path);
    console.log("click");
  };

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
            <text className="text-18px font-normal ml-28px">Map</text>
          </div>
        </div>
        <div className="ml-100px">
          <div className=" w-[100%]  items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 mb-4">
            <div className="w-full">
              <CustomDropdown options={options} className="w-full " />
            </div>
            <div className="w-full">
              <CustomInput
                type="date"
                className="w-full"
                placeholder="Select a date"
              />
            </div>
            <div className="w-full">
              <CustomInput
                type="date"
                className="w-full"
                placeholder="Select a date"
              />
            </div>
            <div className="w-full">
              <CustomDropdown options={options} className="w-full" />
            </div>
            <div className="w-full">
              <CustomDropdown options={options} className="w-full" />
            </div>
            <div className="w-full">
              <CustomDropdown options={options} className="w-full" />
            </div>
            {/* </div> */}
          </div>
          <div className="w-full mt-23px flex">
            <CheckboxWithLabel
              checked={checkedItems.includes("Late")}
              onChange={handleCheckboxChange}
              label="Late"
              value="Late"
              className="mr-10px"
            />
            <CheckboxWithLabel
              checked={checkedItems.includes("Over time")}
              onChange={handleCheckboxChange}
              label="Over time"
              value="Over time"
              className="mr-10px"
            />
            <CheckboxWithLabel
              checked={checkedItems.includes("Left early")}
              onChange={handleCheckboxChange}
              label="Left early"
              value="Left early"
              className="mr-10px"
            />
            <CheckboxWithLabel
              checked={checkedItems.includes("Difference from shift time")}
              onChange={handleCheckboxChange}
              label="Difference from shift time"
              value="Difference from shift time"
              className="mr-10px"
            />
            <CheckboxWithLabel
              checked={checkedItems.includes("Out-of-zone")}
              onChange={handleCheckboxChange}
              label="Out-of-zone"
              value="Out-of-zone"
              className="mr-10px"
            />
            <CheckboxWithLabel
              checked={checkedItems.includes("Not approved")}
              onChange={handleCheckboxChange}
              label="Not approved"
              value="Not approved"
              className="mr-10px"
            />
            <CheckboxWithLabel
              checked={checkedItems.includes("Last 48 hours")}
              onChange={handleCheckboxChange}
              label="Last 48 hours"
              value="Last 48 hours"
              className="mr-10px"
            />
            <CheckboxWithLabel
              checked={checkedItems.includes("Currently running")}
              onChange={handleCheckboxChange}
              label="Currently running"
              value="Currently running"
              className="mr-10px"
            />
            <div className="flex items-center justify-center">
              <div className="w-36px h-30px ml-10px border border-2 border-repeat-medium-sky-blue rounded flex items-center justify-center">
                <GiSpeaker className="text-repeat-medium-sky-blue" />
              </div>
              <div className="w-36px h-30px ml-10px border border-2 border-repeat-medium-sky-blue rounded flex items-center justify-center">
                <VscDebugPause className="text-repeat-medium-sky-blue" />
              </div>
              <div className="w-36px h-30px ml-10px border border-2 border-repeat-medium-sky-blue rounded flex items-center justify-center">
                <VscScreenFull className="text-repeat-medium-sky-blue" />
              </div>
            </div>
          </div>
          <table className="min-w-full mt-23px  bg-white">
            <thead>
              <tr>
                {tableHeaders.map((header, index) => (
                  <th key={index} className="py-2 px-4 border-b text-left">
                    {header.text}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{item.dateCancelled}</td>
                  <td className="py-2 px-4 border-b">{item.reason}</td>
                  <td className="py-2 px-4 border-b">{item.shiftTime}</td>
                  <td className="py-2 px-4 border-b">{item.absence}</td>
                  <td className="py-2 px-4 border-b">{item.personName}</td>
                  <td className="py-2 px-4 border-b">{item.positionEvent}</td>
                  <td className="py-2 px-4 border-b">{item.cancelledBy}</td>
                  <td className="py-2 px-4 border-b">{item.cancelled}</td>
                  <td className="py-2 px-4 border-b">{item.cancelled}</td>
                  <td className="py-2 px-4 border-b">{item.cancelled}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TimeClock;
