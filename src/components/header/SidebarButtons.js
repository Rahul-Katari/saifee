import { IconAmbulance } from "@tabler/icons-react";
import React from "react";
import calender from "../../assets/images/calender-icon.png";
import whatsappIcon from "../../assets/images/whatsappIcon.png";
import { Link } from "react-router-dom";

const SidebarButtons = () => {
  return (
    <div>
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 space-y-2 z-[1] text-xs">
        <div className="bg-theme text-white px-5 py-1 rounded-l-md text-center">
          <Link to={"/"}>
            <div>
              <img src={calender} className="m-auto w-1/3" />
            </div>
            <div className="leading-4">
              Book <br></br> Appointment
            </div>
          </Link>
        </div>
        <div className="bg-highlight text-white text-center py-1 rounded-l-md">
          <Link to={"/"}>
            <IconAmbulance className="m-auto" size={30} />
            <div className="leading-4">
              Emergency <br></br> Medical Care
            </div>
          </Link>
        </div>
      </div>
      <div className="fixed right-0 top-[80%] transform -translate-y-3/4 space-y-2 z-[1] text-sm">
        <Link to={"/"}>
          <img src={whatsappIcon} className="w-5/12 ms-auto me-6" />
        </Link>
      </div>
    </div>
  );
};

export default SidebarButtons;
