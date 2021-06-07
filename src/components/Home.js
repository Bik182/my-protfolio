import React from "react";
import CarouselProjects from "./CarouselProjects"
import Slider from "react-slick";

export default function Home() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  return (
    <div className ="homeHeader">
   

      <div>
      <CarouselProjects></CarouselProjects>  
      
      </div>
      <div>
        <a href="mailto:bikalt182@gmail.com?subject=Hey Bikal!">Email Me!</a>  

      </div>
    </div>
  );
}
