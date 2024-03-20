import BreadCrumb from "../common/BreadCrumb";
import banner from "../../assets/images/banners/book-appointment.png";
import { useState } from "react";

const HealthCheckUpForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const breadCrumb = [
    { href: "/", title: "home" },
    { href: "/healthCheckup", title: "Heath Checkup Packages" },
    { href: "/healthCheckupForm", title: "Appointment" },
  ];
  return (
    <div>
      <div>
        <img src={banner} />
      </div>
      <BreadCrumb linkData={breadCrumb} />
      <div className=" bg-banner">
        <div className="p-8 md:py-24 max-w-7xl m-auto">
          <form className="grid md:grid-cols-2  gap-4">
            <div>
              <label className="mb-2 block">Selected Package*</label>
              <select
                name="package"
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              >
                <option value="">Choose a package</option>
                <option value="Package A">Package A</option>
                <option value="Package B">Package B</option>
                {/* Add more package options as needed */}
              </select>
            </div>

            <div>
              <label className="mb-2 block">Name*</label>
              <input
                type="text"
                name="name"
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="mb-2 block">Mobile*</label>
              <input
                type="number"
                name="name"
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="mb-2 block">Email*</label>
              <input
                type="email"
                name="name"
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>

            {/* Add other input fields (Mobile, Email, etc.) similarly */}

            <div>
              <label className="mb-2 block">Date*</label>
              <input
                type="date"
                name="date"
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="mb-2 block">Time*</label>
              <input
                type="time"
                name="time"
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="mb-2 block">Address*</label>
              <textarea
                name="address"
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="mb-2 block">Message*</label>
              <textarea
                name="message"
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="flex">
              <div className="flex justify-end">
                <button className="btn-primary text-white px-14 py-2 rounded hover:bg-blue-600">
                  Submit
                </button>
              </div>
              <div>
                <button
                  type="reset"
                  className="border border-black text-gray-700 px-14 py-2 text-xs rounded hover:bg-gray-400"
                >
                  Reset
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default HealthCheckUpForm;
