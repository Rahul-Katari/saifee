import banner from "../../assets/images/banners/privacy-policy.png";
const PrivacyPolicy = () => {
  return (
    <div>
      <div>
        <img src={banner} alt="banner" className="w-full" />
      </div>
      <section>
        <div className="md:mx-28 mx-auto">
          <div className="p-4 space-y-2">
            <h1 className="text-2xl font-bold">Privacy Policy</h1>

            <h2 className="text-lg font-bold">Introduction:</h2>
            <p>
              This Privacy Policy outlines how Dr. Manasa Mynepally's Center
              collects, uses, discloses, and protects personal information
              obtained from patients, visitors, and users of our website and
              services. We are committed to ensuring the privacy and security of
              your personal data by applicable laws and regulations, including
              the General Data Protection Regulation (GDPR) and the Health
              Insurance Portability and Accountability Act (HIPAA).
            </p>

            <h2 className="text-lg font-bold">Information Collection:</h2>
            <p>
              We collect personal information, including but not limited to,
              name, contact details, medical history, and insurance information,
              to provide healthcare services and support to our patients.
              Information may be collected through various channels, including
              in-person consultations, online forms, and electronic health
              records.
            </p>
            <h2 className="text-lg font-bold">Use of Information:</h2>
            <p>
              Personal information collected by Dr. Manasa Mynepally's Center is
              used to provide medical treatment, manage appointments, process
              payments, and communicate with patients about their healthcare
              needs. We may also use information for internal purposes, such as
              quality improvement initiatives and research projects, subject to
              applicable laws and regulations.
            </p>

            <h2 className="text-lg font-bold">Disclosure of Information:</h2>
            <p>
              We may disclose personal information to third-party service
              providers, such as medical laboratories, insurance companies, and
              billing agencies, to facilitate healthcare services and
              administrative functions. We may also disclose information as
              required by law or in response to legal requests, such as court
              orders or subpoenas.
            </p>

            <h2 className="text-lg font-bold">Data Security:</h2>
            <p>
              Dr. Manasa Mynepally's Hospital implements appropriate technical
              and organizational measures to safeguard personal information
              against unauthorized access, disclosure, alteration, or
              destruction. We restrict access to personal data to authorized
              personnel only and maintain security protocols to protect data
              integrity and confidentiality.
            </p>

            <h2 className="text-lg font-bold">Retention of Information:</h2>
            <p>
              We retain personal information for as long as necessary to fulfill
              the purposes for which it was collected, including legal,
              regulatory, and operational requirements. Upon the expiration of
              retention periods, we securely dispose of or anonymize personal
              data by our data retention policies.
            </p>

            <h2 className="text-lg font-bold">Your Rights:</h2>
            <p>
              Patients have the right to access, rectify, or delete their
              personal information, subject to legal and contractual
              obligations. To exercise these rights or for inquiries regarding
              our Privacy Policy, please contact our Privacy Officer at{" "}
              <a
                href="mailto:doctormanasamynepally@gmail.com"
                className="text-blue-900 font-medium hover:text-blue-700"
              >
                doctormanasamynepally@gmail.com
              </a>
              /
              <a
                href="tel:+917340040097"
                className="text-blue-900 font-medium hover:text-blue-700"
              >
                +91 73400 40097
              </a>
              .
            </p>

            <h2 className="text-lg font-bold">Changes to Privacy Policy:</h2>
            <p>
              Dr. Manasa Mynepally's Hospital reserves the right to update or
              modify this Privacy Policy at any time without prior notice. We
              encourage patients and users to review this Policy periodically
              for any changes or updates.
            </p>

            <h2 className="text-lg font-bold">Contact Us:</h2>
            <p>
              If you have any questions or concerns about our Privacy Policy or
              data practices, please contact our Privacy Officer at +91 73400
              40097.
            </p>

            <h2 className="text-lg font-bold">Effective Date:</h2>
            <p>
              This Privacy Policy is effective as of the above date and
              supersedes any previous versions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
