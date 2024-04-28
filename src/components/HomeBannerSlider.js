import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/styles/slider.css";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

import uday from "../assets/images/home/banners/uday-banner.jfif";
import manasa from "../assets/images/home/banners/manasa-banner.jfif";
import healthJourney from "../assets/images/home/banners/health-journey.jfif";
import generalSurgeon from "../assets/images/home/banners/general-surgeon.jfif";
import manasaMobile from "../assets/images/home/banners/mobile/manasa.png";
import udayMobile from "../assets/images/home/banners/mobile/uday.png";

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
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768, // Adjust the breakpoint as needed
        settings: {
          arrows: false, // Hide arrows on screens smaller than 768px
        },
      },
    ],
    afterChange: (index) => {
      if (window.innerWidth <= 578) {
        const generalSurgeon = document.getElementsByClassName(
          "generalSurgeon"
        )[0];
        const endocrinologist = document.getElementsByClassName(
          "endocrinologist"
        )[0];

        if (index % 2 === 0) {
          generalSurgeon.classList.add("hidden");
          endocrinologist.classList.remove("hidden");
        } else {
          endocrinologist.classList.add("hidden");
          generalSurgeon.classList.remove("hidden");
        }
      }
    },
  };
  return (
    <Slider {...settings}>
      <div>
        <img
          src={window.innerWidth < 578 ? manasaMobile : manasa}
          className="w-full"
        />
      </div>
      <div>
        <img
          src={window.innerWidth < 578 ? udayMobile : uday}
          className="w-full"
        />
      </div>
      <div>
        <img
          src={window.innerWidth < 578 ? manasaMobile : healthJourney}
          className="w-full"
        />
      </div>
      <div>
        <img
          src={window.innerWidth < 578 ? udayMobile : generalSurgeon}
          className="w-full"
        />
      </div>
      <div>
        <img
          src={window.innerWidth < 578 ? manasaMobile : manasa}
          className="w-full"
        />
      </div>
      <div>
        <img
          src={window.innerWidth < 578 ? udayMobile : uday}
          className="w-full"
        />
      </div>
      <div>
        <img
          src={window.innerWidth < 578 ? manasaMobile : healthJourney}
          className="w-full"
        />
      </div>
      <div>
        <img
          src={window.innerWidth < 578 ? udayMobile : generalSurgeon}
          className="w-full"
        />
      </div>
    </Slider>
  );
}
