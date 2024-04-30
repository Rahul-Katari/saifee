import React from "react";
import { Link } from "react-router-dom";
import { ASSET_URL } from "../controller/config";
import DateFormat from "./DateFormat";
import { useBlogData } from "../controller/blogDataContext";

const BlogListCard = ({ blogData }) => {
  const doctorData = useBlogData()?.doctors.filter(
    (doctor) => doctor._id == blogData.doctorid
  )[0];
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
          <h1 className="font-medium  text-sm me-2 line-clamp-2">
            {blogData?.displayname}
          </h1>
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
        <img
          src={ASSET_URL + doctorData?.imgsrc}
          alt="blog creator"
          className="w-8 h-8 rounded-full mr-2 object-cover"
        />
        <p className="text-gray-600 truncate">
          {doctorData?.firstName + " " + doctorData?.lastName}
        </p>
        {/* </div> */}
        <p className="text-gray-600 ml-2 text-xs text-nowrap">
          <DateFormat date={blogData?.createdAt} />
        </p>
      </div>
    </div>
  );
};

export default BlogListCard;
