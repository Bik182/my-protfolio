import React, { Component } from "react";

import Carousel from "react-bootstrap/Carousel";
import instagramArt from "../media/instagram_art.png";
import firstProj from "../media/shophitly.gif";
import secondProj from "../media/covid_tracker.gif";

//var imgAtt = "d-block w-50% ";
export class CarouselProjects extends Component {
  render() {
    return (
      <div>
        <div className="projectShowcase">
          <div className="project">
            <span className="cursive">Art Showcase</span>
            <a target="_blank" href="https://www.instagram.com/bikal182/">
              <img className="artShowcase" src={instagramArt} />
            </a>
          </div>
          <div className="project">
            <span className="cursive">Truth Duel (Profile UI)</span>
            <a target="_blank" href="https://truthduel.com/">
              <img className="gifProject" src={firstProj} />
            </a>
          </div>
          <div className="project">
            <span className="cursive">COVID Tracker V 0.1 (API Project)</span>
            <a target="_blank" href="https://github.com/Bik182/Covid-Tracker">
              <img className="gifProject" src={secondProj} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default CarouselProjects;
