import BreadCrumb from "../common/BreadCrumb";
import banner from "../../assets/images/banners/patients-visitors.png";
import AppointmentSchedule from "../AppointmentSchedule";
import { useEffect, useState } from "react";
import ManasaVideos from "../ManasaVideos";
import UdayVideos from "../UdayVideos";
import PatientTestimonialVideos from "../PatientTestimonialVideos";

const breadCrumb = [
  { href: "/", title: "home" },
  { href: "/videos", title: "news & media" },
];
const Videos = () => {
  const [videoType, setVideoType] = useState("doctors");
  const doctorVideos = [
    { name: "Dr. Manasa Mynepally", value: "manasa" },
    { name: "Dr. Uday Kiran", value: "uday" },
  ];
  const [videosToShow, setvideosToShow] = useState(doctorVideos);
  const [selectedVideos, setselectedVideos] = useState("manasa");
  const handleVideoTypeChange = (event) => {
    const selectedValue = event.target.value;
    setVideoType(selectedValue);
    if (selectedValue === "doctors") {
      setvideosToShow([
        { name: "Dr. Manasa Mynepally", value: "manasa" },
        { name: "Dr. Uday Kiran", value: "uday" },
      ]);
      setselectedVideos("manasa");
    } else if (selectedValue === "patients") {
      setselectedVideos("");
      setvideosToShow([]);
    }
  };
  const handleVideosChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "manasa") {
      setselectedVideos("manasa");
    } else if (selectedValue === "uday") {
      setselectedVideos("uday");
    }
  };
  useEffect(() => {}, [videosToShow, selectedVideos]);
  return (
    <div>
      <div>
        <img src={banner} alt="banner" />
      </div>
      <BreadCrumb linkData={breadCrumb} />
      <section>
        <div className="flex justify-center">
          <div className="grid md:grid-cols-3 grid-cols-2 gap-3 bg-[#F2F8F7] items-center inline-flex">
            <div className="bg-highlight text-white p-3 max-sm:col-span-2">
              SORT ARTICLES BY
            </div>
            <div>
              <select
                value={videoType}
                onChange={handleVideoTypeChange}
                class=" md:w-[250px] border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full my-2 md:py-1 py-2 ps-2 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 md:mx-3"
              >
                <option value="doctors">Doctors Videos</option>
                <option value="patients">Patients Testimonials</option>
              </select>
            </div>
            <div>
              <select
                value={selectedVideos}
                onChange={handleVideosChange}
                class=" md:w-[250px] border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full my-2 md:py-1 py-2 ps-2 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 md:mx-3"
              >
                {videosToShow.map((option, index) => {
                  return (
                    <option key={index} value={option.value}>
                      {option.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-7xl m-auto">
          <div className="grid md:grid-cols-4 grid-cols-2 gap-4 m-4">
            {[...Array(12).keys()].map(() => {
              return (
                <div>
                  {selectedVideos === "manasa" ? (
                    <ManasaVideos />
                  ) : selectedVideos === "uday" ? (
                    <UdayVideos />
                  ) : (
                    <PatientTestimonialVideos />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <AppointmentSchedule />
    </div>
  );
};
export default Videos;
