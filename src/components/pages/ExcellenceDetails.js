import banner from "../../assets/images/banners/excellence-details-banner.png";
import { Tab, TabScreen, Tabs } from "react-tabs-scrollable";
import React, { useState } from "react";
import BreadCrumb from "../common/BreadCrumb";
import { useParams } from "react-router-dom";
import Accordion from "../Accordion";
import PatientsVisitors from "./PatientsVisitors";
import ExcellenceContentTabs from "./ExcellenceContentTabs";
// const LoremIpsumComponent = () => {
//   const [contentActiveTab, setcontentActiveTab] = React.useState(0);
//   const onTabClick = (e, index) => {
//     setcontentActiveTab(index);
//   };
//   return (
//     <div>
//       <Tabs
//         className="flex justify-center"
//         ActiveTab={contentActiveTab}
//         onTabClick={onTabClick}
//         hideNavBtnsOnMobile={false}
//       >
//         <Tab>Overview</Tab>
//         <Tab>Causes</Tab>
//         <Tab>Symptoms</Tab>
//         <Tab>Dischargeguide</Tab>
//         <Tab>Treatment & Management</Tab>
//       </Tabs>
//       <TabScreen className="max-w-7xl m-auto">
//         {contentActiveTab === 0 && (
//           <div>
//             <div className="my-5 text-content">
//               <h2 className="text-theme font-medium text-xl pb-4 highlight-border highlight-border-left">
//                 Plan For Visit
//               </h2>
//               <p>What is Lorem Ipsum?</p>
//               <p>
//                 Lorem Ipsum is simply dummy text of the printing and typesetting
//                 industry. Lorem Ipsum has been the industry's standard dummy
//                 text ever since the 1500s, when an unknown printer took a galley
//                 of type and scrambled it to make a type specimen book. It has
//                 survived not only five centuries, but also the leap into
//                 electronic typesetting, remaining essentially unchanged. It was
//                 popularised in the 1960s with the release of Letraset sheets
//                 containing Lorem Ipsum passages, and more recently with desktop
//                 publishing software like Aldus PageMaker including versions of
//                 Lorem Ipsum.
//               </p>
//               <p>Why do we use it?</p>
//               <p>
//                 It is a long established fact that a reader will be distracted
//                 by the readable content of a page when looking at its layout.
//                 The point of using Lorem Ipsum is that it has a more-or-less
//                 normal distribution of letters, as opposed to using 'Content
//                 here, content here', making it look like readable English. Many
//                 desktop publishing packages and web page editors now use Lorem
//                 Ipsum as their default model text, and a search for 'lorem
//                 ipsum' will uncover many web sites still in their infancy.
//                 Various versions have evolved over the years, sometimes by
//                 accident, sometimes on purpose (injected humour and the like).
//               </p>

//               <p className="mt-5">Where does it come from?</p>
//               <p>
//                 Contrary to popular belief, Lorem Ipsum is not simply random
//                 text. It has roots in a piece of classical Latin literature from
//                 45 BC, making it over 2000 years old. Richard McClintock, a
//                 Latin professor at Hampden-Sydney College in Virginia, looked up
//                 one of the more obscure Latin words, consectetur, from a Lorem
//                 Ipsum passage, and going through the cites of the word in
//                 classical literature, discovered the undoubtable source. Lorem
//                 Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
//                 Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
//                 written in 45 BC. This book is a treatise on the theory of
//                 ethics, very popular during the Renaissance. The first line of
//                 Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
//                 in section 1.10.32. The standard chunk of Lorem Ipsum used since
//                 the 1500s is reproduced below for those interested. Sections
//                 1.10.32 and 1.10.33 from "de Finibus{" "}
//               </p>
//             </div>
//           </div>
//         )}
//         {contentActiveTab === 1 && (
//           <div className="my-5">
//             <h2 className="text-theme font-medium text-xl pb-4 highlight-border highlight-border-left">
//               Patient Rights & Responsibilities
//             </h2>
//             <p>Content for Diagnostic & Therapeutic tab goes here.</p>
//           </div>
//         )}
//         {contentActiveTab === 2 && (
//           <div className="my-5">
//             <h2 className="text-theme font-medium text-xl pb-4 highlight-border highlight-border-left">
//               Insurance & TPA
//             </h2>
//             <p>Content for Pharmacy tab goes here.</p>
//           </div>
//         )}
//         {contentActiveTab === 3 && (
//           <div className="my-5">
//             <h2 className="text-theme font-medium text-xl pb-4 highlight-border highlight-border-left">
//               Dischargeguide
//             </h2>
//             <p>Content for Pharmacy tab goes here.</p>
//           </div>
//         )}
//         {contentActiveTab === 4 && (
//           <div className="my-5">
//             <h2 className="text-theme font-medium text-xl pb-4 highlight-border highlight-border-left">
//               Surgery Booking
//             </h2>
//             <p>Content for Pharmacy tab goes here.</p>
//           </div>
//         )}
//       </TabScreen>
//     </div>
//   );
// };

const ExcellenceDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = React.useState(id);
  const [activeData, setActiveData] = useState(id < 15 ? "endo" : "");
  const data = id < 15 ? "endo" : "";
  console.log(activeTab);
  // setActiveTab(id);
  // Define your tab data dynamically
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

  const breadCrumb = [
    { href: "/", title: "home" },
    { href: "/excellence", title: "center of excellence" },
    {
      href: "",
      title:
        activeData === "endo"
          ? endoData[activeTab].title
          : generalData[activeTab],
    },
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
            <div>
              <Accordion title="Endocrinology">
                <Tabs
                  activeTab={Number(activeTab)}
                  onTabClick={onTabClick}
                  hideNavBtnsOnMobile={false}
                  className="flex flex-col col-span-2"
                >
                  {/* Map over Endocrinology tab data and render Tab components */}
                  {endoData.map((tab, index) => (
                    <Tab key={index}>
                      <img src={tab.imgSrc} />{" "}
                      {/* Assuming 'imgSrc' is the correct property */}
                      {tab.title}
                    </Tab>
                  ))}
                </Tabs>
              </Accordion>

              <Accordion title="General Surgery">
                <Tabs
                  activeTab={Number(activeTab)}
                  onTabClick={onTabClick}
                  hideNavBtnsOnMobile={false}
                  className="flex flex-col col-span-2"
                >
                  {/* Map over General Surgery tab data and render Tab components */}
                  {generalData.map((tab, index) => (
                    <Tab key={index}>
                      <img src={tab.imgSrc} />{" "}
                      {/* Assuming 'imgSrc' is the correct property */}
                      {tab.title}
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
                  className="ps-12 col-span-6"
                  key={index}
                  activeTab={activeTab}
                  index={index}
                >
                  {tab.content}
                </TabScreen>
              ))
            : generalData.map((tab, index) => (
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
