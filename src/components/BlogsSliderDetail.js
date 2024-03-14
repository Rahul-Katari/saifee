import React from "react";
import Slider from "react-slick";
import BlogCardInDetails from "./BlogCardInDetails";
import blog1 from "../assets/images/blog1.png";
import blog2 from "../assets/images/blog2.png";
import blog3 from "../assets/images/blog3.png";

const blogs = [
  { imgSrc: blog1 },
  { imgSrc: blog2 },
  { imgSrc: blog3 },
  { imgSrc: blog1 },
  { imgSrc: blog2 },
  { imgSrc: blog3 },
];

function BlogsSliderDetail() {
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
        {blogs.map((blog, index) => {
          return (
            <div key={index}>
              <BlogCardInDetails imgSrc={blog.imgSrc} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default BlogsSliderDetail;
