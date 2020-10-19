import React from "react";

// Import components
import Stars from "./stars";

// Declare constants


const OverviewCard = (props) => {
  let { name, description, difficulty, attempts, groupClass } = props;

  return (
    <div className={`overview-card ${groupClass.toLowerCase()}`}>
      <div>
        <span className="overview-card-title">{name}</span>
      </div>
      <div>
        <span className="overview-card-description">{description}</span>
      </div>
      <div>
        <Stars numStars={1}></Stars>
        <span className="attempts">attemps: {attempts}</span>
      </div>
    </div>
  );
};

export default OverviewCard;
