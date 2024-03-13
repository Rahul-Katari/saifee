import React from "react";
import { Tab, TabScreen, Tabs } from "react-tabs-scrollable";
import banner from "../assets/images/banners/excellence-details-banner.png";
import DoctorServices from "./DoctorServices";

const DoctorDetails = () => {
  const Qualification = () => {
    return (
      <section>
        <div>
          <h3 className="text-theme text-4xl font-semibold">Qualification</h3>
          <ul className="list-disc-default">
            <li>
              MBBS, Gandhi Medical College, University of Health Sciences,
              Hyderabad in 1996
            </li>
            <li>
              Intern - Internal Medicine , St. Barnabas Medical Centre
              Livingston, NJ, USA (1998–1999)
            </li>
            <li>
              Resident – Internal Medicine , St. Barnabas Medical Centre
              Livingston, NJ USA (1999–2001)
            </li>
            <li>
              Fellowship in Haematology and Oncology Caritas St. Elizabeth’s
              Medical Centre Tufts University School of Medicine Boston MA USA
              (2002–2005)
            </li>
            <li>
              Chief fellow – Sub-speciality of Haematology and Oncology Caritas
              St Elizabeth’s Medical Centre Tufts University School of Medicine
              Boston MA USA (2002–2005)
            </li>
          </ul>

          <h2 className="text-theme text-2xl">Experience</h2>
          <ul className="list-disc-default">
            <li>Medical Oncologists Care Hospital Hyderabad</li>
          </ul>

          <h2 className="text-theme text-2xl">Memberships</h2>
          <ul className="list-disc-default">
            <li>European Society of Medical Oncology</li>
            <li>Indian Medical Association</li>
          </ul>

          <h2 className="text-theme text-2xl">Research Presentation</h2>
          <ul className="list-disc-default">
            <li>
              26th Annual meeting of American Society of Apheresis ASFA 2005
              Plenary Session Safety and Efficacy of Peripheral Blood Progenitor
              cell Mobilization and collection in Patients with Advanced
              Coronary Heart Disease
            </li>
            <li>
              46th Annual Meeting American Society Hematology ASH 2005 Practice
              Forum The Business Practice The Evolving State Hematology Practice
              Progress Challenges 2004 Advocacy Efforts
            </li>
            <li>
              {" "}
              Sinha S Schneider D Aish L Oo TH Morphologic heterogeneity Acute
              Promyelocytic Leukemia Annual Research Day Caritas St Elizabeth’s
              Med...
            </li>
          </ul>
        </div>
      </section>
    );
  };
  const Services = () => {
    <section>
      <div>
        <h3 className="text-theme text-4xl font-semibold uppercase">service</h3>
        <DoctorServices speciality={"endo"} />
      </div>
    </section>;
  };
  const tabData = [
    { title: "About us", content: "Content for About us tab" },
    { title: "Qualification", content: <Qualification /> },
    { title: "Services", content: <Services /> },
    { title: "Blog", content: "Content for Blog tab" },
    { title: "Videos", content: "Content for Videos tab" },
    { title: "Back To Tap", content: "Content for Back To Tap tab" },
  ];

  const [activeTab, setActiveTab] = React.useState(0);
  const onTabClick = (e, index) => {
    setActiveTab(index);
  };
  return (
    <div className="doctor-details">
      <div>
        <img src={banner} />
      </div>
      <section>
        <div className="grid grid-cols-8 max-w-7xl">
          <div className="col-span-1">
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
            </Tabs>
          </div>
          {/* Map over tab data and conditionally render TabScreen components */}
          {tabData.map((tab, index) => (
            <TabScreen
              className="ps-12 col-span-7"
              key={index}
              activeTab={activeTab}
              index={index}
            >
              {tab.content}
            </TabScreen>
          ))}
        </div>
      </section>
      {/* testimonials start  */}
      <section>
        <div className="bg-banner py-12">
          <h3 className="text-theme text-4xl font-semibold">
            Patient Testimonials
          </h3>
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-theme text-4xl font-semibold">Blogs</h3>
          <div></div>
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-theme text-4xl font-semibold">Regular News</h3>
          <div></div>
        </div>
      </section>
    </div>
  );
};
export default DoctorDetails;
