import React, { useRef, useEffect, useState } from "react";

// Import Components
import LandingNavbar from "./../components/landingNavbar";

const Landing = (props) => {
  const [toScrollToTop, setToScrollToTop] = useState();

  // Scrolling to the top
  const topRef = useRef(null);
  const scrollToTop = () => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
    setToScrollToTop(false);
  };

  useEffect(() => {
    setToScrollToTop(false);
  }, [])

  useEffect(() => {
    if(toScrollToTop){
      scrollToTop();
    }
  }, [toScrollToTop]);

  const handleLearnMoreClick = (event) => {
    event.preventDefault();

    setToScrollToTop(true);
  }

  return (
    <div>
      <div className="landing-hero-wrapper text-center">
        <LandingNavbar></LandingNavbar>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="landing-hero-main-text">Learn and Memorize Algorithms and Data Structures.</div>
            <div className="landing-hero-subtitle">Get Faster at Writing Code.</div>
            <div className="landing-hero-button-wrapper">
              <button className="btn landing-hero-button" onClick={handleLearnMoreClick}>Learn More</button>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
      <div ref={topRef} />
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
                    Choose from a Large Variety of Algorithms and Data Structures
                  </div>
                  <div className="landing-description-item-text">
                    Choose from our curated collection of the most popular algorithms and data structures sorted by
                    category that we are constantly updating!
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
                    Learn, Memorize and Perfect your Data Structures and Algorithms
                  </div>
                  <div className="landing-description-item-text">
                    Choose a language and type over curated implementations of data structures and algorithms while we keep track of
                    your time, mistakes made and words per minute!
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <img src="/assets/images/landing2-gif.gif" className="landing-image" alt="logo" />
              </div>
            </div>
          </div>
          <div className="landing-description-row-wrapper">
            <div className="row">
              <div className="col-md-6">
                <img src="/assets/images/landing2.png" className="landing-image" alt="logo" />
              </div>
              <div className="col-md-6">
                <div className="landing-description-item-wrapper landing-description-item-wrapper-when-on-right">
                  <div className="landing-description-item-title">
                    Get Real-Time Feedback on your Performance
                  </div>
                  <div className="landing-description-item-text">
                    See how you performed after each implementation, try again, go home, or see more statistics for the problem!
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
                    Track Statistics and Improve Your Skills
                  </div>
                  <div className="landing-description-item-text">
                    Track your progress over time, get meaningful insights and watch yourself get better each implementation!
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <img src="/assets/images/landing3.png" className="landing-image" alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
