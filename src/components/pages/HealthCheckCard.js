import { Link } from "react-router-dom";

const HealthCheckCard = ({ packageName, imgSrc }) => {
  return (
    <div className="bg-banner p-4">
      <div className="mx-auto  flex  space-x-4">
        <div className="flex-shrink-0">
          <img src={imgSrc} alt="ChitChat Logo" />
        </div>
        <div>
          <div className="text-xl mt-3 font-medium text-[#0469A9]">
            {packageName}
          </div>
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
        <Link
          to={"/healthCheckUpForm"}
          className="mt-2 px-12 py-2 border rounded-md btn-primary"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};
export default HealthCheckCard;
