import React, { Component, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/styles/slider.css";

function BlogsSlider({ slides }) {
  const [oldSlide, setOldSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);
  console.log(activeSlide);
  const settings = {
    // className: "center",
    // centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    rtl: true,
    beforeChange: (current, next) => {
      setOldSlide(current);
      setActiveSlide(next);
    },
    afterChange: (current) => setActiveSlide2(current),
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide, index) => {
          return (
            <div key={index} className="">
              <img
                src={slide.src}
                className="h-208px rounded-t-[25px] bg-white m-auto w-[280px]"
              />
              <div className="text-center uppercase w-[280px] h-[68px] bg-white m-auto rounded-b-[25px] p-3">
                {slide.text}
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default BlogsSlider;
