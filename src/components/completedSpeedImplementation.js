import React from "react";
import { Link } from "react-router-dom";

const CompletedSpeedImplementation = (props) => {
  let { problemName, timeTaken, mistakesMade, wordsPerMinute, goHome, tryAgain, problemId, problemObject } = props;

  return (
    <div
      onClick={(event) => {
        event.stopPropagation();
      }}
      className="finished-blueprint-iframe"
    >
      <div className="finished-blueprint-title">
        Congratulations! <span className="far fa-thumbs-up"></span>
      </div>
      <div className="finished-blueprint-subtitle">
        You have successfully completed the {problemName} Implementation
      </div>
      <div className="d-flex justify-content-left finished-blueprint-stats-card-wrapper">
        <div className="finished-blueprint-stat-card text-center">
          <div className="finished-blueprint-stat-card-title">Time Taken</div>
          <div className="finished-blueprint-stat-card-value">{timeTaken}</div>
        </div>
        <div className="finished-blueprint-stat-card text-center">
          <div className="finished-blueprint-stat-card-title">Words Per Minute</div>
          <div className="finished-blueprint-stat-card-value">{wordsPerMinute}</div>
        </div>
        <div className="finished-blueprint-stat-card text-center">
          <div className="finished-blueprint-stat-card-title">Mistakes Made</div>
          <div className="finished-blueprint-stat-card-value">{mistakesMade}</div>
        </div>
      </div>
      <div className="finished-blueprint-stats-see-more-stats-wrapper">
        <Link
          to={{
            pathname: `/algorithms/${problemName}/statistics`,
            state: {
              problemId: problemId,
              problemObject: problemObject,
            },
          }}
          className="finished-blueprint-stats-see-more-stats"
        >
          See more stats <span className="fas fa-angle-right"></span>
        </Link>
      </div>

      <div className="finished-blueprint-stat-card-buttons-wrapper">
        <div className="d-flex justify-content-left">
          <button className="btn finished-blueprint-try-again-button" onClick={tryAgain}>
            Try Again
          </button>
          <button className="btn finished-blueprint-go-home-button" onClick={goHome}>
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompletedSpeedImplementation;
