import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/styles/slider.css";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

import banner1 from "../assets/images/home/banners/doctor-banner.jpg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <IconArrowRight stroke={2} size={40} className="p-3" />
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
      <IconArrowLeft stroke={2} size={40} className="p-3" />
    </div>
  );
}

export default function HomeBannerSlider() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={banner1} />
      </div>
      <div>
        <img src={banner1} />
      </div>
      <div>
        <img src={banner1} />
      </div>
      <div>
        <img src={banner1} />
      </div>
      <div>
        <img src={banner1} />
      </div>
    </Slider>
  );
}
