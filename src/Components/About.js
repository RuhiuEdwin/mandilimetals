import React from 'react'
import client from '../assets/images/client.png'

const About = () => {
  return (
    <div>
    <div className='about' id='about'>
      <p className='sub-title'>ABOUT US</p>
      <h4 className='title'>WHO WE ARE</h4>
      <div className='about-wrapper'>
        We are a leading metals and rare minerals solutions service provider in east and central africa region. 
        We pride ourselves being an all rounded rare minerals solutions service provider connecting the east and central africa region to the world at large. 
      </div>
    </div>
      <div className='testimonials'>
        <p className='sub-title'>TESTIMONIALS</p>
        <h4 className='title'>WHAT OUR CLIENTS SAY</h4>
        <div className='testimonials-wrapper'>
              <div className='testimonial'>
                <div className='testimonial-details'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                </div>
                  <img src={client} className='testimonial-img'/>
              </div>
              <div className='testimonial'>
                <div className='testimonial-details'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                </div>
                  <img src={client} className='testimonial-img'/>
              </div>
              <div className='testimonial'>
                <div className='testimonial-details'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                </div>
                  <img src={client} className='testimonial-img'/>
              </div>
              <div className='testimonial'>
                <div className='testimonial-details'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                </div>
                  <img src={client} className='testimonial-img'/>
              </div>
              <div className='testimonial'>
                <div className='testimonial-details'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                </div>
                  <img src={client} className='testimonial-img'/>
              </div>
              <div className='testimonial'>
                <div className='testimonial-details'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                </div>
                  <img src={client} className='testimonial-img'/>
              </div>
        </div>
      </div>
    </div>
  )
}

export default About