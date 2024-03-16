import { Tab, TabScreen, Tabs } from "react-tabs-scrollable";
import banner from "../../assets/images/banners/excellence-details-banner.png";
import BreadCrumb from "../common/BreadCrumb";
import BlogListCard from "../BlogListCard";
import { useState } from "react";

const Blogs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const onTabClick = (e, index) => {
    setActiveTab(index);
  };
  const breadCrumb = [
    { href: "/", title: "home" },
    { href: "/blogs", title: "blog" },
    { href: "/doctorDetails", title: " Dr. Manasa Mynepally" },
  ];
  return (
    <div>
      <div>
        <img src={banner} alt="banner" />
      </div>
      <BreadCrumb linkData={breadCrumb} />
      <section>
        <div className="max-w-7xl m-auto ">
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
                <div className="grid grid-cols-4 gap-6">
                  {[...Array(20).keys()].map((item) => (
                    <BlogListCard key={item} />
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
