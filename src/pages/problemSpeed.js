import React, { useEffect, useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import $ from "jquery";
import axios from "axios";
import { useCookies } from "react-cookie";

// Import components
import AlgoDetailInputHeader from "../components/algoDetailInputHeader";
import ObjectDetailHeader from "../components/objectDetailHeader";
import CompletedSpeedImplementation from "../components/completedSpeedImplementation";
import Navbar from "../components/navbar";
import LinksNavbar from "../components/linksNavbar";

// Import Utils
import { formatTime, formatTimeToSeconds, getNumWords } from "../utils/stringUtils";
import { getWordsPerMinute } from "../utils/statsUtils";
import { getSubmitProblemUrl } from "../utils/urlUtils";

// Import Context
import { UserContext } from "../context/userProvider";

const DEFAULT_LANGUAGE_CHOICE = "python";

// TMP
var globalCharArray = [];

const AlgorithmDetailSpeed = (props) => {
  // Get input data from link
  let {
    name,
    algoId,
    description,
    longDescription,
    timeComplexity,
    difficulty,
    attempts,
    groupClass,
    code,
  } = props.location.state.algorithmData;

  let { problemId, problemObject } = props.location.state;

  // This splits string into char array
  const [charArray, setCharArray] = useState([]);
  const [numWords, setNumWords] = useState(0);

  // Language choice
  const [languageChoice, setLanguageChoice] = useState(DEFAULT_LANGUAGE_CHOICE);
  const [isInit, setIsInit] = useState(false);

  // Typing over blueprint text stuff
  const [typedCode, setTypedCode] = useState("");
  const [currentLetter, setCurrentLetter] = useState("");
  const [untypedCode, setUntypedCode] = useState("");
  const [currentLetterIndex, setCurrentLetterIndex] = useState();
  const [toShowEnterSpan, setToShowEnterSpan] = useState(false);

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

  // Cookies and Context
  const [cookie] = useCookies("speedcode-cookiez");
  const [tokenCookie] = useCookies("speedcode-cookiez-token");
  const [userObject, setUserObject] = useContext(UserContext);

  const updateUserObject = () => {
    setUserObject(cookie["speedcode-cookiez"]);
  };

  useEffect(() => {
    updateUserObject();
  }, []);

  // UTIL FUNCTIONS
  const getNumSequentialTabs = (startIndex, charArray) => {
    let out = 0;
    let index = startIndex;

    // Find num tabs in sequential order starting at the start index
    while (charArray[index] == "\t") {
      out += 1;
      index += 1;
    }
    return out;
  };

  const resetEnvironment = () => {
    console.log("Resetting Environment");

    setTypedCode("");
    setCurrentLetter("");
    setUntypedCode("");
    setCurrentLetterIndex(-1);
    setMistakesMade(0);
    setMinutes();
    setSeconds();
    setHasStarted(false);
    setHasEnded(false);
    setToShowDialog(false);
    setToGoHome(false);
  };

  // Setting Char Array
  useEffect(() => {
    if (charArray.length > 0) {
      console.log("Char Array: ", charArray);
      setCurrentLetter(charArray[0]);
      setUntypedCode(charArray.slice(1, charArray.length));
    }
  }, [charArray]);

  // LOGIC FOR HANDLING TYPING OVER TEMPLATE
  function handleKeyPress(event) {
    event.preventDefault();
    const charPressed = event.key;

    // check if key matches value
    setCurrentLetterIndex((currentLetterIndex) => {
      let potentialFirstTabIndex = currentLetterIndex + 2;

      if (globalCharArray[potentialFirstTabIndex] == "\t") {
        let numTabs = getNumSequentialTabs(potentialFirstTabIndex, globalCharArray);
        const skippedCurrentLetterIndex = currentLetterIndex + 1 + numTabs;

        if (charPressed === globalCharArray[skippedCurrentLetterIndex]) {
          return skippedCurrentLetterIndex + 1;
        } else if (charPressed === "Enter" && globalCharArray[currentLetterIndex + 1] === "\n") {
          console.log("Enter pressed when checking for tabs!");
          return skippedCurrentLetterIndex;
        } else {
          $(".current-letter").removeClass("correct-letter")
          $(".current-letter").addClass("wrong-letter");

          setMistakesMade((mistakesMade) => {
            return mistakesMade + 1;
          });

          return skippedCurrentLetterIndex;
        }
      } else {
        if (charPressed === globalCharArray[currentLetterIndex + 1]) {
          return currentLetterIndex + 1;
        } else if (charPressed === "Enter" && globalCharArray[currentLetterIndex + 1] === "\n") {
          console.log("Enter pressed and next char was \n");
          return currentLetterIndex + 1;
        } else {
          setMistakesMade((mistakesMade) => {
            return mistakesMade + 1;
          });

          $(".current-letter").removeClass("correct-letter")
          $(".current-letter").addClass("wrong-letter");

          return currentLetterIndex;
        }
      }
    });
  }

  function handleLanguageChange() {
    resetEnvironment();

    if (code[languageChoice]) {
      console.log("Language Choice: ", languageChoice);
      console.log("Code: ", code);

      const localCharArray = code[languageChoice].split("");
      globalCharArray = localCharArray;

      setCharArray(localCharArray);
      setNumWords(code[languageChoice].split(" ").length);

      $(".current-letter").addClass("idle-letter");
    }
  }

  useEffect(() => {
    // Handle key press
    if (!isInit) {
      window.addEventListener("keypress", handleKeyPress);
      setIsInit(true);
    }
  }, []);

  useEffect(() => {
    // This gets called every time languageChoice changes
    handleLanguageChange();
  }, [languageChoice]);

  useEffect(() => {
    console.log("Mistakes made is updated to: ", mistakesMade);
  }, [mistakesMade]);

  // Update Visual Typing when index changed
  useEffect(() => {
    console.log(`Index was updated to: ${currentLetterIndex}`);

    // Check if index is set to 0, if so, then begin time
    if (currentLetterIndex == 0) {
      setHasStarted(true);
    }

    if (currentLetterIndex == charArray.length - 1 && charArray.length != 0) {
      console.log("FINISHED IMPLEMENTATIONS");
      setHasEnded(true);
      setToShowDialog(true);

      const formBody = {
        problemId: algoId,
        userObject: userObject,
        statsObject: {
          language: "python",
          mistakesMade: mistakesMade,
          timeSpent: formatTimeToSeconds(minutes, seconds),
          wordsPerMinute: getWordsPerMinute(minutes, seconds, numWords),
        },
      };

      axios
        .post(getSubmitProblemUrl(), formBody, {
          headers: { Authorization: `${tokenCookie["speedcode-cookiez-token"]}` },
        })
        .then((res) => {
          console.log("Got response from algo submit: ", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // If next char is an enter, we need to set flag
    if (charArray[currentLetterIndex + 1] == "\n") {
      console.log("Next char is an enter");
      setToShowEnterSpan(true);
    } else {
      setToShowEnterSpan(false);
    }


    // console.log("Next Char: ", charArray[currentLetterIndex+1]);

    if (currentLetterIndex != -1) {
      $(".current-letter").removeClass("idle-letter");
      $(".current-letter").removeClass("wrong-letter");
      $(".current-letter").addClass("correct-letter");
    }

    setTypedCode(charArray.slice(0, currentLetterIndex + 1).join(""));
    setCurrentLetter(charArray[currentLetterIndex + 1]);
    setUntypedCode(charArray.slice(currentLetterIndex + 2, charArray.length).join(""));

    
  }, [currentLetterIndex]);

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
    setMistakesMade(0);
    setCurrentLetter("");
    setCurrentLetterIndex(-1);
    setTypedCode("");
    setUntypedCode("");
  };

  return (
    <div
      onClick={() => {
        setToShowDialog(false);
      }}
    >
      <Navbar />
      <LinksNavbar />
      <div className="algo-detail-wrapper">
        <ObjectDetailHeader
          name={name}
          attempts={attempts}
          description={description}
          difficulty={difficulty}
          bigO={timeComplexity}
          category={groupClass}
          longDescription={longDescription}
        />
        <div className="algo-detail-input-wrapper">
          <div className="algo-detail-input">
            <AlgoDetailInputHeader
              hasStarted={hasStarted}
              hasEnded={hasEnded}
              setMinutesParent={setMinutes}
              setSecondsParent={setSeconds}
              languages={Object.keys(code)}
              defaultLanguage={DEFAULT_LANGUAGE_CHOICE}
              setLanguageToShow={setLanguageChoice}
            />
            <div>
              <div className="algo-detail-input-text-wrapper">
                <span className="typed-code">{typedCode}</span>
                {toShowEnterSpan ? (
                  <span id="current-letter" className="enter-span">
                    <span className="fas fa-level-down-alt rotate-span"></span>{currentLetter}
                  </span>
                ) : (
                  <span id="current-letter" className="current-letter correct-letter">
                    {currentLetter}
                  </span>
                )}

                <span className="untyped-code">{untypedCode}</span>
              </div>
            </div>
          </div>
        </div>

        {hasEnded && toShowDialog && (
          <div className="finished-blueprint-iframe-wrapper">
            <CompletedSpeedImplementation
              problemName={name}
              timeTaken={formatTime(minutes, seconds)}
              wordsPerMinute={getWordsPerMinute(minutes, seconds, numWords)}
              mistakesMade={mistakesMade / 2}
              goHome={goHome}
              tryAgain={tryAgain}
              problemId={problemId}
              problemObject={problemObject}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AlgorithmDetailSpeed;
