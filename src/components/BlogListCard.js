import React from "react";
import ListImg from "../assets/images/blog-list-card.png";
import Avatar from "../assets/images/venkat.png";
import { Link } from "react-router-dom";

const BlogListCard = () => {
  return (
    <div className="bg-white p-3 rounded-lg shadow-md">
      <img
        src={ListImg}
        alt="Medical Experts"
        className="w-full h-auto rounded-t-lg"
      />
      <div className="flex justify-between mt-4">
        <h1 className="font-bold ">The Medical Experts Carefully...</h1>
        <div>
          <Link
            to={"/blogsDetail"}
            className="border border-black border-2 text-highlight py-1 px-4 rounded-full text-xs text-nowrap"
          >
            READ MORE
          </Link>
        </div>
      </div>
      <div className="flex items-center mt-4 justify-between">
        <div className="flex items-center">
          <img
            src={Avatar}
            alt="Venkat"
            className="w-8 h-8 rounded-full mr-2"
          />
          <p className="text-gray-600">Venkat</p>
        </div>
        <p className="text-gray-600 ml-2 text-xs">August 20, 2022</p>
      </div>
    </div>
  );
};

export default BlogListCard;
