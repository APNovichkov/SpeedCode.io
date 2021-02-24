import React from "react";

const Footer = (props) => {
  return (
    <div className="footer-wrapper">
      <div className="row">
        <div className="col-md-3">
          <div className="footer-logo-wrapper">
            <img src="/assets/images/speedcode-white-logo@2x.png" className="navbar-logo" width="200" alt="logo" />
          </div>
          <div className="footer-made-with-wrapper">
            <div className="footer-made-with">{"Made with <3 in San Francisco"}</div>
          </div>
        </div>
        <div className="col-md-3"></div>
        <div className="col-md-4">
          <div className="footer-links-wrapper">
            <div className="d-flex justify-content-left">
              <div className="footer-link-wrapper">
                <a>About Us</a>
              </div>
              <div className="footer-link-wrapper">
                <a>Contact Us</a>
              </div>
              <div className="footer-link-wrapper">
                <a>Pricing</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="footer-links-wrapper">
            <div className="copyright-wrapper">Copyright 2021</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
