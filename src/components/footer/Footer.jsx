import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Happy End 
        
        </h1>
        <ul className="footer__list">
          <li>
            <a href="#home" className="footer__link">Home</a>
          </li>
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>
          <li>
            <a href="#skills" className="footer__link">Skills</a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">Portfolio</a>
          </li>
          <li>
            <a href="#contact" className="footer__link">Contact</a>
          </li>
        </ul>
        <div className="footer__social">
          <a href="https://github.com/Stanislav-Vorozhun" className="home__social-icon" target="_blank">
            <i className="uil uil-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/stanislav-vorozhun-aa806a182/" className="home__social-icon" target="_blank">
            <i className="uil uil-linkedin"></i>
          </a>
          <a href="https://t.me/S_Vorozhun" className="home__social-icon" target="_blank">
            <i className="uil uil-telegram"></i>
          </a>
        </div>

        <span className="footer__copy">Stas Vorozhun. 2023</span>
      </div>
    </footer>
  )
}

export default Footer