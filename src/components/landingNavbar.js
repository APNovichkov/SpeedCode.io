import React from "react";

const LandingNavbar = (props) => {
  return (
    <div className="landing-navbar-wrapper">
      <nav class="navbar navbar-light navbar-home">
        <img src="/assets/images/webLogo.jpg" className="navbar-logo" width="200" alt="logo" />
        
        <div class="form-inline my-2 my-lg-0">
          <h5 className="landing-navbar-welcome">
            <span className="medium-text landing-navbar-link">Login</span>
            <span className="medium-text landing-navbar-link">Sign Up</span>
            <span className="light-text landing-navbar-link">Continue as Guest</span> <span className="medium-text"></span>
          </h5>
        </div>
      </nav>
    </div>
  );
};

export default LandingNavbar;
