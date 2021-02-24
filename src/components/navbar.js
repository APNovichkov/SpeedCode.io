import React, { useContext } from "react";

// Import Context
import { UserContext } from "../context/userProvider";

const Navbar = (props) => {
  const [userObject] = useContext(UserContext);

  

  return (
    <div className="navbar-wrapper">
      <nav className="d-flex justify-content-between align-items-center">
        <img src="/assets/images/black_speedcode_logo@2x.png" className="navbar-logo" width="200" alt="logo" />
        <div className="d-flex justify-content-right">
          <h5 className="navbar-welcome">
            <span className="light-text">Welcome,</span>{" "}
            <span className="medium-text">{userObject && userObject.firstName}!</span>
          </h5>
        </div>

        {/* <img src="/assets/images/Profile_picture.jpg" className="navbar-profile-picture" width="45"></img> */}
      </nav>
    </div>
  );
};

export default Navbar;
