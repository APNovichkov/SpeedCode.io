import React from "react";
import { Link } from "react-router-dom";

const LinksNavbar = (props) => {
  return (
    <div className="links-navbar-wrapper">
      <div className="row links-navbar-row">
        <div className="col-md-6">
          <div className="d-flex justify-content-between links-flex">
            <Link to="/algorithms">
              <h6>Algorithms</h6>
            </Link>
            <h6>Data Structures</h6>
            <h6>Dashboard</h6>
            <h6>Communities</h6>
          </div>
        </div>
        <div className="col-md-3"></div>
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
