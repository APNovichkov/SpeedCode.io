import React, {useState, useEffect} from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios'

// Import components
import Stars from "./stars";

// Import utils
import { getAlgoStatisticsUrl } from "./../utils/urlUtils";
import { diff } from "react-ace";

// Declare constants

const OverviewCard = (props) => {
  let { name, algoId, urlName, description, longDescription, timeComplexity, difficulty, groupClass, code, userObject } = props;

  const [attempts, setAttempts] = useState("");
  const [statsObject, setStatsObjects] = useState({});

  useEffect(() => {
    axios.get(getAlgoStatisticsUrl(algoId, userObject['_id'])).then(res => {
      console.log("Got statistics for this algorithm", res.data)
      setAttempts(res.data.attempts);
      setStatsObjects(res.data)
    }).catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <div className={`overview-card ${groupClass.toLowerCase()}`}>
      <div className="overview-card-title">{name}</div>
      <div className="overview-card-description">{description}</div>

      <div>
        <Stars numStars={difficulty}></Stars>
        <span className="attempts">
          {attempts ? attempts : 0} {attempts == 1 ? "Attempt" : "Attempts"}
        </span>
      </div>
      <div className="overview-card-buttons-wrapper">
        <Link
          to={{
            pathname: `/algorithms/speed/${urlName}`,
            state: {
              from: "createMrnaForm",
              toShowNotification: true,
              algorithmData: {
                name: name,
                algoId: algoId,
                description: description,
                longDescription: longDescription,
                timeComplexity: timeComplexity,
                difficulty: difficulty,
                attempts: attempts,
                groupClass: groupClass,
                code: code
              },
              userObject: userObject
            },
          }}
        >
          <button className="practice-button">Practice</button>
        </Link>
        <Link className="overview-card-statistics-link" to={{
          pathname: `/algorithms/${name}/statistics`,
          state: {
            statsObject: statsObject,
            userObject: userObject,
            problemObject: {
              name: name,
              id: algoId,
              attempts: attempts,
              difficulty: difficulty
            }
          }
        }}><span className="overview-card-statistics">
            <span className="fas fa-wave-square"></span> {" "}
            <span className="">See Statistics</span>
          </span></Link>
      </div>
    </div>
  );
};

export default OverviewCard;
