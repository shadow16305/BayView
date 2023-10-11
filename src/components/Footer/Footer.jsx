import React, { Fragment } from "react";

import logo from "../../assets/Frame 1.svg";

const Footer = () => {
  return (
    <Fragment>
      <div className="container mx-auto flex flex-col lg:flex-row justify-center lg:justify-start gap-20 px-14 py-8">
        <div className="flex flex-col gap-10">
          <div className="flex justify-center lg:justify-start gap-6">
            <a href="#home">
              <img src={logo} alt="" />
            </a>
          </div>
          <p className="text-[20px] text-center lg:text-start text-[#403634] lg:max-w-[350px]">
            Lorem Ipsum is simply dummy text of the typesetting industry.
          </p>
        </div>
        <div className="flex flex-row justify-center gap-10">
          <div className="flex flex-col text-center gap-2 lg:gap-4">
            <h3 className="text-[18px] lg:text-[32px] font-black">Company</h3>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact Us</a>
          </div>
        </div>
        <div className="flex flex-col gap-2 lg:gap-4 items-center lg:ms-auto">
          <h3 className="text-[18px] lg:text-[32px] font-black">Call us</h3>
          <p className="text-lg">(416) 997 - 5559</p>
          <p className="text-lg">(365) 509 - 2982</p>
        </div>
      </div>
      <div className="bg-neonCyan text-center py-2">
        <h3 className="text-white text-[14px]">
          Prime Care -- Powered by SANEM K. -- Created by.
        </h3>
      </div>
    </Fragment>
  );
};

export default Footer;
