import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./Accordion.css";

function AccordionItem({ title, content, icon }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white rounded-md p-2 ps-4 lg:w-[673px] cursor-pointer">
      <div
        onClick={toggleAccordion}
        className="flex w-full items-center justify-between"
      >
        <span className="text-[28px] text-black font-semibold">{title}</span>{" "}
        <div className="bg-[#006C7215] w-[64px] h-[64px] rounded-xl flex items-center justify-center">
          <img src={icon} className="w-[40px] h-[40px]" alt="" />
        </div>
      </div>
      <CSSTransition in={isOpen} timeout={300} classNames="slide" unmountOnExit>
        <p className="text-[20px] font-['DM_Sans'] text-[#817A79B5] lg:w-[518px]">
          {content}
        </p>
      </CSSTransition>
    </div>
  );
}

export default AccordionItem;
