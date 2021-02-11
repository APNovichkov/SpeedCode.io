import React from "react";
import { Link } from "react-router-dom";

const LandingNavbar = (props) => {
  let { isLoginOrSignUp } = props;

  return (
    <div className="landing-navbar-wrapper">
      <nav className="navbar landing-navbar">
        <img src="assets/images/speedcode-white-logo@2x.png" className="navbar-logo" width="200" alt="logo" />

        {!isLoginOrSignUp ? (
          <div className="form-inline my-2 my-lg-0">
            <h5 className="landing-navbar-welcome">
              <Link to="/login" className="medium-text landing-navbar-link">
                Login
              </Link>
              <Link to="/signup" className="medium-text landing-navbar-link">
                Sign Up
              </Link>
              <a className="light-text landing-navbar-link">Continue as Guest</a>
            </h5>
          </div>
        ) : (
          <div className="form-inline my-2 my-lg-0">
            <h5 className="landing-navbar-welcome">
              <a className="light-text landing-navbar-link">Continue as Guest</a>
            </h5>
          </div>
        )}
      </nav>
    </div>
  );
};

export default LandingNavbar;
