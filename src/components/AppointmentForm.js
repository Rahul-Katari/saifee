const AppointmentForm = () => {
return (
<div className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center justify-between">
        <span className="text-red-500">+91 73400 40097</span>
    </div>
    <h2 className="text-xl font-bold mb-4">Book an Appointment</h2>

    <form>
        <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
            <input type="text" id="name" name="name" required className="mt-1 p-2 w-full border rounded-md" />
        </div>

        <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-600">Phone Number</label>
            <input type="tel" id="phone" name="phone" required className="mt-1 p-2 w-full border rounded-md" />
        </div>

        <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-medium text-gray-600">Appointment Date</label>
            <input type="date" id="date" name="date" required className="mt-1 p-2 w-full border rounded-md" />
        </div>

        <div className="mb-4">
            <label htmlFor="time" className="block text-sm font-medium text-gray-600">Time</label>
            <input type="time" id="time" name="time" required className="mt-1 p-2 w-full border rounded-md" />
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md mt-4">
            SUBMIT
        </button>
    </form>
</div>
)};

export default AppointmentForm;