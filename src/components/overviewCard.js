import React, {useState, useEffect} from "react";
import { Link, Redirect } from "react-router-dom";

// Import components
import Stars from "./stars";

// Declare constants

const OverviewCard = (props) => {
  let { name, urlName, description, longDescription, timeComplexity, difficulty, attempts, groupClass, code } = props;

  return (
    <div className={`overview-card ${groupClass.toLowerCase()}`}>
      <div className="overview-card-title">{name}</div>
      <div className="overview-card-description">{description}</div>

      <div>
        <Stars numStars={difficulty}></Stars>
        <span className="attempts">
          {attempts} {attempts == 1 ? "Attempt" : "Attempts"}
        </span>
      </div>
      <div className="overview-card-buttons-wrapper">
        <Link
          to={{
            pathname: `/algorithms/speed/${urlName}`,
            state: {
              from: "createMrnaForm",
              toShowNotification: true,
              algorithmData: {
                name: name,
                description: description,
                longDescription: longDescription,
                timeComplexity: timeComplexity,
                difficulty: difficulty,
                attempts: attempts,
                groupClass: groupClass,
                code: code
              },
            },
          }}
        >
          <button className="practice-button">Practice</button>
        </Link>
      </div>
    </div>
  );
};

export default OverviewCard;
