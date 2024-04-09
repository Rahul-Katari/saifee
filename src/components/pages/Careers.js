import AppointmentSchedule from "../AppointmentSchedule";
import banner from "../../assets/images/banners/careers.png";
import MoreBtn from "../common/MoreBtn";
import CareerCard from "../CareerCard";
import { useEffect, useState } from "react";

const Careers = () => {
  const [careers, setCareers] = useState([]);
  useEffect(() => {

    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    fetch("http://localhost:3000/careers?reqtype=api", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        setCareers(JSON.parse(result)?.result?.data?.careers);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <div>
        <img src={banner} alt="banner" />
      </div>
      <section>
        <div className="max-w-7xl m-auto max-sm:m-4">
          <h2 className="text-theme font-medium text-xl pb-4 highlight-border highlight-border-left">
            Career
          </h2>
          <div className="md:grid grid-cols-2 gap-20">
            {careers?.map((career) => {
              return <CareerCard career={career} />;
            })}

          </div>
          <div className="flex justify-end">
            <MoreBtn btn="theme" btnText={"View More"} href={"/"} />
          </div>
        </div>
      </section>
      <AppointmentSchedule />
    </div>
  );
};
export default Careers;
