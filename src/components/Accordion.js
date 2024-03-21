// import React, { useState } from "react";
// import { Tab } from "react-tabs-scrollable";

// const AccordionItem = ({ title, content }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="accordion-item ">
//       <button
//         className="accordion-button bg-gradient-to-r from-[#FF744B] via-[#FF744B] to-[rgba(255, 116, 75, 0.52)] p-2 text-white rounded-t-lg"
//         onClick={toggleAccordion}
//       >
//         {title}
//       </button>
//       <div className="py-2 bg-[#F6F6F6]">
//         {isOpen &&
//           content.map((tab, index) => (
//             <Tab key={index}>
//               {/* <img src={tab.src} /> */}
//               {tab.title}
//             </Tab>
//           ))}
//       </div>
//     </div>
//   );
// };

// const Accordion = ({ title, content }) => {
//   return (
//     <div className="accordion">
//       {/* {items.map((item, index) => ( */}
//       <AccordionItem title={title} content={content} />
//       {/* ))} */}
//     </div>
//   );
// };

// export default Accordion;

import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import React, { useState } from "react";

const Accordion = ({ title, children, accordionOpen }) => {
  const [isOpen, setIsOpen] = useState(accordionOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion mb-5">
      <div className="accordion-header" onClick={toggleAccordion}>
        <button className=" w-full flex justify-between bg-gradient-to-r from-[#FF744B] via-[#FF744B] to-[#FFA084] p-2 text-white rounded-t-lg">
          <span> {title}</span>{" "}
          <span>{isOpen ? <IconChevronDown /> : <IconChevronUp />}</span>
        </button>
      </div>
      {isOpen && (
        <div
          className={`accordion-content transition-all duration-500 ${
            isOpen ? "h-auto" : "h-0"
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
