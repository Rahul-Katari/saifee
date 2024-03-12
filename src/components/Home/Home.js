import BannerCard from "./BannerCard";
import Logo from "../../assets/images/logo.png";

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
import banner from "../../assets/images/home/banners/IMG-20240229-WA0003.jpg";
import cure from "../../assets/images/home/comm-to-cure.png";
import appointments from "../../assets/images/footer/appointments.png";
import CommittedCureTabs from "./CommittedCureTabs";
import AppointmentInput from "./AppointmentInput";
import Welcome from "../Welcome";

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

const Home = () => {
  return (
    <>
      <div>
        <div>
          <img src={banner} />
        </div>
        <section>
          <div className="max-w-7xl m-auto">
            <div className="flex justify-around grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 md:gap-8 gap-y-8 gap-x-4 mx-4">
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
            <h3 className="uppercase text-2xl md:text-3xl my-5 text-center text-theme">
              specialities
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-20 gap-5 mx-4">
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
            <div className="md:text-end text-center mt-12 mx-4">
              <a className="bg-theme px-10 py-2 text-white rounded-lg" href="#">
                View More
              </a>
            </div>
          </div>
        </section>
        {/* specialities end  */}
        {/* new patients appointments banner start */}
        <section>
          <div>
            <img src={appointments} alt="Appointments" className="w-full" />
          </div>
        </section>
        {/* new patients appointments banner end */}
        {/* know about section starts  */}
        <section>
          <div className="overflow-hidden md:ps-8">
            <div className="px-6 lg:px-8">
              <div className="mx-auto md:grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                <img
                  src={cure}
                  alt="Product screenshot"
                  className="lg:col-span-2 rounded-lg"
                />
                <div className="max-sm:mt-4 lg:pr-8 lg:pt-4 lg:col-span-3">
                  <div className="">
                    <h2 className="text-base font-semibold leading-7 text-grey text-xl">
                      Know About
                    </h2>
                    <p className="md:my-3 mt-2 md:text-4xl text-2xl font-normal tracking-tight text-theme sm:text-6xl">
                      Dr. Manasa Mynepally
                    </p>
                    <div>
                      <p>M.D., D.M.(Gold Medalist)</p>
                      <p className="text-red-600  text-xl">
                        Diabetes, Thyroid & Endocrine Centre
                      </p>
                    </div>
                    <p className="my-4 text-gray-600">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </p>
                    <div className="text-blue-900">
                      <p className="text-xl underline">
                        Specialities
                      </p>
                      <div className="grid md:grid-cols-2  list-disc">
                        <ul className="list-disc list-disc-default max-sm:mb-0">
                          <li>Thyroid Treatments - Hypothyroidism</li>
                          <li>Diabetes - Type 1 Diabetes, Type 2 Diabetes</li>
                          <li>Menopause</li>
                          <li>Pituitary Disorders</li>
                          <li>Osteoporosis</li>
                          <li>Adrenal Conditions - Done</li>
                          <li>Endocrine Cancers</li>
                        </ul>
                        <ul className="list-disc list-disc-default max-sm:mt-0">
                          <li>Endocrine-Related Heart Conditions</li>
                          <li>Hormone Disorders</li>
                          <li>Short Stature</li>
                          <li>Growth Hormone Deficiency</li>
                          <li>PCOS</li>
                          <li>Fertility Disorders</li>
                          <li>Obesity</li>
                          <li>Nutrition</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* know about section ends  */}
        {/* committed to cure 2 starts  */}
        <section>
          <div className="lg:px-16">
            <h2 className="text-theme text-xl md:text-3xl text-center uppercase md:my-5">
              Committed to cure
            </h2>
            <CommittedCureTabs />
          </div>
        </section>
        {/* committed to cure 2 ends  */}
        {/* Health talks section starts */}
        <section className="hidden">
          <div>
            <h2 className="text-theme text-3xl text-center uppercase md:mb-10 mb-3">
              health talks
            </h2>
            <div className="md:grid md:grid-cols-12 md:mx-0">
              <div className="col-span-3 md:pe-6 md:ps-10 mx-4 md:mx-0">
                <img src={Logo} className="m-auto" />
                <h3 className="md:text-3xl text-2xl font-semibold py-3">
                  Connect with Manasa Mynepally
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consect etur adipiscing elit.
                  Fusce enim fames quam pellentesque interdum purus senectus
                  feugiat elit.c.
                </p>
              </div>
              <div className="col-span-5">
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
              <div className="col-span-4 md:ps-10 max-sm:pt-5">
                <div className="flex text-white gap-6 justify-center">
                  <button className="w-24 py-1 bg-gradient-to-b from-theme to-[#0361AD] rounded-xl ">
                    All
                  </button>
                  <button className="w-24 py-1 bg-gradient-to-b from-theme to-[#0361AD] rounded-xl ">
                    Featured
                  </button>
                  <button className="w-24 py-1 bg-gradient-to-b from-theme to-[#0361AD] rounded-xl ">
                    Latest
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Health talks section ends */}
        {/* schedule an appointment starts  */}
        <section>
          <div className="md:grid md:grid-cols-7 gap-y-2">
            <div className="flex items-center justify-center col-span-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.90509385153!2d78.24323015659058!3d17.412608643969392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1709380150248!5m2!1sen!2sin"
                height="450"
                style={{ border: "0" }}
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="md:w-4/5 w-full"
              ></iframe>
            </div>
            <div className="bg-gradient-to-b from-theme to-[#035DAF] md:p-10 p-4 col-span-3">
              <div className="text-white">
                <h1 className="uppercase text-2xl md:text-3xl">schedule an appointment</h1>
                <p className="text-sm">
                  To reach out to our mm Hospital Team, please fill in the below
                  form. Our team members will revert back to you shortly.
                </p>
              </div>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <AppointmentInput placeholder={"First Name"} />
                  <AppointmentInput placeholder={"Last Name"} />
                  <AppointmentInput placeholder={"Email Id"} />
                  <AppointmentInput placeholder={"Phone No."} />
                  <AppointmentInput placeholder={"Select Service"} />
                  <AppointmentInput placeholder={"Select Date"} />
                  <textarea
                    placeholder="Type Message"
                    className="rounded-xl p-2 py-5 md:col-span-2 text-sm"
                  ></textarea>
                </div>
                <button className="rounded-full p-2 px-10 mt-4 bg-white ms-auto">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
        {/* schedule an appointment ends */}
      </div>
    </>
  );
};
export default Home;
