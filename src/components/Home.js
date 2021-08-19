import React, { useState, useEffect } from "react";
import CarouselProjects from "./CarouselProjects";
import Slider from "react-slick";
import myPicture from "../media/bikal.png";
import NavBar from "./NavBar";
import biksGifsLogo from "../media/logo-red.png";
import "./animation.scss";
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
  let headerMaxImageWidth = "10";
  let logoMultipler = (1920 / width) * headerMaxImageWidth + "%";

  let fontSizeMultiplier = width / 1920;
  let imageMultiplier = 1920 / width;
  let currTODOMaxFontSize = 50 * fontSizeMultiplier;
  let currDescriptionFontSize = 30 * fontSizeMultiplier;
  let currHeight = 50 + imageMultiplier + "%";
  let currWidth = 25 + imageMultiplier + "%";
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
       
        <div className="gif-logo-container">
         <header  style={{ fontSize: currDescriptionFontSize + 10, color:"black" }} className="cursive">Side Projects:</header>
          <a className="gif-link" target="_blank" href="https://biksgifs.com/">
            <header
              style={{ fontSize: currDescriptionFontSize + 10, color:"#212529" }}
              className="cursive"
            >
              {" "}
              <i class="fa fa-external-link" aria-hidden="true"></i> Bik's Gifs
            </header>
          </a>
          <a className="gif-link" target="_blank" href="https://shreejwal.com/">
            <header
              style={{ fontSize: currDescriptionFontSize + 10, color:"#212529" }}
              className="cursive"
            >
              {" "}
              <i class="fa fa-external-link" aria-hidden="true"></i>Photography
              Portfolio <span className="cursive new-tag"> *New</span>
            </header>
          </a>
        </div>
        <CarouselProjects screenWidth={width}></CarouselProjects>

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
          <div
            className="image-div"
            style={{ height: currHeight, width: currWidth }}
          >
            <img className="me" src={myPicture} />
          </div>
        </div>
      </div>
    </>
  );
}
