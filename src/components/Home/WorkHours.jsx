import React, { Fragment } from "react";
import image from "../../assets/b2.png";

const WorkHours = () => {
  return (
    <Fragment>
      <div className="container mx-auto flex flex-col items-center pt-10 pb-10 lg:pb-40 gap-10">
        <span className="text-neonCyan text-[16px] bg-[#F4F6F7] p-2 w-[153px] rounded-md text-center font-bold">
          WORK HOURS
        </span>
        <h2>When Are We Open </h2>
        <div className="flex flex-col items-center lg:items-start lg:flex-row lg:relative gap-10 lg:gap-0 lg:px-[300px] lg:mt-6">
          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-start px-8 py-6 lg:py-6 gap-10 rounded-[60px] bg-neonCyan w-[340px] lg:w-[400px] lg:h-[320px] lg:absolute lg:top-[45%] lg:left-0">
            <h4 className="text-white">Appointment</h4>
            <p className="text-[14px] lg:text-[20px] font-semibold text-white font-['Quicksand'] lg:w-[342px]">
              Medical technologies to provide appropriate care and improve
              patient outcomes.
            </p>
            <div>
              <a
                href="#contact"
                className="uppercase rounded-3xl px-8 py-3 bg-white text-black hover:bg-[#0790FEB3] hover:text-white transition-[0.25s]"
              >
                book now
              </a>
            </div>
          </div>
          <img
            src={image}
            className="lg:w-full lg:h-full w-[340px] h-[250px]"
            alt=""
          />
          <div className="flex flex-col justify-center p-5 px-8 bg-[#F4F6F7] rounded-[60px] gap-8 w-[340px] lg:w-[400px] lg:h-[320px] lg:absolute lg:top-[-10%] lg:right-0">
            <h4 className="text-black">Open Hours</h4>
            <p className="lg:max-w-[380px]">
              Note that hours of operation may differ during public holidays.
            </p>
            <ul>
              <li className="before:content-[''] before:absolute before:translate-y-[-50%] before:top-1/2 before:rounded-3xl before:w-[9px] before:h-[9px] before:left-0 before:bg-black relative ps-5">
                <p className="text-[14px] lg:text-[20px] font-semibold text-black font-['Quicksand'] ">
                  Mon,Wed,Thr: 10AM - 4PM
                </p>
              </li>
              <li className="before:content-[''] before:absolute before:translate-y-[-50%] before:top-1/2 before:rounded-3xl before:w-[9px] before:h-[9px] before:left-0 before:bg-black relative ps-5">
                <p className="text-[14px] lg:text-[20px] font-semibold text-black font-['Quicksand'] ">
                  Tuesday: Closed
                </p>
              </li>
              <li className="before:content-[''] before:absolute before:translate-y-[-50%] before:top-1/2 before:rounded-3xl before:w-[9px] before:h-[9px] before:left-0 before:bg-black relative ps-5">
                <p className="text-[14px] lg:text-[20px] font-semibold text-black font-['Quicksand'] ">
                  Friday: On Call
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default WorkHours;
