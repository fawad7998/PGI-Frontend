import React from "react";
import { RiFileExcel2Fill } from "react-icons/ri";
import { TiArrowForward } from "react-icons/ti";
import { BsDatabase } from "react-icons/bs";

function ImportLocation() {
  return (
    <div>
      <div className="h-75px flex justify-between p-5 bg-white w-full ">
        <div className="flex ml-100px">
          <div>
            <text className="text-20px font-medium">List</text>
          </div>
          <div>
            <text className="text-18px font-normal ml-66px">
              Inactive locations
            </text>
          </div>
        </div>
        <div className="flex">
          <button className="bg-blue-button-color ml-10px rounded h-38px p-1">
            Add location
          </button>
          <button className="bg-blue-button-color ml-10px rounded h-38px p-1">
            Import
          </button>
        </div>
      </div>
      <div className=" w-full flex-col h-81vh bg-light-sky-blue flex items-center justify-center">
        <div className=" flex flex-col items-center justify-center w-600px">
          <div className="flex mb-66px ">
            <div className="w-207px h-207px">
              <RiFileExcel2Fill className="w-207px h-207px text-medium-sky-blue" />
            </div>
            <div className="w-207px h-207px">
              <TiArrowForward className="w-207px h-207px text-medium-sky-blue" />
            </div>
            <div className="w-207px h-207px">
              <BsDatabase className="w-207px h-207px text-medium-sky-blue" />
            </div>
          </div>
          <div>
            <text className="text-32px font-medium">
              Import your venue details in bulk
            </text>
          </div>
          <div className="flex flex-col items-center justify-center mt-20px ">
            <text className="text-center text-20px font-normal">
              If you have an existing dataset of your venue details,you can
              import them into our database Start off by uploading the data set
              file to our servers Select a CSV file or drag the file here from
              desktop.
            </text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImportLocation;
