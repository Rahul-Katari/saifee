import Logo from "../../assets/images/logo.png";
import blogsBg from "../../assets/images/home/blogs-bg.png";
import testBg1 from "../../assets/images/home/testi-bg.png";
import testBg2 from "../../assets/images/home/test-bg-quote.png";
import cure from "../../assets/images/home/comm-to-cure.png";
import CommittedCureTabs from "./CommittedCureTabs";
import Welcome from "../Welcome";
import AppointmentSchedule from "../AppointmentSchedule";
import HomeBannerSlider from "../HomeBannerSlider";
import BannerCardsSliderHome from "./BannerCardsSliderHome";
import TestimonialSlide from "../TestimonialSlide";
import BlogsSlider from "../BlogsSliderHome";
import MoreBtn from "../common/MoreBtn";
import NewAppointments from "../banners/NewAppointments";
import HealthTalksTabs from "./HeathTalksTabs";
import KnowAboutSlider from "../KnowAboutSlider";
import Heading from "../common/Heading";
import { useEffect, useState } from "react";
import { useBlogData } from "../../controller/blogDataContext";
import DoctorServices from "../DoctorServices";
import { useServicesData } from "../../controller/servicesDataContext";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const blogs = useBlogData()?.allblogs.filter((blog) => blog.type === 0);
  const firstVideo = useBlogData()
    ?.allblogs.filter((blog) => blog.type === 1)
    .slice(0, 1)[0];
  const testimonials = useBlogData()?.reviews.slice(0, 10);
  const services = useServicesData()?.slice(0, 10);
  const [mainVideoSrc, setMainVideoSrc] = useState(firstVideo?.videosrc);
  const updateMainVideoSrc = (videosrc) => {
    setMainVideoSrc(videosrc);
  };
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        const previousSection = targetElement.previousElementSibling;
        if (previousSection) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      }
    }
  }, [services, firstVideo]);
  useEffect(() => {
    setMainVideoSrc(firstVideo?.videosrc);
  }, [firstVideo]);
  return (
    <>
      <Helmet>
        <title>Best Endocrinologist in Hyderabad | Dr. Manasa Mynepally </title>
        <meta
          name="description"
          content="Dr Manasa Mynepally is the ideal of excellence in endocrinology, dedicated to transforming lives with unparalleled expertise and compassionate care in Hyderabad."
        />
        <meta
          name="keywords"
          content="Best endocrinologists, Top endocrinologists in Hyderabad, Endocrinology specialists in Hyderabad, Diabetes specialists Hyderabad, Thyroid specialists in Hyderabad, Hormone disorder experts Hyderabad, Best endocrinology centers in Hyderabad"
        />
      </Helmet>
      <div>
        <div className="home-main-banner">
          <HomeBannerSlider />
        </div>
        <section className="mt-0">
          <div className="max-w-7xl m-auto home-banner-cards">
            <BannerCardsSliderHome />
          </div>
        </section>
        {/* committed to cure starts  */}
        {window.innerWidth > 768 && (
          <section>
            <Welcome img={cure} title={"Committed to cure"} />
            {/* committed to cure ends  */}
          </section>
        )}
        {/* specialities start  */}
        <section>
          <div className="max-w-7xl m-auto">
            <Heading text={"specialities"} uppercase={true} center={true} />
            <DoctorServices services={services} />
            <MoreBtn
              btnText={"View More"}
              href={"/centerofexcellence"}
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
        <section>
          <div className="know-about">
            <KnowAboutSlider />
          </div>
        </section>
        {/* know about section ends  */}
        {/* committed to cure 2 starts  */}
        <section>
          <div className="lg:px-16">
            <Heading
              text={"committed to cure"}
              uppercase={true}
              center={true}
            />

            <CommittedCureTabs />
          </div>
        </section>
        {/* committed to cure 2 ends  */}
        {/* Health talks section starts */}
        <section>
          <div className="bg-banner md:p-16 max-sm:py-8">
            <Heading
              text={"health talks"}
              uppercase={true}
              center={true}
              aos={"down"}
            />
            <div className="lg:grid grid-cols-12 md:mx-0">
              <div className="col-span-3 md:pe-6 md:ps-10 mx-4 md:mx-0 max-sm:hidden">
                <img src={Logo} className="m-auto w-24" />
                <h3 className="md:text-2xl text-xl font-semibold py-3">
                  Connect with Manasa Mynepally
                </h3>
                <p className="mb-2">
                  Connect with Manasa Mynepally for insightful discussions,
                  valuable insights, and engaging videos! Explore the Dr. Manasa
                  Manepally channel for detailed information on a variety of
                  topics.
                </p>
              </div>
              <div className="col-span-6 m-4 mb-0">
                <iframe
                  className="w-full max-sm:h-[200px] rounded"
                  height="400"
                  src={mainVideoSrc}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="col-span-3 md:ps-10">
                <HealthTalksTabs onSelectVideo={updateMainVideoSrc} />
              </div>
            </div>
          </div>
        </section>
        {/* Health talks section ends */}
        {/* testimonials section  */}
        <section className="max-sm:mb-0" id="homeTestimonials">
          <div className="testimonial">
            <Heading
              text={"what our patients say"}
              uppercase={true}
              center={true}
            />
            <div
              className="bg-right max-sm:bg-cover md:bg-contain bg-no-repeat md:h-[400px] h-[300px] flex flex-col justify-center relative"
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
              <TestimonialSlide testimonials={testimonials} />
            </div>
          </div>
        </section>
        {/* blogs section  */}
        <div
          className="pb-4 blogs bg-cover bg-center bg-no-repeat md:h-[500px]  h-[500px] flex flex-col justify-center"
          style={{
            backgroundImage: `url(${blogsBg})`,
          }}
        >
          <div>
            <Heading text={"blogs"} uppercase={true} center={true} />
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
        <div id="Location">
          <AppointmentSchedule />
        </div>
        {/* schedule an appointment ends */}
      </div>
    </>
  );
};
export default Home;
