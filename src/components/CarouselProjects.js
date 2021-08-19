import React, { useState, useEffect } from "react";

import instagramArt from "../media/instagram_art.png";
import firstProj from "../media/shophitly.gif";
import secondProj from "../media/covid_tracker.gif";
import animation from "./animation.scss";
//var imgAtt = "d-block w-50% ";
export default function CarouselProjects(props) {
  let showCaseClass = "project-showcase-big";

  if (props.screenWidth < 1000) {
    showCaseClass = "project-showcase-small";
  }

  return (
    <div>
      <div className={showCaseClass}>
        <div className="project">
          <span style={{color:"black"}}className="cursive">Art Showcase</span>

          <img className="artShowcase" src={instagramArt} />
        </div>
        <div className="project">
          <span style={{color:"black"}} className="cursive">Truth Duel (Profile UI)</span>
          <a target="_blank" href="https://truthduel.com/">
            <img className="gifProject" src={firstProj} />
          </a>
        </div>
        <div className="project">
          <span style={{color:"black"}} className="cursive">COVID Tracker V 0.1 (API Project)</span>
          <a target="_blank" href="https://github.com/Bik182/Covid-Tracker">
            <img className="gifProject" src={secondProj} />
          </a>
        </div>
      </div>
    </div>
  );
}
