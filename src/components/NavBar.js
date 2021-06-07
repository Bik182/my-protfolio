import React from "react";
import { NavLink } from "react-router-dom";
import bikalLogo from "../media/bikal_header.png";
import githubLogo from "../media/github-68_x_68.png";
import linkedinLogo from "../media/linkedin-68_x_68.png";
import instagramLogo from "../media/instagram-68_x_68.png";

export default function NavBar() {
  return (
    <div className="navBarHeader">
      <img className="headerImg" alt="bikal thapa" src={bikalLogo}></img>

      <div className="socialContainer">
        <a
          className="socialImage"
          target="_blank"
          href="https://github.com/Bik182"
        >
          <img alt="github link" src={githubLogo}></img>
        </a>

        <a
          className="socialImage"
          target="_blank"
          href="https://www.linkedin.com/in/bikal-t-848008127/"
        >
          <img alt="linkedin link" src={linkedinLogo}></img>
        </a>

        <a
          className="socialImage"
          target="_blank"
          href="https://www.instagram.com/bikal182/"
        >
          <img alt="instagram link" src={instagramLogo}></img>
        </a>
      </div>
    </div>
  );
}
