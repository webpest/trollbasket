import React from "react";
import Flickity from "react-flickity-component";
import "./swiper.css";

const Swiper = ({ children }) => {
  const flickityOptions = {
    initialIndex: 1,
    wrapAround: true,
    contain: true,
    prevNextButtons: false,
    pageDots: false,
  };
  return (
    <div className="swiper__wrapper">
      <Flickity
        className={"carousel"}
        elementType={"div"}
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate
        static
      >
        {[...children].map((child, index) => (
          <div className="carousel-cell" key={index}>
            {child}
          </div>
        ))}
      </Flickity>
    </div>
  );
};

export default Swiper;
