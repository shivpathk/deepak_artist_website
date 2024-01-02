import React from "react";
import "./about.scss";
import { images } from "../../constant";

const about = () => {
  return (
    <div className="about" id="about">
      <div className="about-text">
        <p className="text-heading">What can i offer you</p>
      </div>
      <div className="about-skills">
        <div className="skill">
          <img src={images.detailed_sketch} alt="logo" className="img" />
          <p className="text">Realistic Sketch <br/> <span className="paragraph">I create very detailed and realistic sketeches</span></p>
        </div>
        <div className="skill">
          <img src={images.fast_sketch} alt="logo" className="img" />
          <p className="text">Fast Sketch <br/> <span className="paragraph">I make fast sketeches in 10 minutes</span></p>
        </div>
        <div className="skill">
          <img src={images.painting} alt="logo" className="img" />
          <p className="text">Painting<br/> <span className="paragraph">I can also do painting along with art</span></p>
        </div>
      </div>
    </div>
  );
};

export default about;
