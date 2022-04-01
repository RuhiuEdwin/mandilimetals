import React from 'react'
import {FiMapPin, FiMail}from 'react-icons/fi'
import {BsTelephone, BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <p className='sub-title'>CONTACT US</p>
      <h4 className='title'>TALK TO US</h4>
      <div className='contact-wrapper'>
        <div className='contact-info'>
          <h4 className='title'>MANDILI METALS GROUP LIMITED LIMITED</h4>
          <div className='location'>
            <FiMapPin className='contact-icon'/>
            Mandili, DRC
          </div>
          <a href="mailto:mandilimetalsgroup@gmail.com"  className='mail'>
            <FiMail className='contact-icon'/>
            info@mandilimetalsgroup.com
          </a>
          <a href="https://wa.me/234974183316" className='call'>
            OPERATIONS MANAGER:<br/>
            +243 974 183 316
          </a>
          <a href="tel:243900022547" className='call'>
            OFFICE LINE:<br/>
            +243 900 022 547
          </a>
        </div>
        <div className='contact-form'>
          <div className='names'>
            <label>
              First Name
              <input type='text' className='name' placeholder='John'/>
            </label>
            <label>
            Last Name
              <input type='text' className='name' placeholder='Doe'/>
            </label>
          </div>
          <div className='names'>
            <label>
              Email Address
              <input type='email' className='email' placeholder='johndoe@example.com'/>
            </label>
            <label>
              Phone Number
              <input type='number' className='number' placeholder='+254 712 345 678'/>
            </label>
          </div>
          <label>
            Your Message
            <input type='text' className='message' id='message' placeholder='hi, i would like .....'/>
          </label>
          <button className='submit'>
            SEND
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact