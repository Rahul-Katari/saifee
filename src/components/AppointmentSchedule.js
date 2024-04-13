import { useEffect, useState } from "react";
import ApiService from "../controller/apiService";
import useApiData from "../controller/useApiData";
import AppointmentInput from "./home/AppointmentInput";
import { useBlogData } from "../controller/blogDataContext";

const AppointmentSchedule = () => {
  const doctors = useBlogData()?.doctors;
  const [speciality, setSpeciality] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  useEffect(() => {
    if (speciality) {
      const filtered = doctors.filter(
        (doctor) => doctor.department === speciality
      );
      setFilteredDoctors(filtered);
    } else {
      setFilteredDoctors(doctors);
    }
  }, [speciality, doctors]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
      const submitResponse = await ApiService.post("submitcontact", data);

      if (!submitResponse.ok) {
        throw new Error(`HTTP error! status: ${submitResponse.status}`);
      }
      window.alert("Your message has been sent successfully");
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSpecialityChange = (e) => {
    setSpeciality(e.target.value);
  };

  return (
    <div>
      <div className="md:grid md:grid-cols-7 gap-y-2">
        <div className="flex items-center justify-center col-span-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.90509385153!2d78.24323015659058!3d17.412608643969392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1709380150248!5m2!1sen!2sin"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="md:m-4 w-full h-full md:py-4 max-sm:h-[400px]"
          ></iframe>
        </div>
        <div className="bg-gradient-to-b from-theme to-[#035DAF] md:p-10 p-4 col-span-3">
          <div className="text-white">
            <h1 className="uppercase text-2xl md:text-3xl">
              schedule an appointment
            </h1>
            <p className="text-xs">
              To reach out to our mm Hospital Team, please fill in the below
              form. Our team members will revert back to you shortly.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <AppointmentInput name={"firstname"} placeholder={"First Name"} />
              <AppointmentInput name={"lastName"} placeholder={"Last Name"} />
              <AppointmentInput name={"email"} placeholder={"Email Id"} />
              <AppointmentInput
                name={"phoneNumber"}
                placeholder={"Phone No."}
              />
              <AppointmentInput
                placeholder={"Speciality"}
                inputType={"select"}
                selectType={"speciality"}
                onChange={handleSpecialityChange}
              />
              <AppointmentInput
                placeholder={"Doctor"}
                inputType={"select"}
                selectType={filteredDoctors}
              />
              <textarea
                placeholder="Type Message"
                className="rounded-xl p-2 py-5 md:col-span-2 text-sm"
              ></textarea>
            </div>
            <button className="rounded-full p-2 px-10 mt-4 bg-white ms-auto">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSchedule;
