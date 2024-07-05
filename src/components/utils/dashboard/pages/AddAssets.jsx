import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import TextEditor from "../components/TextEditor";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

function AddAssets() {
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <div className=" bg-gray-100 min-h-screen bg-light-gray ">
      <div className="w-full p-6 bg-li-gray mb-20px">
        <div className="flex  bg-li-gray xs:ml-0 xs:justify-center md:ml-200px md:justify-between mt-0px mr-20px flex-wrap">
          <div className="flex space-x-3 xs:mt-10px md:mt-0">
            <CustomButton text="Assets" className="pl-4 pr-4" />
            <CustomButton text="Add Assets" className="pl-4 pr-4" />
            <CustomButton
              text="Write-Offs"
              className="pl-4 pr-4 bg-medium-sky-blue"
            />
          </div>
        </div>
      </div>
      <form className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white p-6 rounded">
        <div className="col-span-1"> 
          <h2 className="text-2xl font-bold mb-4 text-gray">ADD ASSETS</h2>
          <div>
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 mt-20px ">
                <div className=" col-span-1 xs:mb-10px lg:mb-0">
                  <label className=" text-gray">Name</label>
                </div>
                <div className=" col-span-1">
                  <CustomInput />
                </div>
              </div>
              <div className="  grid grid-cols-1 lg:grid-cols-2 mt-20px">
                <div className="col-span-1 xs:mb-10px lg:mb-0">
                  <label className=" text-gray"> Value (£)</label>
                </div>
                <div className=" col-span-1">
                  <CustomInput />
                </div>
              </div>
              <div className="  grid grid-cols-1 lg:grid-cols-2 mt-20px">
                <div className=" col-span-1  xs:mb-10px lg:mb-0">
                  <label className=" text-gray"> Deposit Required (£)</label>
                </div>
                <div className=" col-span-1">
                  <CustomInput />
                </div>
              </div>
              <div className="  grid grid-cols-1 lg:grid-cols-2 mt-20px">
                <div className=" col-span-1  xs:mb-10px lg:mb-0">
                  <label className=" text-gray">Warranty Expiry Date</label>
                </div>
                <div className=" col-span-1">
                  <CustomInput type="date" className="text-gray" />
                </div>
              </div>
              <div className="  grid grid-cols-1 lg:grid-cols-2 mt-20px">
                <div className=" col-span-1  xs:mb-10px lg:mb-0">
                  <label className=" text-gray">Quantity (max 400)</label>
                </div>
                <div className=" col-span-1">
                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      className="bg-gray-200 p-2 text-gray font-bold rounded"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      className="border p-2  text-gray rounded w-16 text-center"
                      defaultValue="1"
                    />
                    <button
                      type="button"
                      className="bg-gray-200 text-gray p-2 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="flex flex-col items-center">
                  <label htmlFor="serial" className="font-medium  text-gray">
                    Serial
                  </label>
                  <div className="flex">
                    <label
                      htmlFor="serial"
                      className="font-normal mr-5  text-gray xs:mb-10px lg:mb-0"
                    >
                      1
                    </label>

                    <CustomInput />
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <label htmlFor="reference" className="font-medium  text-gray">
                    Reference
                  </label>
                  <div className="flex">
                    <label
                      htmlFor="serial"
                      className="font-normal text-gray xs:ml-0 lg:ml-5  xs:mr-5 lg:mr-5  xs:mb-10px lg:mb-0"
                    >
                      1
                    </label>

                    <CustomInput />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col space-y-6">
          <div className="flex flex-col">
            <label className="font-medium text-gray">Description</label>

            <TextEditor />
          </div>
          <div className="flex flex-col">
            <label className="font-medium text-gray">Notes</label>

            <TextEditor />
          </div>
        </div>
      </form>
      <div className="bg-li-gray p-4 flex  xs:justify-center md:justify-end">
        <CustomButton text="save" className="pl-5 pr-5" />
      </div>
    </div>
  );
}

export default AddAssets;
