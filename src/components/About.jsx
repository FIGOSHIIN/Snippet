import './About.css';
import React from 'react'; 
import img1 from '../assets/img1.webp';
import img2 from '../assets/img2.webp';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function About() {
  
    useEffect(() => {
      AOS.init({
        duration: 1000, 
        once: true,    
      });
    }, []);

  return (
    <div className='about-container'data-aos="fade-up">
      <div className='title'><h1>We are a full-service digital agency</h1></div>
      <div className='p-tag'>
        <p>No matter if it's a small website or bespoke application we<br/>
        are always ready to offer our services with dedication and  <br/>
         perfection.</p>
      </div>
      <div className='content-wrapper'>
        <div className='img-container'>
          <img className='img img1' src={img1} alt="Image 1" />
          <img className='img img2' src={img2} alt="Image 2" />
        </div>
        <div className='text-container' >
          <p className='text-1' ><element>____             </element>Empowering your digital journey</p>
          <h1>We think strategy, craft design,<br/> develop digital..</h1>
          <p className='text-2'>We can help you transform an idea into a fully viable<br/> product, starting by defining the goals and building a<br/> roadmap to the best user-experience solution.</p>
          <button className='btn'>About us</button>
        </div>
      </div>
    </div>
  )
}
