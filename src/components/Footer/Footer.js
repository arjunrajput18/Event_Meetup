import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
     
        <div className="social-icons">
        <p className="text-footer">Made with ❤️ by Arjun || please Connect with me:
          <a href="https://www.linkedin.com/in/arjunrajput18/" target="__blank">
            <FaLinkedin className="icon" />
          </a>
          <a href="https://twitter.com/arjunrajput1812" target="__blank">
            <FaTwitter className="icon" />
          </a>
          <a href="https://github.com/arjunrajput18" target="__blank">
            <FaGithub className="icon" />
          </a>
        </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
