import React from "react";
import { Tabs, Tab } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";
import LaboratorySvg from "./LaboratorySvg";
import labTests from "../../assets/images/home/laboratory-tests.png";
import MoreBtn from "../MoreBtn";

const TabNames = [
  "Laboratory Tests",
  "Hormone Replacement Therapy",
  "Education",
  "Diet and Nutrition Counselling",
  "Hormone Replacement Therapy",
  "Education",
  "Diet and Nutrition Counselling",
];

const CommittedCureTabs = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  // define an onClick function to bind the value on tab click
  const onTabClick = (e, index) => {
    setActiveTab(index);
  };
  const TabScreen = ({ activeTab, idx, ...props }) => {
    return (
      <div
        className="animate__animated animate__fadeInLeft"
        role="tabpanel"
        {...props}
      >
        {activeTab === idx && (
          <div className="m-4">
            {/* Tab screen {idx} */}
            <div className="grid grid-cols-5 items-center">
              <div className="md:col-span-2 col-span-5">
                <img src={labTests} className="rounded-xl" />
              </div>
              <div className="md:col-span-3 md:px-10 mt-4 col-span-5">
                <h1 className="text-blue-700 text-xl font-semibold">
                  Laboratory Tests
                </h1>
                <p className="my-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheetscontaining Lorem Ipsum passages,
                  and more recently with desktop publishing software like Aldus
                  PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting,
                </p>
                <MoreBtn btnText={"Read More"} href={"/"} />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  return (
    <div>
      <Tabs
        activeTab={activeTab}
        onTabClick={onTabClick}
        hideNavBtnsOnMobile={false}
      >
        {/* generating an array to loop through it  */}
        {TabNames.map((item, index) => (
          <Tab className="rounded flex items-center gap-x-4 text-sm" key={item}>
            <LaboratorySvg color={activeTab == index ? "White" : "#434343"} />
            {item}
          </Tab>
        ))}
      </Tabs>
      {[...Array(20).keys()].map((item) => (
        <TabScreen activeTab={activeTab} idx={item} key={item}>
          Page {item}
        </TabScreen>
      ))}
    </div>
  );
};

export default CommittedCureTabs;
