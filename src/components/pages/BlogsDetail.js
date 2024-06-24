import banner from "../../assets/images/banners/blogs-banner.png";
import BreadCrumb from "../common/BreadCrumb";
import calender from "../../assets/images/calender-blog.png";
import profile from "../../assets/images/profile.png";
import latestBlog from "../../assets/images/latest-blogs.png";
import { Link, useParams } from "react-router-dom";
import { useBlogData } from "../../controller/blogDataContext";
import { ASSET_URL } from "../../controller/config";
import DateFormat from "../DateFormat";
import FormatHtml from "../FormatHtml";

const BlogsDetail = () => {
  const { blogid } = useParams();
  const latestBlogs = useBlogData()
    ?.allblogs.filter((blog)=> blog.type === 0 && blog._id !== blogid).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 3);
    console.log(useBlogData()?.allblogs);
  const blogDetails = useBlogData()?.allblogs?.filter(
    (blog) => blog._id === blogid
  )[0];
  const doctorData = useBlogData()?.doctors.filter(
    (doctor) => doctor._id == blogDetails?.doctorid
  )[0];
  const blogTitle = blogDetails?.displayname;
  const breadCrumb = [
    { href: "/", title: "home" },
    { href: "/blogs", title: "blog" },
    { href: "", title: blogTitle },
  ];
  return (
    <div>
      <div>
        <img className="w-full" src={banner} alt="banner" />
      </div>
      <BreadCrumb linkData={breadCrumb} />
      {/* <section>
        <h2 className="text-theme text-3xl">Blogs</h2>
      </section> */}
      <section>
        <div className="max-w-7xl m-auto max-sm:m-4">
          <h2 className="text-theme text-2xl font-semibold highlight-border highlight-border-left">
            {blogTitle}
          </h2>
          <div className="md:grid grid-cols-6 gap-6">
            <div className="col-span-4">
              <div className="flex items-center space-x-8 mb-6">
                <div className="flex items-center space-x-4">
                  <img src={calender} className="w-[14px]" />
                  <span>
                    <DateFormat date={blogDetails?.createdAt} />
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <img src={profile} className="w-[14px]" />
                  <span>
                    {doctorData?.firstName + " " + doctorData?.lastName}
                  </span>
                </div>
              </div>
              <img src={ASSET_URL + blogDetails?.displayimg} />
              <div className="mt-6">
                <FormatHtml htmlString={blogDetails?.description} />
              </div>
            </div>
            <div className="col-span-2 max-sm:mt-5">
              <div className="shadow-3xl rounded-lg p-4">
                <h2 className="text-theme text-xl font-semibold highlight-border highlight-border-left">
                  Latest Blogs
                </h2>
                <div className="divide-y divide-slate-700">
                  {latestBlogs?.map((blog, index) => (
                    <div className="" index={index}>
                      <Link
                        to={`/blogsDetail/${blog?._id}`}
                        className="flex py-4"
                      >
                        <div className="w-8/12">
                          <img
                            src={ASSET_URL + blog?.displayimg}
                            alt="latest blog image"
                            className=""
                          />
                        </div>
                        <div className="flex flex-col justify-between px-4">
                          <p>{blog.displayname}</p>
                          <div className="flex items-center space-x-5">
                            <div>
                              <img src={calender} className="w-[14px]" />
                            </div>
                            <DateFormat date={blog?.createdAt} />
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default BlogsDetail;
