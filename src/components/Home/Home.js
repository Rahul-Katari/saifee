import BannerCard from "./BannerCard";
import Logo from "../../assets/images/logo.png";
import blogsBg from "../../assets/images/home/blogs-bg.png";
import testBg1 from "../../assets/images/home/testi-bg.png";
import testBg2 from "../../assets/images/home/test-bg-quote.png";

import card1 from "../../assets/images/home/book-doctor-appointment.png";
import card2 from "../../assets/images/home/find-your-doctors.png";
import card3 from "../../assets/images/home/health-package.png";
import card4 from "../../assets/images/home/online-consultancy.png";
import card5 from "../../assets/images/home/book-lab-test.png";

import spec1 from "../../assets/images/specialities/endocrinology/Thyroid-Treatments.png";
import spec2 from "../../assets/images/specialities/endocrinology/Diabetes-1 Diabetes 2 Diabetes.png";
import spec3 from "../../assets/images/specialities/endocrinology/Menopause.png";
import spec4 from "../../assets/images/specialities/endocrinology/Pituitary-Disorders.png";
import spec5 from "../../assets/images/specialities/endocrinology/Osteoporosis.png";
import spec6 from "../../assets/images/specialities/endocrinology/Adrenal-Conditions.png";
import spec7 from "../../assets/images/specialities/endocrinology/Endocrine-Cancers.png";
import spec8 from "../../assets/images/specialities/endocrinology/Endocrine Related-Heart Conditions.png";

import SpecialitiesCard from "./SpecialitiesCard";
import cure from "../../assets/images/home/comm-to-cure.png";
import CommittedCureTabs from "./CommittedCureTabs";
import Welcome from "../Welcome";
import AppointmentSchedule from "../AppointmentSchedule";
import HomeBannerSlider from "../HomeBannerSlider";

import blog1 from "../../assets/images/home/blog1.png";
import blog2 from "../../assets/images/home/blog2.png";
import blog3 from "../../assets/images/home/blog3.png";
import TestimonialSlide from "../TestimonialSlide";
import BlogsSlider from "../BlogsSliderHome";
import MoreBtn from "../common/MoreBtn";
import KnowMore from "./KnowMore";
import NewAppointments from "../banners/NewAppointments";
import HealthTalksTabs from "./HeathTalksTabs";

const bannerCardsData = [
  { imgSrc: card1, title1: "Book Doctor", title2: "Appointment" },
  { imgSrc: card2, title1: "Find Your", title2: "Doctors" },
  { imgSrc: card3, title1: "Health", title2: "Package" },
  { imgSrc: card4, title1: "Online", title2: "Consultancy" },
  { imgSrc: card5, title1: "Book Lab", title2: "Test" },
];
const specialitiesData = [
  { imgSrc: spec1, text1: "Thyroid Treatments" },
  {
    imgSrc: spec2,
    text1: "Diabetes",
    text2: "Diabetes - 1 & 2",
  },
  { imgSrc: spec3, text1: "Menopause" },
  { imgSrc: spec4, text1: "Pituitary Disorders" },
  { imgSrc: spec5, text1: "Osteoporosis" },
  { imgSrc: spec6, text1: "Adrenal Conditions" },
  { imgSrc: spec7, text1: "Endocrine Cancers" },
  { imgSrc: spec8, text1: "Endocrine-Related", text2: "Heart Conditions" },
];
const blogs = [
  { src: blog1, text: "Top medical equipments" },
  { src: blog2, text: "Know the new techniques of endocrinology" },
  { src: blog3, text: "5 ways to improve user retention for your startup" },
];

