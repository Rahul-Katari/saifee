import SocialIcons from "./SocialIcons";
import PageLinks from "./PageLinks";

const topLinks = [
  { name: "Blogs", href: "#" },
  { name: "Patients & Visitors", href: "#" },
  { name: "Careers", href: "#" },
  { name: "News & Media", href: "#" },
];
const TopBanner = () => {
  return (
    <div className="top-banner justify-end bg-blue-900 text-white space-x-3 p-3 pe-5 items-center hidden md:flex">
      <div className="text-sm flex pe-2">
        Follow us on :
        <div className="ps-4">
          <SocialIcons space={"1"} />
        </div>
      </div>
      <PageLinks links={topLinks} weight={"semibold"} />
    </div>
  );
};
export default TopBanner;
