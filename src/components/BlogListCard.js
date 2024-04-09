import React from "react";
import ListImg from "../assets/images/blog-list-card.png";
import Avatar from "../assets/images/venkat.png";
import { Link } from "react-router-dom";
import { ASSET_URL } from "../controller/config";
import DateFormat from "./DateFormat";

const BlogListCard = ({ blogData }) => {
  return (
    <div className="bg-white p-3 rounded-lg shadow-md m-4 flex flex-col justify-between">
      <div>
        <img
          // src={ListImg}
          src={ASSET_URL + blogData?.displayimg}
          alt="Medical Experts"
          className="w-full h-auto rounded-t-lg"
        />
        <div className="flex justify-between mt-4">
          <h1 className="font-medium  text-sm me-2">{blogData?.displayname}</h1>
          <div>
            <Link
              to={`/blogsDetail/${blogData?._id}`}
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
        <p className="text-gray-600 truncate">{blogData?.doctorid}</p>
        {/* </div> */}
        <p className="text-gray-600 ml-2 text-xs text-nowrap">
          <DateFormat date={blogData?.createdAt} />
        </p>
      </div>
    </div>
  );
};

export default BlogListCard;
