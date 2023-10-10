import React, { Fragment } from "react";

import doctor_one from "../../assets/doctor1.png";
import doctor_two from "../../assets/doctor2.png";
import doctor_three from "../../assets/doctor3.png";

const Team = () => {
  return (
    <Fragment>
      <div className="container mx-auto flex flex-col items-center gap-10 py-12">
        <span className="text-neonCyan text-[16px] bg-[#F4F6F7] p-2 w-[202px] rounded-md text-center font-bold">
          OUR MOTIVATED TEAM
        </span>
        <h2 className="text-center">Meet Our Skilled Team</h2>
        <div className="flex flex-col lg:flex-row lg:items-center text-center gap-28">
          <div className="flex flex-col justify-center gap-3">
            <img src={doctor_one} width={240} height={300} alt="" />
            <h3>Dr. Rihanna Ramirez</h3>
            <p className="text-xl text-neonCyan font-['Quicksand']">
              GYNECOLOGY
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <img src={doctor_two} width={240} height={300} alt="" />
            <h3>Dr. Rihanna Ramirez</h3>
            <p className="text-xl text-neonCyan font-['Quicksand']">
              GYNECOLOGY
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <img src={doctor_three} width={270} height={300} alt="" />
            <h3>Dr. Rihanna Ramirez</h3>
            <p className="text-xl text-neonCyan font-['Quicksand']">
              GYNECOLOGY
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Team;
