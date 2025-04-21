import React from 'react';
import './FooterLast.css';
import logo from '../assets/snippet_logo_white.svg';

export default function FooterLast() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo-section">
          <img src={logo} alt="Snippet Logo" className="footer-logo" />
          <div className="footer-contact-info">
            <p>(+212) 663-212-790</p>
            <p>contact@snippet.ma</p>
          </div>
        </div>

        <div className='footer-links-all'>
        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Consulting</a></li>
            <li><a href="#">UX/UI Design</a></li>
            <li><a href="#">Development</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Use cases</h4>
          <ul>
            <li><a href="#">Ecommerce</a></li>
            <li><a href="#">Web & Mobile App</a></li>
            <li><a href="#">3rd Party Integrations</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>About</h4>
          <ul>
            <li><a href="#">Who We Are</a></li>
            <li><a href="#">Why Choose Us</a></li>
            <li><a href="#">Our Process</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Snippet.</p>
      </div>
    </footer>
  );
}

