import React from 'react'
import './Help.css';
import ficon from '../assets/icon-1.png'
import sicon from '../assets/icon-2.png'
import ricon from '../assets/react.svg'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function Help() {
  useEffect(() => {
              AOS.init({
                duration: 1000, 
                once: true,    
              });
            }, []);
  return (
    <div className='help-container' data-aos="fade-up">
      <div className='title'>
        <h1 className='biga-title'>We can help you bring your idea to life<br/></h1>
        <p className='paragraph'><br/>From idea to viable product, we can help you define your,<br/> goals and create a roadmap to the best user experience<br/> solution</p>
      </div>

      <div className='cards' data-aos="fade-up">
          <div className='card'>
            <img className='icon-box' src={ricon} alt="" />
            <h1>Consulting</h1>
            <p>We help you identify the key features and functionality that will make your product stand out, and we work with you to design and build a solution that meets your needs and exceeds your expectations.</p>
            <a>Learn more</a>
          </div>
          <div className='card'>
            <img className='icon-box' src={sicon} alt="" />
            <h1>UX/UI Design</h1>
            <p>Whether you need a new website, an app, or any other type of digital product, we have the skills and expertise to design a solution that meets your needs and delivers the best possible user experience.</p>
            <a>Learn more</a>
          </div>
          <div className='card'>
            <img className='icon-box' src={ficon} alt="" />
            <h1>Development</h1>
            <p>We take care of the entire development cycle of your product, from the initial conceptualization and design phase, through to the coding, testing, and deployment stages.</p>
            <a>Learn more</a>
          </div>
      </div>
    </div>
  )
}
