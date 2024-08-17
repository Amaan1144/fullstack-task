import React from 'react';
import './footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-section">
      <h4>Abstract</h4>
      <span>Branches</span>
    </div>
    <div className="footer-section">
      <h4>Resources</h4>
      <span>Blog</span>
      <span>Help Center</span>
      <span>Release Notes</span>
      <span>Status</span>
    </div>
    <div className="footer-section">
      <h4>Community</h4>
      <span>Twitter</span>
      <span>LindedIn</span>
      <span>Facebook</span>
      <span>Dribble</span>
      <span>Podcast</span>
    </div>
    <div className="footer-section">
      <h4>Company</h4>
      <span>About Us</span>
      <span>Careers</span>
      <span>Legal</span>
    </div>
    <div className="footer-section">
      <h4>Contact Us</h4>
      <span>info@abstract.com</span>
    </div>
    <div className="footer-section">
      <h4>@ Copyright 2022</h4>
      <span>Abstract Studio Design, Inc.</span>
      <span>All rights reserved</span>
    </div>
  </footer>
);

export default Footer;
