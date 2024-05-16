import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import SidebarButtons from "./SidebarButtons";
import TopBanner from "./TopBanner";
import logo from "../../assets/images/logo.png";
import { useEffect, useRef } from "react";

const Header = () => {
  const { pathname } = useLocation();
  const prevPathName = useRef(null);
  useEffect(() => {
    if (pathname !== prevPathName) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      prevPathName.current = pathname;
    }
  }, [pathname]);
  return (
    <header className="container max-w-screen-2xl md:grid grid-cols-12 shadow-lg relative sticky top-0 bg-white z-[1]">
      <div className="flex col-span-2 justify-center items-center">
        <Link to={"/"} className="max-sm:hidden">
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
