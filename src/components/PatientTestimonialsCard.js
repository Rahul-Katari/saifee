import React from "react";
import quote from "../assets/images/landing/quote.png"

function PatientTestimonialsCard() {
  return (
    <div className="bg-[#07879A] p-8 rounded-lg text-white max-w-sm m-6">
      <img src={quote} />
      <p className=" leading-snug my-4">
        Headspace provides me with ... a connection to myself, and a disconnection from negative thoughts, feelings, and sensations.
      </p>
      <p className="text-sm">Hyd, India</p>
      <p className="text-xs italic">on finding her happy place</p>
    </div>
  );
}

export default PatientTestimonialsCard;
