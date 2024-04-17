import { Link, useParams } from "react-router-dom";
import banner from "../../assets/images/banners/landing.png";
import best from "../../assets/images/landing/general-surgeon.png";
import areas from "../../assets/images/landing/hexagon.png";
import NewAppointments from "../banners/NewAppointments";
import KnowMore from "../home/KnowMore";
import whyChoose from "../../assets/images/landing/why-choose-us.png";
import DoctorServices from "../DoctorServices";
import BlogsSliderDetail from "../BlogsSliderDetail";
import Heading from "../common/Heading";
import advProc from "../../assets/images/landing/guarantee/adv-proc.png";
import shorterStay from "../../assets/images/landing/guarantee/stay.png";
import scarless from "../../assets/images/landing/guarantee/scarless-proc.png";
import quick from "../../assets/images/landing/guarantee/quick.png";
import care from "../../assets/images/landing/guarantee/affordable.png";
import SpecialitiesCard from "../home/SpecialitiesCard";
import NeedHelp from "../banners/NeedHelp";
import { useBlogData } from "../../controller/blogDataContext";
import { useEffect } from "react";
const guarantee = [
  { imgSrc: advProc, text: "Advanced Procedure" },
  { imgSrc: shorterStay, text: "Shorter Hospital Stay" },
  { imgSrc: scarless, text: "Scarless Procedure" },
  { imgSrc: quick, text: "Quick Recovery" },
  { imgSrc: care, text: "Affordable Care" },
];

