import BreadCrumb from "../common/BreadCrumb";
import banner from "../../assets/images/banners/checkup-packages.png"
import pack1 from "../../assets/images/health-package1.png"
import pack2 from "../../assets/images/health-package2.png"
import pack3 from "../../assets/images/health-package3.png"
import pack4 from "../../assets/images/health-package4.png"
const HealthCheckup = () => {
  const breadCrumb = [
    { href: "/", title: "home" },
    { href: "/heathCheckup", title: "health checkup packages" }
  ];
  return (
    <div>
      <div>
        <img src={banner} />
      </div>
      <BreadCrumb linkData={breadCrumb} />
      <section>
        <div className="max-w-5xl m-auto">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-banner p-2">
              <div className="mx-auto  flex  space-x-4">
                <div className="flex-shrink-0">
                  <img src={pack1} alt="ChitChat Logo" />
                </div>
                <div>
                  <div className="text-xl mt-3 font-medium text-[#0469A9]">DIABETES PACKAGE 1</div>
                  <ul className="list-disc-default text-gray-500 text-xs ps-4 mb-0">
                    <li>Fasting Plasma Glucose - FPG</li>
                    <li>Post Prandial Plasma Glucose - PPPG</li>
                    <li>HbA1C</li>
                    <li>Fasting Lipid Profile - FLP</li>
                    <li>SGPT / SGOT</li>
                    </ul>
                    <p className="text-[#FF0000]">Sr. Creatinine</p>
                    <ul className="list-disc-default text-gray-500 text-xs ps-4 mt-0">
                    <li>SPOT URINE MICROALBUMIN/ CREATININE RATIO - UACR</li>
                    <li>Complete Blood Picture</li>
                    <li>Complete Urine Examination</li>
                    <li>Diabetic Nerve Test - VPT</li>
                  </ul>

                </div>
              </div>
              <div className="flex justify-end">
                <button className="mt-2 px-12 py-2 border rounded-md btn-primary">Book Now</button>
              </div>
            </div>
            <div className="bg-banner p-2">
              <div className="mx-auto  flex  space-x-4">
                <div className="flex-shrink-0">
                  <img src={pack2} alt="ChitChat Logo" />
                </div>
                <div>
                  <div className="text-xl mt-3 font-medium text-[#0469A9]">DIABETES PACKAGE 1</div>
                  <ul className="list-disc-default text-gray-500 text-xs ps-4 mb-0">
                    <li>Fasting Plasma Glucose - FPG</li>
                    <li>Post Prandial Plasma Glucose - PPPG</li>
                    <li>HbA1C</li>
                    <li>Fasting Lipid Profile - FLP</li>
                    <li>SGPT / SGOT</li>
                    </ul>
                    <p className="text-[#FF0000]">Sr. Creatinine</p>
                    <ul className="list-disc-default text-gray-500 text-xs ps-4 mt-0">
                    <li>SPOT URINE MICROALBUMIN/ CREATININE RATIO - UACR</li>
                    <li>Complete Blood Picture</li>
                    <li>Complete Urine Examination</li>
                    <li>Diabetic Nerve Test - VPT</li>
                  </ul>

                </div>
              </div>
              <div className="flex justify-end">
                <button className="mt-2 px-12 py-2 border rounded-md btn-primary">Book Now</button>
              </div>
            </div>
            <div className="bg-banner p-2">
              <div className="mx-auto  flex  space-x-4">
                <div className="flex-shrink-0">
                  <img src={pack3} alt="ChitChat Logo" />
                </div>
                <div>
                  <div className="text-xl mt-3 font-medium text-[#0469A9]">DIABETES PACKAGE 1</div>
                  <ul className="list-disc-default text-gray-500 text-xs ps-4 mb-0">
                  <li>Fasting Plasma Glucose - FPG</li>
    <li>Post Prandial Plasma Glucose - PPPG</li>
    <li>HbA1C</li>
    <li>Fasting Lipid Profile - FLP</li>
                    </ul>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="mt-2 px-12 py-2 border rounded-md btn-primary">Book Now</button>
              </div>
            </div>
            <div className="bg-banner p-2">
              <div className="mx-auto  flex  space-x-4">
                <div className="flex-shrink-0">
                  <img src={pack4} alt="ChitChat Logo" />
                </div>
                <div>
                  <div className="text-xl mt-3 font-medium text-[#0469A9]">DIABETES PACKAGE 1</div>
                  <ul className="list-disc-default text-gray-500 text-xs ps-4 mb-0">
                  <li>Estradiol - E2</li>
    <li>Lutenizing Hormone - LH</li>
    <li>Follicle Stimulating Hormone - FSH</li>
    <li>Testosterone - TOTAL</li>
    <li>Prolactin - PRL</li>
    <li>Thyroid Stimulating Hormone - TSH</li>
    <li>Free - T4</li>
    <li>Anti Mullerian Hormone - AMH</li>
                    </ul>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="mt-2 px-12 py-2 border rounded-md btn-primary">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HealthCheckup;
