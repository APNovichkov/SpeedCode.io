import React from "react";

const LinksNavbar = (props) => {
  return (
    <div className="links-navbar-wrapper">
      <div className="container">
        <div className="row links-navbar-row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-3">
                <h6>Algorithms</h6>
              </div>
              <div className="col-md-3">
                <h6>Data Structures</h6>
              </div>
              <div className="col-md-3">
                <h6>Dashboard</h6>
              </div>
              <div className="col-md-3">
                <h6>Communities</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row links-navbar-company">
              <div className="col-md-3"></div>
              <div className="col-md-3">
                <h6>Pricing</h6>
              </div>
              <div className="col-md-3">
                <h6>Contact</h6>
              </div>
              <div className="col-md-3">
                <h6>Blog</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinksNavbar;
