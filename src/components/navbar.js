import React, {useContext} from "react";

// Import Context
import {UserContext} from "../context/userProvider";

const Navbar = (props) => {
  
  const [userObject] = useContext(UserContext);

  return (
    <div className="navbar-wrapper">
      <nav className="navbar navbar-light navbar-home">
        <img src="/assets/images/webLogo.jpg" className="navbar-logo" width="200" alt="logo" />
        <form className="form-inline my-2 my-lg-0"></form>
        <div className="form-inline my-2 my-lg-0">
          <h5 className="navbar-welcome">
            <span className="light-text">Welcome,</span>{" "}
            <span className="medium-text">{userObject && userObject.firstName}!</span>
          </h5>
          <img src="/assets/images/Profile_picture.jpg" className="navbar-profile-picture" width="45"></img>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
