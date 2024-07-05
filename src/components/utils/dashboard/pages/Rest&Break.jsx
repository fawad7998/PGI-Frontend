import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import CustomTable from "../components/CustomTable";

function RestAndBreak() {
    const [switchState, setSwitchState] = useState({});
    const handleSwitchChange = (rowIndex) => {
        setSwitchState((prevState) => ({
            ...prevState,
            [rowIndex]: !prevState[rowIndex],
        }));
    };
    // TableHeader & TableData Array
    const tableHeaders = [
        { text: "Active", className: "w-[5%] text-14px" },
        { text: "Name", className: "w-[20%] " },
        { text: "Required Rest", className: "w-[10%] " },
        { text: "Period", className: "w-[10%] " },
        { text: "Age", className: "w-[10%] " },
        { text: "Employment Types", className: "w-[20%] " },
    ];
    const tableData = [
        {
            active: "",
            name: "Min 11 hrs consecutive rest required per 1 day for over 18",
            RequiredRest: "11 hours of consecutive rest",
            period: "1 day",
            age: "18+",
            employmentTypes: "",
        },
        {
            active: "",
            name: "Min 12 hrs consecutive rest per 1 day for under 18",
            RequiredRest: "12 hours of consecutive rest",
            period: "1 day",
            age: "<18",
            employmentTypes: "",
        },
        {
            active: "",
            name: "Min 20 min break for shift over 6 hrs for over 18",
            RequiredRest: "20 minutes break",
            period: "1 shift over 6.00 hours",
            age: "18+",
            employmentTypes: "",
        },
        {
            active: "",
            name: "Min 24 hrs consecutive rest per 1 week for over 18",
            RequiredRest: "24 hours of consecutive rest",
            period: "1 week",
            age: "18+",
            employmentTypes: "",
        },
        {
            active: "",
            name: "Min 30 min break required for shift over 4.5 hrs for under 18",
            RequiredRest: "30 minutes break",
            period: "1 shift over 4.50 hours",
            age: "<18",
            employmentTypes: "",
        },
    ];
    return (
        <div>
            <div className="flex w-auto items-center p-2 bg-li-gray">
                <div className="flex items-center w-514px xs:w-auto sm:w-auto md:w-auto h-auto ml-10px ">
                    <div className="flex items-center flex-wrap  gap-2">
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
            <div className="overflow-x-auto px-63px">
                <div className="flex justify-end my-34px">
                    <CustomButton
                        text="Add Rule"
                        className="text-white bg-[#2DCB91] h-34px text-14px font-semibold"
                    />
                </div>
                <CustomTable
                    headers={tableHeaders}
                    data={tableData}
                    thClassName="text-primary font-semibold border-l first:border-l-0"
                    tdClassName="text-blue-button-color font-medium border-l first:border-l-0 "
                    tableClassName="overflow-x-auto "
                    showSwitchButton={true}
                    switchState={switchState}
                    handleSwitchChange={handleSwitchChange}
                />
            </div>
        </div>
    );
}

export default RestAndBreak;
