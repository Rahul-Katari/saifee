import React from "react";
import MoreBtn from "./common/MoreBtn";
import jobCard from "../assets/images/job.png";
import CareerForm from "./pages/CareerForm";

const CareerCard = ({ career }) => {
  return (
    <div className="rounded overflow-hidden shadow-3xl p-6 mb-6 max-sm:text-sm">
      <div className="md:flex">
        <img className="w-2/5" src={'http://localhost:3000/uploads/' + career?.career_url} alt="Job Image" />
        <div className="md:px-6 ms-4 py-4">
          <div className=" mb-2 ">
            Job Title: {career?.career_name}
          </div>
          <p>Department: {career?.career_department}</p>
          <p>Location: {career?.career_location}</p>
        </div>
      </div>
      <div className="md:px-6 md:pt-4 pb-2">
        <h3 className="font-medium">Job Description</h3>
        <ul className="list-disc-default ps-4 text-sm">
          <li>{career?.career_description}</li>

        </ul>
      </div>
      <CareerForm />
    </div>
  );
};

export default CareerCard;
