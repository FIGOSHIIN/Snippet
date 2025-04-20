import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'  
import About from './components/About.jsx'
import Help from './components/Help.jsx'
import Section from './components/Section.jsx'
import Footer from './components/Footer.jsx'


function App() {
  

  return (
    <div>
      <Header />
      <About />
      <Help />
      <Section />
      <Footer />
    </div>
  )
}

export default App
