import React from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab, TabScreen } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";

const buttons = [
  { name: "Overview", id: "overview" },
  { name: "Causes", id: "causes" },
  { name: "Symptoms", id: "symptoms" },
  { name: "Treatment & Management", id: "treatment-management" },
];
const scrollToSection = (sectionId) => {
  buttons.map((button) => {
    document.getElementById(button.id).classList.remove("mt-24");
  });
  const section = document.getElementById(sectionId);
  if (section) {
    section.classList.add("mt-24");
    section.scrollIntoView({ behavior: "smooth" });
  }
};
const ExcellenceContentTabs = ({ servicesDetails }) => {
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
        <div className="flex sticky top-0 flex-grow">
          {buttons.map((button, index) => {
            return (
              <button
                key={index}
                onClick={() => scrollToSection(button.id)}
                className="md:p-2 max-sm:px-2 text-white max-sm:text-xs"
              >
                {button.name}
              </button>
            );
          })}
        </div>
        <div>
          <div id="overview">
            <div className="my-5 text-content">
              <h2 className="text-theme font-medium text-xl pb-4 highlight-border highlight-border-left">
                Overview
              </h2>
              {servicesDetails?.service_desc.split('\r\n').map((part, index) => <React.Fragment key={index}>{part}<br /></React.Fragment>)}
            </div>
          </div>
          <div className="my-5" id="causes">
            <h2 className="text-theme font-medium text-xl pb-4 highlight-border highlight-border-left">
              Causes
            </h2>
            {servicesDetails?.service_causes.split('\r\n').map((part, index) => <React.Fragment key={index}>{part}<br /></React.Fragment>)}
          </div>
          <div className="my-5" id="symptoms">
            <h2 className="text-theme font-medium text-xl pb-4 highlight-border highlight-border-left">
              Symptoms
            </h2>
            {servicesDetails?.service_symptoms.split('\r\n').map((part, index) => <React.Fragment key={index}>{part}<br /></React.Fragment>)}
          </div>
          <div className="my-5" id="treatment-management">
            <h2 className="text-theme font-medium text-xl pb-4 highlight-border highlight-border-left">
              Treatment & Management
            </h2>
            {servicesDetails?.service_treatment.split('\r\n').map((part, index) => <React.Fragment key={index}>{part}<br /></React.Fragment>)}
          </div>
        </div>
        {/* </TabScreen> */}
      </div>
    </div>
  );
};
export default ExcellenceContentTabs;
