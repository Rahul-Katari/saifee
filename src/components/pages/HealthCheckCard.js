import { Link } from "react-router-dom";

const HealthCheckCard = ({ healthPackage }) => {
  return (
    <div className="bg-banner p-4">
      <div className="mx-auto  md:flex  space-4">
        <div className="flex-shrink-0">
          <img
            src={healthPackage.package_imgSrc}
            alt="health pckage image"
            className="max-sm:h-[150px] w-full object-cover"
          />
        </div>
        <div>
          <div className="md:text-xl mt-3 font-medium text-[#0469A9]">
            {healthPackage?.package_name}
          </div>
          <ul className="list-disc-default text-gray-500 text-xs ps-4 mb-0">
            <li>{healthPackage.package_description}</li>
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
          to={`/healthCheckUpForm/${healthPackage._id}`}
          className="mt-2 md:px-12 py-2 border rounded-md btn-primary max-sm:text-xs"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};
export default HealthCheckCard;
