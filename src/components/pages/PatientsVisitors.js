import React from "react";
import banner from "../../assets/images/banners/patients-visitors.png";
import { Tabs, Tab, TabScreen } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";
const PatientsVisitors = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const onTabClick = (e, index) => {
    setActiveTab(index);
  };
  return (
    <div>
      <div>
        <img src={banner} alt="banner" />
      </div>
      <div className="patients-visitors">
        <Tabs
          className="flex justify-center"
          activeTab={activeTab}
          onTabClick={onTabClick}
          hideNavBtnsOnMobile={false}
        >
          <Tab>Plan For Visit</Tab>
          <Tab>Patient Rights & Responsibilities</Tab>
          <Tab>Insurance & TPA</Tab>
          <Tab>Dischargeguide</Tab>
          <Tab>Surgery Booking</Tab>
        </Tabs>
        <TabScreen className="max-w-7xl m-auto">
          {activeTab === 0 && (
            <div>
              <div className="my-5 text-content">
                <h2 className="text-theme font-medium text-xl pb-4 highlight-border highlight-border-left">
                  Plan For Visit
                </h2>
                <p>What is Lorem Ipsum?</p>
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
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </p>

                <p className="mt-5">Where does it come from?</p>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and
                  Evil) by Cicero, written in 45 BC. This book is a treatise on
                  the theory of ethics, very popular during the Renaissance. The
                  first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                  comes from a line in section 1.10.32. The standard chunk of
                  Lorem Ipsum used since the 1500s is reproduced below for those
                  interested. Sections 1.10.32 and 1.10.33 from "de Finibus{" "}
                </p>
              </div>
            </div>
          )}
          {activeTab === 1 && (
            <div className="my-5">
              <h2 className="text-theme font-medium text-xl pb-4 highlight-border highlight-border-left">
                Patient Rights & Responsibilities
              </h2>
              <p>Content for Diagnostic & Therapeutic tab goes here.</p>
            </div>
          )}
          {activeTab === 2 && (
            <div className="my-5">
              <h2 className="text-theme font-medium text-xl pb-4 highlight-border highlight-border-left">
                Insurance & TPA
              </h2>
              <p>Content for Pharmacy tab goes here.</p>
            </div>
          )}
          {activeTab === 3 && (
            <div className="my-5">
              <h2 className="text-theme font-medium text-xl pb-4 highlight-border highlight-border-left">
                Dischargeguide
              </h2>
              <p>Content for Pharmacy tab goes here.</p>
            </div>
          )}
          {activeTab === 4 && (
            <div className="my-5">
              <h2 className="text-theme font-medium text-xl pb-4 highlight-border highlight-border-left">
                Surgery Booking
              </h2>
              <p>Content for Pharmacy tab goes here.</p>
            </div>
          )}
        </TabScreen>
      </div>
    </div>
  );
};
export default PatientsVisitors;
