import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import SidebarButtons from "./SidebarButtons";
import TopBanner from "./TopBanner";
import logo from "../../assets/images/logo.png";

function Header() {
  return (
    <div className="container relative">
      <div className="flex flex-shrink-0 items-center w-16 md:w-24 absolute top-[7%] left-[10%] md:top-[15%] md:left-[2%]">
        <Link to={"/"}>
          <img className="w-100 h-100" src={logo} alt="Your Company" />
        </Link>
      </div>
      <TopBanner />
      <Navbar />
      <SidebarButtons />
    </div>
  );
}

export default Header;
