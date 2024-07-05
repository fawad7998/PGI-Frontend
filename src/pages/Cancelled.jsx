import React from "react";
import CustomInput from "../components/utils/dashboard/components/CustomInput";
import CustomDropdown from "../components/utils/dashboard/components/CustomDropdown";

function Cancelled() {
  const options = [
    { value: "", label: "All reasons" },
    { value: "reason1", label: "Reason 1" },
    { value: "reason2", label: "Reason 2" },
  ];

  const tableHeaders = [
    "Date cancelled",
    "Reason",
    "Shift time",
    "Absence",
    "Person's name",
    "Position/event",
    "Cancelled by",
  ];

  const tableData = [
    {
      dateCancelled: "2024-06-01",
      reason: "Sick",
      shiftTime: "08:00 - 16:00",
      absence: "John Doe",
      personName: "Jane Smith",
      positionEvent: "Nurse",
      cancelledBy: "Jane Smith",
    },
    {
      dateCancelled: "2024-06-02",
      reason: "Personal",
      shiftTime: "09:00 - 17:00",
      absence: "Alice Johnson",
      personName: "Bob Brown",
      positionEvent: "Teacher",
      cancelledBy: "Alice Johnson",
    },
  ];

  return (
    <div className="ml-156px  md:ml-100px">
      <div className="p-4 w-90%">
        <div className="flex justify-between mb-49px">
          <div className="flex">
            <h2 className="text-16px font-600 mb-4">Shifts</h2>
            <button className="h-35px w-160px text-white bg-blue-button-color ml-56px">
              Cancelled Shifts
            </button>
          </div>
          <div>
            <button className="w-108px h-35px text-white bg-blue-button-color">
              Add Pattern
            </button>
          </div>
        </div>
        <div className="flex ">
          <div className="text-[16px] font-semibold">Statistics</div>
          <div className="text-[16px] font-normal  ml-300px">
            Cancelled Shifts
          </div>
        </div>
        <hr className="border-t-1 my-4 mb-37px"></hr>
        <div className=" mb-4">
          <CustomDropdown options={options} className=" w-277px md:w-177px" />
          <CustomDropdown options={options} className="w-182px ml-15px" />
          <CustomInput type="date" className="pl- ml-15px" />
          <CustomInput type="date" className="ml-15px" />
          <CustomInput placeholder="" className="w-277px md:w-177px ml-15px" />
          <CustomInput placeholder="" className="w-277px md:w-177px ml-15px" />

          <CustomDropdown
            options={options}
            className="w-277px md:w-166px ml-15px"
          />
        </div>
        <div className="">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                {tableHeaders.map((header, index) => (
                  <th key={index} className="py-2 text-left px-4 border-b">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{item.dateCancelled}</td>
                  <td className="py-2 px-4 border-b">{item.reason}</td>
                  <td className="py-2 px-4 border-b">{item.shiftTime}</td>
                  <td className="py-2 px-4 border-b">{item.absence}</td>
                  <td className="py-2 px-4 border-b">{item.personName}</td>
                  <td className="py-2 px-4 border-b">{item.positionEvent}</td>
                  <td className="py-2 px-4 border-b">{item.cancelledBy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Cancelled;
