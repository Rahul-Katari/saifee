import banner from "../../assets/images/banners/excellence-details-banner.png";
import { Tab, TabScreen, Tabs } from "react-tabs-scrollable";
import React, { useEffect, useState } from "react";
import BreadCrumb from "../common/BreadCrumb";
import { useParams } from "react-router-dom";
import Accordion from "../Accordion";
import ExcellenceContentTabs from "./ExcellenceContentTabs";

const endoData = [
  { title: "Thyroid Treatments", content: <ExcellenceContentTabs /> },
  {
    title: "Diabetes I Diabetes / 2 Diabetes",
    content: <ExcellenceContentTabs />,
  },
  {
    title: "Menopause",
    content: <ExcellenceContentTabs />,
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

const generalData = [
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
const ExcellenceDetails = () => {
  const { id } = useParams();
  const [endoActiveTab, setEndoActiveTab] = React.useState(id);
  const [generalActiveTab, setGeneralActiveTab] = React.useState(
    id > 15 ? id - 15 : 0
  );
  const [activeData, setActiveData] = useState(id < 15 ? "endo" : "");
  const [orderedEndoData, setOrderedEndoData] = useState([]);
  const [orderedGeneralData, setOrderedGeneralData] = useState([]);
  const [breadcrumb, setBreadcrumb] = useState([]);
  const [endoaccordion, setEndoaccordion] = useState(false);
  const [generalaccordion, setGeneralaccordion] = useState(false);

  useEffect(() => {
    const endoDataCopy = [...endoData];
    const generalDataCopy = [...generalData];
    const activeTabIndex =
      activeData === "endo" ? Number(endoActiveTab) : Number(generalActiveTab);
    if (activeData === "endo") {
      const activeTab = endoDataCopy.splice(activeTabIndex, 1)[0];
      endoDataCopy.unshift(activeTab);
      setOrderedEndoData(endoDataCopy);
      setEndoActiveTab(0);
      setOrderedGeneralData(generalDataCopy);
      setEndoaccordion(true);
    } else {
      const activeTab = generalDataCopy.splice(activeTabIndex, 1)[0];
      generalDataCopy.unshift(activeTab);
      setOrderedGeneralData(generalDataCopy);
      setGeneralActiveTab(0);
      setOrderedEndoData(endoDataCopy);
      setGeneralaccordion(true);
    }
    const breadCrumbTitle =
      activeData === "endo"
        ? endoData[endoActiveTab].title
        : generalData[generalActiveTab].title;
    const breadCrumb = [
      { href: "/", title: "home" },
      { href: "/excellence", title: "center of excellence" },
      {
        href: "",
        title: breadCrumbTitle,
      },
    ];
    setBreadcrumb(breadCrumb);
  }, [activeData]);

  // Define an onClick function to bind the value on tab click
  const onEndoTabClick = (e, index) => {
    setEndoActiveTab(index);
    setActiveData("endo");
  };
  const onGeneralTabClick = (e, index) => {
    setGeneralActiveTab(index);
    setActiveData("");
  };

  return (
    <div className="excellence-details">
      <div>
        <img src={banner} className="w-full" />
      </div>
      <BreadCrumb linkData={breadcrumb} />
      <section>
        {/* Your existing JSX */}
        <div className="md:grid grid-cols-8 max-w-7xl m-auto max-sm:m-4">
          <div className="col-span-2 max-sm:hidden">
            <div>
              <Accordion title="Endocrinology" accordionOpen={endoaccordion}>
                <Tabs
                  activeTab={Number(endoActiveTab)}
                  onTabClick={onEndoTabClick}
                  hideNavBtnsOnMobile={false}
                  className="flex flex-col col-span-2"
                >
                  {/* Map over Endocrinology tab data and render Tab components */}
                  {endoData.map((tab, index) => (
                    <Tab key={index}>
                      {/* Assuming 'imgSrc' is the correct property */}
                      {tab?.title}
                    </Tab>
                  ))}
                </Tabs>
              </Accordion>

              <Accordion
                title="General Surgery"
                accordionOpen={generalaccordion}
              >
                <Tabs
                  activeTab={Number(generalActiveTab)}
                  onTabClick={onGeneralTabClick}
                  hideNavBtnsOnMobile={false}
                  className="flex flex-col col-span-2"
                >
                  {/* Map over General Surgery tab data and render Tab components */}
                  {generalData.map((tab, index) => (
                    <Tab key={index}>
                      {/* Assuming 'imgSrc' is the correct property */}
                      {tab?.title}
                    </Tab>
                  ))}
                </Tabs>
              </Accordion>
            </div>
          </div>
          {/* Map over tab data and conditionally render TabScreen components */}
          {activeData === "endo"
            ? endoData.map((tab, index) => (
                <TabScreen
                  className="md:ps-12 col-span-6"
                  key={index}
                  activeTab={endoActiveTab}
                  index={index}
                >
                  {tab?.content}
                </TabScreen>
              ))
            : generalData.map((tab, index) => (
                <TabScreen
                  className="md:ps-12 col-span-6"
                  key={index}
                  activeTab={generalActiveTab}
                  index={index}
                >
                  {tab?.content}
                </TabScreen>
              ))}
        </div>
      </section>
    </div>
  );
};

export default ExcellenceDetails;
