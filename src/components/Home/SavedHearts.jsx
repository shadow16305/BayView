import React, { Fragment } from "react";

import image from "../../assets/image 9.png";

const cards = [
  {
    id: 0,
    title: "Happy Patients",
    number: "692+",
    text: "Medical knowledge and practices continually evolve, with ongoing advancements in research, technology, and treatment modalities.",
  },
  {
    id: 1,
    title: "Expert Doctor",
    number: "692+",
    text: "Medical knowledge and practices continually evolve, with ongoing advancements in research, technology, and treatment modalities.",
  },
  {
    id: 2,
    title: "Experiences",
    number: "692+",
    text: "Medical knowledge and practices continually evolve, with ongoing advancements in research, technology, and treatment modalities.",
  },
];

const SavedHearts = () => {
  return (
    <Fragment>
      <div className="container mx-auto flex flex-col items-center gap-10 py-12">
        <span className="text-neonCyan text-[16px] bg-[#F4F6F7] p-2 w-[153px] rounded-md text-center font-bold">
          SAVED HEARTS
        </span>
        <div className="flex flex-col items-center lg:flex-row lg:justify-between">
          <h2 className="max-w-[229px] text-center lg:text-start lg:max-w-[478px]">
            Comprehensive Care For All Patients
          </h2>
          <p className="body-2 max-w-[342px] text-center lg:text-start lg:max-w-[661px]">
            It's important to note that medical practice is governed by ethical
            principles, including patient confidentiality, informed consent, and
            the duty to provide competent.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10">
          {cards.map((elem) => (
            <div
              className="flex-col items-center lg:items-start gap-10 hidden lg:flex"
              key={elem.id}
            >
              <hr className="border-1 border-black w-full" />
              <h4 className="before:content-[''] before:absolute before:translate-y-[-50%] before:top-1/2 before:rounded-3xl before:w-[9px] before:h-[9px] before:left-0 before:bg-neonCyan relative ps-5 text-neonCyan">
                {elem.title}
              </h4>
              <h2 className="font-semibold">{elem.number}</h2>
              <p className="lg:max-w-[360px]">{elem.text}</p>
            </div>
          ))}
          {cards.map((elem) => (
            <div className="flex flex-col lg:hidden gap-3" key={elem.id}>
              <hr className="border-1 border-black w-full max-w-[340px]" />
              <div className="flex flex-row">
                <div className="flex flex-col gap-5">
                  <h4 className="before:content-[''] text-[16px] before:absolute before:translate-y-[-50%] before:top-1/2 before:rounded-3xl before:w-[9px] before:h-[9px] before:left-0 before:bg-neonCyan relative ps-5 text-neonCyan">
                    {elem.title}
                  </h4>
                  <p className="text-[14px] max-w-[226px]">{elem.text}</p>
                </div>
                <h2 className="font-semibold">{elem.number}</h2>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-between bg-neonCyan p-3 lg:p-0 lg:w-[1240px] lg:max-h-[470px] gap-4 lg:gap-0 lg:rounded-[60px] py-4 lg:py-0 lg:mt-4">
          <div className="flex flex-col justify-center gap-10 lg:ps-10">
            <h2 className="text-white text-[20px] lg:text-[48px] text-center lg:text-start lg:max-w-[475px]">
              Your Well-Being is our Main Priority
            </h2>
            <div className="flex flex-row gap-6">
              <button className="uppercase rounded-3xl px-8 py-3 bg-white text-black hover:bg-[#0790FEB3] transition-[0.25s] hover:text-white">
                (905) 604-8400
              </button>

              <button className="uppercase rounded-3xl px-8 py-3 bg-white text-black hover:bg-[#0790FEB3] transition-[0.25s] hover:text-white">
                (647) 564-8004
              </button>
            </div>
          </div>
          <img src={image} alt="" />
        </div>
      </div>
    </Fragment>
  );
};

export default SavedHearts;