const Landing = () => {
  const { doctorUrl } = useParams();
  const doctor = useBlogData()?.doctors.filter(
    (doctorDetail) => doctorDetail.urlname === doctorUrl
  )[0];
  // const doctor = useBlogData()?.doctors.slice(0, 1)[0];
  const doctorId = doctor?._id;
  const services = doctor?.service;
  const testimonials = useBlogData()?.reviews.filter(
    (review) => review.doctorid === doctorId
  );
  const doctorBlogs = useBlogData()?.allblogs.filter(
    (blog) => blog.doctorid === doctorId
  );
  useEffect(() => {}, [doctor]);
  return (
    <div>
      <div className="relative">
        <img src={banner} className="w-full" />
        <div className="absolute rounded-lg p-8 top-[20%] bg-gradient-to-b from-[#07869B] via-[#07869B] to-[#0366AB] left-[10%]">
          <h2 className="text-[#FFF500] font-semibold text-3xl">
            Advanced Laparoscopic and <br></br> General Surgery in Hyderabad
          </h2>
          <ul className="list-disc-default text-white space-y-4 ">
            <li>24+ Years of experience. 20,000+ patients treated</li>
            <li>Advanced 4k Laparoscopic unit</li>
            <li>Minimally Invasive procedure. No Stitches, No scars</li>
            <li>30 Minutes procedure. Back to work in 24 Hours</li>
            <li>All Insurances accepted, Cashless facility</li>
            <li>Top Laparoscopic surgeon for Minimally Invasive surgeries</li>
            <li>100% Success rate</li>
          </ul>
          <div className="flex justify-end">
            <Link
              to={"/bookAppointment"}
              className="bg-gradient-to-r from-[#FF744B] to-[#FF9D80] px-3 py-2 rounded-lg font-medium border border-white text-white"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </div>
      <section>
        <div className="max-w-7xl m-auto">
          <div className="grid border rounded-lg grid-cols-10">
            <div className="col-span-4 p-8">
              <h3 className="text-center text-2xl font-semibold ">
                Book a Consultation
              </h3>
              <p className="text-center my-3">
                Get a Second opinion from the most experienced
              </p>
              <p className="text-center my-3">
                consultant, Lady general Surgeons.
              </p>
              <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum{" "}
              </p>
            </div>
            <div className="col-span-6 flex flex-col p-4 ps-10 border-l">
              <input className="border py-2 rounded-lg my-2" />
              <input className="border py-2 rounded-lg my-2" />
              <input className="border py-2 rounded-lg my-2" />
              <button className="rounded-lg btn-primary justify-center">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-12">
          <div className="col-span-5">
            <div>
              <img src={best} className="w-9/12" />
            </div>
          </div>
          <div className="col-span-7 md:pe-24">
            <h2 className="text-[#025CAF] text-3xl font-semibold">
              Best General Surgeon
            </h2>
            <h2 className="text-[#025CAF] text-3xl font-semibold my-4">
              in Hyderabad
            </h2>
            <p className="text-content my-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p className="text-content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-12">
          <div className="col-span-7 md:ps-24">
            <h2 className="text-[#025CAF] text-3xl font-semibold">
              Areas of Treatments{" "}
            </h2>
            <div className="flex">
              <ul className="list-disc-default">
                <li>Cholecystectomy (gallbladder removal)</li>
                <li>Hernia</li>
                <li>Gallbladder Stone</li>
                <li>Colorectal Surgery</li>
                <li>Fissure Surgery</li>
                <li>Whipple Procedure</li>
                <li>Gastrectomy</li>
                <li>Hemorrhoids (Piles)</li>
                <li>Lipoma</li>
                <li>Thyroid surgery</li>
                <li>Varicose Veins</li>
              </ul>
              <ul className="list-disc-default">
                <li>Tonsillectomy</li>
                <li>Adenoidectomy</li>
                <li>Breast Surgery</li>
                <li>Appendectomy</li>
                <li>Septoplasty</li>
                <li>Lumbar Fusion</li>
                <li>Gastrointestinal Surgery</li>
                <li>Abdominal Wall Reconstruction</li>
                <li>Tracheostomy</li>
                <li>Bariatric Surgery</li>
              </ul>
            </div>
          </div>
          <div className="col-span-5">
            <div>
              <img src={areas} className=" w-8/12" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <NewAppointments />
      </section>
      <section>
        <KnowMore doctor={doctor} />
      </section>
      <section>
        <div className="bg-banner relative flex justify-end relative">
          <div>
            <img src={whyChoose} className="w-8/12" />
          </div>
          <div className="bg-gradient-to-b from-[#07879B] to-[#035FAE] text-white p-8 absolute left-[10%] top-[10%]">
            <h1 className="text-3xl font-semibold mb-4 ml-12">
              Why Choose Us?
            </h1>
            <ul className="space-y-6">
              <li className="flex items-center">
                <span className="text-[70px] font-semibold text-[#ffffff54] leading-4 me-6">
                  1
                </span>
                <div>
                  <h2 className="text-xl">
                    Expert General and <br></br> Laparoscopic Surgeon:
                  </h2>
                  <p className="text-[10px]">
                    Lorem Ipsum is an excellent team of surgeons experienced
                    <br></br> in using laparoscopic surgical instruments.
                  </p>
                </div>
              </li>
              <li className="flex items-center">
                <span className="text-[70px] font-semibold text-[#ffffff54] leading-4 me-6">
                  2
                </span>
                <div>
                  <h2 className="text-xl">
                    Minimally Invasive <br></br>Surgeries:
                  </h2>
                  <p className="text-[10px]">
                    Advanced technology for the right treatment, quick <br></br>{" "}
                    recovery, and care.
                  </p>
                </div>
              </li>
              <li className="flex items-center">
                <span className="text-[70px] font-semibold text-[#ffffff54] leading-4 me-6">
                  3
                </span>
                <div>
                  <h2 className="text-xl">
                    Best Laparoscopy Clinic <br></br> in Hyderabad:
                  </h2>
                  <p className="text-[10px]">
                    Quality care, hassle-free process, best specialists &{" "}
                    <br></br> support team.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h2 className="text-3xl font-semibold text-[#025CAF] text-center mb-16">
            We Guarantee
          </h2>
          <div className="grid grid-cols-5 space-x-6 justify-center max-w-7xl m-auto">
            {guarantee.map((guar, index) => {
              return (
                <SpecialitiesCard
                  imgSrc={guar.imgSrc}
                  key={index}
                  text1={guar.text}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-7xl m-auto">
          <h2 className="text-3xl font-semibold text-[#025CAF] text-center mb-16">
            Service
          </h2>
          <DoctorServices services={services} />
        </div>
      </section>
      {/* testimonials start  */}
      <section>
        <div className="bg-banner py-12">
          <div className="max-w-6xl m-auto max-sm:mx-4">
            <Heading text={"Patient Testimonials"} left={true} />
            <BlogsSliderDetail
              card={"testimonial"}
              testimonials={testimonials}
            />
          </div>
        </div>
      </section>
      {/* blogs section  */}
      <section>
        <div className="detailPage-Blogs-Slider max-w-6xl max-sm:mx-4 m-auto">
          <Heading text={"Blogs"} left={true} />
          <BlogsSliderDetail
            card={"blog"}
            blogsData={doctorBlogs?.filter((blog) => blog.type === 0)}
          />
        </div>
      </section>
      <section>
        <div className="max-w-6xl m-auto max-sm:mx-4">
          <Heading text={"Regular News"} left={true} />
          <p>
            Get to know the information regarding our healthcare aspects to be
            able to get to better informed decisions. ..
          </p>
          <BlogsSliderDetail
            card={"videos"}
            blogsData={doctorBlogs?.filter((blog) => blog.type === 1)}
          />
        </div>
      </section>
      <NeedHelp />
    </div>
  );
};
export default Landing;
