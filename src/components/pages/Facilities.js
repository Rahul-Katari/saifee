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
            <div className="my-5 text-content space-y-2">
              <h1 className="text-2xl font-bold mb-4">
                Welcome to Dr. Manasa Mynepally's Hospital
              </h1>
              <p>
                We strive to ensure that your visit to our facility is as
                smooth and comfortable as possible. To help you plan your
                visit effectively, please review the following information:
              </p>

              <ol className="list-decimal pl-4 space-y-2">
                <li>
                  <strong>Appointment Scheduling:</strong> To schedule an
                  appointment with one of our healthcare providers, please
                  contact our appointment desk at{" "}
                  <span className="font-semibold">+91 7340 040 097</span> or
                  use our online appointment booking system. We recommend
                  scheduling appointments in advance to ensure availability
                  and minimize waiting times.
                </li>
                <li>
                  <strong>Preparing for Your Appointment:</strong> Before your
                  scheduled appointment, please gather any relevant medical
                  records, test results, and insurance information that may be
                  required. Arrive at least 15 minutes before your scheduled
                  appointment time to complete any necessary paperwork.
                </li>
                <li>
                  <strong>Insurance and Payment Information:</strong> Dr.
                  Manasa Mynepally's Hospital accepts a variety of insurance
                  plans. Please verify your insurance coverage and co-payment
                  requirements before your visit. For uninsured or self-pay
                  patients, payment options and financial assistance programs
                  may be available. Please inquire with our billing department
                  for further information.
                </li>
                <li>
                  <strong>Hospital Policies:</strong> For the safety and
                  well-being of all patients and visitors, Dr. Manasa
                  Mynepally's Hospital maintains certain policies and
                  guidelines. Please familiarize yourself with our hospital
                  policies regarding visitor hours, smoking regulations,
                  infection control measures, and other pertinent information.
                </li>
                <li>
                  <strong>Visitor Information:</strong> We welcome visitors to
                  Dr. Manasa Mynepally's Hospital and encourage their support
                  and companionship during your stay. However, please be
                  mindful of our visitor policies, including restrictions on
                  visiting hours, the number of visitors allowed per patient,
                  and guidelines for children and pets.
                </li>
                <li>
                  <strong>Accessibility and Accommodations:</strong> Dr.
                  Manasa Mynepally's Hospital is committed to providing
                  accessible facilities and accommodations for individuals
                  with disabilities. If you require special assistance or
                  accommodations during your visit, please notify our staff in
                  advance, and we will do our best to accommodate your needs.
                </li>
                <li>
                  <strong>Feedback and Concerns:</strong> Your feedback is
                  important to us. If you have any questions, concerns, or
                  suggestions regarding your visit to Dr. Manasa Mynepally's
                  Hospital, please don't hesitate to contact our patient
                  relations department. We are dedicated to providing
                  exceptional care and addressing any issues promptly and
                  effectively.
                </li>
                <li>
                  <strong>Emergency Services:</strong> In the event of a
                  medical emergency, please proceed to the nearest emergency
                  room or dial{" "}
                  <span className="font-semibold">+91 7340 040 097</span>. Dr.
                  Manasa Mynepally's Hospital does not provide emergency
                  services and is not equipped to handle life-threatening
                  emergencies.
                </li>
                <li>
                  <strong>Contact Information:</strong> For general inquiries
                  or assistance, please contact our hospital reception at{" "}
                  <span className="font-semibold">+91 7340 040 097</span> or
                  visit our website at{" "}
                  <a
                    href="mailto:doctormanasamynepally@gmail.com"
                    className="font-semibold"
                  >
                    doctormanasamynepally@gmail.com
                  </a>
                  . Our staff is available to assist you during regular
                  business hours.
                </li>
              </ol>

              <p>
                We look forward to welcoming you to Dr. Manasa Mynepally's
                Hospital and providing you with exceptional care and service.
                Thank you for choosing us for your healthcare needs.
              </p>
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
