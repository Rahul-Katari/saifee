import AppointmentSchedule from "../AppointmentSchedule";
import banner from "../../assets/images/banners/careers.png";
import MoreBtn from "../common/MoreBtn";
import CareerCard from "../CareerCard";

const Careers = () => {
  return (
    <div>
      <div>
        <img src={banner} alt="banner" />
      </div>
      <section>
        <div className="max-w-7xl m-auto">
          <h2 className="text-theme font-medium text-xl pb-4 highlight-border highlight-border-left">
            Career
          </h2>
          <div className="md:grid grid-cols-2 gap-20">
            <CareerCard />
            <CareerCard />
            <CareerCard />
            <CareerCard />
          </div>
          <div className="flex justify-end">
            <MoreBtn btnText={"View More"} href={"/"} />
          </div>
        </div>
      </section>
      <AppointmentSchedule />
    </div>
  );
};
export default Careers;
