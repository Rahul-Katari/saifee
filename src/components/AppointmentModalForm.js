import { useEffect, useState } from "react";
import ApiService from "../controller/apiService";
import { useBlogData } from "../controller/blogDataContext";

const AppointmentModalForm = ({ modal }) => {
  const [doctors, setDoctors] = useState();
  const [formResponse, setFormResponse] = useState();
  const [error, setError] = useState(null);

  const doctorsData = useBlogData()?.doctors;
  useEffect(() => {
    if (doctorsData) {
      const doctorNames = doctorsData?.map((doctor) => ({
        name: `${doctor.firstName} ${doctor.lastName}`,
        value: doctor._id,
      }));
      setDoctors(doctorNames);
    }
  }, [doctorsData]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [formData, setFormData] = useState({
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

  const submitForm = async () => {
    try {
      console.log(formData);
      const submitResponse = await ApiService.post(
        "submitappointment",
        formData
      );
      setFormResponse(submitResponse.data.result);
      if (submitResponse.status === 200) {
        window.alert(formResponse.message);
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
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className={!modal ? "max-w-5xl m-auto md:p-8 px-8 py-4" : ""}>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-2 max-sm:text-xs">
        {/* Left Column */}
        <div className="md:space-y-4 space-y-2">
          <select
            name="preferredDoctor"
            value={formData.preferredDoctor}
            onChange={handleInputChange}
            className="w-full border p-2 rounded "
          >
            <option value="">-Select Doctor-</option>
            {doctors?.map((doctor) => {
              return (
                <option
                  key={doctor.value}
                  id={doctor.value}
                  value={doctor.value}
                >
                  {doctor.name}
                </option>
              );
            })}
            {/* <option value="manasa">Dr. Manasa</option>
            <option value="uday">Dr. Uday</option> */}
            {/* Add more options */}
          </select>
          <select
            name="preferredDepartment"
            value={formData.preferredDepartment}
            onChange={handleInputChange}
            className="w-full border p-2 rounded "
          >
            <option value="">-Select Speciality-</option>
            <option value="endo">Endocrinology</option>
            <option value="general">General Surgery</option>
            {/* Add more options */}
          </select>
          <input
            type="date"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleInputChange}
            className="w-full border p-2 rounded "
            required
          />
          <input
            type="time"
            name="appointmentTime"
            value={formData.appointmentTime}
            onChange={handleInputChange}
            className="w-full border p-2 rounded "
          />
          <textarea
            name="pastconsultation"
            value={formData.pastconsultation}
            onChange={handleInputChange}
            placeholder="Message"
            className="w-full border p-2 rounded "
          ></textarea>
        </div>
        <div className="md:space-y-4 space-y-2">
          <input
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleInputChange}
            placeholder="Name"
            className="w-full border p-2 rounded "
            required
          />

          <select
            name="patientGender"
            value={formData.patientGender}
            onChange={handleInputChange}
            className="w-full border p-2 rounded "
          >
            <option value="">-Select Gender-</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <input
            type="number"
            name="patientAge"
            value={formData.patientAge}
            onChange={handleInputChange}
            placeholder="Age"
            maxLength={2}
            className="w-full border p-2 rounded "
          />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="Location"
            className="w-full border p-2 rounded "
          />
          <input
            type="email"
            name="patientEmail"
            value={formData.patientEmail}
            onChange={handleInputChange}
            placeholder="Email"
            className="w-full border p-2 rounded "
          />
          <input
            type="tel"
            name="patientMobile"
            value={formData.patientMobile}
            onChange={handleInputChange}
            placeholder="Phone No"
            className="w-full border p-2 rounded "
          />
        </div>
      </div>

      <div className={` justify-end mt-3 ${!modal ? "flex" : "hidden"}`}>
        <button
          id="submitFormButton"
          onClick={submitForm}
          className="btn-theme px-12 py-2"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AppointmentModalForm;
