import { IconX } from "@tabler/icons-react";
import React, { useState } from "react";

const CareerForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex justify-end">
      <button onClick={openModal} className="btn-primary px-24">
        Apply Now
      </button>

      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            {/* Modal */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              ​
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle max-w-lg w-full">
              {/* Close button */}
              <div className="flex justify-end">
              <button
                onClick={closeModal}
                type="button"
              >
                <IconX
                  className="bg-highlight text-white p-2 rounded-lg"
                  size={48}
                />
              </button>
              </div>
              <h3 className="text-center text-theme text-xl font-semibold">Career Form</h3>
              {/* Form fields */}
              <form className="p-6 text-xs">
                <div className="mb-4">
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Full Name"
                    className="w-full px-3 py-3 border rounded"
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="tel"
                    id="phoneNo"
                    name="phoneNo"
                    placeholder="Phone No"
                    className="w-full px-3 py-3 border rounded"
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="w-full px-3 py-3 border rounded"
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    id="qualification"
                    name="qualification"
                    placeholder="Qualification"
                    className="w-full px-3 py-3 border rounded"
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="number"
                    id="totalExp"
                    name="totalExp"
                    placeholder="Total Exp"
                    className="w-full px-3 py-3 border rounded"
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="Location"
                    className="w-full px-3 py-3 border rounded"
                  />
                </div>

                {/* Upload CV */}
                <div className="mb-4">
                  <label
                    htmlFor="cv"
                    className="block text-theme text-xl font-semibold mb-2"
                  >
                    Upload CV :
                  </label>
                  <input
                    type="file"
                    id="cv"
                    name="cv"
                    accept=".pdf,.doc,.docx"
                    className="w-full border p-1"
                  />
                </div>

                {/* Submit button */}
                <div className="flex justify-end">
                  <button className="btn-primary text-xs flex justify-end px-8">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerForm;
