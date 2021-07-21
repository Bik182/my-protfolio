import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import bikalLogo from "../media/bikal_header.png";
import githubLogo from "../media/github-68_x_68.png";
import linkedinLogo from "../media/linkedin-68_x_68.png";
import resumeLogo from "../media/resume.png";
import resume from "../media/bikal_resume.pdf";
export default function NavBar(props) {
  let buttonMaxWidth = "68";
  let headerMaxImageWidth = "25";
  let logoMultipler = (1920 / props.screenWidth) * headerMaxImageWidth + "%";
  let buttonMultipler = buttonMaxWidth;

  return (
    <div className="navBarHeader">
      <img
        className="headerImg"
        alt="bikal thapa"
        src={bikalLogo}
        style={{ width: logoMultipler, height: logoMultipler }}
      ></img>

      <div className="social-container">
        <div
          className="social-button"
          style={{ width: buttonMultipler, height: buttonMultipler }}
        >
          <a
            className="social-image"
            target="_blank"
            href="https://github.com/Bik182"
          >
            <img alt="github link" src={githubLogo}></img>
          </a>
        </div>
        <div
          className="social-button"
          style={{ width: buttonMultipler, height: buttonMultipler }}
        >
          <a
            className="social-image"
           
            download = "bikal_resume.pdf"
            href={resume}
          >
            <img alt="resume link" src={resumeLogo}></img>
          </a>
        </div>
        <div
          className="social-button"
          style={{ width: buttonMultipler, height: buttonMultipler }}
        >
          <a
            className="social-image"
            target="_blank"
            href="https://www.linkedin.com/in/bikal-t-848008127/"
          >
            <img alt="linkedin link" src={linkedinLogo}></img>
          </a>
        </div>
      </div>
    </div>
  );
}
