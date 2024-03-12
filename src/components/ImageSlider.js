import React from "react";
import Slider from "react-slick";

function ImageSlider({ slidesToShow, images }) {
  const settings = {
    className: "slider variable-width",
    // centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    prevArrow: null,
    nextArrow: null,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((img, index) => {
          return (
            <div key={index}>
              <img src={img.src} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default ImageSlider;
