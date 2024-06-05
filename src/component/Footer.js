import React from "react";
import "./Footer.css";
import instagramIcon from "../assets/in.png";
import facebookIcon from "../assets/fb.png";
import twitter from "../assets/tw.png";

const Footer = () => {
  return (
    <footer className="footer">
       <div className="copyright">
        <p>&copy; 2024 MUSE, All Rights Reserved</p>
      </div>
      <div className="social-media">
        <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/your-facebook" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" />
        </a>
        <a href="twitter@example.com">
          <img src={twitter} alt="Email" />
        </a>
      </div>
      
     
    </footer>
  );
};

export default Footer;
