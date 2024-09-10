import React from "react";
import { NavLink } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import { GiGoldBar } from "react-icons/gi";
import { FiMapPin, FiMail } from "react-icons/fi";
import { AiFillGold, AiTwotoneGold, AiFillGolden } from "react-icons/ai";
import { BsTelephone, BsWhatsapp } from "react-icons/bs";
import "../assets/css/home.css";
import client from "../assets/images/client.png";

const Home = () => {
  return (
    <div>
      <div className="hero">
        <h1 className="main-title">Ngola Minerals LIMITED</h1>
        <div className="button">
          <NavLink exact to="/services" className="one">
            OUR SERVICES
          </NavLink>
          <NavLink exact to="/contact" className="two">
            CONTACT US
          </NavLink>
        </div>
      </div>
      <div className="about" id="about">
        <p className="sub-title">ABOUT US</p>
        <h4 className="title">WHO WE ARE</h4>
        <div className="about-wrapper">
          We are a leading metals and rare minerals solutions service provider
          in east and central africa region. We pride ourselves being an all
          rounded rare minerals solutions service provider connecting the east
          and central africa region to the world at large.
        </div>
        <NavLink to="/about" className="go-wrapper">
          MORE ABOUT US
          <BiChevronRight className="go" />
        </NavLink>
      </div>
      <div className="services" id="service">
        <p className="sub-title">OUR SERVICES</p>
        <h4 className="title">WHAT WE DO</h4>
        <div className="service-wrapper">
          <div className="service">
            <div className="service-header">
              <GiGoldBar className="service-icon" />
            </div>
            <div className="service-title">GOLD & SILVER REFINERY</div>
            <div className="service-description">
              We offer high quality refinery services that ensure that the best
              product is put out to the market
            </div>
          </div>
          <div className="service">
            <div className="service-header">
              <AiTwotoneGold className="service-icon" />
            </div>
            <div className="service-title">SMELTING</div>
            <div className="service-description">
              We use environmentally friendly practices to convert large lots of
              gold and silver into smaller quantities as per the clients
              request.
            </div>
          </div>
          <div className="service">
            <div className="service-header">
              <AiFillGolden className="service-icon" />
            </div>
            <div className="service-title">ASSAYING SERVICES</div>
            <div className="service-description">
              We are among a very small group of companies that offer assaying
              services, specializing in Cupellation Method, to determine the
              concentration of Gold.
            </div>
          </div>
          <div className="service">
            <div className="service-header">
              <AiFillGold className="service-icon" />
            </div>
            <div className="service-title">RARE MINERAL SALES</div>
            <div className="service-description">
              We facilitate sales of rare minerals that have undergone thorough
              inspection, validation and refinery to our large clientele.
            </div>
          </div>
          <div className="service">
            <div className="service-header">
              <AiFillGolden className="service-icon" />
            </div>
            <div className="service-title">MINERAL SEPARATION SERVICES</div>
            <div className="service-description">
              We offer unparalleled rare minerals separation and recovery
              services with utmost transparency and precision.
            </div>
          </div>
          <div className="service">
            <div className="service-header">
              <GiGoldBar className="service-icon" />
            </div>
            <div className="service-title">MINTING</div>
            <div className="service-description">
              We offer modern minting services producing customized medallions,
              coins, medals and bullions for a wide range of clients.
            </div>
          </div>
        </div>
        <NavLink to="/service" className="go-wrapper">
          ALL SERVICES
          <BiChevronRight className="go" />
        </NavLink>
      </div>
      {/* <div className="testimonials">
        <p className="sub-title">TESTIMONIALS</p>
        <h4 className="title">WHAT OUR CLIENTS SAY</h4>
        <div className="testimonials-wrapper">
          <div className="testimonial">
            <div className="testimonial-details">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur
            </div>
            <img src={client} className="testimonial-img" />
          </div>
          <div className="testimonial">
            <div className="testimonial-details">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur
            </div>
            <img src={client} className="testimonial-img" />
          </div>
          <div className="testimonial">
            <div className="testimonial-details">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur
            </div>
            <img src={client} className="testimonial-img" />
          </div>
          <div className="testimonial">
            <div className="testimonial-details">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur
            </div>
            <img src={client} className="testimonial-img" />
          </div>
          <div className="testimonial">
            <div className="testimonial-details">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur
            </div>
            <img src={client} className="testimonial-img" />
          </div>
          <div className="testimonial">
            <div className="testimonial-details">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur
            </div>
            <img src={client} className="testimonial-img" />
          </div>
        </div>
      </div> */}
      <div className="contact" id="contact">
        <p className="sub-title">CONTACT US</p>
        <h4 className="title">TALK TO US</h4>
        <div className="contact-wrapper">
          <div className="contact-info">
            <h4 className="title">Ngola Minerals LIMITED</h4>
            <div className="location">
              <FiMapPin className="contact-icon" />
              Mandili, DRC
            </div>
            <a href="mailto:ngolaminerals@gmail.com" className="mail">
              <FiMail className="contact-icon" />
              info@ngolaminerals.com
            </a>
            <a href="https://wa.me/234974183316" className="call">
              <BsWhatsapp className="contact-icon" />
              +243 974 183 316
            </a>
            <a href="tel:243900022547" className="call">
              <BsTelephone className="contact-icon" />
              +243 900 022 547
            </a>
          </div>
          <div className="contact-form">
            <div className="names">
              <label>
                First Name
                <input type="text" className="name" placeholder="John" />
              </label>
              <label>
                Last Name
                <input type="text" className="name" placeholder="Doe" />
              </label>
            </div>
            <div className="names">
              <label>
                Email Address
                <input
                  type="email"
                  className="email"
                  placeholder="johndoe@example.com"
                />
              </label>
              <label>
                Phone Number
                <input
                  type="number"
                  className="number"
                  placeholder="+254 712 345 678"
                />
              </label>
            </div>
            <label>
              Your Message
              <input
                type="text"
                className="message"
                placeholder="hi, i would like ....."
              />
            </label>
            <button className="submit">SEND</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
