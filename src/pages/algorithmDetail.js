import React, { useEffect, useState } from "react";
import AceEditor from "react-ace";
import Timer from "react-compound-timer";
import { Modal, Button } from "react-bootstrap";

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

// Import components
import Stars from "./../components/stars";
import ObjectDetailHeader from "../components/objectDetailHeader";
import Navbar from "./../components/navbar";
import LinksNavbar from "./../components/linksNavbar";

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

const AlgorithmDetail = (props) => {
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
    <div>
      <Navbar />
      <LinksNavbar />
      <div className="algo-detail-wrapper">
        <ObjectDetailHeader
          name={name}
          difficulty={difficulty}
          bigO={bigO}
          category={category}
          longDescription={longDescription}
        ></ObjectDetailHeader>
        <div className="algo-detail-input-wrapper">
          <div className="algo-detail-input">
            <div className="algo-detail-input-header-wrapper">
              <div className="algo-detail-input-header">
                <Timer startImmediately={true}>
                  {({ stop, getTime }) => (
                    <div className="d-flex justify-content-between">
                      <div className="algo-detail-options-wrapper">
                        <div className="row algo-detail-options-row">
                          <div className="col-md-9">
                            <div className="algo-detail-language-type">
                              Python <span className="fas fa-angle-down"></span>
                            </div>
                          </div>
                          <div className="col-md-3">
                            {hasStarted && (
                              <div className="algo-detail-done-button-wrapper">
                                <button
                                  onClick={(event) => handleSubmitCodeClick(event, stop, getTime)}
                                  className="algo-detail-submit-button"
                                >
                                  Submit
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="algo-detail-timer-wrapper">
                        {hasStarted && (
                          <div className="algo-detail-timer">
                            <Timer.Minutes />:<Timer.Seconds />
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </Timer>
              </div>
            </div>
            {!hasStarted ? (
              <div className="start-button-wrapper" id="start-button">
                <button onClick={handleStartClick} className="start-button">
                  Start
                </button>
              </div>
            ) : (
              <div className="algo-detail-input-text-wrapper">
                <div className="algo-detail-input-text">
                  <AceEditor
                    mode="python"
                    theme="github"
                    height="400px"
                    width="100%"
                    value={bubbleSortCode}
                    setOptions={{
                      enableBasicAutocompletion: true,
                      enableLiveAutocompletion: true,
                      enableSnippets: true,
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <Modal show={showSubmissionModal} onHide={handleHideModalClick}>
          <Modal.Header closeButton>
            <Modal.Title>Congratulations!</Modal.Title>
          </Modal.Header>
          <Modal.Body>You have successfully submitted your code in {timeForSubmission} milliseconds</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleHideModalClick}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default AlgorithmDetail;
