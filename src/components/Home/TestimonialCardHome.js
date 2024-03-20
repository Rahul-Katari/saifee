import React from "react";
import Profile from "../../assets/images/home/profile.png";

const TestimonialCardHome = () => {
  return (
    <div className="md:p-6 p-3 md:py-10 rounded-lg shadow-lg bg-white m-4">
      <div className="flex items-center">
        <img
          src={Profile} // Replace with your actual profile picture URL
          alt="Profile"
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h2 className="text-blue-900 font-semibold md:text-lg">
            Esther Hills
          </h2>
          <p className="text-gray-300">Lead Intranet Technician</p>
        </div>
      </div>
      <p className="mt-4 max-sm:text-xs">
        Omnis totam molestiae delectus nemo alias neque harum et. Nobis dolorum
        excepturi quod vel. Sunt est qui non dolores repellat rem impedit
        dolores. Ut ea rerum cum et. Alias dolores tempore illo accusantium est
        et voluptatem voluptas.
      </p>
    </div>
  );
};

export default TestimonialCardHome;
