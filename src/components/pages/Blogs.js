import { Tab, TabScreen, Tabs } from "react-tabs-scrollable";
import banner from "../../assets/images/banners/blogs-banner.png";
import BreadCrumb from "../common/BreadCrumb";
import BlogListCard from "../BlogListCard";
import { useState } from "react";
import { useBlogData } from "../../controller/blogDataContext";

const Blogs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const blogsData = useBlogData()?.allblogs?.filter((blog) => blog.type === 0);
  const onTabClick = (e, index) => {
    setActiveTab(index);
  };
  const breadCrumb = [
    { href: "/", title: "home" },
    { href: "/blogs", title: "blog" },
  ];
  return (
    <div>
      <div>
        <img src={banner} alt="banner" className="w-full" />
      </div>
      <BreadCrumb linkData={breadCrumb} />
      <section>
        <div className="max-w-7xl m-auto max-xl:m-4">
          <h2 className="text-theme text-2xl font-semibold highlight-border highlight-border-left">
            Blogs
          </h2>
          <div>
            <Tabs
              activeTab={activeTab}
              onTabClick={onTabClick}
              hideNavBtnsOnMobile={false}
            >
              {/* generating an array to loop through it  */}
              <Tab>Endocrinology</Tab>
              <Tab>General Suregery</Tab>
            </Tabs>
            <TabScreen>
              {activeTab === 0 && (
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                  {blogsData
                    ?.filter((blog) => blog.servicecategory === 1)
                    ?.map((blog) => (
                      <BlogListCard blogData={blog} key={blog._id} />
                    ))}
                </div>
              )}
              {activeTab === 1 && (
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                  {blogsData
                    ?.filter((blog) => blog.servicecategory === 2)
                    ?.map((blog) => (
                      <BlogListCard blogData={blog} key={blog._id} />
                    ))}
                </div>
              )}
            </TabScreen>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Blogs;
