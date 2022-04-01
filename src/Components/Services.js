import React from 'react'
import { GiGoldBar } from "react-icons/gi";
import {AiFillGold, AiTwotoneGold, AiFillGolden} from 'react-icons/ai'

const Services = () => {
  return (
    <div className='services' id='service'>
      <p className='sub-title'>OUR SERVICES</p>
      <h4 className='title'>WHAT WE DO</h4>
      <div className='service-wrapper'>
        <div className='service'>
          <div className='service-header'>
            <GiGoldBar className='service-icon'/>
          </div>
          <div className='service-title'>
            GOLD & SILVER REFINERY
          </div>
          <div className='service-description'>
            We offer high quality refinery services that ensure that the best product is put out to the market
          </div>
        </div>
        <div className='service'>
          <div className='service-header'>
            <AiTwotoneGold className='service-icon'/>
          </div>
          <div className='service-title'>
          SMELTING
          </div>
          <div className='service-description'>
          We use environmentally friendly practices to convert large lots of gold and silver into smaller quantities as per the clients request.
          </div>
        </div>
        <div className='service'>
          <div className='service-header'>
            <AiFillGolden className='service-icon'/>
          </div>
          <div className='service-title'>
          ASSAYING SERVICES
          </div>
          <div className='service-description'>
          We are among a very small group of companies that offer assaying services, specializing in Cupellation Method, to determine the concentration of Gold.
          </div>
        </div>
        <div className='service'>
          <div className='service-header'>
            <AiFillGold className='service-icon'/>
          </div>
          <div className='service-title'>
          RARE MINERAL SALES
          </div>
          <div className='service-description'>
          We facilitate sales of rare minerals that have undergone thorough inspection, validation and refinery to our large clientele.
          </div>
        </div>
        <div className='service'>
          <div className='service-header'>
            <AiFillGolden className='service-icon'/>
          </div>
          <div className='service-title'>
          MINERAL SEPARATION SERVICES
          </div>
          <div className='service-description'>
          We offer unparalleled rare minerals separation and recovery services with utmost transparency and precision.
          </div>
        </div>
        <div className='service'>
          <div className='service-header'>
            <GiGoldBar className='service-icon'/>
          </div>
          <div className='service-title'>
          MINTING
          </div>
          <div className='service-description'>
          We offer modern minting services producing customized medallions, coins, medals and bullions for a wide range of clients.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services