const AppointmentModalForm = ({ modal }) => {
  return (
    <div className="md:p-8 px-8 py-4 max-w-5xl m-auto md:my-16">
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-2 max-sm:text-xs">
        {/* Left Column */}
        <div className="md:space-y-4 space-y-2">
          <select className="w-full border p-2 rounded ">
            <option>-Select Doctor-</option>
            <option value="manasa">Dr. Manasa</option>
            <option value="uday">Dr. Uday</option>
            {/* Add more options */}
          </select>
          <select className="w-full border p-2 rounded ">
            <option>-Select Speciality-</option>
            <option value="endo">Endocrinology</option>
            <option value="general">General Surgery</option>
            {/* Add more options */}
          </select>
          <input
            type="date"
            className="w-full border p-2 rounded "
            // Add necessary props and state management
          />
          <input
            type="time"
            className="w-full border p-2 rounded "
            // Add necessary props and state management
          />
          <textarea
            placeholder="Message"
            className="w-full border p-2 rounded "
          ></textarea>
        </div>
        <div className="md:space-y-4 space-y-2">
          <input
            placeholder="Name"
            type="text"
            className="w-full border p-2 rounded "
          />

          <select className="w-full border p-2 rounded ">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <input
            placeholder="Age"
            type="number"
            maxLength={2}
            className="w-full border p-2 rounded "
          />
          <input
            placeholder="Location"
            type="text"
            className="w-full border p-2 rounded "
          />
          <input
            placeholder="Email"
            type="email"
            className="w-full border p-2 rounded "
          />
          <input
            placeholder="Phone No"
            type="tel"
            className="w-full border p-2 rounded "
          />
        </div>
      </div>
    </div>
  );
};
export default AppointmentModalForm;
