// BlogDataContext.js
import React, { createContext, useState, useEffect, useContext } from "react";
import useApiData from "./useApiData";

const BlogDataContext = createContext();

export const useBlogData = () => useContext(BlogDataContext);

export const BlogDataProvider = ({ children }) => {
  const [blogData, setBlogData] = useState(null);
  const { data: blogs, loading, error } = useApiData("blogs?reqtype=api");
  useEffect(() => {
    // Fetch blog data from the API
    if (blogs) {
      setBlogData(blogs?.result?.data);
    }
  }, [blogs]);

  return (
    <BlogDataContext.Provider value={blogData}>
      {children}
    </BlogDataContext.Provider>
  );
};
