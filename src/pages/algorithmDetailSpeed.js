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
  // TODO - update let's to const

  // This splits string into char array
  const [charArray, setCharArray] = useState([]);



  const [hasStarted, setHasStarted] = useState(false);
  const [typedCode, setTypedCode] = useState("");
  const [currentLetter, setCurrentLetter] = useState("");
  const [currentLetterIndex, setCurrentLetterIndex] = useState("");
  const [untypedCode, setUntypedCode] = useState("");

  const [pressedKeyTrigger, setPressedKeyTrigger] = useState(true);
  const [keyPressed, setKeyPressed] = useState("");
  const [keyPressedLong, setKeyPressedLong] = useState("");

  // LOGIC FOR HANDLING TYPING OVER TEMPLATE
  // set default
  useEffect(() => {
    setCharArray(bubbleSortCode.split(""));

    // Handle key press
    document.addEventListener("keypress", function (event) {
      event.preventDefault();
      let pressedChar = String.fromCharCode(event.keyCode);
      console.log(`Key Pressed: ${pressedChar}`);

    //  Update index instead of key pressed, instead of key pressed

      setKeyPressedLong(event.key);
      setKeyPressed(pressedChar);

    //   handleKeyPress(pressedChar);
    });
  }, []);

  

  useEffect(() => {
    console.log("Char Array: ", charArray);

    setCurrentLetter(charArray[0]);
    setCurrentLetterIndex(0);
    setUntypedCode(charArray.slice(1, charArray.length));
  }, [charArray]);

  // TODO - There is an issue with the same letter following each other

  useEffect(() => {
    console.log(`Key Pressed from use effect: ${keyPressed}`);
    console.log(`Key Pressed LONG from use effect: ${keyPressedLong}`);

    // If the key pressed is the same
    if (keyPressed == currentLetter || (keyPressedLong == "Enter" && currentLetter == "\n")) {
      const newLetterIndex = currentLetterIndex + 1;
      setTypedCode(charArray.slice(0, newLetterIndex));
      // console.log(`New typed code: `)
      setCurrentLetter(charArray[currentLetterIndex + 1]);
      setUntypedCode(charArray.slice(newLetterIndex + 1, charArray.length));
      setCurrentLetterIndex(newLetterIndex);
      console.log(`New current letter: `, charArray[currentLetterIndex + 1]);
      if (charArray[currentLetterIndex + 1] == "\n") {
        console.log("Current letter is a new line");
      }
    }
  }, [keyPressed]);

  // THE CODE BELOW DOES NOT WORK
    // const handleKeyPress = (keyPressed, c) => {
    //   console.log(`Key Pressed from use effect: ${keyPressed}`);

    //   // If the key pressed is the same

    //   if (keyPressed == currentLetter) {
    //     const newLetterIndex = currentLetterIndex + 1;
    //     setTypedCode(charArray.slice(0, newLetterIndex));
    //     // console.log(`New typed code: `)
    //     setCurrentLetter(charArray[currentLetterIndex + 1]);
    //     setUntypedCode(charArray.slice(newLetterIndex + 1, charArray.length));
    //     setCurrentLetterIndex(newLetterIndex);
    //     console.log(`New current letter: `, charArray[currentLetterIndex + 1]);
    //     if (charArray[currentLetterIndex + 1] == "\n") {
    //       console.log("Current letter is a new line");
    //     }
    //   }    else    {
    //     console.log(`Key pressed: ${keyPressed} does not match current letter: ${currentLetter}`);
    //   }
    // };

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
            <div className="algo-detail-input-text-wrapper">
              <span className="typed-code">{typedCode}</span>
              <span className="current-letter">{currentLetter}</span>
              <span className="untyped-code">{untypedCode}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlgorithmDetailSpeed;
