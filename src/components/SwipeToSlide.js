import React, { Component } from "react";
import Slider from "react-slick";

import testCard from "../assets/images/home/testimonial-card.png";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <IconChevronRight stroke={2} size={48} className="p-3" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <IconChevronLeft stroke={2} size={48} className="p-3" />
    </div>
  );
}

function SwipeToSlide() {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1.5,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={testCard} />
        </div>
        <div>
          <img src={testCard} />
        </div>
        <div>
          <img src={testCard} />
        </div>
        <div>
          <img src={testCard} />
        </div>
      </Slider>
    </div>
  );
}

export default SwipeToSlide;
