import React from "react";

const BlogCardInDetails = ({ imgSrc }) => {
  return (
    <div className="rounded overflow-hidden m-4 p-4">
      <img className="w-full" src={imgSrc} alt="Medical Experts" />
      <div className="py-4">
        <div className="text-theme text-lg mb-2">
          The Medical Experts Carefully...
        </div>
        <p className="text-content text-sm">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Fusce Enim
          Fames Quam Pellentesque Interdum Purus Senectus Feugiat Elit.C.
        </p>
      </div>
      <div className="pt-4 pb-2">
        <button className="border border-black border-2 text-highlight py-2 px-4 rounded-full">
          READ MORE
        </button>
      </div>
    </div>
  );
};

export default BlogCardInDetails;
