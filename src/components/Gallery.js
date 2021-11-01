import React from "react";
import image7 from "../images/image7.jpg";
import image9 from "../images/image9.jpg";
import image10 from "../images/image10.jpg";
import image11 from "../images/image11.jpg";
import image12 from "../images/image12.jpg";
import image13 from "../images/image13.jpg";
import image14 from "../images/image14.jpg";
import image15 from "../images/image15.jpg";
import image16 from "../images/image16.jpg";
import image17 from "../images/image17.jpg";
import image18 from "../images/image18.jpg";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../css/gallery.css";

function Gallery() {
  const imageArr = [
    image7,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
  ];

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "60px",
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <div className="px-12 mt-16 mb-10">
      <Slider {...settings}>
        {imageArr.map((image, index) => (
          <div key={index} className="w-96 h-80 shadow-lg">
            <img
              src={image}
              className="h-full w-full object-cover rounded-lg"
              alt=""
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Gallery;
