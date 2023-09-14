import React, { Fragment } from "react";

import quote_icon from "../../assets/quote-icon.svg";
import person_icon_one from "../../assets/person_icon.svg";
import person_icon_two from "../../assets/person_icon_two.svg";

const Testimonials = () => {
  return (
    <Fragment>
      <div className="container mx-auto flex flex-col items-center gap-10 py-12">
        <span className="text-neonCyan text-[16px] bg-[#F4F6F7] p-2 w-[202px] rounded-md text-center font-bold">
          TOUGHT OF PATIENTS
        </span>
        <h2 className="lg:max-w-[753px] text-center">
          Here’s What Our Customers Have Said
        </h2>
        <div className="flex flex-col items-center lg:flex-row gap-10">
          <div className="flex flex-col-reverse lg:flex-col gap-4 bg-[#24C0DD0D] w-[340px] lg:w-[600px] lg:h-[384px] p-2 lg:p-4">
            <img
              src={quote_icon}
              className="w-[80px] h-[80px] hidden lg:block ps-4"
              alt=""
            />
            <p className="px-4 text-center lg:text-start">
              It’s important to note that medical desicions should be based on
              scientific evidence, professional medical advice , and
              consultation with healthcare providers.While testimonials can
              provide insights into individual experiences.
            </p>
            <div className="flex flex-col items-center lg:flex-row justify-center gap-3">
              <img src={person_icon_one} className="w-[90px] h-[90px]" alt="" />
              <div className="flex flex-col items-center lg:items-start justify-center">
                <h3 className="text-2xl">Nik Morgan, Inc</h3>
                <p className="text-neonCyan">Toronto,ON</p>
              </div>
            </div>
            <img
              src={quote_icon}
              className="w-[60px] h-[60px] lg:hidden"
              alt=""
            />
          </div>
          <div className="flex flex-col-reverse lg:flex-col gap-4 bg-[#24C0DD0D] w-[340px] lg:w-[600px] lg:h-[384px] p-2 lg:p-4">
            <img
              src={quote_icon}
              className="w-[80px] h-[80px] hidden lg:block ps-4"
              alt=""
            />
            <p className="px-4 text-center lg:text-start">
              It’s important to note that medical desicions should be based on
              scientific evidence, professional medical advice , and
              consultation with healthcare providers.While testimonials can
              provide insights into individual experiences.
            </p>
            <div className="flex flex-col items-center lg:flex-row justify-center gap-3">
              <img src={person_icon_two} className="w-[90px] h-[90px]" alt="" />
              <div className="flex flex-col items-center lg:items-start justify-center">
                <h3 className="text-[24px]">Nik Morgan, Inc</h3>
                <p className="text-neonCyan">Toronto,ON</p>
              </div>
            </div>
            <img
              src={quote_icon}
              className="w-[60px] h-[60px] lg:hidden"
              alt=""
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Testimonials;
