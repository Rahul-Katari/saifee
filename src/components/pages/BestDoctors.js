// import banner from "../../assets/images/banners/our-doctors-banner.png";
import banner from "../../assets/images/banners/our-doctors-banner.png";
import OurTopDoctors from "../OurTopDoctors";
import hexagon from "../../assets/images/landing/areas-general.png";

const BestDoctors = () => {
  return (
    <div>
      <div className="relative sm:mb-[680px] max-sm:mb-[250%]">
        <img src={banner} className="w-full" />
        <div className="absolute top-[75%]">
          <OurTopDoctors />
        </div>
      </div>
      <div className="grid md:grid-cols-2 bg-banner py-12 lg:px-40 p-4 md:gap-24 gap-12 items-center">
        <div className="flex items-center justify-center">
          <img src={hexagon} className="h-[200px] md:h-[300px]" />
        </div>
        <div className="xl:pe-40">
          <div className="text-2xl font-semibold">
            <h1 data-aos="fade-up">Train with the</h1>
            <h1 className="md:my-1 my-1" data-aos="fade-up">Right Technique</h1>
            <h1 className="text-red-500" data-aos="fade-up">For Best</h1>
          </div>
          <p className="my-5" data-aos="fade-up">
            Meet Our Top Trainee Doctors: Exceptional Talent, Exceptional Care.{" "}
          </p>
          <p data-aos="fade-up">
            Learn more about the dedicated individuals shaping the future of healthcare with their passion, expertise, and commitment to excellence.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
export default BestDoctors;
