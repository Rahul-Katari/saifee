  import banner from "../../assets/images/banners/excellence-details-banner.png";

  import { Tab, TabScreen, Tabs } from "react-tabs-scrollable";
  import React, { useEffect, useState } from "react";
  import BreadCrumb from "../common/BreadCrumb";
  import { Link, useParams } from "react-router-dom";
  import Accordion from "../Accordion";
  import ExcellenceContentTabs from "./ExcellenceContentTabs";
  import { useServicesData } from "../../controller/servicesDataContext";
  import { ASSET_URL } from "../../controller/config";
  import { Helmet } from 'react-helmet-async';



  const ExcellenceDetails = () => {
    const [bannerImage, setBannerImage] = useState(banner);
    const { serviceId } = useParams();
    const [breadcrumb, setBreadcrumb] = useState([]);
    const [activeAccordion, setActiveAccordion] = useState(null);
    const [endoaccordion, setEndoaccordion] = useState(true);
    const [generalaccordion, setGeneralaccordion] = useState(true);
    const [metaTags, setMetaTags] = useState({
      title: "Best Endocrinologist in Hyderabad | Dr. Manasa Mynepally",
      description:
        "Dr Manasa Mynepally is the ideal of excellence in endocrinology, dedicated to transforming lives with unparalleled expertise and compassionate care in Hyderabad.",
      keywords:
        "Best endocrinologists, Top endocrinologists in Hyderabad, Endocrinology specialists in Hyderabad, Diabetes specialists Hyderabad, Thyroid specialists in Hyderabad, Hormone disorder experts Hyderabad, Best endocrinology centers in Hyderabad",
    });
    const servicesList = useServicesData();
    let sortedServiceList;
    if (servicesList && Array.isArray(servicesList)) {
      sortedServiceList = [...servicesList]?.sort((a, b) => {
        if (a.service_displayurl === serviceId) return -1;
        if (b.service_displayurl === serviceId) return 1;
        return 0;
      });
    }
    const servicesDetails = useServicesData()?.filter(
      (service) => service.service_displayurl === serviceId
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
          { href: "/centerofexcellence", title: "center of excellence" },
          {
            href: `/centerofexcellence/${servicesDetails?.service_displayurl}`,
            title: servicesDetails?.service_name,
          },
        ];
        setBannerImage(servicesDetails?.serviceBanner_url);
        setBreadcrumb(breadCrumb);
        servicesDetails?.servicecategory === 1
          ? setActiveAccordion("Endocrinology")
          : setActiveAccordion("General Surgery");


// Update meta tags based on service ID
let title = "";
let description = "";
let keywords = "";
switch (servicesDetails?._id) {
  case "6623ca06c562e9a8bbd00c96": // Laparoscopic Endoscopy Doctor
    title =
      "Best Laparoscopic Endoscopy Doctor In Hyderabad | Dr.G Uday Kiran";
    description =
      "Dr G Uday Kiran, renowned for his excellence in laparoscopic endoscopy, is a leading figure in Hyderabad. Expertise, compassion, and cutting-edge technology define their practice. Trusted by many.";
    keywords =
      "Top laparoscopic doctor Hyderabad, Laparoscopic surgery specialist Hyderabad, Advanced laparoscopic, Laparoscopic Surgery Expertise Hyderabad";
    break;
  case "6623c99bc562e9a8bbd00c90": // Best General Surgeon Doctor in Hyderabad
    title =
      "Best General Surgeon Doctor in Hyderabad | Dr G Uday Kiran";
    description =
      "Dr G Uday Kiran, renowned for precise surgical skills and compassionate patient care, is esteemed as Hyderabad's premier general surgeon trusted and respected.";
    keywords =
      "Top general surgeon Hyderabad, Best general surgery specialist Hyderabad, General surgery expert in Hyderabad, General surgery specialist Hyderabad";
    break;
  case "6623cac4c562e9a8bbd00ca9": // Hernia Specialist Doctor In Khajaguda
    title =
      "Hernia Specialist Doctor In Khajaguda | Dr G Uday Kiran";
    description =
      "Specialist hernia doctor in Khajaguda providing expert care and treatment for hernia conditions. Compassionate, experienced, and dedicated to patient well-being.";
    keywords =
      "Hernia specialist Khajaguda, hernia surgeon, Top hernia specialist Khajaguda, hernia expert in Khajaguda";
    break;
  case "6623ca71c562e9a8bbd00c9f": // Best Gall Bladder Surgery in Hyderabad
    title =
      "Best Gall Bladder Surgery in Hyderabad | Dr G Uday Kiran";
    description =
      "Experience top-notch gall bladder surgery in Hyderabad. Our skilled surgeons ensure safe procedures and compassionate care for optimal recovery.";
    keywords =
      "Best Gall Bladder Surgery in Hyderabad, Gallbladder surgery Hyderabad, Gallstone removal surgery Hyderabad, Laparoscopic gallbladder surgery Hyderabad, Expert gallbladder surgeons in Hyderabad";
    break;
  case "6623cae7c562e9a8bbd00cac": // Best Pancreas Specialist Doctors in Hyderabad
    title =
      "Best Pancreas Specialist Doctors in Hyderabad | Dr G Uday Kiran";
    description =
      "Discover the top Pancreas specialists in Hyderabad, providing expert care and innovative treatments for pancreatic conditions. Trust their expertise for optimal health.";
    keywords =
      "Pancreas specialist doctors in Hyderabad, Best pancreatic surgeons in Hyderabad, pancreas doctors Hyderabad, Pancreas treatment specialists in Hyderabad";
    break;
  case "6623ca04c562e9a8bbd00c93": // Breast Lumps Treatment in Hyderabad
    title =
      "Breast Lumps Treatment in Hyderabad | Dr G Uday Kiran";
    description =
      "Hyderabad offers advanced breast lump treatments, including surgery, radiation, and medication, ensuring comprehensive care for patients seeking effective solutions locally.";
    keywords =
      "Breast lump Hyderabad, Breast lump clinic Hyderabad, Breast lump specialist Hyderabad, Breast lump surgery Hyderabad";
    break;
  case "6623cafdc562e9a8bbd00caf": // Best Bariatric Surgeon Doctors in Hyderabad
    title =
      "Best Bariatric Surgeon Doctors in Hyderabad | Dr G Uday Kiran";
    description =
      "Discover Hyderabad's top bariatric surgeons, renowned for their expertise and compassionate care, transforming lives through innovative weight loss surgeries.";
    keywords =
      "Bariatric surgeon Hyderabad, Best bariatric surgeon in Hyderabad, Top bariatric doctors Hyderabad, bariatric surgery specialists in Hyderabad";
    break;
  case "66215dc0d650ec917ce34989": // Best Diabetes Doctor in Hyderabad
    title =
      "Best Diabetes Doctor in Hyderabad | Dr Manasa Mynepally";
    description =
      "Dr Manasa Mynepally believed in special diabetes care in Hyderabad, mixing expertise with compassion for optimal patient well-being.";
    keywords =
      "Diabetes doctor Hyderabad, Endocrinology Doctors Hyderabad, Diabetes specialist Hyderabad, Best Doctor In Hyderabad";
    break;
  case "62b4056397ada175ed81087d": // Best Thyroid Specialist Doctor in Hyderabad
    title =
      "Best Thyroid Specialist Doctor in Hyderabad | Dr Manasa Mynepally";
    description =
      "Dr Manasa Mynepally is renowned as Hyderabad's top diabetologist, providing expert care and innovative solutions for managing diabetes.";
      keywords =
      "Thyroid specialists, Thyroid doctor Hyderabad, Best Doctor In Hyderabad, Thyroid Near Me";
      break;
      case "62b54716c9b6fa4492051e26": // Best Obesity Treatment Doctors In Hyderabad
      title =
      "Best Obesity Treatment Doctors In Hyderabad | Dr Manasa Mynepally";
      description =
      "Dr Manasa Mynepally is one of Hyderabad's top obesity treatment doctors, offering expert care and innovative solutions for healthier living.";
      keywords =
      "Best Doctor In Hyderabad, Obesity treatment Near Me, Top Obesity Doctors Hyderabad, Obesity specialists Hyderabad";
      break;
      case "6623c71ac562e9a8bbd00c19": // Hormonal Imbalance Treatment in Hyderabad
      title =
      "Hormonal Imbalance Treatment in Hyderabad | Dr Manasa Mynepally";
      description =
      "Dr Manasa Mynepally offers exceptional hormonal imbalance treatment in Hyderabad, ensuring personalised care and holistic solutions for optimal health.";
      keywords =
      "Hormone specialist In Hyderabad, Hormone imbalance treatment Hyderabad, Best Doctor In Hyderabad, Hormonal Imbalance Treatment";
      break;
      case "6623c78dc562e9a8bbd00c46": // BEST PCOS Specialist in Hyderabad
      title =
      "BEST PCOS Specialist in Hyderabad | Dr Manasa Mynepally";
      description =
      "Dr Manasa Mynepally is a leading PCOS Specialist in Hyderabad, providing expert care and support for women's health and hormonal balance.";
      keywords =
      "BEST PCOS Specialist in Hyderabad, PCOS specialist, Best PCOS doctor, Top PCOS specialist in Hyderabad";
      break;
      case "6623c7c2c562e9a8bbd00c49": // Best Fertility Specialist in Hyderabad
      title =
      "Best Fertility Specialist in Hyderabad | Dr Manasa Mynepally";
      description =
      "Hyderabad's leading fertility expert, Dr Manasa Mynepally, is dedicated to offering expert care and optimism to those striving to become parents.";
      keywords =
      "Fertility specialist in Hyderabad, Fertility doctor Hyderabad, Fertility specialist, Fertility treatment Hyderabad";
      break;
      case "6623c7c2c562e9a8bbd00c49": // Best Osteoporosis Doctor In Hyderabad
      title =
      "Best Osteoporosis Doctor In Hyderabad | Dr Manasa Mynepally";
      description =
      "Discover Hyderabad's top osteoporosis specialist for expert diagnosis and personalized treatment plans. Trust in their expertise for optimal bone health and well-being.";
      keywords =
      "Osteoporosis specialist Hyderabad, Bone health specialist Hyderabad, Osteoporosis treatment Hyderabad, Best Doctor In Hyderabad";
      break;
      default:
      break;
      }


  
      setMetaTags({
        title,
        description,
        keywords,
      });
    }
  }, [servicesDetails]);

  return (
    <div className="excellence-details">
      <Helmet>
      <title>{metaTags.title}</title>
      <meta name="description" content={metaTags.description} />
      <meta name="keywords" content={metaTags.keywords} />
    </Helmet>
      <div>
        <img src={ASSET_URL + bannerImage} className="w-full" />
      </div>
      <BreadCrumb linkData={breadcrumb} />
      <section className="mb-0">
        <div className="grid md:grid-cols-8 max-w-7xl m-auto max-sm:m-4 max-sm:flex-col">
          <div className="md:col-span-2 max-sm:order-last">
            <div
              className={`flex flex-col md:sticky top-[144px] ${
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
                          key={service.service_displayurl}
                          className={`p-3 ${
                            service.service_displayurl === serviceId ? "btn-theme" : ""
                          }  rounded-none hover:text-white hover:bg-gradient-to-r from-[#00637B] to-[#00A0C6]`}
                          to={`/centerofexcellence/${service.service_displayurl}`}
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
                          key={service.service_displayurl}
                          className={`p-3 ${
                            service.service_displayurl === serviceId ? "btn-theme" : ""
                          }  rounded-none hover:text-white hover:bg-gradient-to-r from-[#00637B] to-[#00A0C6]`}
                          to={`/centerofexcellence/${service.service_displayurl}`}
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
