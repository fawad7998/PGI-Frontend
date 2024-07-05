import React, { useState } from "react";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import CustomDropdown from "../components/CustomDropdown";
import { Switch } from "@mui/material";

const PayCharge = () => {
  const [switchStates, setSwitchStates] = useState([true, false, true]);

  const handleSwitchChange = (index) => (event) => {
    const newSwitchStates = [...switchStates];
    newSwitchStates[index] = event.target.checked;
    setSwitchStates(newSwitchStates);
  };
  const payrollSchedules = [
    { name: "Bi-weekly", periodLength: "2 weeks" },
    { name: "Custom pay Schedule", periodLength: "Custom" },
    { name: "Monthly", periodLength: "Monthly" },
    { name: "Weekly", periodLength: "Weekly" },
  ];

  const options = [
    { value: "", label: "Department" },
    { value: "reason1", label: "Reason 1" },
    { value: "reason2", label: "Reason 2" },
  ];

  return (
    <div className="w-full ">
      <hr className="border-t-2 w-full border-gray mt-42px " />
      <div className="flex mt-20px mb-10px flex-col items-center justify-center">
        <div className="flex justify-center ">
          <text className="text-32px font-semibold">Activate Pay Run</text>
        </div>
        <div className="w-1200px flex flex-col justify-center">
          <div className="flex  mt-20px">
            <text className="text-24px font-medium">Activate Pay Run</text>
          </div>
          <div className="flex  mt-31px">
            <text className="text-18px font-normal">
              In order to start using the new Pay Run report you will need to
              select Pay Schedule(s) for your company
            </text>
          </div>
          <div className="mt-12 flex items-center ">
            <div className="flex items-center justify-center">
              <BsFillQuestionCircleFill className="text-gray" />
            </div>
            <div className="flex items-center ml-4">
              <span className="text-19px font-normal text-gray">
                Timesheet Pay Period
              </span>
            </div>
            <div className="ml-4">
              <CustomDropdown options={options} className="w-200px text-gray" />
            </div>
          </div>

          <div className="overflow-x-auto mt-25px">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="w-full bg-gray-100 border-b border-gray-300">
                  <th className="px-4 py-2 text-left">Active</th>
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Period Length</th>
                  <th className="px-4 py-2 text-left">Active from</th>
                  <th className="px-4 py-2 text-left">Employment Types</th>
                </tr>
              </thead>
              <tbody>
                {payrollSchedules.map((schedule, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    <td className="px-4 py-2 text-left">
                      <Switch
                        onChange={handleSwitchChange(index)}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                    </td>
                    <td className="px-4 py-2 text-repeat-medium-sky-blue">
                      {schedule.name}
                    </td>
                    <td className="px-4 py-2 text-gray">
                      {schedule.periodLength}
                    </td>
                    <td className="px-4 py-2"> </td>
                    <td className="px-4 py-2"></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
              + Add New
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayCharge;
