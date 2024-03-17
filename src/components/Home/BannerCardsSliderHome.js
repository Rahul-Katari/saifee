import React from "react";
import Slider from "react-slick";
import BannerCard from "./BannerCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/styles/slider.css";

import card1 from "../../assets/images/home/book-doctor-appointment.png";
import card2 from "../../assets/images/home/find-your-doctors.png";
import card3 from "../../assets/images/home/health-package.png";
import card4 from "../../assets/images/home/online-consultancy.png";
import card5 from "../../assets/images/home/book-lab-test.png";

const bannerCardsData = [
  { imgSrc: card1, title1: "Book Doctor", title2: "Appointment" },
  { imgSrc: card2, title1: "Find Your", title2: "Doctors" },
  { imgSrc: card3, title1: "Health", title2: "Package" },
  { imgSrc: card4, title1: "Online", title2: "Consultancy" },
  { imgSrc: card5, title1: "Book Lab", title2: "Test" },
];

const BannerCardsSliderHome = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    initialSlide: 0,
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
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {bannerCardsData.map((card, index) => {
          return (
            <BannerCard
              key={index}
              imgSrc={card.imgSrc}
              title1={card.title1}
              title2={card.title2}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default BannerCardsSliderHome;
