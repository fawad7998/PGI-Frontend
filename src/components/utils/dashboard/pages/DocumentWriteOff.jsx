import React from "react";
import CustomButton from "../components/CustomButton";
import CustomHr from "../components/CustomHr";
import CustomInput from "../components/CustomInput";
import CustomTable from "../components/CustomTable";
import { MdArrowDropDown } from "react-icons/md";

function DocumentWriteOff() {
  const tableHeaders = [
    { text: "SERIAL" },
    { text: "NAME" },
    { text: "VALUE(£)" },
    { text: "WRITTEN OFF BY" },
    { text: "WRITTEN OFF DATE" },
  ];
  const tableData = [
    {
      dateCancelled: "2024-06-01",
      reason: "Sick",
      shiftTime: "08:00 - 16:00",
      absence: "John Doe",
      personName: "Jane Smith",
    },
  ];
  return (
    <div className="w-full">
      {/* <div> */}
      <div className="flex  xs:ml-0 xs:justify-center md:ml-200px md:justify-between mt-20px mr-20px flex-wrap">
        <div className="flex space-x-3 xs:mt-10px md:mt-0">
          <CustomButton text="Assets" className="pl-4 pr-4" />
          <CustomButton
            text="Write-Offs"
            className="pl-4 pr-4 bg-medium-sky-blue"
          />
        </div>
        <div className="flex space-x-3 xs:mt-10px xs:ml-20px md:ml-0 md:mt-0">
          <CustomButton text="Add" className="pl-4 pr-4 bg-light-green" />
          <CustomButton
            text="Action"
            className="pl-4 pr-4 w-80px"
            icon={<MdArrowDropDown className="w-6 h-6" />}
            iconClassName=" text-white"
          />
        </div>
      </div>
      <div className="mt-20px">
        <CustomHr className=" border-gray" />
      </div>
      <div className="flex xs:ml-0 md:ml-100px xs:w-full xs:justify-center md:w-[80%]   mt-35px  md:justify-between flex-wrap ">
        <div className="xs:w-full flex xs:justify-center xs:mt-10px md:mt-0 md:w-320px ">
          <CustomInput
            className=" w-320px "
            placeholder="search serial number..."
          />
        </div>
        <div className="xs:w-full flex xs:justify-center xs:mt-10px md:mt-0 md:w-320px ">
          <CustomInput className="w-320px " placeholder="search name..." />
        </div>
        <div className="xs:w-full flex xs:justify-center xs:mt-10px md:mt-0 md:w-320px ">
          <CustomInput className="w-320px" placeholder="search value..." />
        </div>
      </div>
      <div className="mt-40px xs:ml-0 md:ml-50px">
        <CustomTable
          tableClassName="overflow:auto"
          headers={tableHeaders}
          data={tableData}
          showCheckbox={true}
        />
      </div>
      {/* </div> */}
    </div>
  );
}

export default DocumentWriteOff;
