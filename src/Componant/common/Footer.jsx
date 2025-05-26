import React from "react";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Description */}
        <div className="footer-section">
          <h2 className="footer-logo">YourCompany</h2>
          <p className="footer-description">
            Transforming ideas into reality with precision and innovation.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Company</h3>
          <ul className="footer-links">
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Resources Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Resources</h3>
          <ul className="footer-links">
            <li><a href="/blog">Blog</a></li>
            <li><a href="/help">Help Center</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </div>


      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;