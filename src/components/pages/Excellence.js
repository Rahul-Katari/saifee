import banner from "../../assets/images/excellence-banner.png";
import DoctorServices from "../DoctorServices";

const Excellence = () => {
  return (
    <div>
      <div>
        <img src={banner} className="w-full" />
      </div>
      <div className="max-w-7xl m-auto">
        <h1 className="uppercase text-theme text-3xl font-medium my-12 text-center highlight-border">
          endocrinology
        </h1>
        <DoctorServices speciality={"endo"} />
        <h1 className="uppercase text-theme text-3xl font-medium my-12 text-center highlight-border">
          general Surgery
        </h1>
        <DoctorServices speciality={""} />
      </div>
    </div>
  );
};

export default Excellence;
