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

const iconsbanner = [
  { imgSrc: locate, text1: "Locate", text2: "Clinic" },
  { imgSrc: steth, text1: "Find", text2: "Doctor" },
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
      <div>
        <img src={aboutBanner} className="w-full" />
        <section>
          <div className="card grid grid-cols-3 items-center md:justify-around font-semibold text-center gap-y-8 max-w-7xl m-auto">
            {iconsbanner.map((icon, index) => {
              return (
                <IconText
                  key={index}
                  iconSrc={icon.imgSrc}
                  text1={icon.text1}
                  text2={icon.text2}
                  weight={"bold"}
                />
              );
            })}
          </div>
        </section>
        <Welcome img={cure} title={"How We Are"} />
        <section>
          <div className="bg-banner md:flex gap-20 p-10 my-10 md:px-52">
            <div>
              <div>
                <img src={vision} className="p-5" />
              </div>
              <h3 className="text-theme text-3xl font-medium">Our Vision</h3>
              <p className="py-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
              </p>
            </div>
            <div>
              <div>
                <img src={mission} className="p-5" />
              </div>
              <h3 className="text-theme text-3xl font-medium">Our Mission</h3>
              <p className="py-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
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
          <div className="bg-banner p-12 md:px-48 grid md:grid-cols-4 grid-cols-2 items-center justify-around font-medium text-center mt-96 gap-y-12">
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
        </section>
      </div>
    </>
  );
};

export default About;
