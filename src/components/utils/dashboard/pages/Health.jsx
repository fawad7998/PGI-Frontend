import React, { useState } from "react";
import CustomTable from "../components/CustomTable";
import CustomButton from "../components/CustomButton";
import { FaRegTrashAlt } from "react-icons/fa";


function Health() {
    const handelAddPosition = () => {
        console.log("Add Health");
    };

    const tableHeaders = [
        { text: "NAME", className: "w-[35%] " },
        { text: "", className: "w-[5%] " },
    ];

    const tableData = [
        {
            NAME: "John Doe",
            ACTION: (
                <FaRegTrashAlt
                    className="text-cancel cursor-pointer text-right"
                    onClick={handelAddPosition}
                />
            ),
        },
        {
            NAME: "John Doe",
            ACTION: (
                <FaRegTrashAlt
                    className="text-cancel cursor-pointer text-right"
                    onClick={handelAddPosition}
                />
            ),
        },
        {
            NAME: "John Doe",
            ACTION: (
                <FaRegTrashAlt
                    className="text-cancel cursor-pointer text-right"
                    onClick={handelAddPosition}
                />
            ),
        },
        {
            NAME: "John Doe",
            ACTION: (
                <FaRegTrashAlt
                    className="text-cancel cursor-pointer text-right"
                    onClick={handelAddPosition}
                />
            ),
        },
        {
            NAME: "John Doe",
            ACTION: (
                <FaRegTrashAlt
                    className="text-cancel cursor-pointer text-right"
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
            <div className="flex flex-col md:pt-35px lg:pt=35px lg:pl-35px md:pl-35px lg:w-750px xs:px-15px sm:px-15px sm:w-auto xs:w-auto md:w-750px ">
                <div className="flex mb-21px">
                    <p className="text-blue-button-color font-medium text text-18px">
                        HEALTH CONDITIONS
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
                        text="Add Health Conditions"
                        className="text-white bg-success h-34px text-14px font-semibold"
                    />
                </div>
            </div>
        </>
    );
}

export default Health;
