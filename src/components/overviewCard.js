import React from "react";

// Import components
import Stars from "./stars";

// Declare constants


const OverviewCard = (props) => {
  let { name, description, difficulty, attempts, groupClass } = props;

  const practiceButtonClicked = (event) => {
    event.preventDefault();
    console.log(`Clicked practice for ${name}`);
  };


  return (
    <div className={`overview-card ${groupClass.toLowerCase()}`}>
      <div className="overview-card-title">{name}</div>
      <div className="overview-card-description">{description}</div>

      <div>
        <Stars numStars={1}></Stars>
        <span className="attempts">
          {attempts} {attempts == 1 ? "Attempt" : "Attempts"}
        </span>
      </div>
      <div className="overview-card-buttons-wrapper">
        <button onClick={practiceButtonClicked} className="practice-button">
          Practice
        </button>
      </div>
    </div>
  );
};

export default OverviewCard;
