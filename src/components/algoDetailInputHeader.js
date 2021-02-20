import React, { useState, useEffect } from "react";
import { InputGroup } from "react-bootstrap";

// Import Components
import Stopwatch from "./stopwatch";

const AlgoDetailInputHeader = (props) => {
  let { hasStarted, hasEnded, setMinutesParent, setSecondsParent, languages, defaultLanguage, setLanguageToShow } = props;

  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);

  useEffect(() => {
    if(selectedLanguage){
      setLanguageToShow(selectedLanguage.trim());
    }
  }, [selectedLanguage])

  const setMinutes = (minutes) => {
    setMinutesParent(minutes);
  };

  const setSeconds = (seconds) => {
    setSecondsParent(seconds);
  };
  
  const t1 = () => {};
  const t2 = () => {};

  return (
    <div className="algo-detail-input-header-wrapper">
      <div className="algo-detail-input-header">
        <div className="d-flex justify-content-between">
          <div className="d-flex justify-content-left">
            <div className="algo-detail-language-type">
              <select 
              class="form-control"
              value={selectedLanguage}
              onChange={event => setSelectedLanguage(event.target.value)}>
                {languages.map(language => (
                  <option>{language}</option>
                ))}
              </select>
              {/* Python <span className="fas fa-angle-down"></span> */}
            </div>
            {!hasStarted && (
              <div className="algo-detail-start-typing-message">
              Start typing to start timer!
            </div>
            )}
            
          </div>

          {hasStarted && (
            <Stopwatch hasEnded={hasEnded} setMinutes={setMinutesParent} setSeconds={setSecondsParent}></Stopwatch>
          )}

          
        </div>
      </div>
    </div>
  );
};

export default React.memo(AlgoDetailInputHeader);
