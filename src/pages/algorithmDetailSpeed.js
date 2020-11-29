import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import $ from "jquery";

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

// Import components
import AlgoDetailInputHeader from "./../components/algoDetailInputHeader";
import ObjectDetailHeader from "./../components/objectDetailHeader";
import CompletedSpeedImplementation from "../components/completedSpeedImplementation";

// Import Utils
import { formatTime } from "./../utils/stringUtils";
import {getWordsPerMinute} from "./../utils/statsUtils";

// Fake Data
const name = "Bubble Sort";
const difficulty = 2;
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

// const bubbleSortCode = `hello
// \tworld`;

let minutes = 0;
let seconds = 0;

const AlgorithmDetailSpeed = (props) => {
  // This splits string into char array
  const [charArray, setCharArray] = useState([]);
  const [numWords, setNumWords] = useState(0);

  // Typing over blueprint text stuff
  const [typedCode, setTypedCode] = useState("");
  const [currentLetter, setCurrentLetter] = useState("");
  const [untypedCode, setUntypedCode] = useState("");
  const [currentLetterIndex, setCurrentLetterIndex] = useState(-1);

  // Stats stuff
  const [mistakesMade, setMistakesMade] = useState(0);

  // Timer stuff
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  // Page navigation stuff
  const [hasStarted, setHasStarted] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);
  const [toShowDialog, setToShowDialog] = useState(false);
  const [toGoHome, setToGoHome] = useState(false);

  // LOGIC FOR HANDLING TYPING OVER TEMPLATE
  useEffect(() => {
    const localCharArray = bubbleSortCode.split("");
    setCharArray(localCharArray);
    setNumWords(bubbleSortCode.split(" ").length);

    console.log(`Number of words: ${bubbleSortCode.split(" ").length}`)

    console.log(localCharArray);

    $(".current-letter").addClass("idle-letter");

    // Handle key press
    document.addEventListener("keypress", function (event) {
      const charPressed = event.key;

      console.log(`Key was pressed: ${event.key}`)

      // check if key matches value
      setCurrentLetterIndex((currentLetterIndex) => {
        if (localCharArray[currentLetterIndex + 2] == "\t") {
          console.log("Next char is tab, so I am skipping it");
          console.log("Current letter index: ", currentLetterIndex + 1);
          const skippedCurrentLetterIndex = currentLetterIndex + 2;

          if (charPressed === localCharArray[skippedCurrentLetterIndex]) {
            return skippedCurrentLetterIndex + 1;
          } else if (charPressed == "Enter" && localCharArray[skippedCurrentLetterIndex + 1] == "\n") {
            return skippedCurrentLetterIndex + 1;
          } else {
            $(".current-letter").addClass("wrong-letter");

            console.log('SETTING MISTAKES MADE TO: ', mistakesMade+1)
            setMistakesMade(mistakesMade => {return (mistakesMade + 1)})

            return skippedCurrentLetterIndex;
          }
        } else {
          if (charPressed === localCharArray[currentLetterIndex + 1]) {
            return currentLetterIndex + 1;
          } else if (charPressed == "Enter" && localCharArray[currentLetterIndex + 1] == "\n") {
            return currentLetterIndex + 1;
          } else {
            // TODO For some reason this is getting called twice
            console.log('Setting mistakes made to: ', mistakesMade+1)
            setMistakesMade(mistakesMade => {return (mistakesMade + 1)})

            $(".current-letter").addClass("wrong-letter");

            return currentLetterIndex;
          }
        }
      });
      // setKeyPressed(pressedChar);
    });
  }, []);


  useEffect(() => {
    console.log("Mistakes made is updated to: ", mistakesMade)
  }, [mistakesMade])

  useEffect(() => {
    console.log("Char Array: ", charArray);
    setCurrentLetter(charArray[0]);
    setUntypedCode(charArray.slice(1, charArray.length));
  }, [charArray]);

  

  useEffect(() => {
    console.log(`Index was updated to: ${currentLetterIndex}`);

    // Check if index is set to 0, if so, then begin time
    if (currentLetterIndex == 0){
      setHasStarted(true);
    }

    if (currentLetterIndex == charArray.length - 1 && charArray.length != 0) {
      console.log("FINISHED IMPLEMENTATIONS");
      setHasEnded(true);
      setToShowDialog(true);
    }

    $(".current-letter").removeClass("idle-letter");
    $(".current-letter").removeClass("wrong-letter");
    $(".current-letter").addClass("correct-letter");

    setTypedCode(charArray.slice(0, currentLetterIndex + 1).join(""));
    setCurrentLetter(charArray[currentLetterIndex + 1]);
    setUntypedCode(charArray.slice(currentLetterIndex + 2, charArray.length).join(""));
  }, [currentLetterIndex]);

  // Page navigation stuff
  const handleStartClick = (event) => {
    event.preventDefault();

    setHasStarted(true);
  };

  // Helper functions
  const getTypedCodeEndIndex = (index) => {
    if (index != 0) {
      return index - 1;
    } else {
      return 0;
    }
  };

  const getUntypedCodeStartIndex = (index) => {
    return index + 1;
  };

  // Handle Go Home Functionality
  const goHome = () => {
    console.log("Going home");

    setToGoHome(true);
  };
  if (toGoHome) {
    return <Redirect to="/algorithms"></Redirect>;
  }


  // Handle Try Again Functionality
  const tryAgain = () => {
    console.log("Try again");

    setHasStarted(false);
    setHasEnded(false);
    setToShowDialog(false);
    setCurrentLetter("");
    setCurrentLetterIndex(-1);
    setTypedCode("");
    setUntypedCode("");
  };

  const handleCloseDialogClick = (event) => {
    event.preventDefault();
    setToShowDialog(false);
  };

  return (
    <div
      onClick={() => {
        console.log("Clicked on outside");
        setToShowDialog(false);
      }}
      className="algo-detail-wrapper"
    >
      <ObjectDetailHeader
        name={name}
        description={description}
        difficulty={difficulty}
        bigO={bigO}
        category={category}
        longDescription={longDescription}
      />
      <div className="algo-detail-input-wrapper">
        <div className="algo-detail-input">
          <AlgoDetailInputHeader
            hasStarted={hasStarted}
            hasEnded={hasEnded}
            setMinutesParent={setMinutes}
            setSecondsParent={setSeconds}
          />
          <div>
              <div className="algo-detail-input-text-wrapper">
                <span className="typed-code">{typedCode}</span>
                <span id="current-letter" className="current-letter idle-letter">
                  {currentLetter}
                </span>
                <span className="untyped-code">{untypedCode}</span>
              </div>
            </div>
          {/* {!hasStarted ? (
            <div className="start-button-wrapper" id="start-button">
              <button onClick={handleStartClick} className="start-button">
                Start
              </button>
            </div>
          ) : (
            
          )} */}
        </div>
      </div>

      {hasEnded && toShowDialog && (
        <div className="finished-blueprint-iframe-wrapper">
          <CompletedSpeedImplementation
            problemName={name}
            timeTaken={formatTime(minutes, seconds)}
            wordsPerMinute={getWordsPerMinute(minutes, seconds, numWords)}
            mistakesMade={mistakesMade/2}
            goHome={goHome}
            tryAgain={tryAgain}
          />
        </div>
      )}
    </div>
  );
};

export default AlgorithmDetailSpeed;
