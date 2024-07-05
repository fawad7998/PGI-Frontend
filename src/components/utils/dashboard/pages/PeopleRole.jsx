import React from "react";
import CustomButton from "../components/CustomButton";
import CustomDropdown from "../components/CustomDropdown";
import PeopleRoleDropdown from "../components/PeopleRoleDropdown";
import Profile from "../../../../image/Profile.png";

function PeopleRole() {
  const options = [
    { value: "", label: "Department" },
    { value: "reason1", label: "Reason 1" },
    { value: "reason2", label: "Reason 2" },
  ];

  return (
    <div>
      <div>
        <div className="h-72px flex items-center ml-100px">
          <CustomButton text="Employees" />
          <CustomButton text="Subcontractors" className="ml-25px" />
          <CustomButton text="Roles" className="ml-25px" />
          <CustomButton text="Invitations" className="ml-25px" />
        </div>
      </div>
      <div className="h-46px bg-light-sky-blue mb-31px"></div>
      <div>
        <div className=" bg-white pl-100px  w-[50%]  p-[36px] flex justify-between">
          <CustomDropdown options={options} className="w-full text-gray" />
          <CustomDropdown
            options={options}
            className="w-full ml-15px text-gray "
          />
          <CustomDropdown
            options={options}
            className="w-full ml-15px text-gray"
          />
        </div>
        <div className="pl-100px flex justify-between flex-wrap pr-100px">
          <div>
            <PeopleRoleDropdown title="LOCATION SUPERVISOR" options={options} />
          </div>
          <div>
            <PeopleRoleDropdown
              title="DEPARTMENT SUPERVISOR"
              options={options}
            />
          </div>
          <div>
            <PeopleRoleDropdown title="MANAGER" options={options} />
          </div>
          <div>
            <div>
              <PeopleRoleDropdown title="SUPERADMIN" options={options} />
            </div>
            <div className="flex item-center mt-20px">
              <div className="w-76px h-76px bg-light-sky-blue flex items-center justify-center">
                <img src={Profile} />
              </div>
              <div className="bg-light-gray w-full flex items-center">
                <text className="text-16px font-medium ml-20px">Bilal</text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PeopleRole;
