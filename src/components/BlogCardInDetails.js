import React from "react";

const BlogCardInDetails = ({ imgSrc }) => {
  return (
    <div className="rounded overflow-hidden m-4 p-4">
      <img className="w-full h-[150px]" src={imgSrc} alt="Medical Experts" />
      <div className="py-4">
        <div className="text-theme mb-2">
          The Medical Experts Carefully...
        </div>
        <p className="text-content text-sm">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Fusce Enim
          Fames Quam Pellentesque Interdum Purus Senectus Feugiat Elit.C.
        </p>
      </div>
      <div className="pt-2 pb-2">
        <button className="border border-black border-2 text-highlight py-1 px-2 text-xs rounded-full">
          READ MORE
        </button>
      </div>
    </div>
  );
};

export default BlogCardInDetails;
