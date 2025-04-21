

import React, { useEffect, useState } from 'react';
import './Header.css';
import logo from '../assets/snippet_logo_white.svg';
import bg from '../assets/backg.avif';
import burger from '../assets/burger.svg';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Typing animation states
  const words = ['Design', 'Develop', 'Launch'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Navbar scroll effect state
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Typing logic
  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const handleTyping = setTimeout(() => {
      setDisplayedText((prevText) => {
        if (!isDeleting) {
          return currentWord.substring(0, prevText.length + 1);
        } else {
          return currentWord.substring(0, prevText.length - 1);
        }
      });

      if (!isDeleting && displayedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(handleTyping);
  }, [displayedText, isDeleting, currentWordIndex]);

  // Scroll listener for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // AOS animation init
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="background">
      <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <img className="logo" src={logo} alt="logo" />
        <div className="burger" onClick={toggleMenu}>
          <img src={burger} alt="burger" />
        </div>
        <div className="nav-items">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Our Services</a>
          <a href="#">Contact Us</a>
          <a href="#">(+212)663-212-790</a>
        </div>
      </div>

      <div className="big-title" data-aos="fade-up">
        <h1>We</h1>
        <h1 className='typing-animation'>{displayedText}</h1>
        <h1>Digital products</h1>
      </div>

      <div className='para' data-aos="fade-up">
        <p>
          We partner with companies, brands, and founders to build solutions that<br />
          truly transform businesses and connect meaningfully to the people that use them.
        </p>
      </div>

      <div className='btns' data-aos="fade-up">
        <button className='btn1'>Get Started</button>
        <button className='btn2' data-aos-delay="1200">Learn more</button>
      </div>
    </div>
  );
}
