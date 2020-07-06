import React from "react";

const OverviewCard = (props) => {
  let { name, description, difficulty, attempts, groupClass } = props;

  return (
    <div className={`card overview-card ${groupClass.toLowerCase()}`}>
      <h3>{name}</h3>
      <h5>{description}</h5>
      <div>
        <span>{difficulty}</span>
        <span className="attempts">attemps: {attempts}</span>
      </div>
    </div>
  );
};

export default OverviewCard;
