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
        <TabScreen className="max-w-7xl m-auto max-sm:m-4">
          {activeTab === 0 && (
            <div>
              <div className="my-5 text-content space-y-2">
                <h1 className="text-2xl font-bold mb-4">
                Welcome to Dr. Manasa Mynepally-Diabetes, Thyroid & Endocrine Centre
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
            <div className="my-5 text-content space-y-2">
              <h1 className="text-2xl font-bold mb-4">
                Patients’ Rights & Responsibilities:
              </h1>
              <p>
                <strong>At Dr Manasa Mynepally-Diabetes, Thyroid & Endocrine Centre,</strong> we are
                committed to upholding the rights and responsibilities of our
                patients and visitors. Understanding your rights and
                responsibilities ensures a positive healthcare experience and
                fosters mutual respect between patients, healthcare providers,
                and hospital staff. Please review the following guidelines to
                familiarize yourself with your rights and responsibilities while
                receiving care at our facility:
              </p>

              <div className="space-y-2">
                <h2 className="font-semibold">Patient's Rights:</h2>
                <ul className="list-disc pl-4 space-y-2">
                  <li>
                    <strong>Right to Respect and Dignity:</strong> You have the
                    right to be treated with respect, dignity, and courtesy by
                    all members of our healthcare team, regardless of your race,
                    ethnicity, religion, gender, sexual orientation, or
                    socioeconomic status.
                  </li>
                  <li>
                    <strong>Right to Privacy and Confidentiality:</strong> Your
                    medical records and personal information will be kept
                    confidential and will only be disclosed as required by law
                    or with your consent. You have the right to privacy during
                    consultations, examinations, and treatments.
                  </li>
                  <li>
                    <strong>Right to Informed Consent:</strong> You have the
                    right to receive clear and understandable information about
                    your medical condition, proposed treatment options, risks,
                    benefits, and alternatives. You have the right to make
                    informed decisions about your healthcare based on this
                    information.
                  </li>
                  <li>
                    <strong>Right to Quality Care:</strong> You have the right
                    to receive safe, high-quality, and evidence-based medical
                    care from qualified healthcare professionals. You have the
                    right to expect prompt attention to your healthcare needs
                    and timely access to services.
                  </li>
                  <li>
                    <strong>Right to Pain Management:</strong> You have the
                    right to appropriate assessment and management of your pain,
                    by accepted medical standards and your individual needs and
                    preferences.
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h2 className="font-semibold">Patient's Responsibilities:</h2>
                <ul className="list-disc pl-4 space-y-2">
                  <li>
                    <strong>Provide Accurate Information:</strong> You are
                    responsible for providing accurate and complete information
                    about your medical history, current symptoms, medications,
                    and any other relevant health-related information to your
                    healthcare provider.
                  </li>
                  <li>
                    <strong>Follow Treatment Plans:</strong> You are responsible
                    for following the treatment plans, instructions, and
                    recommendations provided by your healthcare provider,
                    including taking medications as prescribed, attending
                    appointments, and adhering to dietary and lifestyle
                    modifications.
                  </li>
                  <li>
                    <strong>Respect Hospital Policies:</strong> You are
                    responsible for adhering to hospital policies and
                    procedures, including those related to visitor guidelines,
                    infection control measures, and respectful behaviour towards
                    staff, patients, and visitors.
                  </li>
                  <li>
                    <strong>Participate in Your Care:</strong> You are
                    encouraged to actively participate in your healthcare
                    decisions, ask questions, seek clarification, and express
                    your concerns or preferences regarding your treatment and
                    care.
                  </li>
                  <li>
                    <strong>Provide Feedback:</strong> Your feedback is valuable
                    in helping us improve our services. Please share your
                    comments, suggestions, or concerns with our staff or through
                    our designated feedback channels.
                  </li>
                </ul>
              </div>

              <p>
                By understanding and respecting these rights and
                responsibilities, we can work together to ensure a positive and
                collaborative healthcare experience for all.
              </p>
              <p>
                <strong>
                  For more information or assistance, please contact our Patient
                  Relations Department.
                </strong>
              </p>
            </div>
          )}
          {activeTab === 2 && (
            <div className="my-5 space-y-2 text-content">
              <h1 className="text-2xl font-bold mb-4">
                Insurance & TPA (Third Party Administrator):
              </h1>
              <p>
                Welcome to the Insurance & TPA section at Dr. Manasa Mynepally's
                Hospital. We understand that navigating the complexities of
                health insurance and third-party administration can be
                overwhelming. That's why we're here to provide you with
                comprehensive information and support to ensure a smooth and
                seamless experience.
              </p>

              <h2 className="font-semibold">Understanding Health Insurance:</h2>
              <p>
                Health insurance plays a crucial role in accessing quality
                healthcare services. It provides financial coverage for medical
                expenses incurred due to illness, injury, or preventive care. At
                Dr. Manasa Mynepally's Hospital, we work with various insurance
                providers to facilitate billing and reimbursement for eligible
                services.
              </p>

              <h2 className="font-semibold">
                Third-Party Administrator (TPA):
              </h2>
              <p>
                A Third Party Administrator (TPA) is an organization that
                processes insurance claims and provides administrative services
                on behalf of insurance companies. TPAs play a vital role in
                managing healthcare benefits, including claims processing,
                network management, and customer service. Dr. Manasa Mynepally's
                Hospital collaborates with TPAs to streamline insurance-related
                processes and enhance the patient experience.
              </p>

              <h2 className="font-semibold">
                Insurance Coverage and Eligibility:
              </h2>
              <p>
                Before seeking medical care at Dr Manasa Mynepally's Center,
                it's essential to understand your insurance coverage and
                eligibility criteria. Insurance policies vary in terms of
                coverage, deductibles, co-payments, and network providers. We
                recommend contacting your insurance provider or TPA to verify
                coverage details and understand any out-of-pocket expenses you
                may incur.
              </p>

              <h2 className="font-semibold">Navigating Insurance Claims:</h2>
              <p>
                Our dedicated team is here to assist you with navigating
                insurance claims and reimbursement processes. We'll work closely
                with your insurance provider or TPA to ensure accurate and
                timely processing of claims. Please provide us with your
                insurance information upon registration, and we'll handle the
                rest, keeping you informed every step of the way.
              </p>

              <h2 className="font-semibold">Billing and Payment Options:</h2>
              <p>
                At Dr Manasa Mynepally-Diabetes, Thyroid & Endocrine Centre, we offer flexible billing
                and payment options to accommodate your financial needs. We
                accept various payment methods, including cash, credit/debit
                cards, and online payment portals. Our billing team is available
                to answer any questions you may have regarding invoices,
                statements, or payment arrangements.
              </p>

              <h2 className="font-semibold">Patient Advocacy and Support:</h2>
              <p>
                We understand that dealing with insurance-related matters can be
                stressful. Our patient advocacy team is here to advocate on your
                behalf and provide support throughout the insurance process.
                Whether you have questions about coverage, claims, or billing,
                we're committed to ensuring your peace of mind and satisfaction.
              </p>

              <h2 className="font-semibold">Contact Us:</h2>
              <p>
                For inquiries or assistance related to insurance and TPA
                matters, please contact our Insurance Helpdesk at{" "}
                <a
                  href="mailto:doctormanasamynepally@gmail.com"
                  className="text-blue-500"
                >
                  doctormanasamynepally@gmail.com
                </a>{" "}
                /{" "}
                <a href="tel:+917340040097" className="text-blue-500">
                  +91 73400 40097
                </a>
                . Our knowledgeable team is available to address your concerns
                and provide guidance on navigating insurance-related processes.
              </p>
            </div>
          )}
          {activeTab === 3 && (
            <div className="my-5 space-y-2 text-content">
              <h1 className="text-2xl font-bold mb-4">Discharge Guide:</h1>

              <p>
                Welcome to Dr. Manasa Mynepally-Diabetes, Thyroid & Endocrine Centre. Our Discharge Guide
                is designed to provide patients and visitors with important
                information and instructions to ensure a smooth transition from
                hospital care to home or follow-up care.
              </p>

              <ol className="list-decimal ml-6 space-y-2">
                <li>
                  <p>
                    <strong>Understanding Your Discharge Plan:</strong>
                  </p>
                  <p>
                    Before leaving the hospital, you will receive a detailed
                    discharge plan outlining your medical condition, treatment
                    received, medications prescribed, and follow-up care
                    instructions. It is essential to review this plan carefully
                    and ask any questions you may have to ensure clarity and
                    understanding.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Medication Management:</strong>
                  </p>
                  <p>
                    Follow the medication schedule provided by your healthcare
                    provider closely. Ensure you understand the dosage,
                    frequency, and potential side effects of each medication. If
                    you have any concerns or experience adverse reactions,
                    contact your healthcare provider immediately.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Follow-up Appointments:</strong>
                  </p>
                  <p>
                    Schedule any necessary follow-up appointments with your
                    primary care physician or specialist as instructed. These
                    appointments are essential for monitoring your progress,
                    addressing any concerns, and adjusting your treatment plan
                    as needed.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Diet and Activity Restrictions:</strong>
                  </p>
                  <p>
                    Follow any dietary restrictions or activity limitations
                    prescribed by your healthcare provider. These
                    recommendations are designed to promote healing and prevent
                    complications. If you have dietary preferences or
                    restrictions, discuss them with your healthcare provider for
                    personalized guidance.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Wound Care and Home Health Services:</strong>
                  </p>
                  <p>
                    If you underwent surgery or have wounds that require care,
                    follow the instructions provided by your healthcare provider
                    for wound care at home. If necessary, arrange for home
                    health services or nursing care to assist with wound care
                    and recovery.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Emergency Contact Information:</strong>
                  </p>
                  <p>
                    Keep a list of emergency contact numbers, including your
                    healthcare provider's office, nearest hospital, and
                    emergency services. In case of any medical emergencies or
                    urgent concerns, seek immediate medical attention or contact
                    your healthcare provider.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Patient Rights and Responsibilities:</strong>
                  </p>
                  <p>
                    Familiarize yourself with your rights and responsibilities
                    as a patient, including your right to informed consent,
                    privacy, and respectful treatment. Likewise, understand your
                    responsibilities, such as following medical advice,
                    providing accurate information, and respecting hospital
                    policies.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Feedback and Follow-up:</strong>
                  </p>
                  <p>
                    We value your feedback and encourage you to share your
                    experience with us. Your input helps us improve our services
                    and ensure we meet the needs of our patients. Additionally,
                    we may follow up with you after discharge to assess your
                    progress and address any remaining concerns.
                  </p>
                </li>
              </ol>

              <p className="mt-4">
                Conclusion: Thank you for entrusting Dr. Manasa Mynepally's
                Hospital with your healthcare needs. We are committed to
                providing you with the highest quality care and support
                throughout your journey to recovery. If you have any questions
                or need assistance, please don't hesitate to contact us.
              </p>
            </div>
          )}
          {activeTab === 4 && (
            <div className="my-5 space-y-2 text-content">
              <h1 className="text-2xl font-bold mb-4">Surgery Booking:</h1>

              <p>
                Welcome to Dr. Manasa Mynepally-Diabetes, Thyroid & Endocrine Centre Surgery Booking page.
                We understand that undergoing surgery can be a significant
                decision, and we are committed to providing you with
                comprehensive information and support throughout the booking
                process. Please review the following guidelines and procedures
                to ensure a smooth and successful surgery booking experience:
              </p>

              <ol className="list-decimal ml-6 space-y-2">
                <li>
                  <p>
                    <strong>Consultation with a Specialist:</strong>
                  </p>
                  <p>
                    Before scheduling surgery, patients are required to undergo
                    a consultation with one of our specialized surgeons. During
                    this consultation, the surgeon will assess your medical
                    condition, discuss treatment options, and recommend the most
                    appropriate surgical approach for your needs.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Pre-operative Evaluation:</strong>
                  </p>
                  <p>
                    Following the consultation, patients may be required to
                    undergo pre-operative tests and evaluations to ensure they
                    are medically fit for surgery. These tests may include blood
                    tests, imaging studies, and consultations with other
                    specialists as necessary.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Informed Consent:</strong>
                  </p>
                  <p>
                    Before the surgery, patients will be required to provide
                    informed consent, indicating their understanding of the
                    proposed procedure, its risks and benefits, and alternative
                    treatment options. Our team will ensure that you have all
                    the information you need to make an informed decision about
                    your surgery.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Scheduling the Surgery:</strong>
                  </p>
                  <p>
                    Once the consultation and pre-operative evaluations are
                    complete, our scheduling team will work with you to arrange
                    a suitable date and time for your surgery. We will do our
                    best to accommodate your preferences while ensuring optimal
                    surgical outcomes and the availability of surgical
                    facilities and staff.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Financial Considerations:</strong>
                  </p>
                  <p>
                    Patients are advised to review their insurance coverage and
                    financial responsibilities associated with the surgery. Our
                    financial counsellors are available to assist you with
                    insurance verification, pre-authorization, and payment
                    arrangements to ensure a seamless billing process.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Preparing for Surgery:</strong>
                  </p>
                  <p>
                    In the days leading up to your surgery, our team will
                    provide you with detailed instructions on pre-operative
                    preparations, including dietary restrictions, medication
                    management, and any specific guidelines for your procedure.
                    It is essential to follow these instructions closely to
                    minimize the risk of complications and ensure a successful
                    surgery.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Post-operative Care:</strong>
                  </p>
                  <p>
                    Following the surgery, patients will receive comprehensive
                    post-operative care instructions, including information on
                    wound care, pain management, activity restrictions, and
                    follow-up appointments. Our medical team will be available
                    to address any questions or concerns you may have during the
                    recovery process.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Patient Support Services:</strong>
                  </p>
                  <p>
                    Throughout your surgical journey, our patient support
                    services team is available to assist you with any
                    non-medical concerns or needs you may have, including
                    transportation arrangements, lodging accommodations, and
                    emotional support.
                  </p>
                </li>
              </ol>

              <p className="mt-4">
                Contact Us:For more information about surgery booking or to
                schedule a consultation with one of our surgeons, please contact
                our Patient Services Department at{" "}
                <a href="tel:+917340040097" className="text-blue-500">
                  +91 73400 40097
                </a>
                .
              </p>
            </div>
          )}
        </TabScreen>
      </div>
    </div>
  );
};
export default PatientsVisitors;
