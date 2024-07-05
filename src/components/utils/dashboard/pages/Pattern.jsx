import React from "react";
import CustomInput from "../components/CustomInput";
import CustomDropdown from "../components/CustomDropdown";
import calender from "../../../../image/calender.svg";
import Dot from "../../../../image/Dot.svg";
import Menu from "../../../../image/Menu.svg";

function Pattern() {
  const options = [
    { value: "", label: "Department" },
    { value: "reason1", label: "Reason 1" },
    { value: "reason2", label: "Reason 2" },
    // Add more options as needed
  ];

  const tableHeaders = [
    { text: "Name" },
    { text: "From" },
    { text: "To" },
    { text: "Repeat" },
    { text: "Position" },
    { text: "Location" },
    { text: "Time" },
    { text: "Pattern" },
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
            {/* <div className="flex">
              <button className="border rounded p-2 flex">
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
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
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
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
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
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div> */}
            {/* <button className="border rounded  flex items-center ">
              <div className="flex items-center h-32px w-40px rounded  justify-center hover:bg-light-gray">
                <svg
                  // xmlns={calender}
                  className="h-6 w-6 cursor-pointer"
                  fill="none"
                  // viewBox="0 0 24 24"
                  // stroke={calender}
                  onClick={() => handleRedirect("/path1")}
                >
                  <img src={calender} />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2 4 4 8-8 4 4"
                  />
                </svg>
              </div>
              <div className="h-8 w-2px bg-black"></div>
              <div className="flex items-center h-32px w-40px rounded  justify-center hover:bg-light-gray">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={() => handleRedirect("/path3")}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
              <div className="h-8 w-1px bg-black"></div>

              <div className="flex items-center h-32px w-40px rounded  justify-center hover:bg-light-gray">
                <svg
                  xmlns={Dot}
                  className="h-6 w-6 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={() => handleRedirect("/path2")}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </button> */}
            <button className="border rounded flex items-center">
              <div className="flex items-center h-32px w-40px rounded justify-center hover:bg-light-gray">
                <img
                  src={calender}
                  className="h-6 w-6 cursor-pointer"
                  alt="Calendar"
                  onClick={() => handleRedirect("/path1")}
                />
              </div>
              <div className="h-8 w-2px bg-black"></div>
              <div className="flex items-center h-32px w-40px rounded justify-center hover:bg-light-gray">
                <img
                  src={Menu}
                  className="h-6 w-6 cursor-pointer"
                  alt="Dot"
                  onClick={() => handleRedirect("/path2")}
                />
              </div>
              <div className="h-8 w-1px bg-black"></div>
              <div className="flex items-center h-32px w-40px rounded justify-center hover:bg-light-gray">
                <img
                  src={Dot}
                  className="h-6 w-6 cursor-pointer "
                  alt="Calendar"
                  onClick={() => handleRedirect("/path3")}
                />
              </div>
            </button>
            <text className="text-24px font-normal">0</text>
            <span className="text-16px font-light"> PATTERNS</span>
          </div>
          <button className="mt-2 md:mt-0 bg-blue-button-color text-white rounded p-2">
            Add Pattern
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 mb-4">
          <div className="w-full">
            <CustomInput className="w-full" placeholder="Search by name" />
          </div>
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
        </div>
        <table className="min-w-full bg-white">
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Pattern;
