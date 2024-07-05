import React from "react";
import CustomButton from "../components/CustomButton";
import { LuMessageSquare } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
import CustomInput from "../components/CustomInput";
import CustomDropdown from "../components/CustomDropdown";
import CustomTable from "../components/CustomTable";
import { Checkbox } from "@mui/material";
import { IoMenu } from "react-icons/io5";
import { CiSquarePlus } from "react-icons/ci";

const TimeSheet = () => {
  const options = [
    { value: "", label: "Department" },
    { value: "reason1", label: "Reason 1" },
    { value: "reason2", label: "Reason 2" },
  ];
  const tableHeaders = [
    { text: <CiSquarePlus className="h-24px w-24px" />, className: "w-[15%] " },
    { text: "Type", className: "w-[15%] text-14px" },
    { text: "PERSON", className: "w-[15%] " },
    { text: "DESCRIPTION", className: "w-[15%] " },
    { text: "LOCATION", className: "w-[15%] " },
    { text: "DATE", className: "w-[15%] " },
    { text: "TIME FROM", className: "w-[15%] " },
    { text: "TIME TO", className: "w-[15%] " },
    { text: "SCHEDULED HOURS", className: "w-[15%] " },
    { text: "ACTUAL HOURS", className: "w-[15%] " },
    { text: "RATE", className: "w-[15%] " },
    { text: "SCHEDULED PAY", className: "w-[15%] " },
    { text: "ACTUAL PAY", className: "w-[15%] " },
    { text: "EXPENSES", className: "w-[15%] " },
  ];
  const tableData = [
    {
      CLICKED: ".",
      Type: "A",
      PERSON: "ALI",
      DESCRIPTION: "SR.Developers",
      LOCATION: "Paris",
      DATE: "12/01/2024",
      TIMEFROM: "2/05/24",
      TIMETO: "2/06/24",
      SCHHOURS: "50",
      ACTUALHOURS: "64",
      RATE: "500",
      SCEDULEPAY: "25000",
      ACTUALPAY: "32000",
      EXPENSES: "10000",
    },
  ];

  return (
    <>
      <div className="bg-light-sky-blue h-full ">
        {" "}
        {/* secondary Navbar */}
        <div className="w-screen  sm:flex p-4 px-10 bg-white">
          <div className="xs:w-screen sm:w-[80%] md:w-full  bg-white justify-center  overflow-x-auto">
            {" "}
            <div className="xs:h-[10vh] sm:h-[5vh]  xs:w-[100%] sm:w-[93%] bg-white  flex justify-center ">
              <div className=" flex justify-evenly items-center xs:w-[100%] lg:w-[70%] ">
                {" "}
                <CustomButton
                  text={"Timesheet summary"}
                  className={"bg-bright-sky-blue"}
                />
                <CustomButton
                  text={"Checkpoint"}
                  className={"bg-transparent  hover:bg-gray !text-black"}
                />
                <CustomButton
                  text={"Absences"}
                  className={"bg-transparent  hover:bg-gray !text-black"}
                />
                <CustomButton
                  text={"Absences Summary"}
                  className={"bg-transparent  hover:bg-gray !text-black"}
                />
                <CustomButton
                  text={"Position Coverage"}
                  className={"bg-transparent  hover:bg-gray !text-black"}
                />
                <CustomButton
                  text={"Revenue Summary"}
                  className={"bg-transparent  hover:bg-gray !text-black"}
                />
                <CustomButton
                  text={"Action History"}
                  className={"bg-transparent  hover:bg-gray !text-black"}
                />
              </div>
            </div>
          </div>
          {/* two icons at right end of secondary navbar */}
          {/* <div className="xs:w-[100%]  sm:w-[20%] md:w-[10%] bg-white flex justify-around items-center">
            <LuMessageSquare className="w-24px h-24px" />
            <div className="xs:h-10 xs:w-4px sm:w-1px sm:h-[100%] bg-gray"></div>
            <IoMdNotificationsOutline className="w-24px h-24px" />
          </div> */}
        </div>
        {/* new xode for secondary navbRAR */}
        {/* the code after secondary Navbar */}
        <div className="flex justify-center ">
          <div className="w-[90vw]  bg-transparent pt-50px ">
            {/* Group of inputs */}
            <div className="flex justify-between flex-wrap w-[100%]">
              <CustomDropdown
                options={options}
                className="xs:w-[100%] sm:w-140px bg-transparent "
              />
              <input
                type="date"
                className="xs:w-[100%] sm:w-140px rounded bg-transparent border-gray border"
              />

              <input
                type="date"
                className=" xs:w-[100%] sm:w-140px rounded bg-transparent border-gray border"
              />

              <CustomDropdown
                options={options}
                className="xs:w-[100%] sm:w-140px bg-transparent"
              />
              <CustomDropdown
                options={options}
                className="xs:w-[100%] sm:w-140px bg-transparent"
              />

              <CustomDropdown
                options={options}
                className="xs:w-[100%] sm:w-140px bg-transparent"
              />

              <CustomDropdown
                options={options}
                className="xs:w-screen sm:w-140px bg-transparent"
              />
              <CustomDropdown
                options={options}
                className="xs:w-screen sm:w-140px bg-transparent"
              />
              <CustomDropdown
                options={options}
                className="xs:w-screen sm:w-140px bg-transparent"
              />
            </div>
            {/* checkBoxes */}
            <div className="w-[100%] flex justify-end">
              {" "}
              <p className="flex justify-center items-center text-16px">
                Shifts
              </p>
              <Checkbox checked={true} bg-transparent />
              <p className="flex justify-center items-center text-16px">Jobs</p>
              <Checkbox checked={true} bg-transparent />
            </div>
            {/* Table */}
            <div className=" bg-white  w-[100%] p-2  ">
              {/* first row */}
              <div className="w-[100%]  sm:flex ">
                <div className="xs:w-[100%] sm:w-[50%] xs:flex xs:justify-center sm:justify-start  ">
                  <CustomDropdown
                    options={options}
                    className="w-120px border-none  "
                  />
                </div>
                <div className="flex  xs:w-[100%] sm:w-[50%] sm:justify-end xs:mt-10px sm:mt-0">
                  {" "}
                  <div className="flex justify-between xs:w-[100%] sm:w-[80%]  lg:w-[60%] xl:w-[50%] ">
                    {/* icons */}
                    <div className="flex xs:justify-between sm:justify-around xs:w-[15%] sm:w-[30%]">
                      <IoMenu className="h-26px w-26px   " />
                      <IoMenu className="h-26px w-26px " />
                    </div>
                    {/* two buttons */}
                    <div className="flex xs:w-[60%] sm:w-[70%]  xs:justify-between  sm:justify-around">
                      {" "}
                      <CustomButton
                        text={"Save View"}
                        className={"[100%] inline"}
                      />
                      <CustomDropdown
                        options={options}
                        className="bg-medium-sky-blue"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="flex justify-between">
                <div><CustomDropdown options={options}/></div>
                <div className="flex ">
                  <div  className="flex ">
                  <IoMenu className="h-26px w-26px   " />
                  <IoMenu className="h-26px w-26px " />
                  </div>
                  <div  className="flex ">
                  <CustomButton
                        text={"Save View"}
                        className={"[100%] inline"}
                      />
                      <CustomDropdown
                        options={options}
                        className="bg-medium-sky-blue"
                      />
                  </div>
                </div>
              </div> */}
              {/* first row ends here */}
              <div className="overflow-x-auto ">
                {" "}
                <CustomTable
                  headers={tableHeaders}
                  data={tableData}
                  tableClassName="overflow-x-auto"
                  // thClassName="w-600px"
                  // tdClassName="w-600px"
                />
              </div>
              <div className="line w-[100%] border-gray"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeSheet;
