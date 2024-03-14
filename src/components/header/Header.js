import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import SidebarButtons from "./SidebarButtons";
import TopBanner from "./TopBanner";
import logo from "../../assets/images/logo.png";

let lastScrollTop = 0;

// Debounce function to limit the frequency of scroll event handling
function debounce(func, wait) {
  let timeout;
  return function () {
    const context = this,
      args = arguments;
    const later = function () {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Scroll event handler function
const handleScroll = debounce(function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    document.querySelector("header").classList.add("hidden");
  } else {
    // Scrolling up
    document.querySelector("header").classList.remove("hidden");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
}, 250); // Adjust debounce wait time as needed

// Attach scroll event listener
// window.addEventListener("scroll", handleScroll);

function Header() {
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
}

export default Header;
