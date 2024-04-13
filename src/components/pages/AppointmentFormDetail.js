// AppointmentFormDetail.js
import {
  IconCalendarFilled,
  IconClockHour3,
  IconPhoneFilled,
  IconUserFilled,
} from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import ApiService from "../../controller/apiService";
import AppointmentFormDetailInput from "../AppointmentFormDetailInput";

const AppointmentFormDetail = ({ details }) => {
  const [patientName, setPatientName] = useState("");
  const [patientMobile, setPatientMobile] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");

  const [formData, setFormData] = useState({
    // preferredDoctor: details?._id, // doctor
    // preferredDepartment: details?.department, // speciality
    appointmentDate: "", // date
    appointmentTime: "", // time
    pastconsultation: "", // message
    patientName: "", // name
    patientGender: "", // gender
    patientAge: "", // age
    location: "", // location
    patientEmail: "", // email
    patientMobile: "", // phone
  });
  useEffect(() => {}, [formData]);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const submitResponse = await ApiService.post(
        "submitappointment",
        formData
      );
      if (submitResponse.status === 200) {
        window.alert(submitResponse.data.result.message);
        setFormData({
          preferredDoctor: "", // doctor
          preferredDepartment: "", // speciality
          appointmentDate: "", // date
          appointmentTime: "", // time
          pastconsultation: "", // message
          patientName: "", // name
          patientGender: "", // gender
          patientAge: "", // age
          location: "", // location
          patientEmail: "", // email
          patientMobile: "", // phone
          // doctorid: doctorid,
        });
      } else window.alert("form not submitted");
      // Handle response
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      preferredDoctor: details?._id, // doctor
      preferredDepartment: details?.department,
    });
  };

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
        <form
          className="space-y-4 text-gray-700 text-xs"
          onSubmit={handleFormSubmit}
        >
          <AppointmentFormDetailInput
            Icon={IconUserFilled}
            type="text"
            placeholder="Name"
            value={formData.patientName}
            handleChange={handleChange}
            name={"patientName"}
          />
          <AppointmentFormDetailInput
            Icon={IconPhoneFilled}
            type="tel"
            placeholder="Phone Number"
            value={formData.patientMobile}
            name={"patientMobile"}
            handleChange={handleChange}
          />
          <AppointmentFormDetailInput
            Icon={IconCalendarFilled}
            type="date"
            placeholder="Appointment Date"
            value={formData.appointmentDate}
            name={"appointmentDate"}
            handleChange={handleChange}
          />
          <AppointmentFormDetailInput
            Icon={IconClockHour3}
            type="time"
            placeholder="Appointment Time"
            value={formData.appointmentTime}
            name={"appointmentTime"}
            handleChange={handleChange}
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
