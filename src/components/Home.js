import React from "react";
import CarouselProjects from "./CarouselProjects";
import Slider from "react-slick";
import myPicture from "../media/me.jpg";

export default function Home() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="homeHeader">
      <div>
        <CarouselProjects></CarouselProjects>
      </div>
      <div className="bottomHeader">
        <p className="description">Programmer, artist and gamer.</p>
        <p className="TODO">
          /**TODO <br /> get a job <br />
          **/
        </p>
        <a className="email" target="_blank" href="mailto:bikalt182@gmail.com?subject=Hey Bikal!">
         Email Me!
        </a>

        <img className="me" src={myPicture} />
      </div>
    </div>
  );
}
