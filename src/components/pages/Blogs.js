import { Tab, TabScreen, Tabs } from "react-tabs-scrollable";
import banner from "../../assets/images/banners/excellence-details-banner.png";
import BreadCrumb from "../common/BreadCrumb";
import BlogListCard from "../BlogListCard";
import { useState } from "react";
import useApiData from "../../controller/useApiData";
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
        <div className="max-w-7xl m-auto max-sm:m-4">
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
                <div className="grid md:grid-cols-4 grid-cols-1 gap-6">
                  {blogsData?.map((blog) => (
                    <BlogListCard
                      key={blog._id}
                      imgSrc={blog.displayimg}
                      displayname={blog.displayname}
                      createdAt={blog.createdAt}
                      doctorid={blog.doctorid}
                      blogid={blog._id}
                    />
                  ))}
                </div>
              )}
              {activeTab === 1 && <div>General</div>}
            </TabScreen>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Blogs;
