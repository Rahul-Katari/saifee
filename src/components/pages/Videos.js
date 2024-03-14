import BreadCrumb from "../common/BreadCrumb";

const Videos = () => {
  const breadCrumb = [
    { href: "/", title: "home" },
    { href: "/blogs", title: "blog" },
    { href: "", title: "tabData[activeTab].title" },
  ];
  return (
    <div>
      <div>
        <img src={banner} alt="banner" />
      </div>
      <BreadCrumb linkData={breadCrumb} />
      <section></section>
      <AppointmentSchedule />
    </div>
  );
};
export default Videos;
