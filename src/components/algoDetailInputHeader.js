import React, {useState, useEffect} from "react";

// Import Components
import Stopwatch from "./stopwatch";

const AlgoDetailInputHeader = (props) => {
  let { hasStarted, hasEnded, setMinutesParent, setSecondsParent } = props;

  // const [minutes, setMinutes] = useState(0);
  // const [seconds, setSeconds] = useState(0);

  const setMinutes = (minutes) => {
    setMinutesParent(minutes);
  } 

  const setSeconds = (seconds) => {
    setSecondsParent(seconds);
  }
  // const getMinutes = () => {
  //   return minutes;
  // };

  // const getSeconds = () => {
  //   return seconds;
  // };

  const t1 = () => {

  }

  const t2 = () => {

  }

  // let hasStarted=true;

  console.log("Algo Header Rerender")

  return (
    <div className="algo-detail-input-header-wrapper">
      <div className="algo-detail-input-header">
        <div className="d-flex justify-content-between">
          <div className="algo-detail-language-type">
            Python <span className="fas fa-angle-down"></span>
          </div>
          {hasStarted && <Stopwatch hasEnded={hasEnded} setMinutes={setMinutesParent} setSeconds={setSecondsParent}></Stopwatch>}

          {/* {seconds} */}
        </div>
      </div>
    </div>
  );
};

export default React.memo(AlgoDetailInputHeader);
