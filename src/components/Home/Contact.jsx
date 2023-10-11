import React, { Fragment } from "react";

import phone_icon from "../../assets/phone-icon.svg";
import mail_icon from "../../assets/mail-icon.svg";
import location_icon from "../../assets/location-icon.svg";

import Map from "./Map";
import "./Ticker.css";

const Contact = () => {
  return (
    <Fragment>
      <div
        className="container mx-auto flex flex-col items-center gap-12 lg:gap-20 py-12 scroll-mt-10"
        id="contact"
      >
        <div className="flex flex-col-reverse lg:flex-row lg:justify-center lg:items-end gap-20">
          <div>
            <Map />
          </div>
          <div className="flex flex-col items-center lg:items-start px-4 lg:px-0 gap-6">
            <span className="text-neonCyan text-base bg-[#F4F6F7] p-2 w-[142px] rounded-md text-center font-bold">
              Contact Us
            </span>
            <h2>Get in touch</h2>
            <p className="max-w-[342px] lg:max-w-[580px] text-center lg:text-start">
              Medical, or medicine, refers to the field of healthcare that
              encompasses the diagnosis, treatment, and prevention of diseases
              and injuries in humans. It is a broad discipline that includes
              various branches.
            </p>
            <div className="flex flex-row gap-3">
              <img src={phone_icon} className="w-[48px] h-[48px]" alt="" />
              <div className="flex flex-col justify-center">
                <h3>Call us</h3>
                <p className="text-base w-[210px] lg:w-[384px]">
                  (416) 997 - 5559
                </p>
                <p className="text-base w-[210px] lg:w-[384px]">
                  (365) 509 - 2982
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <img src={mail_icon} className="w-[48px] h-[48px]" alt="" />
              <div className="flex flex-col justify-center">
                <h3>Mail us</h3>
                <p className="text-base w-[210px] lg:w-[384px]">
                  info@primecareclinic.ca
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <img src={location_icon} className="w-[48px] h-[48px]" alt="" />
              <div className="flex flex-col justify-center">
                <h3>Our location</h3>
                <p className="text-base w-[210px] lg:w-[384px]">
                  9160 Bayview Ave, Unit b01, Richmond Hill, ON L4B 0E6
                </p>
              </div>
            </div>
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

export default Contact;
