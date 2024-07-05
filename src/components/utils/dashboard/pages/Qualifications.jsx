import React, { useState } from "react";
import CustomTable from "../components/CustomTable";
import { IoMdCheckmarkCircle } from "react-icons/io";

import { IoMdCloseCircle } from "react-icons/io";

import CustomButton from "../components/CustomButton";

function Qualifications() {
    const handelAddPosition = () => {
        console.log("Add Qualifications");
    };

    const tableHeaders = [
        { text: "COLOUR", className: "w-[5%] text-14px" },
        { text: "NAME", className: "w-[15%] " },
        { text: "PROVIDER", className: "w-[10%] " },
        { text: "PEOPLE CAN ADD & EDIT", className: "w-[5%] " },
        { text: "INDUSTRY  STANDARD", className: "w-[5%] " },
    ];

    const tableData = [
        {
            COLOUR: <div className="h-20px w-20px bg-cancel rounded-sm shadow-sm"></div>,
            NAME: "John Doe",
            PROVIDER: "",
            PEOPLE_CAN_ADD_EDIT: (
                <IoMdCheckmarkCircle
                    className="text-success text-2xl cursor-pointer text-right"
                    onClick={handelAddPosition}
                />
            ),
            INDUSTRY_STANDARD: (
                <IoMdCloseCircle
                    className="text-cancel text-2xl  cursor-pointer text-right"
                    onClick={handelAddPosition}
                />
            ),
        },
    ];

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
            <div className="flex flex-col md:pt-35px lg:pt=35px lg:pl-35px md:pl-35px lg:w-1017px xs:px-15px sm:px-15px sm:w-auto xs:w-auto md:w-1017px ">
                <div className="flex mb-21px">
                    <p className="text-blue-button-color font-medium text text-18px">
                        POSITIONS
                    </p>
                </div>
                <div className="">
                    <CustomTable
                        headers={tableHeaders}
                        data={tableData}
                        thClassName="text-primary font-semibold bg-blue-button-color text-white text-14px h-39px"
                        tdClassName="text-blue-button-color font-medium"
                        tableClassName="overflow-x-auto "
                    />
                </div>
                <div className="flex justify-start mt-28px ml-20px">
                    <CustomButton
                        text="Add Qualifications"
                        className="text-white bg-success h-34px text-14px font-semibold"
                    />
                </div>
            </div>
        </>
    );
}
export default Qualifications;