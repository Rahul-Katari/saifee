import React from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab, TabScreen } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";
import FormatHtml from "../FormatHtml";

const buttonsServiceCategory1 = [
  { name: "Overview", id: "overview" },
  { name: "Causes", id: "causes" },
  { name: "Symptoms", id: "symptoms" },
  { name: "Treatment & Management", id: "treatment-management" },
];

const buttonsServiceCategory2 = [
  { name: "Overview & Types ", id: "overview" },
  { name: "Condition Treated ", id: "causes" },
  { name: "Evaluation Process & Benefits", id: "symptoms" },
  { name: "Tests and Procedures", id: "treatment-management" },
];

let buttonsToRender


const scrollToSection = (sectionId) => {
  buttonsToRender.map((button) => {
    document.getElementById(button.id).classList.remove("mt-24");
  });
  const section = document.getElementById(sectionId);
  if (section) {
    section.classList.add("mt-24");
    section.scrollIntoView({ behavior: "smooth" });
  }
};
const ExcellenceContentTabs = ({ servicesDetails }) => {
  buttonsToRender = servicesDetails?.servicecategory === 1 ? buttonsServiceCategory1 : buttonsServiceCategory2;
  const [activeTab, setActiveTab] = React.useState(0);
  const onTabClick = (e, index) => {
    setActiveTab(index);
  };


  return (
    <div>
      <div className="excellence-content-tabs">
        {/* <Tabs
          className="flex justify-center"
          activeTab={activeTab}
          onTabClick={onTabClick}
          hideNavBtnsOnMobile={false}
        >
          <Tab>Overview</Tab>
          <Tab>Causes</Tab>
          <Tab>Symptoms</Tab>
          <Tab>Treatment & Management</Tab>
        </Tabs>
        <TabScreen className="max-w-7xl m-auto"> */}
        <div className="flex md:sticky top-[144px] flex-grow">
        {buttonsToRender.map((button, index) => (
        <button
          key={index}
          onClick={() => scrollToSection(button.id)}
          className="md:p-2 max-sm:px-2 text-white max-sm:text-xs"
        >
          {button.name}
        </button>
      ))}
        </div>
        <div>
          <div id="overview">
            <div className="my-5 text-content">
              <h2 className="text-theme font-medium text-xl pb-4 highlight-border highlight-border-left">
            {servicesDetails?.servicecategory == 2 ? "Overview & Types" :  "Overview" }    
              </h2>
              {/* {servicesDetails?.service_desc.split('\r\n').map((part, index) => <React.Fragment key={index}>{part}<br /></React.Fragment>)} */}
              <FormatHtml htmlString={servicesDetails?.service_desc}/>
            </div>
          </div>
          <div className="my-5 text-content" id="causes">
            <h2 className="text-theme font-medium text-xl pb-4 highlight-border highlight-border-left">
            {servicesDetails?.servicecategory == 2 ? "Condition Treated " :  "Causes" }    
            </h2>
            {/* {servicesDetails?.service_causes.split('\r\n').map((part, index) => <React.Fragment key={index}>{part}<br /></React.Fragment>)} */}
            <FormatHtml htmlString={servicesDetails?.service_causes}/>

          </div>
          <div className="my-5 text-content" id="symptoms">
            <h2 className="text-theme font-medium text-xl pb-4 highlight-border highlight-border-left">
            {servicesDetails?.servicecategory == 2 ? "Evaluation Process & Benefits" :  "Symptoms" }    
            </h2>
            {/* {servicesDetails?.service_symptoms.split('\r\n').map((part, index) => <React.Fragment key={index}>{part}<br /></React.Fragment>)} */}
            <FormatHtml htmlString={servicesDetails?.service_symptoms}/>

          </div>
          <div className="my-5 text-content" id="treatment-management">
            <h2 className="text-theme font-medium text-xl pb-4 highlight-border highlight-border-left">
            {servicesDetails?.servicecategory == 2 ? "Tests and Procedures" :  "Treatment & Management" }    
            </h2>
            {/* {servicesDetails?.service_treatment.split('\r\n').map((part, index) => <React.Fragment key={index}>{part}<br /></React.Fragment>)} */}
            <FormatHtml htmlString={servicesDetails?.service_treatment}/>
          </div>
        </div>
        {/* </TabScreen> */}
      </div>
    </div>
  );
};
export default ExcellenceContentTabs;
