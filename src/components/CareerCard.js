import React from "react";
import MoreBtn from "./MoreBtn";
import jobCard from "../assets/images/job.png";

const CareerCard = () => {
  return (
    <div className="rounded overflow-hidden shadow-3xl p-6 mb-6">
      <div className="flex">
        <img className="w-2/5" src={jobCard} alt="Job Image" />
        <div className="px-6 py-4">
          <div className=" mb-2">
            Job Title: Medical Gastroenterology Consultant
          </div>
          <p>Department: Marketing</p>
          <p>Location: Hyderabad</p>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <p className="font-medium">Job Description</p>
        <ul className="list-disc-default">
          <li>
            {" "}
            Creating marketing strategies to achieve organisational goals
          </li>
          <li>Implementing marketing campaigns from ideation to execution</li>
          <li>Managing the marketing budget</li>
          <li>
            Coordinating marketing efforts with cross-functional teams like
            sales and product development
          </li>
          <li>
            Analysing marketing data and metrics to refine marketing strategies
          </li>
          <li>Staying updated with the latest marketing trends</li>
        </ul>
      </div>
      <div className="flex justify-end">
        <MoreBtn btnText={"Apply now"} href={"/"} />
      </div>
    </div>
  );
};

export default CareerCard;
