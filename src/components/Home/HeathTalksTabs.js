import React from "react";
import { Tab, TabScreen, Tabs } from "react-tabs-scrollable";
import medicalExperts from "../../assets/images/home/medical-experts.png";
import { useBlogData } from "../../controller/blogDataContext";

const VideosList = ({ videos }) => {
  return (
    <div className="max-sm:m-4 mt-0 space-y-5">
      {videos?.map((video) => {
        return (
          <div className="flex items-center " key={video._id}>
            <iframe
              className=" max-w-[100px] max-h-[80px] rounded"
              src={video.videosrc}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <p className="text-[#222F66] ps-4">{video.displayname}</p>
          </div>
        );
      })}
    </div>
  );
};
const HealthTalksTabs = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const onTabClick = (e, index) => {
    setActiveTab(index);
  };
  const videos = useBlogData()?.allblogs.filter((blog) => blog.type === 1);
  return (
    <div className="health-talk-tabs">
      <Tabs
        activeTab={activeTab}
        onTabClick={onTabClick}
        hideNavBtnsOnMobile={false}
      >
        <Tab className="text-sm px-0">All</Tab>
        <Tab className="text-sm">Featured</Tab>
        <Tab className="text-sm">Latest</Tab>
      </Tabs>

      <TabScreen>
        {activeTab === 0 && <VideosList videos={videos?.slice(0, 4)} />}
        {activeTab === 1 && <VideosList videos={videos?.slice(4, 8)} />}
        {activeTab === 2 && <VideosList videos={videos?.slice(8, 12)} />}
      </TabScreen>
    </div>
  );
};
export default HealthTalksTabs;
