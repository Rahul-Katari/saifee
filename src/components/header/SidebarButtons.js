import React from "react";

const SidebarButtons = () => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 space-y-4">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
        <i className="fas fa-calendar-alt mr-2"></i>
        Book Appointment
      </button>
      <button className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center">
        <i className="fas fa-plus mr-2"></i>
        Emergency Medical Care
      </button>
    </div>
  );
};

export default SidebarButtons;
