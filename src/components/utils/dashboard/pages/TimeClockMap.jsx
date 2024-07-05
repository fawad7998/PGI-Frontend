import React from "react";
import CustomDropdown from "../components/CustomDropdown";
import { GoogleMap } from "@react-google-maps/api";
import GoogleMapComponent from "../components/GoogleMap";
import CustomInput from "../components/CustomInput";

function TimeClockMap() {
  const options = [
    { value: "", label: "Department" },
    { value: "reason1", label: "Reason 1" },
    { value: "reason2", label: "Reason 2" },
  ];
  return (
    <div className="h-100vh">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div className="flex items-center flex-wrap ml-100px space-x-2">
          <CustomDropdown
            options={options}
            placeholder="Department"
            className="pl-2  border-white w-177px rounded mr-10px"
          />
          <button className="w-70px h-34px text-white rounded flex justify-center bg-blue-button-color items-center">
            List
          </button>
          <button className="text-18px font-normal ml-28px">
            Inactive location
          </button>
        </div>
      </div>
      <div className="h-46px bg-light-sky-blue mb-31px"></div>
      <div className="flex w-full">
        <div className="w-[50%]">
          <div className="h-104px xs:h-300px sm:h-200px md:h-104px flex flex-wrap justify-between ml-100px items-center">
            <CustomDropdown className="w-180px text-gray " options={options} />
            <CustomDropdown
              className="w-180px text-gray xs:ml-0px"
              options={options}
            />
            <CustomInput className="w-180px text-gray xs:ml-0px" type="date" />
            <CustomInput className="w-180px text-gray xs:ml-0px" type="date" />
          </div>
          <div>
            <GoogleMapComponent />
          </div>
        </div>
        <div className="w-[40%]">
          <div className="h-104px flex justify-around items-end">
            <text>Recently Activity</text>
            <text>Shifts</text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeClockMap;
