import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'  
import About from './components/About.jsx'
import Help from './components/Help.jsx'
import Section from './components/Section.jsx'
import Footer from './components/Footer.jsx'
import FooterLast from './components/FooterLast.jsx'


function App() {
  

  return (
    <div>
      <Header />
      <About />
      <Help />
      <Section />
      <Footer />
      <FooterLast />

    </div>
  )
}

export default App
