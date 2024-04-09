import React from "react";
import ListImg from "../assets/images/blog-list-card.png";
import Avatar from "../assets/images/venkat.png";
import { Link } from "react-router-dom";
import { ASSET_URL } from "../controller/config";
import DateFormat from "./DateFormat";

const BlogListCard = ({ imgSrc, displayname, createdAt, doctorid, blogid }) => {
  return (
    <div className="bg-white p-3 rounded-lg shadow-md m-4 flex flex-col justify-between">
      <div>
        <img
          // src={ListImg}
          src={ASSET_URL + imgSrc}
          alt="Medical Experts"
          className="w-full h-auto rounded-t-lg"
        />
        <div className="flex justify-between mt-4">
          <h1 className="font-medium  text-sm me-2">{displayname}</h1>
          <div>
            <Link
              to={`/blogsDetail/${blogid}`}
              className="border border-black border-2 text-highlight py-1 px-3 rounded-full text-xs text-nowrap"
            >
              READ MORE
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-4 justify-between">
        {/* <div className="flex items-center"> */}
        <img src={Avatar} alt="Venkat" className="w-8 h-8 rounded-full mr-2" />
        <p className="text-gray-600 truncate">{doctorid}</p>
        {/* </div> */}
        <p className="text-gray-600 ml-2 text-xs text-nowrap">
          {/* {new Date(createdAt).toLocaleDateString("en-IN", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })} */}
          <DateFormat date={createdAt} />
        </p>
      </div>
    </div>
  );
};

export default BlogListCard;
