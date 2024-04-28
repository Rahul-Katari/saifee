import React from "react";
import { Tabs, Tab, TabScreen } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";
import banner from "../../assets/images/banners/facilities.png";

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
      <div className="max-w-7xl md:m-auto md:mt-10 m-4">
        <Tabs
          className="flex justify-center"
          activeTab={activeTab}
          onTabClick={onTabClick}
          hideNavBtnsOnMobile={false}
        >
          <Tab className="rounded flex items-center gap-x-4 text-sm">
            Facilities & Services
          </Tab>
          <Tab className="rounded flex items-center gap-x-4 text-sm">
            Diagnostic & Therapeutic
          </Tab>
          <Tab className="rounded flex items-center gap-x-4 text-sm">
            Pharmacy
          </Tab>
        </Tabs>
        <TabScreen>
          {activeTab === 0 && (
            <div>
              <div className="my-5">
                <h2 className="text-theme font-medium text-xl pb-4">
                  Out Patient Services
                </h2>
                <p>
                  At Manasa Mynepally Centre in Hyderabad, we prioritise your convenience and well-being by offering comprehensive outpatient services. Whether you're consulting a specialist, undergoing diagnostic tests, or having minor procedures, our outpatient department provides efficient care without hospitalisation. Our healthcare professionals are dedicated to offering personalised medical attention tailored to your needs, ensuring a smooth experience from consultation to treatment.
                </p>

              </div>

              <div className="my-5">
                <h3 className="text-theme text-2xl font-semibold my-5">
                  Day-care
                </h3>
                <h4 className="text-theme font-medium pb-2">Day Care Units</h4>
                <p>
                  Our state-of-the-art day-care facility is designed to accommodate patients who require medical procedures or treatments that extend beyond a simple outpatient visit but do not necessitate an overnight stay. From minor surgeries to infusion therapies, our day-care units provide a comfortable and supportive environment for patients to receive specialised medical care while allowing them to return home on the same day. With advanced medical equipment and a skilled team of healthcare professionals, we ensure optimal outcomes and minimal disruption to your daily routine.
                </p>

                <h4 className="text-theme font-medium mt-5 pb-2">
                  Dialysis Centre
                </h4>
                <p>
                  We provide comprehensive care and support at our specialised dialysis centre for patients with kidney-related conditions that require regular dialysis treatments. Our experienced nephrology team and state-of-the-art dialysis equipment ensure high-quality services tailored to meet each patient's individual needs. Whether you need haemodialysis or peritoneal dialysis, we aim to assist you in managing your kidney health and enhancing your quality of life through personalised care and support.
                </p>

                <p className="mt-4 font-semibold">Dialysis Services Offered:</p>

                <ul className="list-disc-default">
                  <li>Hemodialysis</li>
                  <li>Peritoneal Dialysis</li>
                  <li>Continuous Ambulatory Peritoneal Dialysis (CAPD)</li>
                  <li>Continuous Cycling Peritoneal Dialysis (CCPD)</li>
                  <li>Nocturnal Dialysis</li>
                  <li>Slow Continuous Ultrafiltration (SCUF)</li>
                  <li>Hemodiafiltration (HDF)</li>
                  <li>Intermittent Hemodialysis</li>
                  <li>Sustained Low-Efficiency Dialysis (SLED)</li>
                  <li>Home Hemodialysis</li>

                </ul>

                <h1 className="text-theme font-medium mt-5 pb-2">
                  Health Check-ups
                </h1>
                <p>Preventive healthcare is paramount to maintaining overall health and well-being. At Manasa Mynepally Centre, we offer a range of comprehensive health check-up packages designed to detect potential health issues early and facilitate timely intervention. From basic screenings to advanced diagnostics, our health check-up services are tailored to individuals at different stages of life, ensuring proactive management of health conditions and promoting overall wellness.</p>
                <p className="mt-4 font-semibold">Health Check-Ups Offered:</p>

                <ul className="list-disc-default mt-0">
                  <li>Basic Health Screening</li>
                  <li>Comprehensive Annual Health Check-Up</li>
                  <li>Executive Health Check-Up</li>
                  <li>Women's Wellness Package</li>
                  <li>Men's Health Screening</li>
                  <li>Cardiac Risk Assessment</li>
                  <li>Diabetes Screening</li>
                  <li>Cancer Screening</li>
                  <li>Senior Citizen Health Check-Up</li>
                  <li>Paediatric Health Check-Up</li>

                </ul>
              </div>

              <div>
                <div>
                  <h2 className="text-theme text-2xl font-medium my-5">
                    Critical Care Services
                  </h2>
                  <h4 className="text-theme font-medium pb-2">
                    Intensive critical care services for faster recovery
                  </h4>
                  <p>
                    In critical medical situations or emergencies where intensive monitoring and specialised treatment are required, our critical care services are available round-the-clock to provide prompt and comprehensive care. Our multidisciplinary team of critical care specialists, nurses, and support staff are equipped with state-of-the-art facilities and advanced medical technology to deliver life-saving interventions and compassionate care.
                  </p>
                  <p className="my-4">
                    With a focus on patient safety and comfort, we strive to create a healing environment conducive to faster recovery and improved outcomes for our critically ill patients.
                  </p>
                  <p>
                    Contact Manasa Mynepally Centre today to book your appointment and experience the highest level of medical care and support.
                  </p>
                </div>
              </div>
            </div>
          )}
          {activeTab === 1 && (
            <div>
              <div className="mt-5">
                <h2 className="text-theme font-medium text-xl pb-4">
                  Diagnostic & Therapeutic
                </h2>
                <div>
                  <p>Welcome to Manasa Mynepally Centre
                    Your trusted destination for comprehensive diagnostic and therapeutic services in Hyderabad.
                    Our centre is committed to providing high-quality medical care tailored to meet the diverse needs of our patients.</p>
                </div>

              </div>


              <div id="diagnostic-services" className="my-5">
                <h2 className="text-theme font-medium text-xl pb-4" >Diagnostic Services:</h2>
                <p>At Manasa Mynepally Centre, we offer the best diagnostic services to accurately assess and diagnose various health conditions. Our state-of-the-art facilities and advanced medical technology ensure precise and reliable results. From routine blood tests and imaging studies to specialised diagnostics, our experienced team of healthcare professionals is dedicated to delivering timely and accurate diagnoses.</p>
                <h3 className="mt-4 font-semibold">Our diagnostic services include:</h3>
                <ul className="list-disc-default">
                  <li>Laboratory Testing: Comprehensive blood tests, urine analysis, and other laboratory investigations to assess various aspects of health and detect underlying medical conditions.</li>
                  <li>Imaging Studies: Advanced imaging modalities such as X-rays, ultrasound, CT scans, and MRI scans to visualise internal organs and tissues for diagnostic purposes.</li>
                  <li>Endoscopic Procedures: Minimally invasive procedures such as gastroscopy, colonoscopy, and bronchoscopy to examine the digestive tract, respiratory system, and other internal structures.</li>
                </ul>
              </div>
              <section id="therapeutic-services" className="my-5">
                <h2 className="text-theme font-medium text-xl pb-4">Therapeutic Services:</h2>
                <p>Besides diagnostic services, Manasa Mynepally Centre offers a range of therapeutic interventions to manage and treat various medical conditions. Our skilled medical team utilises evidence-based treatment modalities and state-of-the-art technology to deliver effective therapeutic care.</p>
                <h3 className="mt-4 font-semibold">Our therapeutic services include:</h3>
                <ul className="list-disc-default">
                  <li>Medication Management: Personalised medication regimens tailored to address specific health concerns and manage chronic conditions.</li>
                  <li>Rehabilitation Services: Comprehensive rehabilitation programs, including physiotherapy, occupational therapy, and speech therapy, to promote recovery and improve functional abilities.</li>
                  <li>Interventional Procedures: Minimally invasive procedures such as joint injections, nerve blocks, and pain management techniques to alleviate discomfort and improve quality of life.</li>
                  <li>Counselling and Support Services: Individual and group counselling sessions, psychotherapy, and mental health support services to address emotional and psychological needs.</li>
                </ul>
              </section>
              <footer>
                <p>At Manasa Mynepally Centre, we prioritise patient care and safety, ensuring that each individual receives personalised attention and compassionate care throughout their diagnostic and therapeutic journey. Contact us today to learn more about our services and schedule an appointment with our experienced healthcare team.</p>
              </footer>
            </div>
          )}
          {activeTab === 2 && (
            <div>
              <h2 className="text-theme font-medium text-xl pb-4">Pharmacy</h2>
              <p>
                Welcome to the Pharmacy at Manasa Mynepally Centre, your trusted healthcare partner in Hyderabad. Our pharmacy is committed to providing convenient access to high-quality medications and healthcare products to meet your medical needs.
              </p>
              <p className="my-4">
                Conveniently located within our medical centre, our pharmacy offers a wide range of prescription and over-the-counter medications, ensuring that you have easy access to the medications prescribed by your healthcare provider. Our experienced pharmacists are dedicated to providing personalised service and expert guidance to help you understand your medications and achieve optimal health outcomes.
              </p>
              <p>
                At our pharmacy, we understand that each patient is unique, and we strive to tailor our services to meet your individual needs. Whether you have questions about your medications, need assistance managing multiple prescriptions, or are looking for advice on over-the-counter products, our friendly and knowledgeable staff are here to help.
              </p>
              <p className="my-4">
                In addition to prescription medications, our pharmacy also stocks a variety of healthcare products, including vitamins, supplements, first aid supplies, and personal care items. We are committed to offering competitively priced products without compromising on quality, ensuring that you receive the best value for your healthcare needs.
              </p>
              <p>
                At Manasa Mynepally Centre Pharmacy, your health and well-being are our top priorities. Visit us today and experience the difference that personalised care and quality service can make in your healthcare journey.
              </p>
            </div>
          )}
        </TabScreen>
      </div>
    </div>
  );
};

export default Facilities;
