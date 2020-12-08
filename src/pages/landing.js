import React from "react";

// Import Components
import LandingNavbar from "./../components/landingNavbar";

const Landing = (props) => {
  return (
    <div>
      <LandingNavbar></LandingNavbar>
      <div className="landing-hero-wrapper text-center">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="landing-hero-main-text">
              Learn and Memorize Algorithms and Data Structures.
              <br />
              Get Faster at Writing Code.
            </div>

            <div className="landing-hero-button-wrapper">
              <button className="btn landing-hero-button">Learn More</button>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
      <div className="landing-stats-row-wrapper text-center">
        <div className="landing-stats-row-header">Our Results</div>
        <div className="row">
          <div className="col-md-3 stats-item">10%</div>
          <div className="col-md-3 stats-item">10/20</div>
          <div className="col-md-3 stats-item">+200%</div>
          <div className="col-md-3 stats-item">20/20</div>
        </div>
      </div>
      <div className="landing-description-background-wrapper">
        <div className="landing-description-wrapper">
          <div className="landing-description-row-wrapper">
            <div className="row">
              <div className="col-md-6">
                <img src="/assets/images/landing1.png" className="landing-image" alt="logo" />
              </div>
              <div className="col-md-6">
                <div className="landing-description-item-wrapper landing-description-item-wrapper-when-on-right">
                  <div className="landing-description-item-title">
                    A Variety of Algorithms and
                    <br />
                    Data Structures
                  </div>
                  <div className="landing-description-item-text">
                    Choose from our curated collection of the most popular algorithms and data structures sorted by
                    category
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="landing-description-row-wrapper">
            <div className="row">
              <div className="col-md-6">
                <div className="landing-description-item-wrapper">
                  <div className="landing-description-item-title">
                    Learn, Memorize and Perfect
                    <br />
                    Writing Data Structures and Algorithms
                  </div>
                  <div className="landing-description-item-text">
                    Choose a language and type over curated implementations of data structures and algorithms in an interactive console
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <img src="/assets/images/landing2.png" className="landing-image" alt="logo" />
              </div>
            </div>
          </div>
          <div className="landing-description-row-wrapper">
            <div className="row">
              <div className="col-md-6">
                <img src="/assets/images/landing3.png" className="landing-image" alt="logo" />
              </div>
              <div className="col-md-6">
                <div className="landing-description-item-wrapper landing-description-item-wrapper-when-on-right">
                  <div className="landing-description-item-title">
                    Track Statistics and Improve
                    <br />
                    Your Skills
                  </div>
                  <div className="landing-description-item-text">
                    Track your progress over time, get meaningful insights and watch yourself grow!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
