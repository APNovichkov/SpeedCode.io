import React, { useEffect, useState } from "react";
import AceEditor from "react-ace";
import Timer from "react-compound-timer";
import { Modal, Button } from "react-bootstrap";
import $ from 'jquery'

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

const AlgorithmDetailSpeed = (props) => {
  // This splits string into char array
  const [charArray, setCharArray] = useState([]);

  // Typing over blueprint text stuff
  const [typedCode, setTypedCode] = useState("");
  const [currentLetter, setCurrentLetter] = useState("");
  const [untypedCode, setUntypedCode] = useState("");
  const [currentLetterIndex, setCurrentLetterIndex] = useState(-1);

  // Page navigation stuff
  const [hasStarted, setHasStarted] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);


  // LOGIC FOR HANDLING TYPING OVER TEMPLATE
  // set default
  useEffect(() => {
    const localCharArray = bubbleSortCode.split("");
    setCharArray(localCharArray);

    console.log(localCharArray);

    // Handle key press
    document.addEventListener("keypress", function (event) {
      const charPressed = event.key;

      // check if key matches value
      setCurrentLetterIndex((currentLetterIndex) => {
        if (localCharArray[currentLetterIndex + 2] == "\t") {
          console.log("Next char is tab, so I am skipping it");
          console.log("Current letter index: ", currentLetterIndex+1);
          const skippedCurrentLetterIndex = currentLetterIndex + 2;

          if (charPressed === localCharArray[skippedCurrentLetterIndex]) {
            return skippedCurrentLetterIndex + 1;
          } else if (charPressed == "Enter" && localCharArray[skippedCurrentLetterIndex + 1] == "\n") {
            return skippedCurrentLetterIndex + 1;
          } else {
            $(".current-letter").addClass("wrong-letter");
            return skippedCurrentLetterIndex;
          }
        } else {
          if (charPressed === localCharArray[currentLetterIndex + 1]) {
            return currentLetterIndex + 1;
          } else if (charPressed == "Enter" && localCharArray[currentLetterIndex + 1] == "\n") {
            return currentLetterIndex + 1;
          } else {
            $(".current-letter").addClass("wrong-letter");
            return currentLetterIndex;
          }
        }
      });
      // setKeyPressed(pressedChar);
    });
  }, []);

  useEffect(() => {
    console.log("Char Array: ", charArray);

    setCurrentLetter(charArray[0]);
    setUntypedCode(charArray.slice(1, charArray.length));
    
  }, [charArray]);

  

  // TODO - There is an issue with the same letter following each other

  useEffect(() => {
    console.log(`Index was updated to: ${currentLetterIndex}`);

    if(currentLetterIndex == charArray.length-1){
      
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
            <div>
              <div className="algo-detail-input-text-wrapper">
                <span className="typed-code">{typedCode}</span>
                <span id="current-letter" className="current-letter idle-letter">
                  {currentLetter}
                </span>
                <span className="untyped-code">{untypedCode}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlgorithmDetailSpeed;
