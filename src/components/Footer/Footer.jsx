import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="foot">
        <div className="footer-content">
          <div className="footlinks">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="./register">Register</a>
              </li>
              <li>
                <a href="./about">About Us</a>
              </li>
              <li>
                <a href="./contact">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="footlinks">
            <h4>Connect</h4>
            <div className="social">
              <a
                href="https://www.facebook.com/hoanglg.work"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/hoanglg.work/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-instagram"></i>
              </a>
              {/* <a
                href="https://www.twitter.com/mohdrahil101"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-twitter"></i>
              </a> */}
              <a
                href="https://www.linkedin.com/in/hoanglg-work/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
              {/* <a
                href="https://www.youtube.com/techdollarz"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-youtube"></i>
              </a> */}
              {/* <a
                href="https://www.mohdrahil.wordpress.com"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-wordpress"></i>
              </a> */}
              <a
                href="https://github.com/hoanglg-workplace"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="end">
        <p>
          Copyright © 2022 Clothing Store All Rights Reserved.
          <br />
          Website developed by: Lý Gia Hoàng
        </p>
      </div>
    </footer>
  );
};

export default Footer;
