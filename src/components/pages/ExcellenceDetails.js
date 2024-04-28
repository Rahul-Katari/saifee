import banner from "../../assets/images/banners/excellence-details-banner.png";

import { Tab, TabScreen, Tabs } from "react-tabs-scrollable";
import React, { useEffect, useState } from "react";
import BreadCrumb from "../common/BreadCrumb";
import { Link, useParams } from "react-router-dom";
import Accordion from "../Accordion";
import ExcellenceContentTabs from "./ExcellenceContentTabs";
import { useServicesData } from "../../controller/servicesDataContext";
import { ASSET_URL } from "../../controller/config";

const ExcellenceDetails = () => {
  const [bannerImage, setBannerImage] = useState(banner);
  const { serviceId } = useParams();
  const [breadcrumb, setBreadcrumb] = useState([]);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [endoaccordion, setEndoaccordion] = useState(true);
  const [generalaccordion, setGeneralaccordion] = useState(true);
  const servicesList = useServicesData();
  let sortedServiceList;
  if (servicesList && Array.isArray(servicesList)) {
    sortedServiceList = [...servicesList]?.sort((a, b) => {
      if (a._id === serviceId) return -1;
      if (b._id === serviceId) return 1;
      return 0;
    });
  }
  const servicesDetails = useServicesData()?.filter(
    (service) => service._id === serviceId
  )[0];
  const toggleAccordion = (accordionName) => {
    setActiveAccordion(
      activeAccordion === accordionName ? null : accordionName
    );
  };
  useEffect(() => {
    if (servicesDetails) {
      const breadCrumb = [
        { href: "/", title: "home" },
        { href: "/excellence", title: "center of excellence" },
        {
          href: `/excellenceDetails/${servicesDetails?._id}`,
          title: servicesDetails?.service_name,
        },
      ];
      setBannerImage(servicesDetails?.serviceBanner_url);
      setBreadcrumb(breadCrumb);
      servicesDetails?.servicecategory === 1
        ? setActiveAccordion("Endocrinology")
        : setActiveAccordion("General Surgery");
    }
  }, [servicesDetails]);

  return (
    <div className="excellence-details">
      <div>
        <img src={ASSET_URL + bannerImage} className="w-full" />
      </div>
      <BreadCrumb linkData={breadcrumb} />
      <section className="mb-0">
        <div className="grid md:grid-cols-8 max-w-7xl m-auto max-sm:m-4 max-sm:flex-col">
          <div className="md:col-span-2 max-sm:order-last relative sticky top-0">
            <div
              className={`flex flex-col ${
                servicesDetails?.servicecategory === 2 ? "flex-col-reverse" : ""
              }`}
            >
              <Accordion
                title="Endocrinology"
                accordionOpen={activeAccordion === "Endocrinology"}
                onToggle={() => toggleAccordion("Endocrinology")}
              >
                <div className="flex flex-col bg-stone-100">
                  {sortedServiceList
                    ?.filter((ser) => ser.servicecategory === 1)
                    ?.map((service, index) => {
                      return (
                        <Link
                          key={service._id}
                          className={`p-3 ${
                            service._id === serviceId ? "btn-theme" : ""
                          }  rounded-none hover:text-white hover:bg-gradient-to-r from-[#00637B] to-[#00A0C6]`}
                          to={`/excellenceDetails/${service._id}`}
                        >
                          {service?.service_name}
                        </Link>
                      );
                    })}
                </div>
              </Accordion>

              <Accordion
                title="General Surgery"
                accordionOpen={activeAccordion === "General Surgery"}
                onToggle={() => toggleAccordion("General Surgery")}
              >
                <div className="flex flex-col bg-stone-100">
                  {sortedServiceList
                    ?.filter((ser) => ser.servicecategory === 2)
                    ?.map((service, index) => {
                      return (
                        <Link
                          key={service._id}
                          className={`p-3 ${
                            service._id === serviceId ? "btn-theme" : ""
                          }  rounded-none hover:text-white hover:bg-gradient-to-r from-[#00637B] to-[#00A0C6]`}
                          to={`/excellenceDetails/${service._id}`}
                        >
                          {service?.service_name}
                        </Link>
                      );
                    })}
                </div>
              </Accordion>
            </div>
          </div>
          <div className="md:col-span-6">
            <TabScreen className="md:ps-12 col-span-6">
              <ExcellenceContentTabs servicesDetails={servicesDetails} />
            </TabScreen>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExcellenceDetails;
