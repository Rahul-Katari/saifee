import BreadCrumb from "../common/BreadCrumb";
const BookApppointments = () => {
  return (
    <div>
      <div>
        <img src={banner} />
      </div>
      <BreadCrumb />
      <section className="bg-banner">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Appointment Form</h1>
          <form>
            <div className="mb-4">
              <label className="block font-semibold">Selected Package*</label>
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

            <div className="mb-4">
              <label className="block font-semibold">Name*</label>
              <input
                type="text"
                name="name"
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>

            {/* Add other input fields (Mobile, Email, etc.) similarly */}

            <div className="mb-4">
              <label className="block font-semibold">Date*</label>
              <input
                type="date"
                name="date"
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block font-semibold">Time*</label>
              <input
                type="time"
                name="time"
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block font-semibold">Address</label>
              <textarea
                name="address"
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block font-semibold">Message</label>
              <textarea
                name="message"
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
            <button
              type="reset"
              className="bg-gray-300 text-gray-700 ml-2 px-4 py-2 rounded hover:bg-gray-400"
            >
              Reset
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
export default BookApppointments;
