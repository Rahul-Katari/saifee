const AppointmentInput = ({ placeholder }) => {
  return (
    <div>
      <input
        placeholder={placeholder}
        className="p-2 px-5 rounded-full w-full text-sm"
      />
    </div>
  );
};

export default AppointmentInput;
