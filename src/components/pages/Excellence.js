import { useEffect, useState } from "react";
import banner from "../../assets/images/banners/excellence-banner.png";
import DoctorServices from "../DoctorServices";
import { useServicesData } from "../../controller/servicesDataContext";
import { Helmet } from 'react-helmet-async';


const Excellence = () => {
  const [servicesData, setServicesData] = useState(null);
  // const { data: services, loading, error } = useApiData("services?reqtype=api");
  const services = useServicesData();

  useEffect(() => {
    if (services) {
      setServicesData(services);
    }
  }, [services]);
  return (
    <div>
       <Helmet>
<title>Best Endocrinologist Services in Hyderabad | Dr. Manasa Mynepally</title>
<meta name='description' content="Dr Manasa Mynepally offers unparalleled endocrinology services in Hyderabad, ensuring comprehensive care and effective treatment for patient's well-being." />
<meta name="keywords" content="Hormone specialist Hyderabad, Thyroid doctor Hyderabad, Diabetes specialist Hyderabad, Hormone imbalance treatment Hyderabad, Diabetes specialist Near Me"/>
</Helmet>
      <div>
        <img src={banner} className="w-full" />
      </div>
      <div className="max-w-7xl m-auto">
        <h1 className="uppercase text-theme text-3xl font-medium my-12 text-center highlight-border">
          endocrinology
        </h1>
        <DoctorServices
          services={servicesData?.filter(
            (service) => service.servicecategory === 1
          )}
        />
        <h1 className="uppercase text-theme text-3xl font-medium my-12 text-center highlight-border">
          general Surgery
        </h1>
        <DoctorServices
          services={servicesData?.filter(
            (service) => service.servicecategory === 2
          )}
        />
      </div>
    </div>
  );
};

export default Excellence;
