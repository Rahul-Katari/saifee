import { IconMailFilled, IconPhoneFilled } from "@tabler/icons-react";
import FooterCard from "./FooterCard";
import SocialIcons from "./header/SocialIcons";
import PageLinks from "./header/PageLinks";
import { Link } from "react-router-dom";
import footerLogo from "../assets/images/footer/footer-logo.png";
import appointments from "../assets/images/footer/appointments.png";
import doctor from "../assets/images/footer/doctor.png";
import doctorFemale from "../assets/images/footer/doctor-female.png";
import location from "../assets/images/footer/location.png";
import CallUs from "./CallUs";

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

const Footer = () => {
  return (
    <div>
      <CallUs />
      <div className="bg-stone-100">
        <img src={appointments} alt="Appointments" className="w-full" />
        <div className="container footer max-w-7xl p-5">
          <img src={footerLogo} alt="logo" className="m-auto my-5" />
          <div className="justify-center flex items-center border py-3 border-cyan-500 border-x-0">
            <div className="font-semibold text-nav-highlight md:text-3xl text-xl">
              Quick Links :
            </div>
            <PageLinks
              links={quickLinks}
              size={window.innerWidth <= 768 ? "lg" : "2xl"}
              space={"4"}
            />
          </div>
          <h1 className="uppercase text-center text-4xl mt-5">Reach Us</h1>
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
              />
            ))}
          </div>
          <div className="flex-col flex md:flex-row justify-around pb-5 gap-4 md:gap-0 text-xl">
            <div className="btn-primary px-8">
              <SocialIcons space={4} />
            </div>
            <div className="telephone-footer-link">
              <a
                target="_blank"
                href="tel:+91 73400 40097"
                className="btn-primary px-8"
              >
                <div className="pe-5">
                  <IconPhoneFilled />
                </div>
                +91 73400 40097
              </a>
            </div>
            <a
              target="_blank"
              href="mailto:info@drmanasaendocrine.com"
              className="btn-primary"
            >
              <div className="pe-5">
                <IconMailFilled />
              </div>
              info@drmanasaendocrine.com
            </a>
          </div>
          <div className="text-center mt-5">
            C {new Date().getFullYear()} Hospital all rights reserved
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;