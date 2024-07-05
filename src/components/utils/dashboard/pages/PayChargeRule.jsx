import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import Dropdown from "../components/ToggleDropdown";
import CustomDropdown, {
  CustomLabelDropdown,
} from "../components/CustomDropdown";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { CiSearch } from "react-icons/ci";
function PayChargeRule() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Positions");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const options = [
    { value: "", label: "Department" },
    { value: "reason1", label: "Reason 1" },
    { value: "reason2", label: "Reason 2" },
  ];

  const data = [
    {
      date: "Mon,03.Jun",
      time: "06:00 - 15:00",
      hours: 9.0,
      break: "0.0h",
      person: "Akmal Hussain",
      contact: "+44 7488853551",
      position: "Security officer",
      client: "TEAM H",
      location: "GXO Bathgate",
      event: "event",
      Pay: "dummy",
      TotalPay: "dummy",
      Charges: "dummy",
      TotalCharges: "dummy",
      Expenses: "dummy",
      Pattern: "dummy",
      Rout: "dummy",
      Tag: "dummy",
    },
  ];
  return (
    <div className="p-4">
      <div className="flex justify-between xs:flex-wrap lg:flex-nowrap">
        <div>
          <CustomInput
            type="text"
            placeholder="Search"
            className="pl-30px  rounded-lg"
            icon={<CiSearch className="text-gray-400" />}
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
        <div className="flex w-full flex-wrap justify-end">
          <div className="flex">
            <div className="flex">
              <CustomButton
                className="h-45px p-20px  bg-blue-button-color "
                text="Create pay role"
              />
            </div>
            <div className=" ml-5px mt-0 pt-0">
              <Dropdown className="w-37px  h-45px bg-blue-button-color" />
            </div>
          </div>
          <div className="flex ml-20px">
            <div className="flex">
              <CustomButton
                className="h-45px p-20px bg-primary"
                text="Export"
              />
            </div>
            <div className=" ml-5px mt-0 pt-0">
              <Dropdown className="w-37px  h-45px bg-primary" />
            </div>
            <button className="inline-flex border  h-45px border-gray ml-20px items-center px-4 py-2 bg-gray-100 text-gray-700 font-medium text-sm rounded-md shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">
              <div className="flex items-center space-x-2">
                <span>|||</span> <span>Columns</span>
              </div>
            </button>
            <CustomDropdown
              className="border-gray ml-20px text-gray w-80px h-45px"
              options={options}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-10px mb-16px">
        <div>
          <CustomLabelDropdown
            title="View"
            options={options}
            mainClassName="w-281px"
          />
        </div>
        <div className="flex justify-end">
          <div className="ml-40px">
            <div className="text-12px  text-gray font-400px">Position</div>
            <div className="text-20px text-gray font-400px">219</div>
          </div>
          <div className="ml-40px">
            <div className="text-12px text-gray font-400px">Charge rule</div>
            <div className="text-20px text-gray font-400px">219</div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto bg-white">
        <table className="min-w-full bg-white border border-gray">
          <thead>
            <tr>
              <th className="px-6 py-2 text-xs text-left text-gray-500">
                <input type="checkbox" />
              </th>
              <th className="px-6 py-2 text-xs text-left text-gray-500">
                Position
              </th>
              <th className="px-6 py-2 text-xs text-left text-gray-500">
                Applied to
              </th>
              <th className="px-6 py-2 text-xs text-left text-gray-500">
                Charge type
              </th>
              <th className="px-6 py-2 text-xs text-left text-gray-500">
                Charge rate
              </th>
              <th className="px-6 py-2 text-xs text-left text-gray-500">
                From
              </th>
              <th className="px-6 py-2 text-xs text-left text-gray-500">To</th>
              <th className="px-6 py-2 text-xs text-left text-gray-500">
                Age Ra
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-200">
            {data.map((item, index) => (
              <tr key={index} className="whitespace-nowrap">
                <td className="px-6 py-4 text-sm text-gray-500">
                  <input type="checkbox" />
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{item.date}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{item.time}</td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.hours}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.break}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.person}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.contact}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.position}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PayChargeRule;
