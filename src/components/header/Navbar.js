import { useRef, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import navHelp from "../../assets/images/home/nav-help.png";
import logo from "../../assets/images/logo.png";
import AppointmentModalOpener from "../AppointmentModalOpener";

const navigation = [
  { name: "Home", href: "/", current: true, desktopNav: true },
  { name: "About Us", href: "/about", current: false, desktopNav: true },
  {
    name: "Center Of Excellence",
    href: "/excellence",
    current: false,
    desktopNav: true,
  },
  {
    name: "Consult Our Best Doctors",
    href: "/bestDoctors",
    current: false,
    desktopNav: true,
  },
  { name: "Facilities", href: "/facilities", current: false, desktopNav: true },
  { name: "Contact Us", href: "/contact", current: false, desktopNav: true },
  { name: "Blogs", href: "/blogs", current: false, desktopNav: false },
  {
    name: "Patients & Visitors",
    href: "/patientsVisitors",
    current: false,
    desktopNav: false,
  },
  { name: "Careers", href: "/careers", current: false, desktopNav: false },
  { name: "News & Media", href: "/videos", current: false, desktopNav: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const { pathname } = useLocation();
  const disclosureRef = useRef(null);

  const handleLinkClick = () => {
    if (disclosureRef.current) {
      disclosureRef.current.click(); // Close the mobile menu
      // Find the disclosure button inside the navbar
      const disclosureButton = document.querySelector(".mobile-navbar-toggle");
      // Check if the disclosure button exists
      if (disclosureButton) {
        // Toggle the disclosure panel by clicking the disclosure button
        disclosureButton.click();
      }
    }
  };

  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="mx-auto md:py-4 sm:px-6 lg:px-8">
            <div className="text-white md:hidden">
              <div className="py-2 bg-[#046AA9] text-center text-sm">
                Contact Number: <a href="tel:+917340040097">+91 73400 40097 </a>
              </div>
              <div className="py-2 text-center bg-gradient-to-r from-[#07879A] to-[#97c7ce] text-sm">
                Best Endocrinologist in hyderabad
              </div>
            </div>
            <div className="relative flex md:h-16 items-center justify-between p-2">
              <Link className="md:hidden" to={"/"}>
                <img className="w-16 h-100" src={logo} alt="Your Company" />
              </Link>
              <div className="inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white mobile-navbar-toggle"
                  ref={disclosureRef}
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
                <div>
                  {/* <button className="btn-primary">Appointment</button> */}
                  <AppointmentModalOpener button={"Appointment"} />
                </div>
              </div>

              <div className="flex flex-1 items-center justify-center sm:justify-between items-center max-sm:hidden">
                <div className="flex items-center">
                  <div className="hidden sm:block ms-[130px]">
                    <div className="flex">
                      {navigation.map((item) => {
                        return (
                          item.desktopNav && (
                            <Link
                              key={item.name}
                              to={item.href}
                              className={classNames(
                                (item.href === "/" && pathname === "/") ||
                                  (item.href !== "/" &&
                                    item.href === pathname) ||
                                  (pathname.includes(item.href) &&
                                    item.href !== "/")
                                  ? "text-nav-highlight underline"
                                  : "hover:text-nav-highlight hover:underline",
                                "rounded-md px-3 py-2  font-medium"
                              )}
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                            </Link>
                          )
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="me-3 w-12 md:w-16">
                    <img src={navHelp} alt="help" />
                  </div>
                  <div>
                    <p className="text-sm">24x7 Help line</p>
                    <a
                      href="tel:+91 73400 40097"
                      className="font-semibold text-cyan-900 text-sm"
                    >
                      +91 73400 40097
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Off-canvas mobile menu */}
          <Disclosure.Panel
            className={`sm:hidden top-[152px] fixed inset-0 bg-white z-40 w-64 sm:w-80 transform transition-transform ease-in-out shadow-2xl ${
              open ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div
              className="h-full flex flex-col justify-between"
              ref={disclosureRef}
            >
              <div>
                <div className="space-y-1 px-2 pb-3 pt-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => handleLinkClick()}
                      className={classNames(
                        (item.href === "/" && pathname === "/") ||
                          (item.href !== "/" && item.href === pathname) ||
                          (pathname.includes(item.href) && item.href !== "/")
                          ? "text-nav-highlight underline"
                          : "hover:text-nav-highlight hover:underline",
                        "rounded-md px-3 py-2  font-medium block"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              {/* Additional content */}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
