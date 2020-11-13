import React, { useEffect, useState } from "react";
import AceEditor from "react-ace";
import Timer from "react-compound-timer";
import { Modal, Button } from "react-bootstrap";

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

// Import components
import Stars from "./../components/stars";
import AlgoDetailInputHeader from "./../components/algoDetailInputHeader";
import AlgoDetailDescription from "./../components/algoDetailDescription";

// Fake Data
const name = "Bubble Sort";
const difficulty = 2;
const attempts = 1;
const description = "Iterative Sorting Algorithm";
const longDescription = "Bubble Sort is an Iterative Sorting Algorithm. It has best case scenario of N^2 time.";
const bigO = "n^2";
const category = "Sorting";

// Default code for bubble sort
const bubbleSortCode = `def bubble_sort(ls):
# Your Implementation goes here

if __name__ == '__main__':
\tls = [4,3,2,1]
\tbubble_sort(ls)`;

const AlgorithmDetailSpeed = (props) => {
  // TODO - set instead of update
  // TODO - update let's to const

  let [hasStarted, updateHasStarted] = useState(false);
  let [hasFinished, updateHasFinished] = useState(false);
  let [showSubmissionModal, updateShowSubmissionModal] = useState(false);
  let [timeForSubmission, updateTimeForSubmission] = useState(0);

  const handleStartClick = (event) => {
    event.preventDefault();

    updateHasStarted(true);
    console.log("Starting Time");
  };

  const handleSubmitCodeClick = (event, stop, getTime) => {
    event.preventDefault();

    console.log("Finished time");

    const currentTime = getTime();

    console.log(`Current time: `, currentTime);

    updateTimeForSubmission(currentTime);

    stop();
    updateHasFinished(true);
    updateShowSubmissionModal(true);
  };

  const handleHideModalClick = (event) => {
    updateShowSubmissionModal(false);
  };

  return (
    <div className="algo-detail-wrapper">
      <AlgoDetailDescription
        name={name}
        description={description}
        difficulty={difficulty}
        bigO={bigO}
        category={category}
        longDescription={longDescription}
      />
      <div className="algo-detail-input-wrapper">
        <div className="algo-detail-input">
          <AlgoDetailInputHeader />
          {!hasStarted ? (
            <div className="start-button-wrapper" id="start-button">
              <button onClick={handleStartClick} className="start-button">
                Start
              </button>
            </div>
          ) : (
            <div className="algo-detail-input-text-wrapper"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlgorithmDetailSpeed;
