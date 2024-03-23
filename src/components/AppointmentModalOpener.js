import React, { useEffect, useState } from "react";
import AppointmentModal from "./pages/AppointmentModal";
import appointmentsMobile from "../assets/images/footer/appointments-mobile.png";
import { Link } from "react-router-dom";

const AppointmentModalOpener = ({ Component, img, button }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
  };
  useEffect(() => {}, [isOpen]);

  return (
    <div>
      {Component ? (
        <button className="modal-opener-link" onClick={toggleModal}>
          {Component}
        </button>
      ) : img ? (
        <Link to="#" className="modal-opener-link" onClick={toggleModal}>
          <img
            src={appointmentsMobile}
            className="w-full"
            alt="Appointments Mobile"
          />
        </Link>
      ) : (
        <button className="btn-theme" onClick={toggleModal}>
          {button}
        </button>
      )}

      <AppointmentModal
        isOpen={isOpen}
        toggleModal={toggleModal}
        onClose={closeModal}
      />
    </div>
  );
};
export default AppointmentModalOpener;
