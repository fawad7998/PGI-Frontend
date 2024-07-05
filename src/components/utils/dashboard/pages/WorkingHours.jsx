/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import CustomTable from "../components/CustomTable";
import CustomSwitchComponent from "../components/CustomSwitchComponent";

function WorkingHours() {
  // list items start
  // list items end

  const [switchState, setSwitchState] = useState({});

  const handleSwitchChange = (rowIndex) => {
    setSwitchState((prevState) => ({
      ...prevState,
      [rowIndex]: !prevState[rowIndex],
    }));
  };

  const tableHeaders = [
    { text: "Active", className: "w-[5%] text-14px" },
    { text: "Name", className: "w-[20%] " },
    { text: "Max Hours", className: "w-[10%] " },
    { text: "Period", className: "w-[10%] " },
    { text: "Age", className: "w-[10%] " },
    { text: "Employment Types", className: "w-[20%] " },
  ];

  const tableData = [
    {
      active: "",
      name: "John Doe",
      maxHours: 40,
      period: "Full Time",
      age: 30,
      employmentTypes: "Full Time",
    },
    {
      active: "",
      name: "John Doe",
      maxHours: 40,
      period: "Full Time",
      age: 30,
      employmentTypes: "Full Time",
    },
    {
      active: "",
      name: "John Doe",
      maxHours: 40,
      period: "Full Time",
      age: 30,
      employmentTypes: "Full Time",
    },
    {
      active: "",
      name: "John Doe",
      maxHours: 40,
      period: "Full Time",
      age: 30,
      employmentTypes: "Full Time",
    },
    {
      active: "",
      name: "John Doe",
      maxHours: 40,
      period: "Full Time",
      age: 30,
      employmentTypes: "Full Time",
    },
  ];

  return (
    <div>
      <div className="flex w-full items-center h-68px bg-li-gray">
        <div className="flex items-center w-514px h-34px ml-10px">
          <div className="flex items-center gap-2">
            <CustomButton
              text="System Settings"
              className=" bg-primary text-white text-14px font-semibold"
            />
            <CustomButton
              text="Billing"
              className="text-primary bg-li-gray text-14px font-semibold"
            />
            <CustomButton
              text="Subscriptions"
              className="text-primary bg-li-gray text-14px font-semibold"
            />
            <CustomButton
              text="Date & Time"
              className="text-primary bg-li-gray text-14px font-semibold"
            />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto px-63px">
        <div className="flex justify-end my-34px">
          <CustomButton
            text="Add Rule"
            className="text-white bg-[#2DCB91] h-34px text-14px font-semibold"
          />
        </div>
        <CustomTable
          headers={tableHeaders}
          data={tableData}
          thClassName="text-primary font-semibold border-l first:border-l-0"
          tdClassName="text-blue-button-color font-medium border-l first:border-l-0 "
          tableClassName="overflow-x-auto "
          // thClassName="w-600px"
          // tdClassName="w-600px"

          showSwitchButton={true}
          switchState={switchState}
          handleSwitchChange={handleSwitchChange}
        />
      </div>
      {/* list */}

      {/* list */}
    </div>
  );
}

export default WorkingHours;
