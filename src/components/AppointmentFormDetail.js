import {
  IconCalendarFilled,
  IconClockHour3,
  IconPhoneFilled,
  IconUserFilled,
} from "@tabler/icons-react";
import React from "react";
import AppointmentFormDetailInput from "./AppointmentFormDetailInput";

const AppointmentFormDetail = () => {
  return (
    <div className="max-w-md mx-auto bg-white md:rounded-xl md:shadow-md">
      <div className="flex-shrink-0">
        <div className="bg-gradient-to-r from-[#FF744B] md:rounded-t-xl via-[#FF744B] to-[#FFA084] text-white px-6 py-1.5 font-semibold text-center flex items-center justify-center">
          <IconPhoneFilled
            className="border  rounded-full p-1 me-2"
            size={30}
          />
          +91 73400 40097
        </div>
      </div>

      <div className="p-5">
        <h1 className="font-semibold text-theme text-center mb-4">
          Book an Appointment
        </h1>
        <form className="space-y-4 text-gray-700 text-xs">
          <AppointmentFormDetailInput
            Icon={IconUserFilled}
            type="text"
            placeholder="Name"
          />
          <AppointmentFormDetailInput
            Icon={IconPhoneFilled}
            type="tel"
            placeholder="Phone Number"
          />
          <AppointmentFormDetailInput
            Icon={IconCalendarFilled}
            type="date"
            placeholder="Appointment Date"
          />
          <AppointmentFormDetailInput
            Icon={IconClockHour3}
            type="time"
            placeholder="Appointment Time"
          />
          <div className="flex justify-center">
            <button className="btn-theme rounded-full px-8">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentFormDetail;
