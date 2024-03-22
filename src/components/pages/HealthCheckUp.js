import BreadCrumb from "../common/BreadCrumb";
import banner from "../../assets/images/banners/checkup-packages.png";
import pack1 from "../../assets/images/health-package1.png";
import pack2 from "../../assets/images/health-package2.png";
import pack3 from "../../assets/images/health-package3.png";
import pack4 from "../../assets/images/health-package4.png";
import { Link } from "react-router-dom";
import HealthCheckCard from "./HealthCheckCard";
const HealthCheckup = () => {
  const breadCrumb = [
    { href: "/", title: "home" },
    { href: "/heathCheckup", title: "health checkup packages" },
  ];
  return (
    <div>
      <div>
        <img src={banner} />
      </div>
      <BreadCrumb linkData={breadCrumb} />
      <section>
        <div className="max-w-5xl m-auto">
          <div className="md:grid grid-cols-2 gap-4">
            <HealthCheckCard
              packageName={"DIABETES PACKAGE 1"}
              imgSrc={pack1}
            />
            <HealthCheckCard
              packageName={"DIABETES PACKAGE 2"}
              imgSrc={pack2}
            />
            <HealthCheckCard
              packageName={"DIABETES PACKAGE 3"}
              imgSrc={pack3}
            />
            <HealthCheckCard packageName={"FERTILITY PANEL"} imgSrc={pack4} />
          </div>
        </div>
      </section>
    </div>
  );
};
export default HealthCheckup;
