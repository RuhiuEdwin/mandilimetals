import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../assets/images/logo.png"
import { AiOutlineInstagram } from 'react-icons/ai'
import { MdOutlineFacebook } from 'react-icons/md'
import { AiFillTwitterCircle } from 'react-icons/ai'
import {BsTelephone, BsWhatsapp} from 'react-icons/bs'
import { FiMail, FiMapPin}from 'react-icons/fi'
import {IoTimeOutline}from 'react-icons/io5'

const Footer = () => {
  return (
    <div>
        <div className='footer'>
            <div className='footer-wrapper'>
                <img className='footer-logo' src={logo} alt=""/>
                <div className='footer-info'>
                    <h4 className='sub-title'>OUR INFORMATION</h4>
                    <div className='info'>
                        MANDILI METALS GROUP LIMITED
                    </div>
                    <div className='info'>
                        <IoTimeOutline className='contact-icon'/>
                        Mon - Fri 8am to 6pm
                    </div>
                    <div className='info'>
                        <FiMail className='contact-icon'/>
                        info@mandilimetalsgroup.com
                    </div>
                    <a href="https://wa.me/234974183316" className='info' id='one'>
                    <h4>OPERATIONS MANAGER:</h4>
                    +243 974 183 316
                    </a>
                    <a href="tel:243973114417" className='info' id='one'>
                    <h4>OFFICE LINE:</h4>
                    +243 900 022 547
                    </a>
                </div>
                <div className='subscribe'>
                    <h4 className='sub-title'>
                        SUBSCRIBE TO OUR NEWSLETTER
                    </h4>
                    <input type='text' classname="sub" placeholder="email address"/>
                    <input type="submit" value='SUBSCRIBE' className='sub-btn'/>
                </div> 
            </div>
                
                <div className='social-media'>
                    <AiOutlineInstagram className='social-icon'/>
                    <MdOutlineFacebook className='social-icon'/>
                    <AiFillTwitterCircle className='social-icon'/>
                </div>
            <p className='copyright'>
                2022 MANDILI METALS GROUP LIMITED.
            </p>
        </div>
    </div>
  )
}

export default Footer