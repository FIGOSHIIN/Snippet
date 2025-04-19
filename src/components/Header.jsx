import React, { useEffect, useState } from 'react';
import './Header.css';
import logo from '../assets/snippet_logo_white.svg';
import bg from '../assets/backg.avif';
import burger from '../assets/burger.svg';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [word, setWord] = useState('Design');
  const words = ['Design', 'Develop', 'Launch'];
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setWord((prevWord) => {
        const currentIndex = words.indexOf(prevWord); 
        const nextIndex = (currentIndex + 1) % words.length;
        return words[nextIndex]; 

      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="background">
      <div className="navbar">
        <img className="logo" src={logo} alt="logo" />
        <div className="burger" onClick={toggleMenu}>
          <img src={burger}/>
        </div>
        <div className={`nav-items ${menuOpen ? 'open' : ''}`}>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Our Services</a>
          <a href="#">Contact Us</a>
          <a href="#">(+212)663-212-790</a>
        </div>
      </div>

      <div className="big-title">
        <h1>We</h1>
        <h1 className='typing-animation'>{word}</h1>
        <h1>Digital products</h1>
      </div> 
      <div className='para'>
        <p>We partner with companies, brands, and founders to build solutions that<br/> truly transform businesses and connect meaninfully to the people that  use them.</p>
      </div>
      <div className='btns'>
      <button className='btn1'>Get Started</button>
      <button className='btn2'>Learn more</button>
      </div>
    </div>
  );
}
