import appointments from "../../assets/images/footer/appointments.png";
import clock from "../../assets/images/clock-icon.png";
import location from "../../assets/images/location-icon.png";
import { Link } from "react-router-dom";

const NewAppointments = () => {
  return (
    <div
      className="md:grid grid-cols-12 justify-end bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${appointments})` }}
    >
      <div className="col-span-4"></div>
      <div className="flex flex-col justify-center md:p-10 p-4 max-sm:py-10 col-span-8">
        <h3 className="md:text-2xl text-xl mb-2 text-nav-highlight">
          New Patient Appointments
        </h3>
        <p className=" font-semibold md:mb-12 mb-6 text-content">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="flex max-sm:flex-col justify-between md:items-center items-start gap-5 md:me-12">
          <Link to={"/bookAppointment"} className="text-white py-2 px-4 rounded-md transition duration-300 ease-in-out bg-theme-gradient me-6">
            Get An Appointment
          </Link>
          <div className="flex items-center justify-center">
            <div className=" me-6">
              <img src={clock} className="w-[37px]" />
            </div>
            <span className="text-sm">
              Monday - Friday
              <br />
              12:30 PM - 9:30 PM
            </span>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-[37px] me-6">
              <img src={location} className="w-[23px] h-[33px]" />
            </div>
            <span className="text-sm">
              101, Sri Sampada Arcade,1, Khajaguda – <br></br> Nanakramguda Rd,
              Telangana, 500032
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAppointments;
