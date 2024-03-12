import { Link } from "react-router-dom";
import banner from "../assets/images/banners/excellence-details-banner.png";
import Accordion from "./Accordian";
import { Tab, TabScreen, Tabs } from "react-tabs-scrollable";
import React from "react";
import BreadCrumb from "./BreadCrumb";

const accordianContent1 = [
  { icon: "", tab: "Thyroid Treatments" },
  { icon: "", tab: "Thyroid Treatments" },
  { icon: "", tab: "Thyroid Treatments" },
  { icon: "", tab: "Thyroid Treatments" },
  { icon: "", tab: "Thyroid Treatments" },
];

const accordionItems = [
  {
    title: "Accordion Item 1",
    content: accordianContent1,
  },
  {
    title: "Accordion Item 2",
    content: "Content for Accordion Item 2",
  },
  // Add more items as needed
];

const ExcellenceDetails = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  console.log(activeTab);
  // Define your tab data dynamically
  const tabData = [
    { title: "Thyroid Treatments", content: "Content for Thyroid Treatments" },
    {
      title: "Diabetes I Diabetes / 2 Diabetes",
      content: "<LoremIpsumComponent />",
    },
    {
      title: "Menopause",
      content: (
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      ),
    },
    {
      title: "Pituitary Disorders",
      content: "Content for Pituitary Disorders",
    },
    { title: "Osteoporosis", content: "Content for Osteoporosis" },
    { title: "Adrenal Conditions", content: "Content for Adrenal Conditions" },
    { title: "Endocrine Cancers", content: "Content for Endocrine Cancers" },
    {
      title: "Endocrine-Related Heart Conditions",
      content: "Content for Endocrine-Related Heart Conditions",
    },
    { title: "Hormone Disorders", content: "Content for Hormone Disorders" },
    { title: "Short Stature", content: "Content for Short Stature" },
    {
      title: "Growth Hormone Deficiency",
      content: "Content for Growth Hormone Deficiency",
    },
    { title: "PCOS", content: "Content for PCOS" },
    {
      title: "Fertility Disorders",
      content: "Content for Fertility Disorders",
    },
    { title: "Obesity", content: "Content for Obesity" },
    { title: "Nutrition", content: "Content for Nutrition" },
  ];

  const additionalTabData = [
    { title: "General Surgery", content: "Content for General Surgery" },
    {
      title: "Laparoscopic GI Surgery",
      content: "Content for Laparoscopic GI Surgery",
    },
    { title: "Colorectal Surgery", content: "Content for Colorectal Surgery" },
    {
      title: "Gallbladder and Biliary Tract Surgery",
      content: "Content for Gallbladder and Biliary Tract Surgery",
    },
    { title: "Hernia Surgery", content: "Content for Hernia Surgery" },
    { title: "Bariatric Surgery", content: "Content for Bariatric Surgery" },
    { title: "Trauma Surgery", content: "Content for Trauma Surgery" },
    { title: "Esophageal Surgery", content: "Content for Esophageal Surgery" },
    {
      title: "Small Bowel Surgery",
      content: "Content for Small Bowel Surgery",
    },
    { title: "Pancreatic Surgery", content: "Content for Pancreatic Surgery" },
    { title: "Liver Surgery", content: "Content for Liver Surgery" },
    { title: "Gastric Surgery", content: "Content for Gastric Surgery" },
    { title: "Piles Surgery", content: "Content for Piles Surgery" },
    { title: "Fistula Surgery", content: "Content for Fistula Surgery" },
    {
      title: "Diabetic Foot Treatment",
      content: "Content for Diabetic Foot Treatment",
    },
    {
      title: "Breast Lump Treatment",
      content: "Content for Breast Lump Treatment",
    },
  ];

  const breadCrumb = [
    { href: "/", title: "home" },
    { href: "/excellence", title: "center of excellence" },
    { href: "", title: tabData[activeTab].title },
  ];

  // Define an onClick function to bind the value on tab click
  const onTabClick = (e, index) => {
    setActiveTab(index);
  };

  return (
    <div className="excellence-details">
      <div>
        <img src={banner} className="w-full" />
      </div>
      <BreadCrumb linkData={breadCrumb} />
      <section>
        {/* Your existing JSX */}
        <div className="grid grid-cols-8 max-w-7xl m-auto">
          <div className="col-span-2">
            <Tabs
              activeTab={activeTab}
              onTabClick={onTabClick}
              hideNavBtnsOnMobile={false}
              className="flex flex-col col-span-2"
            >
              {/* Map over tab data and render Tab components */}
              {/* <Accordion title="ENDOCRINOLOGY" content={tabData} /> */}

              {tabData.map((tab, index) => (
                <Tab key={index}>
                  <img src={tab.src} />
                  {tab.title}
                </Tab>
              ))}
              {additionalTabData.map((tab, index) => (
                <Tab key={index}>
                  <img src={tab.src} />
                  {tab.title}
                </Tab>
              ))}
            </Tabs>
          </div>
          {/* Map over tab data and conditionally render TabScreen components */}
          {tabData.map((tab, index) => (
            <TabScreen
              className="ps-12 col-span-6"
              key={index}
              activeTab={activeTab}
              index={index}
            >
              {tab.content}
            </TabScreen>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExcellenceDetails;
