import BreadCrumb from "../common/BreadCrumb";
import banner from "../../assets/images/banners/patients-visitors.png";
import AppointmentSchedule from "../AppointmentSchedule";
import VideosListCard from "../VideosListCard";

const Videos = () => {
  const breadCrumb = [
    { href: "/", title: "home" },
    { href: "/blogs", title: "blog" },
    { href: "", title: "endocrinology" },
  ];
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
                id="videos"
                class=" md:w-[250px] border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full my-2 md:py-1 py-2 ps-2 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 md:mx-3"
              >
                <option value="doctor">Doctor Videos</option>
                <option value="other">Other Videos</option>
              </select>
            </div>
            <div>
              <select
                id="videos"
                class=" md:w-[250px] border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full my-2 md:py-1 py-2 ps-2 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 md:mx-3"
              >
                <option value="doctor">Dr.Manasa Mynepally</option>
                <option value="other">Other Videos</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-7xl m-auto">
          <div className="grid md:grid-cols-3 gap-4 m-4">
            {[...Array(12).keys()].map(() => {
              return (
                <div>
                  <VideosListCard />
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
