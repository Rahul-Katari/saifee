import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import SidebarButtons from "./SidebarButtons";
import TopBanner from "./TopBanner";
import logo from "../../assets/images/logo.png";
import { useEffect, useRef } from "react";

const Header = () => {
  const { pathname, hash } = useLocation();
  const prevPathName = useRef(null);

  useEffect(() => {
    if (pathname !== prevPathName.current) {
      const handleScroll = () => {
        if (!hash) {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
        prevPathName.current = pathname;
      };
      setTimeout(handleScroll, 100); // Add a small delay before scrolling
    }
  }, [pathname]);

  return (
    <header className="container max-w-screen-3xl lg:grid grid-cols-12 shadow-lg relative sticky top-0 bg-white z-[2]">
      <div className="flex col-span-2 justify-center items-center">
        <Link to={"/"} className="max-lg:hidden">
          <img
            className="w-100 h-100 w-16 md:w-24"
            src={logo}
            alt="Your Company"
          />
        </Link>
      </div>
      <div className="col-span-10">
        <TopBanner />
        <Navbar />
        <SidebarButtons />
      </div>
    </header>
  );
};

export default Header;
