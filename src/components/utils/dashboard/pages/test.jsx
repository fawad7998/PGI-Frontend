import React from "react";
import { useState } from "react";

import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import CustomIconText from "../components/CustomIconText";
import { FaCircleInfo } from "react-icons/fa6";
import CustomDropdown from "../components/CustomDropdown";
import { IoMdCloudUpload } from "react-icons/io";
import { IoCopyOutline } from "react-icons/io5";

const Test = () => {
    const optionsForDateFormat = [
        { value: "dd/mm/yyyy", label: "dd/mm/yyyy" },
        { value: "mm/dd/yyyy", label: "mm/dd/yyyy" },
        { value: "yyyy/mm/dd", label: "yyyy/mm/dd" },
    ];

    const optionsForTimeFormat = [
        { value: "24 Hours", label: "24 Hours" },
        { value: "24 Hours", label: "24 Hours" },
    ];

    const optionsForDistanceUnit1 = [
        {
            value: "km",
            label: "km",
        },
        {
            value: "miles",
            label: "miles",
        },
    ];
    const optionsForDistanceUnit2 = [
        {
            value: "mili meter",
            label: "mili meter",
        },
        {
            value: "meter",
            label: "meter",
        },
    ];
    const optionsForCountry = [
        { value: "Pakistan", label: "PAKISTAN" },
        { value: "INDIA", label: "INDIA" },
        { value: "UK", label: "UK" },
    ];
    const optionsForTimeZone = [
        { value: "+001", label: "(GMT+01:00) Europe - London" },
        { value: "+005", label: "(GMT+05:00) ISLAMABAD- PAKISTAN" },
    ];

    const optionsForCurrency = [
        { value: "UK Pound (GBP)", label: "UK Pound (GBP)" },
    ];
    const optionsForLanguage = [
        { value: "Urdu", label: "Value" },
        { value: "English", label: "English" },
    ];

    const [preview, setPreview] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <>
            {/* Secondary Navbar */}


            {/* Main div */}
            <div className="bg-white xl:w-900px  p-30px ">
                {/* Add logo file */}

                {/* First Group of inputs */}
                <div className="grid xs:grid-cols-1 md:grid-cols-3 grid-rows-9 mt-3   md:gap-4 ">
                    <div>
                        <CustomIconText
                            icon={<FaCircleInfo className="text-blue-500" />}
                            text="Company Name"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <CustomInput className="w-full" />{" "}
                    </div>
                    <div>
                        <CustomIconText
                            icon={<FaCircleInfo className="text-blue-500" />}
                            text="Company Address"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <CustomInput className="w-full" />{" "}
                    </div>
                    <div>
                        <CustomIconText
                            icon={<FaCircleInfo className="text-blue-500" />}
                            text="Company Phone"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <CustomInput className="w-full" />{" "}
                    </div>
                    <div>
                        <CustomIconText
                            icon={<FaCircleInfo className="text-blue-500" />}
                            text="Company Mobile Phone"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <CustomInput className="w-full" />{" "}
                    </div>
                    <div>
                        <CustomIconText
                            icon={<FaCircleInfo className="text-blue-500" />}
                            text="Operations Phone"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <CustomInput className="w-full" />{" "}
                    </div>
                    <div>
                        <CustomIconText
                            icon={<FaCircleInfo className="text-blue-500" />}
                            text="Company Email"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <CustomInput className="w-full" />{" "}
                    </div>
                    <div>
                        <CustomIconText
                            icon={<FaCircleInfo className="text-blue-500" />}
                            text="Operations Email"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <CustomInput className="w-full" />{" "}
                    </div>
                    <div>
                        <CustomIconText
                            icon={<FaCircleInfo className="text-blue-500" />}
                            text="Company Office Hours"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <CustomInput className="w-full" />{" "}
                    </div>
                </div>
                {/* Second Group of inputs */}
                <div className="grid  md:grid-cols-3 md:gap-4 md:mt-16px">
                    <div>
                        <CustomIconText
                            icon={<FaCircleInfo className="text-blue-500" />}
                            text="Date Format"
                        />
                    </div>
                    <div>
                        <CustomDropdown options={optionsForDateFormat} className="w-full" />
                    </div>
                    <div className="xs:hidden md:inline"></div>
                    <div>
                        <CustomIconText
                            icon={<FaCircleInfo className="text-blue-500" />}
                            text="Time Format"
                        />
                    </div>
                    <div>
                        <CustomDropdown options={optionsForTimeFormat} className="w-full" />
                    </div>
                    <div className="xs:hidden md:inline"></div>
                </div>
                {/* Km and meters */}
                <div className="grid md:grid-cols-3   md:mt-16px ">
                    <div>
                        {" "}
                        <CustomIconText
                            icon={<FaCircleInfo className="text-blue-500" />}
                            text="Distance Units"
                        />
                    </div>

                    <div className="md:col-span-2 grid md:grid-cols-5 ">
                        <CustomDropdown
                            options={optionsForDistanceUnit1}
                            className=" md:ms-1 md:col-span-2 w-full"
                        />
                        <p className="text-gray flex justify-center items-center w-full">
                            &
                        </p>
                        <CustomDropdown
                            options={optionsForDistanceUnit2}
                            className="md:col-span-2 w-full"
                        />
                    </div>
                </div>
                {/* Country of operation and time zone */}
                <div className="grid md:grid-cols-3 md:gap-4 md:mt-16px ">
                    {/*country */}
                    <div>
                        {" "}
                        <CustomIconText
                            icon={<FaCircleInfo className="text-blue-500" />}
                            text="Country Of Operations"
                        />
                    </div>
                    <div>
                        <CustomDropdown options={optionsForCountry} className="w-full" />
                    </div>
                    <div className="xs:hidden md:inline"></div>
                    {/* timezone*/}
                    <div>
                        {" "}
                        <CustomIconText
                            icon={<FaCircleInfo className="text-blue-500" />}
                            text="Time Zone"
                        />
                    </div>
                    <div>
                        <CustomDropdown options={optionsForTimeZone} className="w-full" />
                    </div>
                    <div className="xs:hidden md:inline"></div>
                </div>
                {/* Currenxy and language */}
                <div className="grid md:grid-cols-3 md:gap-4 md:mt-16px ">
                    {/* currenxy */}
                    <div>
                        {" "}
                        <CustomIconText
                            icon={<FaCircleInfo className="text-blue-500" />}
                            text="Currency"
                        />
                    </div>
                    <div>
                        <CustomDropdown options={optionsForCurrency} className="w-full" />
                    </div>
                    <div className="xs:hidden md:inline"></div>
                    {/* language */}
                    <div>
                        {" "}
                        <CustomIconText
                            icon={<FaCircleInfo className="text-blue-500" />}
                            text="Language"
                        />
                    </div>
                    <div>
                        <CustomDropdown options={optionsForLanguage} className="w-full" />
                    </div>
                    <div className="xs:hidden md:inline"></div>
                </div>
            </div>
        </>
    );
};

export default Test;

