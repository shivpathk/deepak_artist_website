import React, { useState } from "react";
import { Link } from "react-scroll";
import { MdTextsms } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { images } from "../../constant";
import "./Navbar.scss";

const Navbar = () => {

  const [showmenu , setShowmenu] = useState('false');


  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={images.logo} className="logo" alt="logo" />
      </div>
      <div className="navbar-menu">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="deskopmenuListitem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="deskopmenuListitem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="deskopmenuListitem"
        >
          Works
        </Link>
        <Link
          activeClass="active"
          to="client"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="deskopmenuListitem"
        >
          Clients
        </Link>
      </div>
      <Link
        activeClass="active"
        to="contacts"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="navbar-contactme"
      >
        <MdTextsms />
        Contact Me
      </Link>
      <div className="mob_menu_logo" onClick={()=>setShowmenu(!showmenu)}>
        <TiThMenu className="menu_logo"/>
      </div>
      <div className="mob_menu" style={{display: showmenu? 'none':'flex'}}>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="menu_item"
          onClick={()=>setShowmenu('false')}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="menu_item"
          onClick={()=>setShowmenu("false")}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="menu_item"
          onClick={()=>setShowmenu("false")}
        >
          Works
        </Link>
        <Link
          activeClass="active"
          to="client"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="menu_item"
          onClick={()=>setShowmenu("false")}
        >
          Clients
        </Link>
        <Link
          activeClass="active"
          to="contacts"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="menu_item"
          onClick={()=>setShowmenu("false")}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
