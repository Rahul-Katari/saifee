import React from "react";

const TestimonialCard = () => {
  return (
    <div className="bg-blue-500 p-6 rounded-lg shadow-lg">
      <div className="flex items-center">
        <img
          src="profile-picture.jpg" // Replace with your actual profile picture URL
          alt="Profile"
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h2 className="text-white font-semibold text-lg">Esther Hills</h2>
          <p className="text-gray-300">Lead Intranet Technician</p>
        </div>
      </div>
      <p className="text-white mt-4">
        Omnis totam molestiae delectus nemo alias neque harum et. Nobis dolorum
        excepturi quod vel. Sunt est qui non dolores repellat rem impedit
        dolores. Ut ea rerum cum et. Alias dolores tempore illo accusantium est
        et voluptatem voluptas.
      </p>
    </div>
  );
};

export default TestimonialCard;
