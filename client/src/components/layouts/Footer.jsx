import React from 'react';

import '../../css/footer.css';

import LOGO from '../../assets/Logo/Original-Logo.png';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={LOGO} alt="Logo" className="footer-logo" />
            <p>info@wicker.co<br />+1 (564) 345-0987</p>
            <div className="footer-socials">
              <a href="##" className="social-link"><i className="bx bxl-facebook"></i></a>
              <a href="##" className="social-link"><i className="bx bxl-twitter"></i></a>
              <a href="##" className="social-link"><i className="bx bxl-instagram"></i></a>
            </div>
          </div>
          <div className="footer-links">
            <div className="link-section">
              <h4>About</h4>
              <ul>
                <li><a href="/about">About us</a></li>
                <li><a href="##">Recipe</a></li>
                <li><a href="##">Download</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div className="link-section">
              <h4>Company</h4>
              <ul>
                <li><a href="##">Our Recipe</a></li>
                <li><a href="##">Subscribe Us</a></li>
                <li><a href="##">FAQ</a></li>
              </ul>
            </div>
            <div className="link-section">
              <h4>Support</h4>
              <ul>
                <li><a href="##">Account</a></li>
                <li><a href="##">Support Centre</a></li>
                <li><a href="##">Feedback</a></li>
                <li><a href="##">Accessibility</a></li>
              </ul>
            </div>
            <div className="link-section">
              <h4>Get in Touch</h4>
              <p>4517 Washington Ave.<br />Manchester, Kentucky 39495</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright @ 2024 Developed By Mohamed Amaan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
