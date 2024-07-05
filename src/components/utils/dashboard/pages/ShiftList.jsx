import React from "react";
import { FaAngleDown } from "react-icons/fa";
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

function ShiftList() {
  return (
    <div className="p-4">
      <div className="flex justify-between">
        <div>
          <div>
            <text className="text-16px font-400px ml-12px">CURRENT WEEK</text>
            <text className="text-14px font-300px ml-12px"> FROM</text>
            <text className="text-16px font-400px ml-12px">03/06/2024</text>
            <text className="text-14px font-300px ml-12px">TO</text>
            <text className="text-16px font-400px ml-12px">03/06/2024</text>
          </div>
        </div>
        <div>
          <div className="flex space-x-2 ">
            <div className="relative inline-block text-left">
              <button className="inline-flex items-center px-4 py-2 bg-blue-500 text-white font-medium text-sm rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Export
                <FaAngleDown className="ml-2 -mr-1 h-5 w-5 text-white" />
              </button>
            </div>
            <button className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 font-medium text-sm rounded-md shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">
              <div className="flex items-center space-x-2">
                <span>|||</span>{" "}
                {/* This is a simple way to show the columns icon */}
                <span>Columns</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-10px mb-16px">
        <div className="ml-40px">
          <div className="text-12px font-400px">Shift</div>
          <div className="text-20px font-400px">219</div>
        </div>
        <div className="ml-40px">
          <div className="text-12px font-400px">Confirm</div>
          <div className="text-20px font-400px">219</div>
        </div>
        <div className="ml-40px">
          <div className="text-12px font-400px">Request</div>
          <div className="text-20px font-400px">219</div>
        </div>
        <div className="ml-40px">
          <div className="text-12px font-400px">Application </div>
          <div className="text-20px font-400px">219</div>
        </div>
        <div className="ml-40px mr-10px">
          <div className="text-12px font-400px">Open</div>
          <div className="text-20px font-400px">219</div>
        </div>
      </div>
      <div className="overflow-x-auto bg-white">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="px-6 py-2 text-xs text-gray-500">
                <input type="checkbox" />
              </th>
              <th className="px-6 py-2 text-xs text-gray-500">Date</th>
              <th className="px-6 py-2 text-xs text-gray-500">Time</th>
              <th className="px-6 py-2 text-xs text-gray-500">Hours</th>
              <th className="px-6 py-2 text-xs text-gray-500">Break</th>
              <th className="px-6 py-2 text-xs text-gray-500">Person</th>
              <th className="px-6 py-2 text-xs text-gray-500">Contact</th>
              <th className="px-6 py-2 text-xs text-gray-500">Position</th>
              <th className="px-6 py-2 text-xs text-gray-500">Client</th>
              <th className="px-6 py-2 text-xs text-gray-500">Location</th>
              <th className="px-6 py-2 text-xs text-gray-500">Event</th>
              <th className="px-6 py-2 text-xs text-gray-500">Pay</th>
              <th className="px-6 py-2 text-xs text-gray-500">Total Pay</th>
              <th className="px-6 py-2 text-xs text-gray-500">Charges</th>
              <th className="px-6 py-2 text-xs text-gray-500">Total Charges</th>
              <th className="px-6 py-2 text-xs text-gray-500"> Expenses</th>
              <th className="px-6 py-2 text-xs text-gray-500"> Pattern</th>
              <th className="px-6 py-2 text-xs text-gray-500"> Rout</th>
              <th className="px-6 py-2 text-xs text-gray-500"> Tag</th>
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
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.client}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.location}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.event}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.event}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.event}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.event}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.event}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.event}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.event}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.event}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.event}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShiftList;
