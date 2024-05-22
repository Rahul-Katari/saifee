import SocialIcons from "./SocialIcons";
import PageLinks from "./PageLinks";

const topLinks = [
  { name: "Blogs", href: "/blogs" },
  { name: "Health Packages", href: "/healthCheckup" },
  { name: "Patients & Visitors", href: "/patientsVisitors" },
  { name: "Careers", href: "/careers" },
  { name: "News & Media", href: "/videos" },
];
const TopBanner = () => {
  return (
    <div className="top-banner justify-end bg-blue-900 text-white space-x-3 p-3 pe-5 items-center hidden md:flex">
      <div className="text-sm flex pe-2 items-center">
        Follow us on :
        <div className="ps-4">
          <SocialIcons space={"1"} />
        </div>
      </div>
      <PageLinks links={topLinks} weight={"normal"} />
    </div>
  );
};
export default TopBanner;
