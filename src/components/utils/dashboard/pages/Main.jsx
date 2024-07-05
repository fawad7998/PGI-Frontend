import React from "react";
import Arrow from "../../../../image/Arrow.svg";
import BarChart from "../../BarChart";
import Profile from "../../../../image/Profile.png";
import Birthday from "../../../../image/Birthday.svg";
import Upcomming from "../../../../image/Upcomming.svg";
// import

const Main = () => {
  const shifts = [
    {
      time: "06:30-18:00",
      location: "GXO Castore Knowsley Liverpool",
      person: "Muhammad Usama Khan FULL TIME",
      role: "Security Officer",
      inTime: "08:30",
      breakTime: "-",
      outTime: "LATE",
    },
    {
      time: "06:30-18:00",
      location: "GXO Castore Knowsley Liverpool",
      person: "Muhammad Usama Khan FULL TIME",
      role: "Security Officer",
      inTime: "08:30",
      breakTime: "-",
      outTime: "LATE",
    },
    {
      time: "06:30-18:00",
      location: "GXO Castore Knowsley Liverpool",
      person: "Muhammad Usama Khan FULL TIME",
      role: "Security Officer",
      inTime: "08:30",
      breakTime: "-",
      outTime: "LATE",
    },
    {
      time: "06:30-18:00",
      location: "GXO Castore Knowsley Liverpool",
      person: "Muhammad Usama Khan FULL TIME",
      role: "Security Officer",
      inTime: "08:30",
      breakTime: "-",
      outTime: "LATE",
    },
    {
      time: "06:30-18:00",
      location: "GXO Castore Knowsley Liverpool",
      person: "Muhammad Usama Khan FULL TIME",
      role: "Security Officer",
      inTime: "08:30",
      breakTime: "-",
      outTime: "LATE",
    },
    {
      time: "06:30-18:00",
      location: "GXO Castore Knowsley Liverpool",
      person: "Muhammad Usama Khan FULL TIME",
      role: "Security Officer",
      inTime: "08:30",
      breakTime: "-",
      outTime: "LATE",
    },
    // Add more shift objects as needed
  ];
  const action = [
    {
      person: "06:30-18:0weieofhwiugfweiug0",
      name: "Bill Cower ",
      hours: "2 hours ago",
      location: "M Hamza Khan Glasgow shift as Secur",
      role: "Security Officer",
      startDate: "10/05/2024",
      startTime: "06:00",
      endDate: "10/05/2024",
      endTime: "06:00",
    },
    {
      person: "06:30-18:0weieofhwiugfweiug0",
      name: "Bill Cower ",
      hours: "2 hours ago",
      location: "M Hamza Khan Glasgow shift as Secur",
      role: "Security Officer",
      startDate: "10/05/2024",
      startTime: "06:00",
      endDate: "10/05/2024",
      endTime: "06:00",
    },
    {
      person: "06:30-18:0weieofhwiugfweiug0",
      name: "Bill Cower ",
      hours: "2 hours ago",
      location: "M Hamza Khan Glasgow shift as Secur",
      role: "Security Officer",
      startDate: "10/05/2024",
      startTime: "06:00",
      endDate: "10/05/2024",
      endTime: "06:00",
    },
    {
      person: "06:30-18:0weieofhwiugfweiug0",
      name: "Bill Cower ",
      hours: "2 hours ago",
      location: "M Hamza Khan Glasgow shift as Secur",
      role: "Security Officer",
      startDate: "10/05/2024",
      startTime: "06:00",
      endDate: "10/05/2024",
      endTime: "06:00",
    },
    {
      person: "06:30-18:0weieofhwiugfweiug0",
      name: "Bill Cower ",
      hours: "2 hours ago",
      location: "M Hamza Khan Glasgow shift as Secur",
      role: "Security Officer",
      startDate: "10/05/2024",
      startTime: "06:00",
      endDate: "10/05/2024",
      endTime: "06:00",
    },
    {
      person: "06:30-18:0weieofhwiugfweiug0",
      name: "Bill Cower ",
      hours: "2 hours ago",
      location: "M Hamza Khan Glasgow shift as Secur",
      role: "Security Officer",
      startDate: "10/05/2024",
      startTime: "06:00",
      endDate: "10/05/2024",
      endTime: "06:00",
    },
    {
      person: "06:30-18:0weieofhwiugfweiug0",
      name: "Bill Cower ",
      hours: "2 hours ago",
      location: "M Hamza Khan Glasgow shift as Secur",
      role: "Security Officer",
      startDate: "10/05/2024",
      startTime: "06:00",
      endDate: "10/05/2024",
      endTime: "06:00",
    },
    {
      person: "06:30-18:0weieofhwiugfweiug0",
      name: "Bill Cower ",
      hours: "2 hours ago",
      location: "M Hamza Khan Glasgow shift as Secur",
      role: "Security Officer",
      startDate: "10/05/2024",
      startTime: "06:00",
      endDate: "10/05/2024",
      endTime: "06:00",
    },
    {
      person: "06:30-18:0weieofhwiugfweiug0",
      name: "Bill Cower ",
      hours: "2 hours ago",
      location: "M Hamza Khan Glasgow shift as Secur",
      role: "Security Officer",
      startDate: "10/05/2024",
      startTime: "06:00",
      endDate: "10/05/2024",
      endTime: "06:00",
    },
    {
      person: "06:30-18:0weieofhwiugfweiug0",
      name: "Bill Cower ",
      hours: "2 hours ago",
      location: "M Hamza Khan Glasgow shift as Secur",
      role: "Security Officer",
      startDate: "10/05/2024",
      startTime: "06:00",
      endDate: "10/05/2024",
      endTime: "06:00",
    },
    {
      person: "06:30-18:0weieofhwiugfweiug0",
      name: "Bill Cower ",
      hours: "2 hours ago",
      location: "M Hamza Khan Glasgow shift as Secur",
      role: "Security Officer",
      startDate: "10/05/2024",
      startTime: "06:00",
      endDate: "10/05/2024",
      endTime: "06:00",
    },
    {
      person: "06:30-18:0weieofhwiugfweiug0",
      name: "Bill Cower ",
      hours: "2 hours ago",
      location: "M Hamza Khan Glasgow shift as Secur",
      role: "Security Officer",
      startDate: "10/05/2024",
      startTime: "06:00",
      endDate: "10/05/2024",
      endTime: "06:00",
    },
    {
      person: "06:30-18:0weieofhwiugfweiug0",
      name: "Bill Cower ",
      hours: "2 hours ago",
      location: "M Hamza Khan Glasgow shift as Secur",
      role: "Security Officer",
      startDate: "10/05/2024",
      startTime: "06:00",
      endDate: "10/05/2024",
      endTime: "06:00",
    },

    // Add more shift objects as needed
  ];

  const anniversaries = [
    {
      id: 1,
      name: "Bill Cower",
      date: "11/04/2023",
      years: 31,
      type: "birthday",
    },
    {
      id: 2,
      name: "New Booking",
      date: "11/04/2023",
      years: 28,
      type: "upcoming",
      daysLeft: 3,
    },
    {
      id: 3,
      name: "Tony Samson",
      date: "10/04/2023",
      years: 28,
      type: "upcoming",
      daysLeft: 12,
    },
    {
      id: 4,
      name: "Adalynn Marshall",
      date: "09/04/2023",
      years: 26,
      type: "upcoming",
      daysLeft: 22,
    },
    {
      id: 5,
      name: "Tony Samson",
      date: "10/04/2023",
      years: 22,
      type: "upcoming",
      daysLeft: 43,
    },
    {
      id: 5,
      name: "Tony Samson",
      date: "10/04/2023",
      years: 22,
      type: "upcoming",
      daysLeft: 43,
    },
    {
      id: 5,
      name: "Tony Samson",
      date: "10/04/2023",
      years: 22,
      type: "upcoming",
      daysLeft: 43,
    },
    {
      id: 5,
      name: "Tony Samson",
      date: "10/04/2023",
      years: 22,
      type: "upcoming",
      daysLeft: 43,
    },
    {
      id: 5,
      name: "Tony Samson",
      date: "10/04/2023",
      years: 22,
      type: "upcoming",
      daysLeft: 43,
    },
    {
      id: 5,
      name: "Tony Samson",
      date: "10/04/2023",
      years: 22,
      type: "upcoming",
      daysLeft: 43,
    },
  ];

  const upcomingBirthdays = [
    {
      name: "New Booking",
      date: "10/04/2023",
      age: "28 Years",
      imageUrl: "https://via.placeholder.com/150",
      buttonText: "IN 3 DAYS",
      buttonColor: "bg-blue-button-color",
    },
    {
      name: "Tony Samson",
      date: "10/04/2023",
      age: "28 Years",
      imageUrl: "https://via.placeholder.com/150",
      buttonText: "IN 12 DAYS",
      buttonColor: "bg-blue-button-color",
    },
    {
      name: "Adalynn Marshall",
      date: "10/04/2023",
      age: "26 Years",
      imageUrl: "https://via.placeholder.com/150",
      buttonText: "IN 22 DAYS",
      buttonColor: "bg-blue-button-color",
    },
    {
      name: "Tony Samson",
      date: "10/04/2023",
      age: "22 Years",
      imageUrl: "https://via.placeholder.com/150",
      buttonText: "IN 43 DAYS",
      buttonColor: "bg-blue-button-color",
    },
  ];

  const colors = ["red", "blue", "green"]; // You can add more colors if needed

  // Loop through the array and assign colors based on the pattern
  shifts.forEach((item, index) => {
    if ((index + 1) % 3 === 1 || (index + 1) % 3 === 3) {
      // First and third items in the pattern have no color
      item.color = null;
    } else {
      // Second item in the pattern has a color
      item.color = colors[index % colors.length];
    }
  });

  return (
    <div className="main-grid">
      <div className="card1">
        <div className=" p-6 h-465px flex flex-col">
          <div className="text-xl font-bold mb-20px mt-8px">
            Action Required
          </div>
          <div className="w-full p-4 h-[46px] bg-medium-sky-blue flex justify-between mb-27px">
            <div>2268</div>
            <div>Timesheets to Approve</div>
            <img src={Arrow} alt="Arrow" />
          </div>
          <div className="w-full p-4 h-[46px] bg-blue-button-color flex justify-between mb-27px">
            <div>2268</div>
            <div>Timesheets to Approve</div>
            <img src={Arrow} alt="Arrow" />
          </div>
          <div className="w-full p-4 h-[46px] bg-medium-sky-blue flex justify-between mb-27px">
            <div>2268</div>
            <div>Timesheets to Approve</div>
            <img src={Arrow} alt="Arrow" />
          </div>
          <div className="w-full p-4 h-[46px] bg-cancel flex justify-between mb-27px">
            <div>2268</div>
            <div>Timesheets to Approve</div>
            <img src={Arrow} alt="Arrow" />
          </div>
          <div className="w-full p-4 h-[46px] bg-medium-sky-blue flex justify-between ">
            <div>2268</div>
            <div>Timesheets to Approve</div>
            <img src={Arrow} alt="Arrow" />
          </div>
        </div>
      </div>
      <div className="card2">
        <BarChart />
      </div>
      <div className="card3 h-[453px] overflow-auto">
        <div className="container mx-auto p-4">
          <h2 className="text-xl font-bold mb-4 text-gray">TODAY'S SHIFTS</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">TIME</th>
                  <th className="py-2 px-4 border-b">PERSON</th>
                  <th className="py-2 px-4 border-b">IN</th>
                  <th className="py-2 px-4 border-b">BREAK</th>
                  <th className="py-2 px-4 border-b">OUT</th>
                </tr>
              </thead>
              <tbody>
                {shifts.map((shift, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 !== 0 ? "bg-[#F2F2F2]" : ""}`}
                  >
                    <td className="py-2 px-4 border-b">
                      {shift.time}
                      <br />
                      <span className="text-sm text-gray-500">
                        {shift.location}
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b">
                      <text href="#" className="text-blue-500 hover:underline">
                        {shift.person}
                      </text>
                      <br />
                      <span className="text-sm text-gray-500">
                        {shift.role}
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b">{shift.inTime}</td>
                    <td className="py-2 px-4 border-b">{shift.breakTime}</td>
                    <td className="py-2 px-4 border-b">
                      <span
                        className={`py-1 px-3 rounded-full ${
                          shift.outTime === "LATE"
                            ? "bg-red-500 text-white"
                            : "bg-green-500 text-white"
                        }`}
                      >
                        {shift.outTime}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="card4">
        <div className="p-4  bg-white h-453px overflow-auto">
          <div className="mb-4">
            <div>
              <span className="text-lg font-semibold ml-10px">
                Birthdays & work ananniversaries
              </span>
            </div>
            <div className="flex mt-20px  items-center">
              <div>
                <img src={Birthday} />
              </div>
              <div>
                <h2 className="text-sm text-blue-button-color font-semibold ml-10px">
                  Today's Birthdays
                </h2>
              </div>
            </div>
            {anniversaries
              .filter((item) => item.type === "birthday")
              .map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-2 border-b"
                >
                  <div className="flex items-center">
                    <img
                      src={`https://i.pravatar.cc/40?img=${item.id}`}
                      alt={item.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.date}</p>
                    </div>
                  </div>
                  <div>
                    <span className="text-red-500">{item.years} Years</span>
                    <button className="ml-4 px-2 py-1 bg-blue-button-color text-white rounded">
                      CONGRATULATE
                    </button>
                  </div>
                </div>
              ))}
          </div>

          <div>
            <div className="flex mt-20px  items-center">
              <div>
                <img src={Upcomming} />
              </div>
              <div>
                <h2 className="text-sm text-blue-button-color font-semibold ml-10px">
                  Upcoming birthdays & Aniniversaries
                </h2>
              </div>
            </div>
            {anniversaries
              .filter((item) => item.type === "upcoming")
              .map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between pt-2 pb-2 border-b"
                >
                  <div className="flex items-center">
                    <img
                      src={`https://i.pravatar.cc/40?img=${item.id}`}
                      alt={item.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.date}</p>
                    </div>
                  </div>
                  <div>
                    <span className="text-red-500">{item.years} Years</span>
                    <button className="ml-4 px-2 py-1 bg-blue-button-color text-white rounded">
                      IN {item.daysLeft} DAYS
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="card5  h-[453px] overflow-auto ">
        <div className="container mx-auto p-4">
          <h2 className="text-xl font-bold mb-4 text-gray">Latest Actions</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="">
                  <th className="py-2 px-4 border-b  text-left ">Person</th>
                  <th className="py-2 px-4 border-b  text-left ">Location</th>
                  <th className="py-2 px-4 border-b  text-left ">Start Time</th>
                  <th className="py-2 px-4 border-b  text-left ">End Time</th>
                  {/* <th className="py-2 px-4 border-b">OUT</th> */}
                </tr>
              </thead>
              <tbody>
                {action.map((shift, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 !== 0 ? "bg-[#F2F2F2]" : ""}`}
                  >
                    <td className="py-2 px-4 border-b">
                      {/* {shift.time}
                      <br /> */}
                      <div className="flex ">
                        <div>
                          <img src={Profile} />
                        </div>

                        <div className="flex flex-col ml-4">
                          <span className="text-sm text-gray-500">
                            {shift.name}
                          </span>
                          <span className="text-sm text-gray-500">
                            {shift.hours}
                          </span>
                        </div>
                      </div>
                      {/* <span className="text-sm text-gray-500">
                        {shift.location}
                      </span> */}
                    </td>
                    <td className="py-2 px-4 border-b">
                      <text
                        href="#"
                        className="text-blue-button-color-500 hover:underline"
                      >
                        {shift.person}
                      </text>
                      <br />
                      <span className="text-sm text-gray-500">
                        {shift.role}
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b">
                      <text className="text-blue-500 hover:underline">
                        {shift.startDate}
                      </text>
                      <br />
                      <span className="text-sm text-gray-500">
                        {shift.endTime}
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b">
                      <text className="text-blue-500 hover:underline">
                        {shift.endDate}
                      </text>
                      <br />
                      <span className="text-sm text-gray-500">
                        {shift.endTime}
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b">
                      {/* <span
                        className={`py-1 px-3 rounded-full ${
                          shift.outTime === "LATE"
                            ? "bg-red-500 text-white"
                            : "bg-green-500 text-white"
                        }`}
                      >
                        {shift.outTime}
                      </span> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
