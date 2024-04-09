import { Link, useParams } from "react-router-dom";
import banner from "../../assets/images/banners/mansa-detail.png";
import BlogsSliderDetail from "../BlogsSliderDetail";
import DoctorServices from "../DoctorServices";
import NewAppointments from "../banners/NewAppointments";
import Heading from "../common/Heading";
import { useEffect, useRef, useState } from "react";
import NeedHelp from "../banners/NeedHelp";
import AppointmentFormDetail from "../AppointmentFormDetail";
import { useBlogData } from "../../controller/blogDataContext";
import { ASSET_URL } from "../../controller/config";
import Qualifications from "../Qualifications";
import FormatHtml from "../FormatHtml";

const DoctorDetails = () => {
  const { doctorUrl } = useParams();
  const tabs = [
    { name: "About Us", href: "about" },
    { name: "Qualification", href: "qualification" },
    { name: "Services", href: "services" },
    { name: "Blogs", href: "blogs" },
    { name: "Videos", href: "videos" },
  ];
  const [activeTab, setActiveTab] = useState(0);
  const [isFixed, setIsFixed] = useState(null);
  const [height, setHeight] = useState(0);
  const tabsRef = useRef([]);
  const sectionsRef = useRef([]);
  const bannerRef = useRef(null);
  const scrollToSection = (index) => {
    sectionsRef.current[index]?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = bannerRef.current.offsetHeight;
      const scrollPosition = window.pageYOffset;
      const scrollOffset = isFixed ? bannerHeight + 144 : bannerHeight;

      // Calculate the scroll position for each section
      const tabPositions = tabs.map((tab) => {
        const element = document.getElementById(tab.href);
        return element ? element.offsetTop - scrollOffset : 0; // Check if element exists
      });

      // Calculate the top position of each section relative to the scroll position
      const sectionTops = sectionsRef.current.map((section) => {
        return section.offsetTop - scrollOffset;
      });

      // Find the index of the section currently in view
      let activeTabIndex = 0;
      for (let i = sectionTops.length - 1; i >= 0; i--) {
        if (scrollPosition >= sectionTops[i]) {
          activeTabIndex = i;
          break;
        }
      }
      // Find the index of the section currently in view
      let activeSectionIndex = -1;
      for (let i = 0; i < sectionTops.length; i++) {
        if (sectionTops[i] > 0 && sectionTops[i] < window.innerHeight / 2) {
          activeSectionIndex = i;
          break;
        }
      }

      // If no section is below the current scroll position, activate the last tab
      // setActiveTab(activeSectionIndex);
      // Update the active tab
      setActiveTab(activeTabIndex);

      // Set the fixed state based on the scroll position
      setIsFixed(scrollPosition > bannerHeight + 144);
    };

    const updateBannerHeight = () => {
      setHeight(bannerRef.current?.offsetHeight || 0); // Added optional chaining
    };

    updateBannerHeight(); // Initial height calculation

    // Attach event listener for scrolling
    if (window.innerWidth > 768)
      window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Add smooth scrolling behavior
    });
  };
  const topHeight = `top[144px ${height}px]`;
  const doctorDetails = useBlogData()?.doctors.filter(
    (doctorDetail) => doctorDetail.urlname === doctorUrl
  )[0];
  const doctorBlogs = useBlogData()?.allblogs.filter(
    (blog) => blog.doctorid === doctorDetails._id
  );
  return (
    <div className="doctor-details">
      {console.log(doctorDetails)}
      <div>
        <div ref={bannerRef} className="relative">
          <img
            src={ASSET_URL + doctorDetails?.doctorbanner}
            className="w-full"
          />
          <div className="md:absolute right-[15%] top-[50%] md:transform md:-translate-y-1/2">
            <AppointmentFormDetail />
          </div>
        </div>
      </div>
      <div
        className={`max-sm:hidden transition-all duration-300 fixed ${
          isFixed ? "top-[144px]" : topHeight
        } z-[1]`}
      >
        {/* <ScrollTo tabs={tabs} ref={tabsRef} /> */}
        <div className="">
          {tabs.map((tab, index) => (
            <button
              key={index}
              ref={(el) => (tabsRef.current[index] = el)}
              onClick={() => {
                setActiveTab(index);
                scrollToSection(index);
              }}
              className={`rounded-l-none rounded-lg flex w-[180px] my-1 py-2 bg-slate-200 hover:btn-theme ${
                activeTab === index ? "btn-theme" : "ps-1"
              }`}
            >
              {tab.name}
            </button>
          ))}
          <button
            onClick={handleScrollToTop}
            className="rounded-l-none rounded-lg flex w-[180px] my-1 py-2 bg-slate-200 hover:btn-theme ps-1"
          >
            Back to Top
          </button>
        </div>
      </div>
      <div className="max-w-6xl ms-auto md:me-24 max-sm:mx-4">
        {/* about us section  */}
        <div id="about" ref={(el) => (sectionsRef.current[0] = el)}>
          <section>
            <div>
              <h1 className="text-black text-3xl font-bold mb-5">
                Dr. {doctorDetails?.firstName + " " + doctorDetails?.lastName}
              </h1>
              <Heading text={"About us"} left={true} />
              {/* <p className="mb-5 text-content"> */}
              <FormatHtml
                htmlString={`<p className="mb-5 text-content">${doctorDetails?.doctorabout?.replace(
                  /\n/g,
                  "</p>\n<p className='mb-5 text-content'>"
                )}</p>`}
              />
              {/* </p> */}
              {/* <p className="mb-5 text-content">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p className="mb-5 text-content">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p className="mb-5 text-content">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p> */}
            </div>
          </section>
        </div>
      </div>
      <NewAppointments />

      <div className="max-w-6xl ms-auto md:me-24 max-sm:mx-4">
        {/* qualification section  */}
        <div id="qualification" ref={(el) => (sectionsRef.current[1] = el)}>
          <section>
            <Qualifications
              qualifications={doctorDetails?.education}
              experience={doctorDetails?.experience}
              extrainfo={doctorDetails?.extrainfo}
            />
          </section>
        </div>
        {/* services section  */}
        <div id="services" ref={(el) => (sectionsRef.current[2] = el)}>
          <section>
            <div>
              <Heading text={"SERVICES"} left={true} />
              <DoctorServices
                services={doctorDetails?.service}
                speciality={"endo"}
              />
            </div>
          </section>
        </div>
      </div>
      {/* testimonials start  */}
      <div>
        <section>
          <div className="bg-banner py-12">
            <div className="max-w-6xl ms-auto md:me-24 max-sm:mx-4">
              <Heading text={"Patient Testimonials"} left={true} />
              <BlogsSliderDetail card="testimonial" />
            </div>
          </div>
        </section>
      </div>
      <div className="max-w-6xl ms-auto md:me-24 max-sm:mx-4">
        {/* blogs section  */}
        <div id="blogs" ref={(el) => (sectionsRef.current[3] = el)}>
          <section>
            <div className="detailPage-Blogs-Slider">
              <Heading text={"Blogs"} left={true} />
              <BlogsSliderDetail
                card="blog"
                blogsData={doctorBlogs?.filter((blog) => blog.type === 0)}
              />
            </div>
          </section>
        </div>
        <div id="videos" ref={(el) => (sectionsRef.current[4] = el)}>
          <section>
            <div>
              <Heading text={"Regular News"} left={true} />
              <p>
                Get to know the information regarding our healthcare aspects to
                be able to get to better informed decisions. ..
              </p>
              <BlogsSliderDetail
                card="videos"
                blogsData={doctorBlogs?.filter((blog) => blog.type === 1)}
              />
            </div>
          </section>
        </div>
      </div>
      <NeedHelp />
    </div>
  );
};
export default DoctorDetails;
