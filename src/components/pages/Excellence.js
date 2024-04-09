import { useEffect, useState } from "react";
import banner from "../../assets/images/banners/excellence-banner.png";
import DoctorServices from "../DoctorServices";
import useApiData from "../../controller/useApiData";

const Excellence = () => {
  const [servicesData, setServicesData] = useState(null);
  const { data: services, loading, error } = useApiData("services?reqtype=api");
  useEffect(() => {
    if (services) {
      setServicesData(services?.result?.data?.services);
    }
  }, [services]);
  return (
    <div>
      {console.log(servicesData)}
      <div>
        <img src={banner} className="w-full" />
      </div>
      <div className="max-w-7xl m-auto">
        <h1 className="uppercase text-theme text-3xl font-medium my-12 text-center highlight-border">
          endocrinology
        </h1>
        <DoctorServices
          speciality={"endo"}
          services={servicesData?.filter(
            (service) => service.servicecategory === 1
          )}
        />
        <h1 className="uppercase text-theme text-3xl font-medium my-12 text-center highlight-border">
          general Surgery
        </h1>
        <DoctorServices
          speciality={""}
          services={servicesData?.filter(
            (service) => service.servicecategory === 2
          )}
        />
      </div>
    </div>
  );
};

export default Excellence;
