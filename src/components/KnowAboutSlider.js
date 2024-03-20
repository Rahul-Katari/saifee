import React from "react";
import Slider from "react-slick";
import doctor from "../assets/images/about/doctor-manasa.png";
import doctorUday from "../assets/images/about/doctors.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/styles/slider.css";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

import KnowMore from "./home/KnowMore";

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

export default function KnowAboutSlider() {
  var settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 1000,
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
  };
  return (
    <Slider {...settings}>
      <div>
        <KnowMore doctor="Dr. Manasa Mynepally" imgSrc={doctor} />
      </div>
      <div>
        <KnowMore doctor="Dr. G Uday Kiran" imgSrc={doctorUday} />
      </div>
      <div>
        <KnowMore doctor="Dr. Manasa Mynepally" imgSrc={doctor} />
      </div>
      <div>
        <KnowMore doctor="Dr. G Uday Kiran" imgSrc={doctorUday} />
      </div>
      <div>
        <KnowMore doctor="Dr. Manasa Mynepally" imgSrc={doctor} />
      </div>
      <div>
        <KnowMore doctor="Dr. G Uday Kiran" imgSrc={doctorUday} />
      </div>
    </Slider>
  );
}
