import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useMediaQuery } from "@mui/material";
import Upcomming from "../../../../image/Textarea.svg";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import CustomDropdown from "./CustomDropdown";

function ModalBox({ handleChange }) {
  const option = [{ value: "Actions", label: "Actions" }];
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isMobile ? "90%" : 400, // Adjust width for mobile
    bgcolor: "background.paper",
    border: "1px solid #E7E7E7",
    boxShadow: 24,
    p: 0,
  };
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-col">
            <div className="flex justify-between items-center border-b-2 border-light-gray pl-2">
              <h1 className="text-[#868686] font-semibold-500 text-[15px]">
                ADD QUALIFICATION
              </h1>
              <button
                onClick={handleClose}
                className="text-[#868686] hover:text-[#868686]-700 text-3xl border-l-2 border-light-gray px-2 "
              >
                &times;
              </button>
            </div>

            <div className="flex xs:flex-wrap justify-between items-center mx-2 mt-2 ">
              <label htmlFor="select" className="text-[#868686]">
                Qualification*
              </label>
              <CustomDropdown
                options={option}
                className="w-207px text-[#868686] mr-2 bg-white"
              />
            </div>
            <div className="flex xs:flex-wrap justify-between items-center mx-2 mt-2 ">
              <label htmlFor="select" className="text-[#868686]">
                Certificate Number*
              </label>
              <CustomInput type="text" className="w-207px mr-2" />
            </div>
            <div className="flex xs:flex-wrap justify-between items-center mx-2 my-2 ">
              <label htmlFor="select" className="text-[#868686]">
                Expiry Date
              </label>
              <CustomInput type="date" className="w-207px mr-2" />
            </div>

            <div className="flex justify-end items-center border-light-gray border-t-2">
              <CustomButton
                text="save"
                className="text-white px-3 bg-[#013966] my-2 mr-2"
              />
            </div>
            <div className="flex justify-end items-center">
              <img src={Upcomming} alt="textarea" />
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalBox;
