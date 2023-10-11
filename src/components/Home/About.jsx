import React, { Fragment } from "react";
import about_img from "../../assets/PICTURE OF DOCTOR.png";

const About = () => {
  return (
    <Fragment>
      <div
        className="container mx-auto flex flex-col items-center lg:flex-row lg:justify-center py-12 gap-10 lg:gap-40 scroll-mt-10"
        id="about"
      >
        <img
          src={about_img}
          className="h-[300px] w-[320px] lg:w-[617px] lg:h-[477px]"
          alt=""
        />
        <div className="flex flex-col justify-center items-center lg:items-start gap-4 lg:max-h-[477px] text-center lg:text-start">
          <span className="text-neonCyan text-[18px] bg-[#F4F6F7] p-2 w-[115px] rounded-md text-center font-bold">
            ABOUT US
          </span>
          <h2 className="lg:max-w-[430px]">Experts in Medical Services</h2>
          <p className="max-w-[342px] lg:max-w-[548px]">
            Welcome to Bayview Diagnostic Centre! We are a leading imaging
            clinic, dedicated to exceptional care. Our caring, qualified team
            delivers timely, high-quality exams for accurate diagnoses.
          </p>
          <ul className="flex flex-col gap-4">
            <li className="before:content-[''] before:absolute before:translate-y-[-50%] before:top-1/2 before:rounded-3xl before:w-[9px] before:h-[9px] before:left-0 before:bg-neonCyan relative ps-5">
              <p className="text-black">20+ Years Of Excellence</p>
            </li>
            <li className="before:content-[''] before:absolute before:translate-y-[-50%] before:top-1/2 before:rounded-3xl before:w-[9px] before:h-[9px] before:left-0 before:bg-neonCyan relative ps-5">
              <p className="text-black">Multi Speciality Hospital</p>
            </li>
            <li className="before:content-[''] before:absolute before:translate-y-[-50%] before:top-1/2 before:rounded-3xl before:w-[9px] before:h-[9px] before:left-0 before:bg-neonCyan relative ps-5">
              <p className="text-black">Operation & Appointment</p>
            </li>
            <li className="before:content-[''] before:absolute before:translate-y-[-50%] before:top-1/2 before:rounded-3xl before:w-[9px] before:h-[9px] before:left-0 before:bg-neonCyan relative ps-5">
              <p className="text-black">Professional Experts</p>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
