import BreadCrumb from "../common/BreadCrumb";
import banner from "../../assets/images/banners/patients-visitors.png";
import AppointmentSchedule from "../AppointmentSchedule";
import { useEffect, useState } from "react";
import ManasaVideos from "../ManasaVideos";
import { useBlogData } from "../../controller/blogDataContext";

const breadCrumb = [
  { href: "/", title: "home" },
  { href: "/videos", title: "news & media" },
];
const Videos = () => {
  const [videoType, setVideoType] = useState("doctors");
  const [videosToShow, setvideosToShow] = useState([]);
  const [selectedVideos, setselectedVideos] = useState("");
  const [videosData, setVideosData] = useState([]);
  const [doctorVideos, setDoctorVideos] = useState([]);
  const handleVideoTypeChange = (event) => {
    const selectedValue = event.target.value;
    setVideoType(selectedValue);
    if (selectedValue === "doctors") {
      setvideosToShow(doctorVideos);
      setselectedVideos(doctorVideos[0]?.value);
    } else if (selectedValue === "patients") {
      setselectedVideos("");
      setvideosToShow([]);
    }
  };
  const handleDoctorsChange = (event) => {
    const selectedValue = event.target.value;
    setselectedVideos(selectedValue);
  };

  const videos = useBlogData()?.allblogs?.filter((blog) => blog.type === 1);
  const doctors = useBlogData()?.doctors;

  useEffect(() => {
    if (doctors) {
      // Extract name and id from each doctor object and create a new array
      const namesAndIds = doctors.map((doctor) => ({
        name: `Dr. ${doctor.firstName} ${doctor.lastName}`,
        value: doctor._id,
      }));
      // Update the state with the array of doctor names and ids
      setDoctorVideos(namesAndIds);
      setvideosToShow(namesAndIds);
      setVideosData(videos);
    }
  }, [doctors]);
  useEffect(() => {
    setselectedVideos(videosToShow[0]?.value);
  }, [videosData]);

  // if (loading) return <div>Loading...</div>;
  return (
    <div>
      {console.log(doctors)}
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
                className=" md:w-[250px] border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full my-2 md:py-1 py-2 ps-2 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 md:mx-3"
              >
                <option value="doctors">Doctors Videos</option>
                <option value="patients">Patients Testimonials</option>
              </select>
            </div>
            <div>
              <select
                value={selectedVideos}
                onChange={handleDoctorsChange}
                className=" md:w-[250px] border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full my-2 md:py-1 py-2 ps-2 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 md:mx-3"
              >
                {videosToShow.map((option, index) => {
                  return (
                    <option
                      key={index}
                      value={option.value}
                      selected={selectedVideos === option.value}
                    >
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
            {videosData
              .filter((vid) => vid.doctorid === selectedVideos)
              .map((video) => {
                return (
                  <div>
                    {/* {selectedVideos === "manasa" ? (
                    <ManasaVideos videoSrc={video.videosrc} />
                  ) : selectedVideos === "uday" ? (
                    <UdayVideos />
                  ) : (
                    <PatientTestimonialVideos />
                  )} */}
                    <ManasaVideos videoSrc={video.videosrc} />
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
