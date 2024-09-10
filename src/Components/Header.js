import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import nav from "../assets/images/logo.png";
import { CgMenuRight } from "react-icons/cg";
import { ImCross } from "react-icons/im";
import { FiMapPin, FiMail } from "react-icons/fi";
import { BsTelephone, BsWhatsapp } from "react-icons/bs";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  return (
    <div>
      <div className="bar">
        <div className="bar-wrapper">
          <div className="location">
            <FiMapPin className="bar-icon" />
            South Kivu, DRC
          </div>
          <a href="mailto:ngolaminerals@gmail.com" className="mail">
            <FiMail className="bar-icon" />
            info@ngolaminerals.com
          </a>
          <a href="tel:243900022547" className="call">
            <BsTelephone className="bar-icon" />
            +243 900 022 547
          </a>
        </div>
      </div>
      <nav>
        <NavLink to="/">
          <img className="nav-logo" src={nav} alt="" />
        </NavLink>
        <CgMenuRight className="bars nav-inactive" onClick={toggleNav} />
        {(toggleMenu || screenWidth > 600) && (
          <div className="navlinks">
            <li>
              <NavLink
                activeClassName="active"
                className="nav-link"
                exact
                to="/"
                onClick={toggleNav}
              >
                <p className="nav-title">Home</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                className="nav-link"
                exact
                to="/about"
                onClick={toggleNav}
              >
                <p className="nav-title">About Us</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                className="nav-link"
                exact
                to="/services"
                onClick={toggleNav}
              >
                <p className="nav-title">Our Services</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                className="nav-link"
                exact
                to="/services"
                onClick={toggleNav}
              >
                <p className="nav-title">Our Gallery</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                className="nav-link"
                exact
                to="/contact"
                onClick={toggleNav}
              >
                <p className="nav-title">Contact Us</p>
              </NavLink>
            </li>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
