import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

// Import components
import Stars from "./stars";

// Import utils
import { getProblemStatisticsUrl } from "./../utils/urlUtils";

// Import Context and Cookies
import { UserContext } from "./../context/userProvider";

const OverviewCard = (props) => {
  let { name, algoId, urlName, description, longDescription, timeComplexity, difficulty, groupClass, code } = props;

  const [userObject] = useContext(UserContext);
  const [attempts, setAttempts] = useState("");

  const [tokenCookie] = useCookies("speedcode-cookiez-token");

  useEffect(() => {
    axios
      .get(getProblemStatisticsUrl(algoId, userObject["_id"]), {
        headers: { Authorization: `${tokenCookie["speedcode-cookiez-token"]}` },
      })
      .then((res) => {
        if (res.data != null) {
          setAttempts(res.data.attempts);
        } else {
          setAttempts(0);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
              from: "overviewCard",
              algorithmData: {
                name: name,
                algoId: algoId,
                description: description,
                longDescription: longDescription,
                timeComplexity: timeComplexity,
                difficulty: difficulty,
                attempts: attempts,
                groupClass: groupClass,
                code: code,
              },
              problemId: algoId,
              problemObject: {
                name: name,
                id: algoId,
                attempts: attempts,
                difficulty: difficulty,
              },
            },
          }}
        >
          <button className="practice-button">Practice</button>
        </Link>
        <Link
          className="overview-card-statistics-link"
          to={{
            pathname: `/algorithms/${name}/statistics`,
            state: {
              problemId: algoId,
              problemObject: {
                name: name,
                id: algoId,
                attempts: attempts,
                difficulty: difficulty,
              },
            },
          }}
        >
          <span className="overview-card-statistics">
            <span className="fas fa-wave-square"></span> <span className="">See Statistics</span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default OverviewCard;
