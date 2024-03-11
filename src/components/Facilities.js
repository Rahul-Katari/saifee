import React from "react";
import { Tabs, Tab, TabScreen } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";
import banner from "../assets/images/banners/facilities.png";

const Facilities = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const onTabClick = (e, index) => {
    setActiveTab(index);
  };
  return (
    <div className="facilities-main-div">
      <div>
        <img src={banner} className="w-full" />
      </div>
      <div className="max-w-7xl md:m-auto md:mt-12 m-4">
        <Tabs
          className="flex justify-center"
          activeTab={activeTab}
          onTabClick={onTabClick}
          hideNavBtnsOnMobile={false}
        >
          <Tab className="rounded flex items-center gap-x-4 md:text-xl font-medium">
            <div>Facilities & Services</div>
          </Tab>
          <Tab className="rounded flex items-center gap-x-4 md:text-xl font-medium">
            Diagnostic & Therapeutic
          </Tab>
          <Tab className="rounded flex items-center gap-x-4 md:text-xl font-medium">
            Pharmacy
          </Tab>
        </Tabs>
        <TabScreen>
          {activeTab === 0 && (
            <div>
              <div className="my-5">
                <h2 className="text-theme font-medium">Out Patient Services</h2>
                <p>
                  TK Hospitals’ outpatient department provides OPD services
                  across almost all specialties. Experienced team of expert
                  doctors and staff provide comprehensive care. The OPD clinic
                  provides seamless care and comprehensive diagnostic facilities
                  under one roof for a hassle-free and comfortable experience.
                  We request our patients to book appointments in advance so
                  that they can get priority upon hospital visit and reach the
                  hospital within the given time.
                </p>
                <p className="my-5">
                  Patients who come to the hospital for the first time should
                  bring all their previous medical reports, diagnostic test lab
                  reports, files, and relevant medical documents.
                </p>
              </div>

              <div className="my-5">
                <h3 className="text-theme text-2xl font-semibold my-5">
                  Day-care
                </h3>
                <h4 className="text-theme font-medium">Day Care Units</h4>
                <p>
                  TK Hospitals offers day care surgeries across these
                  specialties: cardiology, neurology, ophthalmology, ENT,
                  general surgery, vascular surgery, dermatology, plastic
                  surgery, cosmetology, orthopedics, pediatrics, obstetrics, and
                  gynecology, and many more specialties.
                </p>
                <p>
                  The following diagnostic testing and services are available at
                  day care services: all blood tests, ultrasound, MRI, CT scan,
                  PET-CT, X-ray, endoscopy, colonoscopy, mammograms, biopsies,
                  minor surgical procedures, radiation treatments, etc.
                </p>

                <h4 className="text-theme font-medium mt-5">Dialysis Centre</h4>
                <p>
                  TK Hospitals has the best Dialysis Centre in Hyderabad,
                  Telangana. The state-of-the-art dialysis centre provides a
                  complete range of comprehensive dialysis services to patients
                  with end-stage chronic kidney diseases. The centre also
                  provides Peritoneal Dialysis in Hyderabad.
                </p>
                <p>
                  We provide both in-patient and out-patient dialysis services
                  for the following cases:
                </p>
                <ul className="list-disc-default">
                  <li>Chronic kidney disease</li>
                  <li>End-stage kidney disease</li>
                  <li>Kidney failure problems</li>
                </ul>
                <p>
                  The centre provides hemodialysis, CRRT, SLED, etc., and the
                  best peritoneal dialysis in Hyderabad for both adults and
                  children.
                </p>

                <h1 className="text-theme font-medium mt-5">
                  Health Check-ups
                </h1>
                <ul className="list-disc-default mt-0">
                  <li>Master health check male</li>
                  <li>Master health check female</li>
                  <li>Executive health check</li>
                  <li>Liver and kidney screening</li>
                  <li>Healthy heart</li>
                  <li>Heart disease screening test</li>
                  <li>Breast cancer screening test</li>
                  <li>Master cardiac check</li>
                  <li>Women wellness package</li>
                  <li>Men wellness package</li>
                  <li>Colon cancer screening</li>
                </ul>
              </div>

              <div>
                <p>24/7 Emergency & Critical Care Services</p>
                <p>State-of-the-art Emergency Centre</p>
                <p>
                  Emergency Department at TX Hospitals provides comprehensive
                  emergency care seamlessly across all emergency care units. The
                  department ensures smooth work with top-notch and cutting-edge
                  equipment and well-integrated sophisticated electronic
                  monitoring systems devices and equipment All ambulances
                  support advanced care with world-class communication
                  monitoring and life-support systems Ambulances are equipped
                  with electronic monitoring systems protective devices robust
                  monitors other supportive devices systems.
                </p>

                <div>
                  <h2 className="text-theme text-2xl font-semibold my-5">
                    Critical Care Services
                  </h2>
                  <h4 className="text-theme font-medium">
                    Intensive critical care services for faster recovery
                  </h4>
                  <p>
                    “Our specialists work with a purpose which is not only to
                    rapidly stabilize patient but also to plan implement
                    institutional resources without ultimately influence final
                    outcome – recovery patient Qualified trained immensely
                    experienced critical care specialists critical nurses
                    intensivists provide patients who need specialized in set-up
                    which precisely monitored seamlessly controlled All
                    specialists work round clock Critical unit well supported
                    sophisticated most advanced diagnostic monitoring
                    therapeutic All supportive system equipment monitoring
                    system worked cohesively controlled manner provide timely
                    according progressively increasing needs post-operative
                    critically ill patients.
                  </p>
                </div>
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
    </div>
  );
};

export default Facilities;
