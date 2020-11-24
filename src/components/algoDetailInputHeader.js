import React, {useState, useEffect} from "react";

// Import Components
import Stopwatch from "./stopwatch";

const AlgoDetailInputHeader = (props) => {

  // let { setMinutes, setSeconds } = props;

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getMinutes = () => {
    return minutes;
  }

  const getSeconds = () => {
    return seconds;
  }

  let hasStarted=true;

  return (
    <div className="algo-detail-input-header-wrapper">
      <div className="algo-detail-input-header">
        <div className="d-flex justify-content-between">
          <div className="algo-detail-language-type">
            Python <span className="fas fa-angle-down"></span>
          </div>
          {hasStarted && (
            <Stopwatch setMinutes={setMinutes} setSeconds={setSeconds}></Stopwatch>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default React.memo(AlgoDetailInputHeader);
