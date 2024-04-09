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
              {servicesDetails?.service_desc}
              {/* <p>What is Lorem Ipsum?</p>
             
              <p>
               Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
             <p>Why do we use it?</p>
              <p>
               It is a long established fact that a reader will be
                distracted by the readable content of a page when looking at
                its layout. The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution of letters, as opposed to
                using 'Content here, content here', making it look like
                readable English. Many desktop publishing packages and web
                page editors now use Lorem Ipsum as their default model text,
                and a search for 'lorem ipsum' will uncover many web sites
                still in their infancy. Various versions have evolved over
                the years, sometimes by accident, sometimes on purpose
                (injected humour and the like). 
              </p>
             <p className="mt-5">Where does it come from?</p>
             
              <p>
                // Contrary to popular belief, Lorem Ipsum is not simply random
                // text. It has roots in a piece of classical Latin literature
                from // 45 BC, making it over 2000 years old. Richard
                McClintock, a // Latin professor at Hampden-Sydney College in
                Virginia, looked up // one of the more obscure Latin words,
                consectetur, from a Lorem // Ipsum passage, and going through
                the cites of the word in // classical literature, discovered the
                undoubtable source. Lorem // Ipsum comes from sections 1.10.32
                and 1.10.33 of "de Finibus // Bonorum et Malorum" (The Extremes
                of Good and Evil) by Cicero, // written in 45 BC. This book is a
                treatise on the theory of // ethics, very popular during the
                Renaissance. The first line of // Lorem Ipsum, "Lorem ipsum
                dolor sit amet..", comes from a line // in section 1.10.32. The
                standard chunk of Lorem Ipsum used since // the 1500s is
                reproduced below for those interested. Sections // 1.10.32 and
                1.10.33 from "de Finibus
              </p> */}
            </div>
          </div>
          <div className="my-5" id="causes">
            <h2 className="text-theme font-medium text-xl pb-4 highlight-border highlight-border-left">
              Causes
            </h2>
            {servicesDetails?.service_causes}

            {/* <p>What is Lorem Ipsum?</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>Why do we use it?</p>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
            <p className="mt-5">Where does it come from?</p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus{
            </p> */}
          </div>
          <div className="my-5" id="symptoms">
            <h2 className="text-theme font-medium text-xl pb-4 highlight-border highlight-border-left">
              Symptoms
            </h2>
            {servicesDetails?.service_symptoms}

            {/* <p>What is Lorem Ipsum?</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>Why do we use it?</p>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
            <p className="mt-5">Where does it come from?</p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus{
            </p> */}
          </div>
          <div className="my-5" id="treatment-management">
            <h2 className="text-theme font-medium text-xl pb-4 highlight-border highlight-border-left">
              Treatment & Management
            </h2>
            {servicesDetails?.service_treatment}
            {/* <p>What is Lorem Ipsum?</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>Why do we use it?</p>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
            <p className="mt-5">Where does it come from?</p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus{
            </p> */}
          </div>
        </div>
        {/* </TabScreen> */}
      </div>
    </div>
  );
};
export default ExcellenceContentTabs;
