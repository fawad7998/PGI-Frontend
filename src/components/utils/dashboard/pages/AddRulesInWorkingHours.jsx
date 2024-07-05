import React, { useState } from 'react';
import CustomDropdown from '../components/CustomDropdown';
import CustomIconText from '../components/CustomIconText';
import CustomInput from '../components/CustomInput';
import CustomSwitchComponent from "../components/CustomSwitchComponent";
import CustomButton from '../components/CustomButton';
import CheckBoxButton from '../components/CheckBoxButton';

function AddRulesInWorkingHours() {
    const [open, setOpen] = useState(false);
    const option = [
        { value: "Select from template", label: "Select from template" },
    ];
    const checkBoxData = [
        { name: "Contractor", id: 1 },
        { name: "Employee", id: 2 },
        { name: "Standard", id: 3 },
        { name: "Temporary Staff", id: 4 },
        { name: "Type 1", id: 5 }
    ];
    const optionsForDistanceUnit2 = [
        { value: "mili meter", label: "mili meter" },
        { value: "meter", label: "meter" },
    ];
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
    const initialSwitchStates = {
        switch1: false,
        switch2: false,
        switch3: true,
    };
    const [switchStates, setSwitchStates] = useState(initialSwitchStates);
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
    const [checkboxStates, setCheckboxStates] = useState(
        checkBoxData.reduce((acc, item) => {
            acc[item.name] = false;
            return acc;
        }, {})
    );
    const handleCheckChange = (label) => (isChecked) => {
        setCheckboxStates((prevState) => ({
            ...prevState,
            [label]: isChecked,
        }));
        console.log(`${label} is checked:`, isChecked);
    };
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
            <div className=' h-auto p-2 '>
                <div className=' border border-gray '>
                    <div className='grid grid-cols-3 items-center p-2 bg-[#F2F2F2]'>
                        <p className='lg:col-span-1 xs:col-span-3 sm:col-span-3 md:col-span-1 lg:text-[16px] xs:text-[12px] text-[#013966] font-semibold sm:text-[12px]'>New maximum working hours rule</p>
                        <CustomDropdown
                            options={option}
                            className="lg:col-span-1 xs:col-span-3 sm:col-span-3 md:col-span-1 w-200px lg:text-[16px] xs:text-[12px] sm:text-[12px] border rounded-sm text-black "
                        />
                    </div>
                    <div className='grid grid-cols-2 '>
                        <div className='lg:col-span-1 xs:col-span-2 sm:col-span-2 p-2 '>
                            <div className="grid  xs:grid-cols-1 md:grid-cols-3 mt-3 md:gap-4 ">
                                <div>
                                    <CustomIconText
                                        text="Name *"
                                    />
                                </div>
                                <div className="md:col-span-2 lg:col-span-2">
                                    <CustomInput className="w-full bg-[#F2F2F2] border-none " />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-3 md:mt-16px ">
                                <div>
                                    <CustomIconText
                                        text="Max Hour *"
                                    />
                                </div>
                                <div className="md:col-span-2 grid md:grid-cols-5 ">
                                    <div className=" md:ms-1 md:col-span-2 w-full flex items-center justify-center text-[#B5B5B5] bg-[#F2F2F2] border-none">
                                        <CustomInput className="w-full bg-[#F2F2F2] text-black border-none " />
                                    </div>
                                    <p className="text-gray flex justify-center items-center w-full">
                                        per
                                    </p>
                                    <CustomDropdown
                                        options={optionsForDistanceUnit2}
                                        className="md:col-span-2 w-full bg-[#F2F2F2] border-none"
                                    />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-3 md:mt-16px ">
                                <div>
                                    <CustomIconText
                                        text="Max Hour *"
                                    />
                                </div>
                                <div className="md:col-span-2 grid md:grid-cols-5 ">
                                    <div className=" md:ms-1 md:col-span-2 w-full flex items-center justify-center text-[#B5B5B5] bg-[#F2F2F2] border-none">
                                        <CustomInput className="w-full bg-[#F2F2F2] text-black border-none " />
                                    </div>
                                    <p className="text-gray flex justify-center items-center w-full">
                                        to
                                    </p>
                                    <div className=" md:ms-1 md:col-span-2 w-full flex items-center justify-center text-[#B5B5B5] bg-[#F2F2F2] border-none">
                                        <CustomInput className="w-full bg-[#F2F2F2] text-black border-none " />
                                    </div>
                                </div>
                            </div>
                            <div className="grid g xs:grid-cols-1 md:grid-cols-3 mt-3 md:gap-4 ">
                                <div>
                                    <CustomIconText
                                        text="Opt out allowed"
                                    />
                                </div>
                                <div className="md:col-span-2 lg:col-span-2 ">
                                    <div className='flex'>
                                        <CustomSwitchComponent
                                            switchId="switch1"
                                            checked={switchStates.switch1}
                                            handleChange={handleSwitchChange}
                                        />
                                        <CustomIconText
                                            text="people can opt out on their own?"
                                            className="lg:text-[16px] xs:text-[12px] sm:text-[12px]"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="grid g xs:grid-cols-1 md:grid-cols-3 mt-3 md:gap-4 ">
                                <div>
                                    <CustomIconText
                                        text="Active"
                                    />
                                </div>
                                <div className="md:col-span-2 lg:col-span-2 ">
                                    <CustomSwitchComponent
                                        switchId="switch2"
                                        checked={switchStates.switch2}
                                        handleChange={handleSwitchChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='lg:col-span-1 xs:col-span-2 sm:col-span-2 p-2 '>
                            <div className=''>
                                <div className='bg-[#F2F2F2] text-[#B5B5B5] p-2 border-none rounded:sm h-[300px] '>
                                    Description
                                </div>
                                <div>
                                    <CustomIconText
                                        text="*  description above will be visible to employees"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='p-2'>
                        <p className='lg:col-span-1 xs:col-span-3 sm:col-span-3 md:col-span-1 lg:text-[16px] xs:text-[12px] text-[#013966] font-semibold sm:text-[12px]'>EMPLOYMENT TYPES TO APPLY</p>
                        <div className='flex gap-3 flex-wrap'>
                            {checkBoxData.map((item) => {
                                return (
                                    <CheckBoxButton
                                        key={item.id}
                                        label={item.name}
                                        onCheckChange={handleCheckChange(item.name)}
                                        className="bg-gray text-white"
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className='p-2 flex justify-between'>
                        <CustomButton text="Save" className="bg-green-500 text-white" />
                        <CustomButton text="Cancel" className="bg-slate-200 font-bold text-blue-500" />
                    </div>
                </div>
            </div>
        </>
    );
}
export default AddRulesInWorkingHours;
