import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";
import React from "react";
import classes from "./Carousel.module.css";
import { img } from "./img/data";

const CarouselEffect = () => {
  return (
    <>
      <div className="classes.carousel_toot_image">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showIndicators={false}
          showThumbs={false}
        >
          {img.map((imageItemLink) => {
            return <img src={imageItemLink} />;
          })}
        </Carousel>
      </div>
      <div className={classes.hero__img}></div>
    </>
  );
};

export default CarouselEffect;
