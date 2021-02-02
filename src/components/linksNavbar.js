import React, {useContext} from "react";
import { Link } from "react-router-dom";

// Import context
import {UserContext} from './../context/userProvider';

const LinksNavbar = (props) => {

  const [userObject] = useContext(UserContext);

  return (
    <div className="links-navbar-wrapper">
      <div className="row links-navbar-row">
        <div className="col-md-7">
          <div className="d-flex justify-content-between links-flex">
            <Link to={{
              pathname: "/algorithms",
              state: {
                userObject: userObject
              }
            }}>
              <h6>Algorithms</h6>
            </Link>
            <Link to={{
              pathname: "/datastructures",
              state: {
                userObject: userObject
              }
            }}>
              <h6>Data Structures</h6>
            </Link>
            <h6>Dashboard</h6>
            <h6>Communities</h6>
          </div>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-3">
          <div className="d-flex justify-content-between links-light-flex">
            <h6>Pricing</h6>
            <h6>Contact</h6>
            <h6>Blog</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinksNavbar;
