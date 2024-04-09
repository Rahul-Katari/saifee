import banner from "../../assets/images/banners/excellence-details-banner.png";
import BreadCrumb from "../common/BreadCrumb";
import latestBlog from "../../assets/images/latest-blogs.png";
import topicOfBlog from "../../assets/images/topicOfBlog.png";
import calender from "../../assets/images/calender-blog.png";
import profile from "../../assets/images/profile.png";
import { useParams } from "react-router-dom";
import { useBlogData } from "../../controller/blogDataContext";
import { ASSET_URL } from "../../controller/config";
import React, { useEffect, useState } from "react";
import DateFormat from "../DateFormat";
import FormatHtml from "../FormatHtml";

function decodeHTML(html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}
const BlogsDetail = () => {
  const [decodedHTML, setDecodedHTML] = useState("");
  const { blogid } = useParams();
  const blogDetails = useBlogData()?.allblogs?.filter(
    (blog) => blog._id === blogid
  )[0];
  const blogTitle = blogDetails?.displayname;
  const breadCrumb = [
    { href: "/", title: "home" },
    { href: "/blogs", title: "blog" },
    { href: "/bestDoctorsDetailsManasa", title: " Dr. Manasa Mynepally" },
    { href: "", title: blogTitle },
  ];
  useEffect(() => {
    // Assuming you have fetched the HTML content from the API and stored it in bloghtml state
    let bloghtml = blogDetails?.description
      .replace(/"/g, "")
      .replace(/\\\"/g, '"');

    const decoded = decodeHTML(bloghtml);
    setDecodedHTML(decoded);
  }, []);
  function createReactElements(html) {
    const div = document.createElement("div");
    div.innerHTML = html;

    const reactElements = [];
    for (let i = 0; i < div.childNodes.length; i++) {
      const childNode = div.childNodes[i];
      if (childNode.nodeType === Node.TEXT_NODE) {
        // If it's a text node, convert it to a React text node
        reactElements.push(childNode.textContent);
      } else {
        // If it's an element node, convert it to a React element
        reactElements.push(
          React.createElement(childNode.nodeName.toLowerCase(), {
            dangerouslySetInnerHTML: { __html: childNode.innerHTML },
          })
        );
      }
    }

    return reactElements;
  }
  return (
    <div>
      {console.log(blogDetails)}
      <div>
        <img src={banner} alt="banner" />
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
                  <span>{blogDetails?.doctorid}</span>
                </div>
              </div>
              <img src={ASSET_URL + blogDetails?.displayimg} />
              <div>
                {/* {createReactElements(decodedHTML)} */}
                <FormatHtml htmlString={blogDetails?.description} />
                {/* <div>
                  <h3 className="text-theme mt-16">
                    MYTH: Bariatric surgery is a quick and easy fix for rapid
                    weight loss.
                  </h3>
                  <p>
                    <span className="text-theme">REALITY:</span>Surgery for
                    weight reduction is not a miracle procedure. Weight loss
                    surgery is designed to assist the morbidly obese in
                    developing a healthier lifestyle. A surgical weight loss
                    operation is a useful tool for weight loss, but it is a
                    surgical procedure that requires a substantial lifelong
                    commitment. The surgery alone will not help someone lose
                    weight and keep it off. The patient must change eating and
                    exercise habits. Without changes to the daily pattern of
                    eating and activity, the patient is likely to regain weight
                    over time. You’ll need to attend educational classes and
                    support groups to work on developing new, lifelong healthy
                    habits and behaviours. Above all, you’ll need to maintain a
                    commitment to reach and maintain a weight that keeps you
                    healthy.
                  </p>
                  <h3 className="text-theme">
                    Myth:All bariatric surgery involves “stomach stapling.”
                  </h3>
                  <p>
                    <span className="text-theme">REALITY:</span>There are many
                    different types of gastrointestinal procedures for weight
                    loss, some of which reduce the functioning size of the
                    stomach and others that bypass parts of the digestive tract,
                    reducing the absorption of calories and nutrients. Different
                    types of surgeries offer different results, and some are
                    more suitable for particular people than others.
                  </p>
                  <h3 className="text-theme">
                    MYTH: Obese and morbidly obese people are lazy and stupid.
                  </h3>
                  <p>
                    <span className="text-theme">REALITY:</span>Obese and
                    morbidly obese people suffer from a disease called obesity.
                    Most have tried numerous ways to lose weight and get healthy
                    but were unsuccessful. Weight loss surgery is usually the
                    last resort, but a necessary option. Unfortunately, many
                    obese people suffer discrimination and unwarranted scrutiny
                    and judgment due to their excess weight.
                  </p>
                  <h3 className="text-theme">
                    MYTH: Bariatric surgery is extremely dangerous.
                  </h3>
                  <p>
                    <span className="text-theme">REALITY:</span> Any type of
                    surgery has associated risks, such as complications or even
                    death. But a number of recent advances have helped to
                    minimize risks. Surgeries performed at the Asian Institute
                    of Gastroenterology are done laparoscopically with
                    mini-incisions that result in faster healing, less pain, and
                    less scarring. In addition, having the procedure may assist
                    patients in overcoming otherwise life-threatening conditions
                    associated with obesity, including Type II diabetes,
                    hypertension, high cholesterol and sleep apnea.
                  </p>
                  <h3 className="text-theme">
                    Myth: If I have had previous surgeries, I am not a candidate
                    for laparoscopic surgery.
                  </h3>
                  <p>
                    <span className="text-theme">REALITY:</span>You are still a
                    candidate for laparoscopic surgery even if you have had
                    prior “open” surgeries or other minimally invasive
                    surgeries. Of course, each individual case is different and
                    a proper evaluation is needed.
                  </p>
                  <h3 className="text-theme">
                    Myth: Certain surgical weight loss operations prevent proper
                    nutrition.
                  </h3>
                  <p>
                    <span className="text-theme">REALITY:</span> It is true that
                    most patients must take supplements after certain weight
                    loss operations because the procedure inhibits the proper
                    absorption of vitamins and minerals. However, patients who
                    follow their doctor’s advice about meal planning can enjoy a
                    nutritionally balanced diet. In many cases, their overall
                    health and well-being are dramatically improved after the
                    operation.
                  </p>
                  <h3 className="text-theme">
                    Myth: Follow up care is not necessary.
                  </h3>
                  <p>
                    <span className="text-theme">REALITY:</span>To be the most
                    successful follow-up care for at least one year is critical.
                    Patients usually meet two to four times with a health care
                    team member. Team members work to help patients make
                    long-term lifestyle changes.
                  </p>
                  <h3 className="text-theme">
                    Myth: You must weigh over 100 Kg to qualify.
                  </h3>
                  <p>
                    <span className="text-theme">REALITY:</span>It’s not just
                    about your weight. Your health conditions are also a big
                    factor. Numerous recent studies have shown that even
                    moderately obese individuals who have significant health
                    issues can show marked health improvements after undergoing
                    weight loss surgery. There are guidelines for weight-loss
                    surgery, set by the ACMOMS (2009) for the Indian population.
                    However, it’s not just based on weight alone but on what
                    other medical conditions you also have, such as diabetes.
                  </p>
                  <p>BMI {">"}35 kg/m2 with or without comorbidities</p>
                  <p>BMI {">"}32 kg/m2 with comorbidities</p>
                  <p>
                    BMI {">"}30 kg/m2 with central obesity WS {">"}80cm
                    (females) WS {">"}90 cm (males) with at least two criteria
                    of metabolic syndrome
                  </p>
                  <p>Raised TG ({">"}150 mg/dL )</p>
                  <p>
                    Reduced HDL ({"<"} 40{">"}130/{">"}85 )
                  </p>
                  <p>Raised FBS ({">"}100mg/dL )</p>
                  <p>
                    BMI {">"}27.5 kg/m2 with inadequately controlled DM (HbA1c{" "}
                    {">"}
                    7)
                  </p>
                  <p>*BMI = Weight in KG/(Height in meters)2</p>
                </div> */}
              </div>
            </div>
            <div className="col-span-2 max-sm:mt-5">
              <div className="shadow-3xl rounded-lg p-4">
                <h2 className="text-theme text-2xl font-semibold highlight-border highlight-border-left">
                  Latest Blogs
                </h2>
                <div className="divide-y divide-slate-700">
                  <div className="flex py-4">
                    <div>
                      <img
                        src={latestBlog}
                        alt="latest blog image"
                        className=""
                      />
                    </div>
                    <div className="flex flex-col justify-between px-4">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and .
                      </p>
                      <div className="flex items-center space-x-5">
                        <div>
                          <img src={calender} className="w-[14px]" />
                        </div>
                        Jan 28 2024
                      </div>
                    </div>
                  </div>
                  <div className="flex py-4">
                    <div>
                      <img
                        src={latestBlog}
                        alt="latest blog image"
                        className=""
                      />
                    </div>
                    <div className="flex flex-col justify-between px-4">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and .
                      </p>
                      <div className="flex items-center space-x-5">
                        <div>
                          <img src={calender} className="w-[14px]" />
                        </div>
                        Jan 28 2024
                      </div>
                    </div>
                  </div>
                  <div className="flex py-4">
                    <div>
                      <img
                        src={latestBlog}
                        alt="latest blog image"
                        className=""
                      />
                    </div>
                    <div className="flex flex-col justify-between px-4">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and .
                      </p>
                      <div className="flex items-center space-x-5">
                        <div>
                          <img src={calender} className="w-[14px]" />
                        </div>
                        Jan 28 2024
                      </div>
                    </div>
                  </div>
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
