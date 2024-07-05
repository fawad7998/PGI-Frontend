import React from "react";
import { Bar } from "react-chartjs-2";
import { MdOutlineDeleteForever } from "react-icons/md";
import { RiImageCircleLine } from "react-icons/ri";

function LocationClient() {
  return (
    <>
      <div className="secondaryNavbar   p-2   h-58px ">
        {" "}
        <ul className="list-none   ">
          <li className="pl-200px">
            {" "}
            <button className="bg-primary text-white p-2 rounded-md flex   float-left  ">
              Clients
            </button>
            <input
              type="text"
              className="flex-initial   ml-10px pl-20px mt-10px    float-left mr-40 pr-40 "
              placeholder="Feedback"
            />
            <div className="lastThreeButtons float-right flex mr-10 pr-8">
              <button className="bg-secondary text-white p-2 rounded-md     mr-2 ">
                Import
              </button>
              <button className="bg-secondary text-white p-2 rounded-md    mr-2 ">
                Add client
              </button>
              <button className="bg-secondary text-white p-2 rounded-md    mr-2 ">
                Actions
              </button>
            </div>
          </li>
        </ul>
      </div>
      <hr class="border-t-2 border-gray" />
      {/* 
      
      
      
      
      
      */}
      {/* This is code for the three input boxes which contain search-name-or-id          and          search contact             and                     search origin  */}
      <form className="searchBox flex justify-between items-center pl-250px pr-250px pt-50px">
        <input
          type="text"
          className="nameSearch   pr-100px pl-10px border border-gray-50 "
          placeholder="Search name or id..."
        />
        <input
          type="text"
          className="contactSearch  pr-100px pl-10px border border-gray-50 "
          placeholder="Search contacts.."
        />
        <input
          type="text"
          className="regionSearch  pr-100px pl-10px border border-gray-50 "
          placeholder="Search region.."
        />
      </form>
      {/* 
      
      
      */}
      {/* This is code for Header that contain headings of Client Name Contacts  and city/town */}
      <table className="min-w-full mt-35px">
        <tr className="flex justify-around">
          <th className="text-base font-normal">CLIENT NAME</th>
          <th className="text-base font-normal">CONTACTS</th>
          <th className="text-base font-normal">CITY/TOWN</th>
          <th></th>
        </tr>
        <hr class="border-light-gray" />
        <div className="pt-5"></div>
        <tbody>
          <tr className="flex justify-around">
            <td className="flex">
              <RiImageCircleLine className="text-3xl" /> Ahmed
            </td>

            <td>
              <p>03XX-XXXXXXX</p>
            </td>
            <td>
              <p>DEVON</p>
            </td>
            <td>
              <MdOutlineDeleteForever className="text-3xl" />
            </td>
          </tr>
        </tbody>
      </table>
          
    </>
  );
}

export default LocationClient;
