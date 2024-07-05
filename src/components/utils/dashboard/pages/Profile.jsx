/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import CustomDropdown from "../components/CustomDropdown";
import { FormControlLabel } from "@mui/material";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import CustomHr from "../components/CustomHr";
import { IoInformation } from "react-icons/io5";
import { BsTextareaResize } from "react-icons/bs";
import CustomSwitchComponent from "../components/CustomSwitchComponent";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CustomInput from "../components/CustomInput";
import { useMediaQuery } from "@mui/material";
import Upcomming from "../../../../image/Textarea.svg";

function Profile() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "316px",
    width: isMobile ? "90%" : "500px", // Adjust width for mobile
    bgcolor: "background.paper",
    border: "1px solid #E7E7E7",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    p: 0,
  };
  const option = [
    { value: "- Select Qualification -", label: "- Select Qualification -" },
  ];

  const [checked, setChecked] = useState(true);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setSwitchStates((prevState) => ({
      ...prevState,
      switch1: false,
    }));
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
    console.log("Switch is " + (event.target.checked ? "ON" : "OFF"));
  };

  const initialSwitchStates = {
    switch1: false,
    switch2: false,
    switch3: true,
  };

  const [switchStates, setSwitchStates] = useState(initialSwitchStates);
  console.log("switch1", switchStates.switch1);

  // Define separate handler functions for each switch
  const handleSwitch1Functionality = (isChecked) => {
    if (isChecked) {
      console.log("Switch 1 turned ON");
      // Additional logic for switch 1
    } else {
      console.log("Switch 1 turned OFF");
      // Additional logic for switch 1
    }
  };

  const handleSwitch2Functionality = (isChecked) => {
    if (isChecked) {
      console.log("Switch 2 turned ON");
      // Additional logic for switch 2
    } else {
      console.log("Switch 2 turned OFF");
      // Additional logic for switch 2
    }
  };

  const handleSwitch3Functionality = (isChecked) => {
    if (isChecked) {
      console.log("Switch 3 turned ON");
      // Additional logic for switch 3
    } else {
      console.log("Switch 3 turned OFF");
      // Additional logic for switch 3
    }
  };

  // Map switch IDs to their handler functions
  const switchHandlers = {
    switch1: handleSwitch1Functionality,
    switch2: handleSwitch2Functionality,
    switch3: handleSwitch3Functionality,
  };

  const handleSwitchChange = (switchId) => (event) => {
    const newSwitchState = event.target.checked;

    setSwitchStates((prevStates) => ({
      ...prevStates,
      [switchId]: newSwitchState,
    }));

    console.log(`Switch ${switchId} is ${newSwitchState ? "ON" : "OFF"}`);

    // Call the function associated with the switchId
    if (switchHandlers[switchId]) {
      switchHandlers[switchId](newSwitchState);
    } else {
      console.log(`No handler defined for switch: ${switchId}`);
    }

    handleOpen();
  };

  const buttonscol3 = [
    { name: "Details" },
    { name: "Emoplyment" },
    { name: "Experties" },
    { name: "Background" },
    { name: "Health&Look" },
    { name: "Assets" },
    { name: "Docs" },
    { name: "Details" },
  ];

  return (
    <>
      <div className="bg-slate-200 h-auto p-4 ">
        <div className="flex items-center justify-between flex-wrap xs:w-full xs:flex-wrap sm:w-100% sm:flex-wrap md:w-100% lg:w-100%">
          <div className="flex gap-3">
            <span>Employees</span>
            <span>Invitations</span>
            <span>Roles</span>
          </div>
          <div className="flex items-center gap-2">
            <CustomButton
              text="Add People"
              className="text-white px-3 w-114px bg-[#36B358] "
            />
            <CustomDropdown
              options={option}
              className="w-99px border-none  text-white  bg-[#347EBB]"
            />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2 mt-20px xs:w-full sm:w-100% md:w-100% lg:w-100% ">
          {/* first child */}
          <div className="lg:col-span-9 col-span-12 gap-4 xs:text-sm sm:text:md">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 grid lg:grid-cols-2 gap-6">
              <div className="flex items-center lg:col-span-2 gap-4 sm:gap-4">
                <div className="hidden lg:flex flex-col items-center">
                  <div className="w-32 h-32 flex items-center justify-center bg-[#D5D9DA] rounded-full text-[30px] text-[#363E44] font-bold">
                    MS
                  </div>
                  <span className="text-blue-500 mt-3">Active</span>
                  <div className="mt-4">
                    <div>Role:</div>
                    <div className="mt-2 px-2 py-1 bg-[#BB203C] text-white rounded-md text-sm">
                      Superadmin
                    </div>
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl text-[#868686] font-semibold">
                      M Sheraz
                    </h2>
                    <button className="px-2 py-1 bg-[#BB203C] w-50px text-white rounded-md text-sm">
                      Edit
                    </button>
                  </div>
                  <div className="mt-4 text-gray">
                    <div className="flex items-center lg:flex-row xl:flex-row xs:flex-col xs:items-start sm:flex-col sm:items-start">
                      <span className="font-semibold">Email:</span>
                      <span className="lg:ml-60px xl:ml-60px xs:ml-0 sm:ml-0">
                        sheraz@saksys.com
                      </span>
                    </div>
                    <div className="flex items-center lg:flex-row xl:flex-row xs:flex-col xs:items-start sm:flex-col sm:items-start">
                      <span className="font-semibold">Phone:</span>
                      <span className="lg:ml-72px xl:ml-72px  xs:ml-0 sm:ml-0">
                        --
                      </span>
                    </div>
                    <div className="flex items-center lg:flex-row xl:flex-row xs:flex-col xs:items-start sm:flex-col sm:items-start">
                      <span className="font-semibold">Address:</span>
                      <span className="lg:ml-60px xl:ml-60px xs:ml-0 sm:ml-0">
                        --{" "}
                        <span className="ml-2 text-[#868686]">
                          🕒 London GMT +01:00
                        </span>
                      </span>
                    </div>
                    <div className="flex items-center lg:flex-row xl:flex-row xs:flex-col xs:items-start sm:flex-col sm:items-start">
                      <span className="font-semibold">Birthday:</span>
                      <span className="lg:ml-57px xl:ml-57px  xs:ml-0 sm:ml-0">
                        --
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center mt-4 text-gray">
                    <span className="font-semibold">Access:</span>
                    <div className="ml-85px">
                      <div>
                        <h2>Section 1</h2>
                        <CustomSwitchComponent
                          switchId="switch1"
                          checked={switchStates.switch1}
                          handleChange={handleSwitchChange}
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <label className="flex items-center cursor-pointer">
                        <i className="text-gray-700 font-bold text-xs">
                          Last active: Tue, Jun 11 16:33
                        </i>
                      </label>
                      <i className="text-gray-600 font-bold text-xs">
                        Created: 5th Jun, 2024
                      </i>
                    </div>
                  </div>

                  <div className="flex items-center mt-4 text-gray">
                    <span className="font-semibold w-20">
                      Two-factor authentication:
                    </span>
                    <div className="ml-14">
                      {/* <FormControlLabel
                        control={<IOSSwitch defaultChecked />}
                      /> */}
                      <CustomSwitchComponent
                        switchId="switch2"
                        checked={switchStates.switch2}
                        handleChange={handleSwitchChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="hidden lg:flex flex-col items-center ml-6">
                  <div className="relative">
                    <svg className="w-20 h-20">
                      <circle
                        cx="40"
                        cy="40"
                        r="38"
                        stroke="#e5e7eb"
                        strokeWidth="4"
                        fill="none"
                      />
                      <circle
                        cx="40"
                        cy="40"
                        r="38"
                        stroke="#34d399"
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray="238.76"
                        strokeDashoffset="0"
                      />
                    </svg>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                      <span className="text-lg font-semibold">28</span>
                    </div>
                  </div>
                  <span className="text-gray-500 text-sm mt-2">0.00 / 28</span>
                </div>
              </div>

              <div className="flex justify-end mt-6 lg:col-span-2">
                <button className="text-blue-600 font-semibold mr-4">
                  Update
                </button>
                <button className="text-blue-600 font-semibold">Add</button>
              </div>
            </div>
            {/* cARD */}
            <div>
              <div className="max-w-4xl  mx-full ">
                <div className="bg-white rounded-lg shadow-sm mt-2 ">
                  <div className="flex">
                    <div className=" flex justify-between w-full h-48px bg-[#F5F7F4] overflow-x-auto">
                      {buttonscol3.map((data) => {
                        return (
                          <>
                            <div className=" border border-[#D5D5D5] text-sm font-semibold text-gray flex items-center justify-center w-full">
                              {data.name}
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                  <div className="p-4 ">
                    <div className="grid grid-row-3 gap-4 mb-6">
                      <div className="flex flex-wrap items-center justify-between">
                        <div className="flex ">
                          <h2 className="text-xl font-semibold">
                            Departments:
                          </h2>
                          <button className="text-blue-500 ml-[19px]">
                            +Add
                          </button>
                        </div>
                        <div className="flex ">
                          <h2 className="text-xl font-semibold">Positions:</h2>
                          <button className="text-blue-500 ml-14">+Add</button>
                        </div>
                        <div className="flex ">
                          <h2 className="text-xl font-semibold w-[50px]">
                            Preferred Locations:
                          </h2>
                          <button className="bg-blue-500 text-white px-4 py-1 ml-24 rounded">
                            Sheraz
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                      <div className="">
                        <div className="flex items-center justify-between">
                          <h2 className="text-xl font-semibold mb-4">
                            Additional Details
                          </h2>
                          <button className="text-blue-500 mb-4">Edit</button>
                        </div>
                        <CustomHr className="border border-slate-500" />
                        <div className="space-y-2 pt-2">
                          <div className="flex items-center justify-between pr-48">
                            <div>Gender:</div>
                            <div className="text-[#666F80] font-bold text-lg">
                              Male
                            </div>
                          </div>
                          <div className="flex items-center justify-between pr-48">
                            <div>Nationality:</div>
                            <div>--</div>
                          </div>
                          <div className="flex items-center justify-between pr-48">
                            <div>POB:</div>
                            <div>--</div>
                          </div>
                          <div className="flex items-center justify-between pr-48">
                            <div>Drivers License:</div>
                            <div>--</div>
                          </div>
                          <div className="flex items-center justify-between pr-48">
                            <div>Access to Car:</div>
                            <div>--</div>
                          </div>
                          <div className="flex items-center justify-between pr-48">
                            <div>Pref. Sector:</div>
                            <div>--</div>
                          </div>
                          <div className="flex items-center justify-between pr-48">
                            <div>Pref. Region:</div>
                            <div>--</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <h2 className="text-xl font-semibold mt-6 mb-4">
                            Passport/ID-Card
                          </h2>
                          <button className="text-blue-500">Edit</button>
                        </div>
                        <CustomHr className="border border-slate-500" />
                        <p className="mt-2 text-[#666F80] font-bold text-lg">
                          -not set-
                        </p>
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <h2 className="text-xl font-semibold mb-4">
                            Bank Account
                          </h2>
                          <button className="text-blue-500 mb-4">Edit</button>
                        </div>
                        <CustomHr className="border border-slate-500" />
                        <p className="mt-2 text-[#666F80] font-bold text-lg">
                          -not set-
                        </p>
                        <div className="flex item-center justify-between">
                          <h2 className="text-xl font-semibold mt-6 mb-4">
                            Emergency Contacts
                          </h2>
                          <button className="text-blue-500">Add</button>
                        </div>
                        <CustomHr className="border border-slate-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 col-span-12 mt-2 lg:mt-0">
            <div className="bg-[#0064B4] p-3 h-242px rounded-lg shadow-sm">
              <div className="flex items-center justify-between w-full px-2 pt-3">
                <div className="flex gap-1 text-white">
                  <div className="text-xs font-bold">INTERNAL NOTES</div>
                  <div className="border-none rounded-full bg-white text-black w-fit h-fit">
                    <IoInformation />
                  </div>
                </div>
                <div>
                  <CustomButton
                    text="+Add"
                    className="text-white bg-[#013966] "
                  />
                </div>
              </div>
            </div>
            <div className="bg-white  rounded-lg shadow-sm h-542px mt-4">
              <div className="">
                <div className=" flex justify-between w-full h-48px bg-[#F5F7F4]  rounded">
                  <div className=" border  border-[#D5D5D5] text-sm font-semibold text-gray flex items-center justify-center w-full">
                    Notifications
                  </div>
                  <div className=" border border-[#D5D5D5] text-sm font-semibold text-gray flex items-center justify-center w-full">
                    Actions
                  </div>
                </div>
                <div className="flex items-center justify-center p-3 text-gray ">
                  No more Results
                </div>
                <CustomHr className="border border-slate-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-col">
            <div className="flex justify-between items-center border-b-2 h-56px border-light-gray">
              <h1 className="text-[#868686] ml-5 font-medium text-[15px]">
                ADD QUALIFICATION
              </h1>
              <button
                onClick={handleClose}
                className="text-[#868686] border-l-2 py-11px px-18px text-2xl border-light-gray"
              >
                &times;
              </button>
            </div>

            <div className="flex xs:flex-wrap justify-between items-center mt-20px mb-11px">
              <label htmlFor="select" className="text-[#868686] ml-5">
                Qualification<span className="text-[#FF0000]">*</span>
              </label>
              <CustomDropdown
                options={option}
                className="w-207px text-[#868686] mr-70px bg-white"
              />
            </div>
            <div className="flex xs:flex-wrap justify-between items-center  mb-11px ">
              <label htmlFor="select" className="text-[#868686] ml-5">
                Certificate Number<span className="text-[#FF0000]">*</span>
              </label>
              <CustomInput type="text" className="w-207px mr-70px" />
            </div>
            <div className="flex xs:flex-wrap justify-between items-center ml-5 mb-33px  ">
              <label htmlFor="select" className="text-[#868686]">
                Expiry Date
              </label>
              <CustomInput
                type="date"
                className="w-142px mr-135px text-[#868686]"
              />
            </div>
            <div className="flex justify-end items-center h-68px border-light-gray border-t-2">
              <CustomButton
                onClick={handleClose}
                text="Save"
                className="text-white font-semibold text-[15px] my-13px w-72px h-43px flex items-center justify-center mr-29px bg-[#013966] hover:bg-blue-800"
              />
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default Profile;
