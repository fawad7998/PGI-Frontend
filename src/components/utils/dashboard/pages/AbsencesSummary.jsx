import React from "react";
import CustomButton from "../components/CustomButton";
import { FaLongArrowAltDown } from "react-icons/fa";
import CustomDropdown from "../components/CustomDropdown";
import { IoMenu } from "react-icons/io5";
import CustomTable from "../components/CustomTable";
import { RiMenuFoldLine } from "react-icons/ri";

export const AbsencesSummary = () => {
  const options = [
    { value: "", label: "Department" },
    { value: "reason1", label: "Reason 1" },
    { value: "reason2", label: "Reason 2" },
  ];
  const tableHeaders = [
    { text: "ID", className: "text-14px w-[10%]" },
    { text: "PERSON", className: "" },
    { text: "HOLIDAYS ALLOWED", className: " " },
    { text: "HOLIDAYS TAKEN", className: " " },
    { text: "HOLIDAYS BOOKED", className: " " },
    { text: "HOLIDAYS REQUESTED", className: " " },
    { text: "HOLIDAYS REMAINING", className: " " },
    { text: "SICKNESS", className: " " },
    { text: "OTHER", className: " " },
    { text: "TRACKING", className: " " },
    { text: "UNIT", className: " " },
  ];
  const tableData = [
    {
      Id: "",
      PERSON: "AMMAR AHMAD",
      HOLIDAYS_ALLOWED: "24",
      HOLIDAYS_TAKEN: "24",
      HOLIDAYS_BOOKED: "24",
      HOLIDAYS_REQUESTED: "24",
      HOLIDAYS_REMAINING: "24",
      SICKNESS: "0",
      OTHER: "0",
      TRACKING: "Fixed",
      UNIT: "DAYS",
    },
    {
      Id: "",
      PERSON: "AMMAR AHMAD",
      HOLIDAYS_ALLOWED: "24",
      HOLIDAYS_TAKEN: "24",
      HOLIDAYS_BOOKED: "24",
      HOLIDAYS_REQUESTED: "24",
      HOLIDAYS_REMAINING: "24",
      SICKNESS: "0",
      OTHER: "0",
      TRACKING: "Fixed",
      UNIT: "DAYS",
    },
    {
      Id: "",
      PERSON: "AMMAR AHMAD",
      HOLIDAYS_ALLOWED: "24",
      HOLIDAYS_TAKEN: "24",
      HOLIDAYS_BOOKED: "24",
      HOLIDAYS_REQUESTED: "24",
      HOLIDAYS_REMAINING: "24",
      SICKNESS: "0",
      OTHER: "0",
      TRACKING: "Fixed",
      UNIT: "DAYS",
    },
  ];
  return (
    <>
      <div className="w-screen h-screen  bg-lighter-gray">
        {" "}
        {/* secondary Navbar */}
        <div className="sm:flex bg-white  px-0 py-4 ">
          <div className="overflow-x-auto w-[100%]">
            {" "}
            <div className="xs:h-[10vh] sm:h-[5vh]  xs:w-screen sm:w-[93vw] bg-white flex justify-center ">
              <div className=" flex justify-evenly items-center xs:w-[100%] lg:w-[70%] ">
                {" "}
                <CustomButton
                  text={"Timesheet summary"}
                  className={"bg-transparent  !text-black"}
                />
                <CustomButton
                  text={"Checkpoint"}
                  className={"bg-transparent  !text-black"}
                />
                <CustomButton
                  text={"Absences"}
                  className={"bg-transparent  !text-black"}
                />
                <CustomButton
                  text={"Absences Summary"}
                  className={"   bg-bright-sky-blue"}
                />
                <CustomButton
                  text={"Position Coverage"}
                  className={"bg-transparent  !text-black"}
                />
                <CustomButton
                  text={"Revenue Summary"}
                  className={"bg-transparent  !text-black"}
                />
                <CustomButton
                  text={"Action History"}
                  className={"bg-transparent  !text-black"}
                />
              </div>
            </div>
          </div>
        </div>
        {/* the code after secondary Navbar */}
        {/* The main Box */}
        <div className="flex justify-center items-center mt-30px">
          <div className="xs:w-screen sm:w-[90vw] bg-white">
            {/* show filters */}
            <div className="w-[100%] flex justify-center">
              <FaLongArrowAltDown className="mt-8px" />
              <CustomButton
                text={"Show filters"}
                className={"bg-transparent !text-black"}
              />
            </div>
            {/* first row */}
            <div className="w-[100%]  sm:flex  mb-20px">
              <div className="xs:w-[100%] sm:w-[50%] xs:flex xs:justify-center sm:justify-start  ">
                <CustomDropdown
                  options={options}
                  className="w-120px border-none  "
                />
              </div>
              <div className="flex  xs:w-[100%] sm:w-[50%] sm:justify-end">
                {" "}
                <div className="flex justify-between xs:w-[100%] sm:w-[80%]  lg:w-[60%] xl:w-[50%] ">
                  {/* icons */}
                  <div className="flex xs:justify-between sm:justify-around xs:w-[15%] sm:w-[30%]">
                    <RiMenuFoldLine className="h-26px w-26px  mt-4px " />
                    <IoMenu className="h-32px w-32px " />
                  </div>
                  {/* two buttons */}
                  <div className="flex xs:w-[60%] sm:w-[70%] xs:justify-between sm:justify-around">
                    {" "}
                    <CustomButton
                      text={"Save View"}
                      className={
                        "[100%] inline bg-green-500 text-normal h-[100%]"
                      }
                    />
                    <CustomDropdown
                      options={options}
                      className="bg-blue-button-color !text-white"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* first row ends here */}
            {/* Table */}
            <div className="overflow-x-auto">
              {" "}
              <CustomTable
                headers={tableHeaders}
                data={tableData}
                tableClassName="overflow-x-auto"
                thClassName="bg-lighter-yellow   text-light-yellow "
                tdClassName=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};