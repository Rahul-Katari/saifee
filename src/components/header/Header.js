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
    <header className="container shadow-lg md:relative sticky top-0 bg-white z-[1]">
      <div className="flex flex-shrink-0 items-center w-16 md:w-24 absolute top-[7%] left-[10%] md:top-[15%] md:left-[2%]">
        <Link to={"/"}>
          <img className="w-100 h-100" src={logo} alt="Your Company" />
        </Link>
      </div>
      <TopBanner />
      <Navbar />
      <SidebarButtons />
    </header>
  );
};

export default Header;
