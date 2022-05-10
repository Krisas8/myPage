import React from "react";
// import Intro_pic_brighter from "./intro_pic_brighter.png";
import "./intro.scss";
import IntroText from "./introText";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="introContainer">
        <div className="left">
          <div className="textBox">
            <span className="title">Web Development</span>
            <span className="introDescription">
              <IntroText />
            </span>
          </div>
        </div>
        <div className="right">
          <div className="picture">
            <div className="eins"></div>
            <div className="zwei"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
