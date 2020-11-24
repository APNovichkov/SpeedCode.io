import React from "react";
import ReactStopwatch from "react-stopwatch";

// Import Utils
import { formatTime } from "./../utils/stringUtils";

const Stopwatch = (props) => {
  let { setMinutes, setSeconds } = props;

  return (
    <ReactStopwatch
      seconds={0}
      minutes={0}
      hours={0}
      limit="00:00:10"
      onChange={({ hours, minutes, seconds }) => {
        setMinutes(minutes);
        setSeconds(seconds);
      }}
      onCallback={() => console.log("Finish")}
      render={({ formatted, hours, minutes, seconds }) => {
        return (
          <span>
            <span className="far fa-clock"></span> {formatTime(minutes, seconds)}
          </span>
        );
      }}
    />
  );
};

export default React.memo(Stopwatch);
// export default Stopwatch;
