import AppointmentInput from "./home/AppointmentInput";

const AppointmentSchedule = () => {
  return (
    <div >
      <div className="md:grid md:grid-cols-7 gap-y-2">
        <div className="flex items-center justify-center col-span-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.90509385153!2d78.24323015659058!3d17.412608643969392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1709380150248!5m2!1sen!2sin"
            style={{ border: "0" }}
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
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
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <AppointmentInput placeholder={"First Name"} />
              <AppointmentInput placeholder={"Last Name"} />
              <AppointmentInput placeholder={"Email Id"} />
              <AppointmentInput placeholder={"Phone No."} />
              <AppointmentInput placeholder={"Select Service"} />
              <AppointmentInput placeholder={"Select Date"} />
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
