import React from "react";
import { Tab, TabScreen, Tabs } from "react-tabs-scrollable";
import medicalExperts from "../../assets/images/home/medical-experts.png";

const HealthTalksTabs = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const onTabClick = (e, index) => {
    setActiveTab(index);
  };
  return (
    <div>
      <Tabs
        activeTab={activeTab}
        onTabClick={onTabClick}
        hideNavBtnsOnMobile={false}
      >
        <Tab>All</Tab>
        <Tab>Featured</Tab>
        <Tab>Latest</Tab>
      </Tabs>

      <TabScreen>
        {activeTab === 0 && (
          <div>
            <div className="flex items-center pt-8 max-sm:justify-center">
              <img src={medicalExperts} className="h-16" />
              <p className="text-[#222F66] ps-4">The Medical Experts</p>
            </div>
            <div className="flex items-center pt-4 max-sm:justify-center">
              <img src={medicalExperts} className="h-16" />
              <p className="text-[#222F66] ps-4">The Medical Experts</p>
            </div>
            <div className="flex items-center pt-4 max-sm:justify-center">
              <img src={medicalExperts} className="h-16" />
              <p className="text-[#222F66] ps-4">The Medical Experts</p>
            </div>
            <div className="flex items-center pt-4 max-sm:justify-center">
              <img src={medicalExperts} className="h-16" />
              <p className="text-[#222F66] ps-4">The Medical Experts</p>
            </div>
          </div>
        )}
        {activeTab === 1 && (
          <div>
            <h2>Diagnostic & Therapeutic</h2>
            <p>Content for Diagnostic & Therapeutic tab goes here.</p>
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <h2>Pharmacy</h2>
            <p>Content for Pharmacy tab goes here.</p>
          </div>
        )}
      </TabScreen>
    </div>
  );
};
export default HealthTalksTabs;
