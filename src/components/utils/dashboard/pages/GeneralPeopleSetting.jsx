import React, { useState } from 'react'
import CustomButton from '../components/CustomButton'
import CustomDropdown from '../components/CustomDropdown'
import CustomSwitchComponent from '../components/CustomSwitchComponent';
import { IoInformationCircle } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";
import CustomHr from '../components/CustomHr';

function GeneralPeopleSetting() {
    const DropDownData = [
        { value: "Firstname Lastname", label: "Firstname Lastname" },
        { value: "meter", label: "meter" },
    ];
    // Switch Funtcionality
    const [open, setOpen] = useState(false);

    const initialSwitchStates = {
        switch1: false,
        switch2: false,
        switch3: true,
    };
    const [switchStates, setSwitchStates] = useState(initialSwitchStates);

    const handleSwitchChange = (switchId) => (event) => {
        const newSwitchState = event.target.checked;
        setSwitchStates((prevStates) => ({
            ...prevStates,
            [switchId]: newSwitchState,
        }));
        console.log(`Switch ${switchId} is ${newSwitchState ? "ON" : "OFF"}`);
        if (switchHandlers[switchId]) {
            switchHandlers[switchId](newSwitchState);
        } else {
            console.log(`No handler defined for switch: ${switchId}`);
        }
        handleOpen();
    };

    console.log("switch1", switchStates.switch1);
    const handleOpen = () => setOpen(true);
    const handleSwitch1Functionality = (isChecked) => {
        if (isChecked) {
            console.log("Switch 1 turned ON");
        } else {
            console.log("Switch 1 turned OFF");
        }
    };
    const handleSwitch2Functionality = (isChecked) => {
        if (isChecked) {
            console.log("Switch 2 turned ON");
        } else {
            console.log("Switch 2 turned OFF");
        }
    };
    const handleSwitch3Functionality = (isChecked) => {
        if (isChecked) {
            console.log("Switch 3 turned ON");
        } else {
            console.log("Switch 3 turned OFF");
        }
    };
    const switchHandlers = {
        switch1: handleSwitch1Functionality,
        switch2: handleSwitch2Functionality,
        switch3: handleSwitch3Functionality,
    };

    // Table Data
    const Language = [
        { name: "English" },
        { name: "French" },
        { name: "German" },
        { name: "Spanish" },
    ]
    const Language2 = [
        { name: "Reigon 1" },
        { name: "Reigon 2" },
        { name: "Reigon 3" },
        { name: "Reigon 4" },
    ]
    return (
        <>
            <div className="flex w-auto items-center p-2 bg-li-gray">
                <div className="flex items-center  w-514px  xs:w-auto sm:w-auto md:w-auto h-auto ml-10px ">
                    <div className="flex items-center flex-wrap gap-2">
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
                            text="Date & Privacy"
                            className="text-primary bg-li-gray text-14px font-semibold"
                        />
                    </div>
                </div>
            </div>
            {/* Main Section*/}
            <div className='grid grid-cols-3 p-2'>
                <div className='lg:col-span-2 sm:col-span-3 xs:col-span-3 grid grid-cols-3 '>
                    {/* Grid 1 */}
                    <div className=' col-span-3 '>
                        <div className='text-blue-button-color font-bold text-20px'>
                            GENERAL SETTINGS
                        </div>
                    </div>
                    <div className='col-span-3 grid grid-cols-2 items-center gap-2 pt-2'>
                        <div className='col-span-1'>
                            <div className='lg:text-[16px] flex items-center  font-semibold text-blue-button-color sm:text-13px xs:text-13px'>
                                <IoInformationCircle />    Person's Name Format
                            </div>
                        </div>
                        <div className='col-span-1'>
                            <CustomDropdown
                                options={DropDownData}
                                className="lg:text-16px sm:text-13px xs:text-13px w-full text-gray bg-white  border-gray"
                            />
                        </div>
                        <div className='col-span-2 items-center grid grid-cols-4'>
                            <div className='col-span-3 lg:text-[16px] flex items-center  font-semibold text-blue-button-color sm:text-[13px] xs:text-[13px]'>
                                <IoInformationCircle />    People Join Team On Login Page
                            </div>
                            <div className='col-span-1' >
                                <div className='flex justify-end'>
                                    <CustomSwitchComponent
                                        switchId="switch1"
                                        checked={switchStates.switch1}
                                        handleChange={handleSwitchChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='col-span-2 items-center grid grid-cols-4'>
                            <div className='col-span-3 lg:text-[16px] flex items-center  font-semibold text-blue-button-color sm:text-[13px] xs:text-[13px]'>
                                <IoInformationCircle />       Show Supervisor Contacts To Staff
                            </div>
                            <div className='col-span-1' >
                                <div className='flex justify-end'>
                                    <CustomSwitchComponent
                                        switchId="switch3"
                                        checked={switchStates.switch3}
                                        handleChange={handleSwitchChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='col-span-1 items-center'>
                            <div className='lg:text-[16px] font-semibold flex items-center  text-blue-button-color sm:text-13px xs:text-13px'>
                                <IoInformationCircle />  Person's Name Format
                            </div>
                        </div>
                    </div>
                    {/* grid 3 */}
                    <div className='col-span-3 grid grid-cols-2 mt-4 gap-2'>
                        <div className='lg:col-span-1 grid grid-cols-2 xs:col-span-2 sm:col-span-2'>
                            <div className='text-blue-button-color font-bold text-20px col-span-2'>
                                LANGUAGE SELECTION
                            </div>
                            <div className='col-span-2 bg-blue-button-color rounded-md text-white p-2 font-bold '>
                                Name
                            </div>
                            <div className='col-span-2'>
                                {Language.map((data) => {
                                    return (
                                        <>
                                            <div className='flex justify-between items-center font-normal text-blue-button-color p-2'>
                                                <div>
                                                    {data.name}
                                                </div>
                                                <FaRegTrashAlt className='text-red-600' />
                                            </div>
                                            <CustomHr className="bg-gray" />
                                        </>
                                    )
                                })}
                            </div>

                            <CustomButton
                                text="Add Language"
                                className=" bg-primary text-white text-14px  font-semibold"
                            />
                        </div>
                        <div className='lg:col-span-1 grid grid-cols-2 xs:col-span-2 sm:col-span-2'>
                            <div className='text-blue-button-color font-bold text-20px col-span-2'>
                                REGIONS
                            </div>
                            <div className='col-span-2 bg-blue-button-color rounded-md text-white p-2 font-bold '>
                                Name
                            </div>
                            <div className='col-span-2'>
                                {Language2.map((data) => {
                                    return (
                                        <>
                                            <div className='flex justify-between items-center font-normal text-blue-button-color p-2'>
                                                <div>
                                                    {data.name}
                                                </div>
                                                <FaRegTrashAlt className='text-red-600' />
                                            </div>
                                            <CustomHr className="bg-gray" />
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GeneralPeopleSetting
