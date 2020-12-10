import React from "react";

const Navbar = (props) => {
  let { userObject } = props;

  return (
    <div className="navbar-wrapper">
      <nav class="navbar navbar-light navbar-home">
        <img src="/assets/images/webLogo.jpg" className="navbar-logo" width="200" alt="logo" />
        <form class="form-inline my-2 my-lg-0">
          <input type="text" className="form-control navbar-search" placeholder="Search..."></input>
          <button type="submit" className="navbar-search-button">
            <span className="fas fa-search navbar-search-icon"></span>
          </button>
        </form>
        <div class="form-inline my-2 my-lg-0">
          <h5 className="navbar-welcome">
            <span className="light-text">Welcome,</span> <span className="medium-text">{userObject && userObject.firstName}!</span>
          </h5>
          <img src="/assets/images/Profile_picture.jpg" className="navbar-profile-picture" width="45"></img>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