const Home = () => {
  return (
    <>
      <div>
        <div className="home-main-banner">
          <HomeBannerSlider />
        </div>
        <section>
          <div className="max-w-7xl m-auto">
            <div className="flex justify-around grid lg:grid-cols-5 grid-cols-3 md:gap-8 gap-y-8 gap-x-4 mx-4">
              {bannerCardsData.map((card, index) => {
                return (
                  <BannerCard
                    key={index}
                    imgSrc={card.imgSrc}
                    title1={card.title1}
                    title2={card.title2}
                  />
                );
              })}
            </div>
          </div>
        </section>
        {/* committed to cure starts  */}
        <section>
          <Welcome img={cure} title={"Committed to cure"} />
          {/* committed to cure ends  */}
        </section>
        {/* specialities start  */}
        <section>
          <div className="max-w-7xl m-auto">
            <h3 className="uppercase text-2xl md:text-3xl my-5 text-center text-theme highlight-border">
              specialities
            </h3>
            <div className="grid grid-cols-3 lg:grid-cols-5 lg:gap-14 max-sm:gap-3 mx-4">
              {specialitiesData.map((spec, index) => {
                return (
                  <SpecialitiesCard
                    imgSrc={spec.imgSrc}
                    key={index}
                    text1={spec.text1}
                    text2={spec.text2}
                  />
                );
              })}
            </div>
            <MoreBtn
              btnText={"View More"}
              href={"/excellence"}
              btn={"theme"}
              align={"end"}
            />
          </div>
        </section>
        {/* specialities end  */}
        {/* new patients appointments banner start */}
        <section>
          <div>
            <NewAppointments />
          </div>
        </section>
        {/* new patients appointments banner end */}
        {/* know about section starts  */}
        <KnowMore />
        {/* know about section ends  */}
        {/* committed to cure 2 starts  */}
        <section>
          <div className="lg:px-16">
            <h2 className="text-theme text-xl md:text-3xl text-center uppercase md:my-5 highlight-border">
              Committed to cure
            </h2>
            <CommittedCureTabs />
          </div>
        </section>
        {/* committed to cure 2 ends  */}
        {/* Health talks section starts */}
        <section>
          <div className="bg-banner md:p-16 max-sm:py-16">
            <h2 className="text-theme text-3xl text-center uppercase md:mb-10 mb-3 highlight-border">
              health talks
            </h2>
            <div className="md:grid md:grid-cols-12 md:mx-0">
              <div className="col-span-3 md:pe-6 md:ps-10 mx-4 md:mx-0">
                <img src={Logo} className="m-auto w-24" />
                <h3 className="md:text-3xl text-2xl font-semibold py-3">
                  Connect with Manasa Mynepally
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consect etur adipiscing elit.
                  Fusce enim fames quam pellentesque interdum purus senectus
                  feugiat elit.c.
                </p>
              </div>
              <div className="col-span-6">
                <iframe
                  height="515"
                  src="https://www.youtube.com/embed/iSXL58MPPQc?si=WZA9y5_5GxtJImtO"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  className="w-full"
                ></iframe>
              </div>
              <div className="col-span-3 md:ps-10 max-sm:pt-5">
                <HealthTalksTabs />
              </div>
            </div>
          </div>
        </section>
        {/* Health talks section ends */}
        {/* testimonials section  */}
        <section>
          <div className="testimonial">
            <h3 className="text-theme text-2xl text-center uppercase mb-8 highlight-border">
              what our patients say
            </h3>
            <div
              className="bg-right bg-contain bg-no-repeat md:h-[500px] h-[400px] flex flex-col justify-center relative"
              style={{
                backgroundImage: `url(${testBg1})`,
              }}
            >
              <div className="absolute top-0 left-[20%] max-sm:hidden md:d-block">
                <img src={testBg2} className="w-5/12" />
              </div>
              <div className="absolute left-[8%] md:bottom-[35%] bottom-[10%] font-medium">
                Client <br></br> Testimonials
              </div>
              <TestimonialSlide />
            </div>
          </div>
        </section>
        {/* blogs section  */}
        <div
          className="blogs bg-cover bg-center bg-no-repeat md:h-[600px] h-[450px] flex flex-col justify-center"
          style={{
            backgroundImage: `url(${blogsBg})`,
          }}
        >
          <div>
            <h3 className="text-theme text-2xl text-center uppercase md:mb-24 mb-8 highlight-border">
              Blogs
            </h3>
            <div className="md:grid grid-cols-10 justify-end items-center">
              <div className="col-span-4"></div>
              <div className="col-span-6 ">
                <BlogsSlider slides={blogs} />
              </div>
            </div>
          </div>
        </div>
        {/* blogs section  */}
        {/* schedule an appointment starts  */}
        <AppointmentSchedule />
        {/* schedule an appointment ends */}
      </div>
    </>
  );
};
export default Home;
