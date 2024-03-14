import banner from "../../assets/images/our-doctors-banner.png";
import OurTopDoctors from "../OurTopDoctors";
import hexagon from "../../assets/images/landing/hexagon.png";

const BestDoctors = () => {
  return (
    <div>
      <div>
        <img src={banner} className="w-full" />
      </div>
      <OurTopDoctors />
      <div className="grid md:grid-cols-2 bg-banner py-12 md:px-40 p-4 md:gap-24 gap-12 items-center">
        <div>
          <img src={hexagon} />
        </div>
        <div className="md:pe-40">
          <div className="text-4xl font-semibold">
            <h1>Train with the</h1>
            <h1 className="md:my-5 my-3">Right Technique</h1>
            <h1 className="text-red-500">For Best</h1>
          </div>
          <p className="my-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's{" "}
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
export default BestDoctors;
