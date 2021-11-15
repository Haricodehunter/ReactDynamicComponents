import React from "react";
import { Carousel } from "react-responsive-carousel";
const carousel = (props) => {
  //const { items } = props.block;

  return (
    <Carousel autoPlay>
      {props.block.carousel.map((item) => (
        <div>
          <img alt={item.title} src={item.image} />
          <p className="legend">{item.title}</p>
        </div>
      ))}
    </Carousel>
  );
};
export default carousel;
