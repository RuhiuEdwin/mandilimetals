import React from 'react'
import client from '../assets/images/client.png'
import { FaBullseye, FaHandshake, FaSeedling } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <div className="about" id="about">
        <p className="sub-title">ABOUT US</p>
        <h4 className="title">WHO WE ARE</h4>
        <div className="about-wrapper">
          <p>
            We are a leading metals and rare minerals solutions service provider
            in east and central africa region. We pride ourselves being an all
            rounded rare minerals solutions service provider connecting the east
            and central africa region to the world at large.
          </p>
          <br></br>
          <p>
            At Ngola Mineral, we are at the forefront of the rare minerals
            industry, driven by a commitment to sustainable and responsible
            mining practices. Based in the rich mineral heartland of South Kivu,
            Democratic Republic of Congo, we specialize in the extraction,
            processing, and distribution of rare minerals that power the future.
            From tantalum and coltan to lithium and rare earth elements, our
            products are essential to industries such as technology, energy, and
            electronics.
          </p>
          <div className="service-wrapper">
            <div className="about-card">
              <div className="service-header">
                <FaSeedling className="service-icon" />
              </div>
              <div className="service-title">Our Vision</div>
              <div className="about-description">
                Our vision is to be a global leader in the rare minerals sector,
                renowned for our innovation, environmental stewardship, and
                social responsibility. We aim to transform natural resources
                into value, fueling progress while ensuring that the communities
                we work with prosper alongside us. By leveraging cutting-edge
                technology and adhering to global best practices, we seek to set
                the standard for responsible mining in Africa and beyond.
              </div>
            </div>
            <div className="about-card">
              <div className="service-header">
                <FaBullseye className="service-icon" />
              </div>
              <div className="service-title">Our Mission</div>
              <div className="about-description">
                Ngola Mineral’s mission is to responsibly extract and provide
                the world with high-quality rare minerals that drive
                technological advancement, energy solutions, and global
                industry, while safeguarding the environment and uplifting local
                communities. We are committed to sustainable practices that
                respect the land, people, and resources of the DRC, ensuring a
                lasting positive impact for future generations.
              </div>
            </div>
            <div className="about-card">
              <div className="service-header">
                <FaHandshake className="service-icon" />
              </div>
              <div className="service-title">Our Commitment</div>
              <div className="about-description">
                Ngola Mineral is deeply committed to responsible sourcing,
                environmental protection, and social responsibility. We work
                closely with local and international stakeholders to ensure that
                our operations comply with international mining regulations and
                contribute to sustainable development. Our focus on ethical
                mining helps support peace, stability, and prosperity in the
                region.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About