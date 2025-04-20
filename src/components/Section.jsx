import React from 'react'
import './Section.css'
import fasset from '../assets/asset1.webp'
import sasset from '../assets/asset2.webp'


export default function Section() {
  return (
    <div className='section-container'>
      <div className='fimg-container'>
        <img className='fimg' src={fasset} alt="" />
        <img className='simg' src={sasset} alt="" />
      </div>

      <div className='dashboard-container'>
        <p><span>____               </span> Your success is our motivation</p>
        <h1>
          We are passionate about using<br />
          technology to solve problems<br />
          and create value
        </h1>

        {/* Mini Dashboard Starts Here */}
        <div className="services">
          {[
            { name: "Websites", percent: 90, color: "cyan" },
            { name: "E-Commerce", percent: 80, color: "purple" },
            { name: "Web & Mobile Apps", percent: 85, color: "orange" },
            { name: "API & 3rd Party Integrations", percent: 75, color: "pink" },
            { name: "DevOps", percent: 70, color: "green" },
          ].map((service, index) => (
            <div className="service" key={index}>
              <p>{service.name}</p>
              <div className="progress-bar">
                <div className={`progress-fill ${service.color}`} style={{ width: `${service.percent}%` }}></div>
                <div className="progress-dot" style={{ left: `${service.percent}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}