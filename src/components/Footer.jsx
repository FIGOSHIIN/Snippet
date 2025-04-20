import React from 'react'
import './Footer.css'
import bgcity from '../assets/bg-city1.webp'
import env from '../assets/env.png'
import map from '../assets/map.png'
import message from '../assets/message.png'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='bgcity' >
            <div className='bgcity-overlay'>
                <h1>Let's discuss how we can work together</h1>
                <p>Ready to start your project? We would love to hear from you.<br/> Our team of experts is ready to help you bring your digital<br/> projects to life.</p>
            </div>
        </div>
        <div className='text-part'>
            <h1>CONTACT US, YOU WILL NOT BE DISAPPOINTED</h1>
            <p>Don't hesitate to get in touch with us – we would be happy<br/> to discuss your needs and goals in more detail. Contact us<br/> today and let's start a conversation!</p>
        </div>
        <div className='card-part'>
            <div className='fcard'>
                <img src={map} alt="" className='ficon'/>
                <div className='text-container'>
                <h1>Our Locations</h1>
                <p>77, Rue Mohamed Smiha<br/>
                Etg 10 Nº57 - Casablanca</p>
                </div>
            </div>
            <div className='scard'>
                <img src={message} alt="" className='ficon'/>
                <div className='text-container'>
                <h1>Give Us A Call</h1>
                <p>(+212) 663-212-790<br/>
                (+212) 522-616-183</p>
                </div>
            </div>
            <div className='tcard'>
                <img src={env} alt="" className='ficon'/>
                <div className='text-container'>
                <h1>Email Address</h1>
                <p>contact@snippet.ma<br/>
                support@snippet.ma</p>
                </div>
            </div>
        </div>
    </div>
  )
}
