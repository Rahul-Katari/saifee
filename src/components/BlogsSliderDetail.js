import React from "react";
import Slider from "react-slick";
import BlogCardInDetails from "./BlogCardInDetails";
import blog1 from "../assets/images/blog1.png";
import blog2 from "../assets/images/blog2.png";
import blog3 from "../assets/images/blog3.png";
import PatientTestimonialsCard from "./PatientTestimonialsCard";
import NewsYoutubeCard from "./NewsYoutubeCard";
import { ASSET_URL } from "../controller/config";

const blogs = [
  { imgSrc: blog1 },
  { imgSrc: blog2 },
  { imgSrc: blog3 },
  { imgSrc: blog1 },
  { imgSrc: blog2 },
  { imgSrc: blog3 },
];
const testimonials = [
  { imgSrc: "" },
  { imgSrc: "" },
  { imgSrc: "" },
  { imgSrc: "" },
  { imgSrc: "" },
  { imgSrc: "" },
];
const videos = [
  { imgSrc: "" },
  { imgSrc: "" },
  { imgSrc: "" },
  { imgSrc: "" },
  { imgSrc: "" },
  { imgSrc: "" },
];

function BlogsSliderDetail({ card, blogsData, testimonials }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {card === "blog" &&
          blogsData?.map((blog, index) => {
            return (
              <div key={index}>
                <BlogCardInDetails
                  imgSrc={ASSET_URL + blog.displayimg}
                  desc={"desc"}
                  title={blog.displayname}
                  blogid={blog._id}
                />
              </div>
            );
          })}
        {card === "testimonial" &&
          testimonials?.map((test, index) => {
            return (
              <div key={index}>
                <div>
                  <PatientTestimonialsCard testimonial={test} />
                </div>
              </div>
            );
          })}
        {card === "videos" &&
          blogsData?.map((video, index) => {
            return (
              <div key={index}>
                <NewsYoutubeCard
                  imgSrc={video.videosrc}
                  date={video.createdAt}
                  title={video.displayname}
                />
              </div>
            );
          })}
        {/* {(card === "testimonial") ? <div>
          <div>
              <PatientTestimonialsCard />
              </div>
              <div>
              <PatientTestimonialsCard />
              </div>
              <div>
              <PatientTestimonialsCard />
              </div>
              <div>
              <PatientTestimonialsCard />
              </div>
              <div>
              <PatientTestimonialsCard />
              </div>
            </div> : ''} */}
      </Slider>
    </div>
  );
}

export default BlogsSliderDetail;
