import React, { useState, useEffect } from "react";
import CarouselProjects from "./CarouselProjects";
import Slider from "react-slick";
import myPicture from "../media/me.jpg";
import NavBar from "./NavBar";

export default function Home() {
  const [width, setWindowWidth] = useState(0);

  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  let fontSizeMultiplier = width / 1920;
  let imageMultiplier = 1920/width;
  let currTODOMaxFontSize = 50 * fontSizeMultiplier;
  let currDescriptionFontSize = 25 * fontSizeMultiplier;
  let currHeight = (50 + imageMultiplier) + "%";
  let currWidth = (25 + imageMultiplier) + "%";
  if (currTODOMaxFontSize < 20) {
    currTODOMaxFontSize = 20;
  }
  if (currDescriptionFontSize < 20) {
    currDescriptionFontSize = 20;
  }
  return (
    <>
      <NavBar screenWidth={width}></NavBar>
      <div className="homeHeader">
        <div>
          <CarouselProjects screenWidth={width}></CarouselProjects>
        </div>
        <div className="bottomHeader">
          <p
            className="description"
            style={{ fontSize: currDescriptionFontSize }}
          >
            Programmer, artist and gamer.
          </p>
          <p className="TODO" style={{ fontSize: currTODOMaxFontSize }}>
            /**TODO <br /> get a job <br />
            **/
          </p>
          <a
            className="email"
            target="_blank"
            href="mailto:bikalt182@gmail.com?subject=Hey Bikal!"
            style={{ fontSize: currDescriptionFontSize }}
          >
            Email Me!
          </a>
          <div className="image-div"   style={{ height: currHeight, width: currWidth }}>
          <img
            className="me"
            src={myPicture}
          
          />
          </div>
        </div>
      </div>
    </>
  );
}
