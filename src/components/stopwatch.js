import React, { useState } from "react";
import ReactStopwatch from "react-stopwatch";

// Import Utils
import { formatTime } from "./../utils/stringUtils";

const Stopwatch = (props) => {
  let { setMinutes, setSeconds, hasEnded } = props;

  let limit = "00:30:00";

  if (hasEnded) {
    limit = "00:00:00";
  }

  const [endTime, setEndTime] = useState("");

  return (
    <div>
      {!hasEnded && (
        <ReactStopwatch
          seconds={0}
          minutes={0}
          hours={0}
          limit={limit}
          onChange={({ hours, minutes, seconds }) => {
            if (hasEnded == false) {
              setMinutes(minutes);
              setSeconds(seconds);
            }
          }}
          onCallback={() => console.log("Finish")}
          render={({ formatted, hours, minutes, seconds }) => {
            return (
              <span>
                <span className="far fa-clock"></span>
                {` ${formatTime(minutes, seconds)}`}
              </span>
            );
          }}
        />
      )}
    </div>
  );
};

export default React.memo(Stopwatch);
// export default Stopwatch;
