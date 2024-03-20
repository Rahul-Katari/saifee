import { IconMailFilled, IconPhoneFilled } from "@tabler/icons-react";
import FooterCard from "./FooterCard";
import SocialIcons from "../header/SocialIcons";
import PageLinks from "../header/PageLinks";
import footerLogo from "../../assets/images/footer/footer-logo.png";
import doctor from "../../assets/images/footer/doctor.png";
import doctorFemale from "../../assets/images/footer/doctor-female.png";
import location from "../../assets/images/footer/location.png";
import CallUs from "./CallUs";
import FooterBg from "../../assets/images/footer/footer-bg.png";

import { useLocation } from "react-router-dom";
import NewAppointments from "../banners/NewAppointments";
import Topscroll from "../common/TopScroll";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Center Of Excellence", href: "/excellence" },
  { name: "Consult Our Best Doctors", href: "/bestdoctors" },
  { name: "Facilities", href: "/facilities" },
  { name: "Contact Us", href: "/contact" },
];
const cards = [
  {
    imgSrc: doctorFemale,
    title: "Dr.Manasa Mynepally",
    description1: "M.D,D.M ENDOCRINOLOGY (Gold Medalist)",
    description2: "Consultant Endocrinologist & Diabetologist",
    timing1: "12:30PM - 2 PM (Mon-sat)",
    timing2: "6 PM - 9 PM (Mon-sat)",
  },
  {
    imgSrc: doctor,
    title: "Dr.G Uday Kiran",
    description1: "MS, FMAS, FIAGES, EFIAGES, FALS (ROBOTIC)",
    description2: "General and Laparoscopic Surgeon",
    timing1: "12:30PM - 2 PM (Mon-sat)",
  },
  {
    imgSrc: location,
    title: "Reach Us",
    description1: "101, Siri Sampada Arcade, I,",
    description2: "Khajaguda - Nanakramguda Rd,",
    description3: "Behind Andhra Bank/UBl,",
    description4: "Khajaguda, Telangana, 500032.",
  },
];
const styles = {
  backgroundImage: "url(../../assets/images/footer/footer-bg.png)",
};

const Footer = () => {
  const location = useLocation();
  const currentUrl = location.pathname;
  return (
    <div>
      <Topscroll />
      {currentUrl !== "/" &&
        !currentUrl.includes("landing") &&
        !currentUrl.includes("Detail") && <CallUs />}
      <div className="container">
        {currentUrl !== "/" &&
          !currentUrl.includes("landing") &&
          !currentUrl.includes("Detail") && <NewAppointments />}

        <div
          className="bg-contain"
          style={{ backgroundImage: `url(${FooterBg})` }}
        >
          <div className="footer max-w-7xl p-5 m-auto">
            <div>
              <img
                src={footerLogo}
                alt="logo"
                className="m-auto my-5 w-24 h-24 md:w-auto"
                data-aos="zoom-out"
              />
            </div>
            <div
              className="justify-center md:flex items-center border py-3 border-cyan-500 border-x-0"
              data-aos="fade-right"
            >
              <div className="text-nav-highlight  text-base">Quick Links :</div>
              <PageLinks
                links={quickLinks}
                size={window.innerWidth <= 768 ? "base" : "base"}
                space={"4"}
              />
            </div>
            <div className="flex justify-center items-center mt-5">
              <div className="flex items-center">
                <div
                  class="border-b-2 border-dashed pr-4 md:w-[150px] border-highlight"
                  data-aos="fade-right"
                ></div>
              </div>
              <h1 className="uppercase text-center text-2xl px-8">Reach Us</h1>
              <div className="flex items-center">
                <div
                  class="border-b-2 border-dashed pr-4 md:w-[150px] border-highlight"
                  data-aos="fade-left"
                ></div>
              </div>
            </div>
            <div className="lg:grid-cols-3 sm:grid-cols-2 grid">
              {cards.map((card, index) => (
                <FooterCard
                  key={index}
                  iconSrc={card.imgSrc}
                  title={card.title}
                  description1={card.description1}
                  description2={card.description2}
                  description3={card.description3}
                  description4={card.description4}
                  timing1={card.timing1}
                  timing2={card.timing2}
                  index={index}
                />
              ))}
            </div>
            <div className="flex-col flex md:flex-row justify-around pb-5 gap-4 md:gap-0 md:text-xl">
              <div
                className="btn-primary rounded-full px-8 justify-center"
                data-aos="fade-right"
              >
                <SocialIcons space={4} />
              </div>
              <div className="flex items-center">
                <div class="md:border-b-2 border-dashed pr-4 w-[100px] border-highlight"></div>
              </div>
              <div className="telephone-footer-link" data-aos="zoom-in">
                <a
                  target="_blank"
                  href="tel:+91 73400 40097"
                  className="btn-primary rounded-full px-8 justify-center text-base"
                >
                  <div className="pe-5">
                    <IconPhoneFilled />
                  </div>
                  +91 73400 40097
                </a>
              </div>
              <div className="flex items-center">
                <div class="md:border-b-2 border-dashed pr-4 w-[100px] border-highlight"></div>
              </div>
              <div data-aos="fade-left">
                <a
                  target="_blank"
                  href="mailto:info@drmanasaendocrine.com"
                  className="btn-primary text-base rounded-full"
                >
                  <div className="pe-5">
                    <IconMailFilled />
                  </div>
                  info@drmanasaendocrine.com
                </a>
              </div>
            </div>
            <div className="text-center md:mt-5">
              C {new Date().getFullYear()} Hospital all rights reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
