import Welcome from "../Welcome";
import IconText from "../IconText";

import cure from "../../assets/images/home/comm-to-cure.png";
import aboutBanner from "../../assets/images/about/about-banner.png";
import locate from "../../assets/images/about/location.png";
import steth from "../../assets/images/about/stethoscope.png";
import calender from "../../assets/images/about/calender.png";
import vision from "../../assets/images/about/vision.png";
import mission from "../../assets/images/about/mission.png";
import OurTopDoctors from "../OurTopDoctors";
import AppointmentModalOpener from "../AppointmentModalOpener";
import { Helmet } from 'react-helmet-async';

const iconsbanner = [
  { imgSrc: locate, text1: "Locate", text2: "Clinic", href: "https://maps.app.goo.gl/jX65mQLBgNvubiu2A", target:true },
  { imgSrc: steth, text1: "Find", text2: "Doctor", href: "/bestDoctors" },
  { imgSrc: calender, text1: "Book", text2: "Appointment" },
];

const bottomBanner = [
  { mainText: "15K", text1: "Happy Customers" },
  { mainText: "150K", text1: "Monthly Visitors" },
  { mainText: "15", text1: "Customers Worldwide" },
  { mainText: "100+", text1: "Top Partners" },
];

const About = () => {
  return (
    <>
     <Helmet>
<title>
Best Endocrinologist Doctors in Hyderabad | Dr. Manasa Mynepally</title>
<meta name='description' content="Dr. Manasa Mynepally is among Hyderabad's finest endocrinologists, providing top-notch care and expertise in managing endocrine disorders effectively." />
<meta name='keywords' content='Endocrinologist Hyderabad, Endocrine Clinic Hyderabad, Thyroid Doctor in Hyderabad, Hormonal Imbalance Specialist in Hyderabad, Endocrinology Doctors Hyderabad, Diabetes doctor Hyderabad' />
</Helmet>
      <div>
        <img src={aboutBanner} className="w-full" />
        <section>
          <div className="card shadow-xl grid grid-cols-3 items-center md:justify-around font-semibold text-center gap-y-8 max-w-7xl xl:m-auto mx-4">
            {iconsbanner.map((icon, index) => {
              return (
                <div>
                  {icon.href ? (
                    <IconText
                      key={index}
                      iconSrc={icon.imgSrc}
                      text1={icon.text1}
                      text2={icon.text2}
                      weight={"bold"}
                      href={icon.href}
                      target={icon.target}
                      // click={handleClick}
                    />
                  ) : (
                    <AppointmentModalOpener
                      Component={
                        <IconText
                          key={index}
                          iconSrc={icon.imgSrc}
                          text1={icon.text1}
                          text2={icon.text2}
                          weight={"bold"}
                        />
                      }
                    />
                  )}
                </div>
              );
            })}
          </div>
        </section>
        <Welcome img={cure} title={"How We Are"} />
        <section>
          <div className="bg-banner lg:flex gap-20 p-10 my-10 lg:px-52">
            <div>
              <div data-aos="fade-up">
                <img src={vision} className="p-5 w-20 h-20 object-contain" />
              </div>
              <h3 className="text-theme text-2xl font-medium" data-aos="fade-up">Our Vision</h3>
              <p className="py-3" data-aos="fade-up">
                Our vision at Dr. Manasa Mynepally's Hospital is simple: we want
                to make your Endocrine health better. We're working hard to
                discover new ways to help you feel your best, and we're here to
                support you through it all. Together, we're building a healthier
                future for everyone.
              </p>
            </div>
            <div>
              <div data-aos="fade-up">
                <img src={mission} className="p-5 w-20 h-20 object-contain" />
              </div>
              <h3 className="text-theme text-2xl font-medium" data-aos="fade-up">Our Mission</h3>
              <p className="py-3" data-aos="fade-up">
                At Dr Manasa Mynepally-Diabetes, Thyroid & Endocrine Centre, our mission is to lead the
                way in Endocrine health. We're dedicated to finding better
                treatments and therapies by teaming up with different healthcare
                experts like your family doctor, dentist, and others. Our goal
                is to make sure you and your family feel supported and cared for
                every step of the way.
              </p>
            </div>
          </div>
        </section>
        {/* meet our doctors start  */}
        <section>
          <OurTopDoctors />
        </section>
        {/* meet our doctors end */}
        <section>
          <div className="bg-banner font-medium text-center mt-96 ">
            <div className="max-w-6xl grid md:grid-cols-4 grid-cols-2 items-center gap-y-12 container py-12">
            {bottomBanner.map((banner, index) => {
              return (
                <IconText
                  key={index}
                  iconText={banner.mainText}
                  text1={banner.text1}
                  weight={"normal"}
                />
              );
            })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
