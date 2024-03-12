import React, { useState } from "react";
import { Tab } from "react-tabs-scrollable";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item ">
      <button
        className="accordion-button bg-gradient-to-r from-[#FF744B] via-[#FF744B] to-[rgba(255, 116, 75, 0.52)] p-2 text-white rounded-t-lg"
        onClick={toggleAccordion}
      >
        {title}
      </button>
      <div className="py-2 bg-[#F6F6F6]">
        {isOpen &&
          content.map((tab, index) => (
            <Tab key={index}>
              {/* <img src={tab.src} /> */}
              {tab.title}
            </Tab>
          ))}
      </div>
    </div>
  );
};

const Accordion = ({ title, content }) => {
  return (
    <div className="accordion">
      {/* {items.map((item, index) => ( */}
      <AccordionItem title={title} content={content} />
      {/* ))} */}
    </div>
  );
};

export default Accordion;
