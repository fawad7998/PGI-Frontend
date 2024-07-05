import React from "react";
import CustomButton from "../components/CustomButton";
import CustomDropdown from "../components/CustomDropdown";
import CustomInput from "../components/CustomInput";

function AddLocation() {
  const options = [
    { value: "", label: "Department" },
    { value: "reason1", label: "Reason 1" },
    { value: "reason2", label: "Reason 2" },
  ];
  return (
    <>
      <div className="body h-[100%] w-screen m-0 p-0  ">
        {/* This is our secondary navbar that is just below the main NAVBAR  */}
        <div
          className="secondaryNavbar
         w-screen  
          bg-white 
         flex  
         
         justify-between
         md:py-[2%] 
         xs:py-[5%]
         lg:py-4px 
         sm:py-20px "
        >
          {/* the word list */}
          <div className="flex p-1 justify-evenly">
            <p className="  text-lg ml-20px">List</p>
            <p className="lg:ml-10 md:ml-10 sm:ml-5 ml-5  text-lg">Location</p>
          </div>
          <div className="btn flex justify-end">
            {" "}
            <CustomButton
              text={"Add location"}
              className=" mr-20px mt-1 right-4    text-small "
            />
          </div>
        </div>
        {/* the code after Nav BAR */}
        <div
          className="remaingBody 
        
         h-[85%] flex justify-center items-center flex-wrap "
        >
          {/* this is inner Box which is a white box  */}
          <div className="innerBox  lg:w-1020px md:w-760px  h-550px md:bg-black lg:bg-white   md:flex md:flex-nowrap flex-wrap sm:inline">
            {/* this is left side box that contain word New location and setup new location */}
            <div
              className="leftSideBox 
            md:w-[250]px
            xl:w-[50]px
            md:h-full
            xs:h-[200]px
            xs:border-0
          
            xs:w-screen 
          md:border-light-gray 
            md:border-r-2
            flex items-center 
            pt-30px  
            flex-col"
            >
              <p className="font-medium md:text-2xl mr-40px xs:text-5xl">
                New Location
              </p>
              <p className="mr-25px md:text-16px">setup your location here</p>
            </div>
            {/* This is right side box that contain input boxes */}
            <div className="rightSideBox h-full w-970px bg-white">
              {/* we divide the right side container into otwo parts upper right which is empty and Lowe right containe which contain actual inputs tag */}
              {/* This is upper right container and  */}
              <div className="upperRightCotainer bg-white w-full h-100px flex items-center justify-end">
                <div
                  className="emptyRectangel
                w-900px
              h-6 
              border 
              border-light-gray"
                ></div>
              </div>
              {/* upper rigth containe ends here */}
              {/* and now thsi is word detail and a  line after that  */}
              <div className="wordDetailAndLine flex h-24px bg-white">
                <p className="ml-14px">Details</p>
                <div className="line w-909px border h-1px  mt-12px border-light-gray "></div>
              </div>
              {/* Lower right container starts from here */}
              <div
                className="lowerRightContainer h-[78%] flex justify-around
               "
              >
                {/* in our lower right container as we know that there are numbers of Inputs so we create a continer and said it as our form  */}
                <form
                  className="setOfInputs bg-white
                 md:h-350px 
                 md:w-450px 
                 md:mt-10px 
                
                
                 md:pb-20px 
              

                
                 
                 "
                >
                  {/* thsi is first row that contain Client add client button */}
                  <div className="clientInput  flex justify-between mb-2   ">
                    <text className="">Client</text>
                    <div className="">
                      {" "}
                      <CustomDropdown options={options} className=" ml-6px" />
                      {/* <select className="border ml-150px  ">
                      <option selected>Search Client</option>
                    </select> */}
                      <button className="text-blue-400  ">+Add client</button>
                    </div>
                    <div className="emptyBox w-2px"></div>
                  </div>
                  {/* this is second third and fourth row and they are combined */}
                  <div className="grid grid-cols-[1fr_2fr] gap-y-2">
                    <p>Location Name</p>
                    <CustomInput
                      className="w-full"
                      placeholder="location name"
                    />

                    <p>Location Id</p>

                    <CustomInput
                      className="w-full"
                      placeholder="location name"
                    />

                    <p>Street Adress</p>

                    <CustomInput
                      className="w-full"
                      placeholder="location name"
                    />
                  </div>
                  {/* this is 5th row  */}
                  <div className="flex mt-8px ">
                    <div className="md:mr-65px xs:mr-190px flex items-center">
                      <text>City/town</text>
                    </div>
                    <div>
                      <CustomInput
                        className="w-full ml-18px "
                        placeholder="City Town"
                      />
                    </div>
                    <div className=" flex items-center">
                      {" "}
                      <text className="md:ml-16px xs:ml-44px md:mr-12px xs:mr-24px">
                        Postcode
                      </text>
                    </div>
                    <div>
                      <CustomInput
                        className="md:w-full xs:w-[100%]"
                        placeholder="Postcode"
                      />
                    </div>
                  </div>
                  {/* 6th row */}
                  <div className="grid grid-cols-[1fr_2fr] gap-y-2 mt-8px">
                    <text>Country/state</text>
                    <CustomInput
                      className="w-full"
                      placeholder="country and state"
                    />

                    <text>Country</text>
                    <CustomDropdown options={options} className="w-[70%]" />
                  </div>
                  <div className="md:ml-135px xs:ml-[33%] mt-16px text-white ">
                    <CustomButton
                      className="bg-blue-200"
                      text={"Save and Next"}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
          
    </>
  );
}

export default AddLocation;
