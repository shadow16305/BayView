import React, { Fragment } from "react";
import icon_one from "../../assets/Frame 33.svg";
import icon_two from "../../assets/heart.svg";
import icon_three from "../../assets/Frame 28.svg";
import icon_four from "../../assets/Frame 4.svg";
import icon_five from "../../assets/veins.svg";

const cards = [
  {
    id: 0,
    icon: icon_one,
    text: "Consultation",
  },
  {
    id: 1,
    icon: icon_two,
    text: "Cardiac",
  },
  {
    id: 2,
    icon: icon_three,
    text: "X-Ray",
  },
  {
    id: 3,
    icon: icon_four,
    text: "Ultrasound",
  },
  {
    id: 4,
    icon: icon_five,
    text: "Vein Treatment",
  },
];

const Services = () => {
  return (
    <Fragment>
      <div
        className="lg:flex flex-col items-center gap-6 lg:gap-10 py-12 hidden"
        id="services"
      >
        <span className="text-neonCyan text-[16px] bg-[#F4F6F7] p-2 w-[173px] rounded-md text-center font-bold">
          OUR SERVICES
        </span>
        <h2 className="text-center max-w-[260px] lg:max-w-[497px]">
          Best Medical Services Prime Care Clinic
        </h2>
        <div className="py-20 bg-[#006C7215] w-full flex flex-col items-center gap-12">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-10 ">
            {cards.map((elem) => (
              <div
                className="flex flex-col items-center justify-center bg-white py-20 gap-3 w-[248px] h-[248px] rounded-[60px]"
                key={elem.id}
              >
                <img src={elem.icon} alt="" className="w-[100px] h-[90px]" />
                <h3 className="text-center">{elem.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Services;
