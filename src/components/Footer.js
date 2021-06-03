import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer__inner">
          <div>
            <p>Let's create something new</p>
            <h3>
              Let's Get In
              <br />
              Touch
              <br />
              <Link to="/contact" className="contact">
                Contact me
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
