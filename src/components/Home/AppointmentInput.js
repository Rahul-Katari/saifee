import React from "react";

const AppointmentInput = ({
  placeholder,
  name,
  inputType,
  selectType,
  onChange,
  required,
}) => {
  if (inputType === "select") {
    return (
      <div>
        <select
          name={name}
          className="p-2 px-5 rounded-full w-full text-sm"
          onChange={onChange}
          required={required}
        >
          <option value="" disabled selected>
            Select an {placeholder}
          </option>
          {selectType === "speciality" ? (
            <>
              <option value="1">Endocrinology</option>
              <option value="2">General Surgery</option>
            </>
          ) : (
            selectType?.map((option, index) => (
              <option key={index} value={option._id}>
                {option.firstName} {option.lastName}
              </option>
            ))
          )}
        </select>
      </div>
    );
  } else {
    return (
      <div>
        <input
          name={name}
          placeholder={placeholder}
          className="p-2 px-5 rounded-full w-full text-sm"
          required={required}
        />
      </div>
    );
  }
};

export default AppointmentInput;
