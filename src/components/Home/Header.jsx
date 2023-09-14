import React, { Fragment } from "react";

import doctor_img from "../../assets/headerDoc.png";

import "./Ticker.css";

const Header = () => {
  return (
    <Fragment>
      <div className="container lg:ps-[96px] mx-auto" id="home">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:pt-28 pt-10 lg:justify-between lg:max-w-[1240px]">
          <div className="flex flex-col items-center lg:items-start gap-5 lg:gap-10 py-20 text-center lg:text-start">
            <h1 className="max-w-[342px] lg:max-w-[598px]">
              Prime Care Walk-in Clinic
            </h1>
            <p className="body-1 max-w-[342px] lg:max-w-[598px] leading-[28.64px] lg:leading-normal">
              We are a multimodality imaging clinic and have been operating for
              many years. Our staff is caring and highly qualified. Our goal is
              to provide timely and high quality imaging exams to our patients.
            </p>
            <div className="mt-4">
              <a
                href="#contact"
                className="uppercase text-white bg-neonCyan px-8 py-4 rounded-[50px] text-xl hover:bg-[#0790FEB3] transition-[0.25s]"
              >
                get appointment
              </a>
            </div>
          </div>
          <div>
            <img
              src={doctor_img}
              className="max-h-[700px] hidden lg:block"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="hwrap">
        <div className="flex flex-row bg-neonCyan hmove">
          <div className="flex items-center gap-8 hitem">
            <div className="dot"></div>
            <h4>HAPPY PATIENTS </h4>
            <div className="dot"></div>
            <h4>ULTRASOUND SERVICES</h4>
            <div className="dot"></div>
            <h4>CARDIAC SERVICES</h4>
            <div className="dot"></div>
            <h4>X-RAY SERVICES</h4>
          </div>
          <div className="flex items-center gap-8 hitem">
            <div className="dot"></div>
            <h4>HAPPY PATIENTS </h4>
            <div className="dot"></div>
            <h4>ULTRASOUND SERVICES</h4>
            <div className="dot"></div>
            <h4>CARDIAC SERVICES</h4>
            <div className="dot"></div>
            <h4>X-RAY SERVICES</h4>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
