import React from "react";
import { Link } from "react-scroll";
import { MdTouchApp } from "react-icons/md";
import { images } from "../../constant";
import "./home.scss";

const home = () => {
  return (
    <div className="home" id="home">
      <div className="home-image">
        <img src={images.deepak} alt="deepak" />
      </div>
      <div className="home-intro">
        <div className="intro">
          <span className="hey">Hey 👋,</span>
          <span className="intro-text">
            This is me <span className="name">Deepak</span>, a 
            <span className="name"> Sketch Artist🖌</span>👨‍🎨
          </span>
          <p className="intro-para">
            I am a profesional Sketch Artist, who creates very detailed and
            realastic sketches of random peoples at very affordable price. I am
            in this Profession from last 6 years and delivered more that 500 sketches. You can contact me if you want a very beautiful potrait of yours or of your loved ones, trust me you will amazed by my work.
          </p>

          <Link className="btn"
          activeClass="active"
          to="contacts"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          >
            <MdTouchApp/>
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default home;
