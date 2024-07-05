import React from "react";
import CustomDropdown from "../components/CustomDropdown";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
} from "../../../../redux/reducers/slicers/counterSlice";
import CustomInput from "../components/CustomInput";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import Dropdown from "../components/ToggleDropdown";

function ScheduleCalendar() {
  const options = [
    { value: "", label: "Department" },
    { value: "reason1", label: "Reason 1" },
    { value: "reason2", label: "Reason 2" },
  ];

  const schedule = [
    {
      name: "Bill Cower",
      shifts: [
        "Aldi Bangor",
        "Aldi Bangor",
        "Aldi Bangor",
        "Aldi Bangor",
        null,
        null,
        null,
      ],
    },
    {
      name: "New Booking",
      shifts: [null, null, null, null, null, null, "Aldi Bangor"],
    },
    {
      name: "Tony Samson",
      shifts: [null, null, null, "Aldi Bangor", null, null, null],
    },
    {
      name: "Adalynn",
      shifts: [null, null, null, null, "Aldi Bangor", null, null],
    },
    {
      name: "Bill Cower",
      shifts: [null, null, null, null, null, "Aldi Bangor", null],
    },
  ];

  const days = [
    "Mon, 6",
    "Tue, 7",
    "Wed, 8",
    "Thu, 10",
    "Fri, 11",
    "Sat, 12",
    "Sun, 13",
  ];

  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">May 6 - May 12 (Week 19)</h2>
        </div>
        <div className="flex w-full justify-end">
          <div className="flex">
            <div className="flex">
              <button className="flex items-center bg-light-red w-247px h-39px p-2 justify-between">
                <text className="text-14px font-semibold text-white">
                  Publish schedule Changes
                </text>
                <div className="w-19px h-23px bg-white rounded"> 0</div>
              </button>
            </div>
            <div className=" ml-10px mt-0 pt-0">
              <Dropdown className="w-39px h-39px bg-cancel" />
            </div>
          </div>
          <div className="flex ml-20px">
            <div className="flex">
              <button className="flex items-center bg-medium-sky-blue w-full h-39px p-2 justify-between">
                <text className="text-14px font-semibold text-white">
                  Select Mode
                </text>
              </button>
            </div>
            <div className=" ml-10px mt-0 pt-0">
              <Dropdown className="w-39px h-39px bg-cancel" />
            </div>
          </div>
        </div>
        <div className="w-full h-49px  mb-32px flex items-center">
          <div>
            <CustomDropdown options={options} className="h-39px " />
          </div>
          <div className="ml-17px flex">
            <button className="w-46px rounded  flex justify-center items-center border border-gray h-39px">
              <MdKeyboardDoubleArrowLeft />
            </button>
            <CustomInput type="date" className="w-10 h-39px mt-0 ml-17px" />
            <button className="w-46px rounded flex justify-center items-center border border-gray h-39px ml-17px">
              <MdOutlineKeyboardDoubleArrowRight />
            </button>
          </div>
        </div>
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-white p-2 bg-gray-200  bg-cancel text-left">
                <text className="text-white">First Name</text>
              </th>
              {days.map((day) => (
                <th
                  key={day}
                  className="border border-white p-2 bg-cancel text-left"
                >
                  <text className="text-white">{day}</text>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={8} className="border border-light-gray p-0">
                <div className="h-20vh bg-white w-full flex justify-between">
                  <div className="w-[34%] bg-lighter-gray flex  items-end">
                    <CustomInput
                      placeholder="search"
                      className=" w-full h-full pt-20 pb-0 bg-lighter-gray border-none"
                    />
                  </div>
                  <div className="w-[52%] bg-lighter-gray"></div>
                </div>
              </td>
            </tr>
            {schedule.map((person, idx) => (
              <tr key={idx}>
                <td className="border p-2">{person.name}</td>
                {person.shifts.map((shift, idx) => (
                  <td key={idx} className="border p-2">
                    {shift ? (
                      <div className="bg-blue-100 p-1 rounded">
                        <div className="text-sm">{shift}</div>
                        <div className="text-xs">
                          13:00 - 21:00 Security Officer
                        </div>
                      </div>
                    ) : (
                      <div className="h-12"></div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ScheduleCalendar;
