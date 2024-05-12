import React from "react";
import Profile from "../../assets/images/home/profile.png";

const TestimonialCardHome = ({ testimonial }) => {
  return (
    <div className="">
      <div className="flex items-center">
        <img
          src={testimonial.image} // Replace with your actual profile picture URL
          alt="Profile"
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h2 className="text-blue-900 font-semibold md:text-lg">
            {testimonial?.name}
          </h2>
          {/* <p className="text-gray-300">Lead Intranet Technician</p> */}
        </div>
      </div>
      <p className="mt-4 max-sm:text-xs line-clamp-5">{testimonial?.text}</p>
    </div>
  );
};

export default TestimonialCardHome;
