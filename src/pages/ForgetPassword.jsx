import React, { useState } from "react";
import Profile from "../image/Profile.png";

function ForgetPassword() {
  const [email, setEmail] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className=" h-100vh grid grid-cols-2">
      <div className=" flex justify-center flex-col items-center bg-white h-10000">
        <text className="text-24px mt-116px font-600">PGI Security System</text>
        <div className="mt-338px">
          <text className="text-24px mt-116px font-600">
            PGI Security System
          </text>
        </div>
        <div className="flex flex-col w-401px mt-107px">
          <text className="text-18px  font-500">Reset your password</text>
          <div className="text-gray w-full text-center items-center  ">
            <text className="text-14px font-500">
              But men are men,the best sometimes forget. -William Shakespeare
            </text>
          </div>
          <text className="text-12px  font-400 mt-16px mb-7px ">
            ENTER YOUR EMAIL ADDRESS
          </text>
          <input
            className="w-full h-45px border-2 rounded"
            placeholder="example@gamil.com"
            value={email}
            onChange={handleEmail}
            type="email"
          ></input>
          <button className="w-full mt-16px  bg-primary  h-10 text-white font-600">
            Send my reset Link
          </button>
          <div className="flex justify-between">
            <text className=" text-button-color text-12px mt-16px font-100 mb-435px">
              Need Help ?
            </text>
            <text className=" text-button-color text-12px mt-16px font-100 mb-435px">
              Need Help ?
            </text>
          </div>
        </div>
      </div>
      <div className="h-100vh flex justify-center items-center">
        <div className="w-390px text-center">
          <div className="flex items-center justify-center">
            <img
              className=" w-390px h-390px rounded-full object-cover"
              src={Profile}
              alt="Profile"
            />
          </div>

          <div>
            <text className=" font-bold text-black text-26px">
              Refer PGI and earn $150
            </text>
          </div>
          <div className="">
            <text className="font-bold text-gray text-18px ">
              Loving PGi? Refer friend and get a $150 gift card for each new
              subscription
            </text>
          </div>
          <div>
            <text className="font-bold text-12px text-button-color ">
              Learn More
            </text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
