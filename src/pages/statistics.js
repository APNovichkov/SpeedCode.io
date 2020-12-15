import React, { useEffect } from "react";
import LinksNavbar from "./../components/linksNavbar";
import Navbar from "./../components/navbar";
import Stars from "./../components/stars";

const Statistics = (props) => {
  let { statsObject, problemObject, userObject } = props.location.state;

  useEffect(() => {
    console.log(`Stats Object: `, statsObject);
    console.log("User Object:", userObject);
  }, []);

  return (
    <div>
      <Navbar userObject={userObject} />
      <LinksNavbar userObject={userObject} />
      <div className="statistics-page-wrapper">
        <div className="statistics-page-header-wrapper">
          <div className="statistics-page-header">{problemObject.name} Statistics</div>
        </div>
        <div className="statistics-page-subheader-wrapper">
          <div className="statistics-page-subheader">
            <div className="d-flex justify-content-left">
              <div className="algo-detail-badge-wrapper">
                <div className="algo-detail-difficuly algo-badge-card">
                  <Stars numStars={problemObject.difficulty}></Stars>
                </div>
              </div>
              <div className="algo-detail-badge-wrapper">
                <div className="algo-detail-attempts algo-badge-card">{problemObject.attempts} attempts</div>
              </div>
            </div>
          </div>
        </div>
        <div className="statistics-summary-wrapper d-flex justify-content-left">
          <div className="statistics-stat-card text-center">
            <div className="finished-blueprint-stat-card-title">Minimum Time Taken</div>
            <div className="finished-blueprint-stat-card-value">{"1:14"}</div>
          </div>
          <div className="statistics-stat-card text-center">
            <div className="finished-blueprint-stat-card-title">Average Time Spent</div>
            <div className="finished-blueprint-stat-card-value">{"2:23"}</div>
          </div>
          <div className="statistics-stat-card text-center">
            <div className="finished-blueprint-stat-card-title">Average Words Per Minute</div>
            <div className="finished-blueprint-stat-card-value">{"4"}</div>
          </div>
          <div className="statistics-stat-card text-center">
            <div className="finished-blueprint-stat-card-title">Average Mistakes Made</div>
            <div className="finished-blueprint-stat-card-value">{"10"}</div>
          </div>
        </div>

        <div className="statistics-graphs-wrapper">
          <div className="row">
            <div className="col-md-4">
              <div className="statistics-graph-wrapper">
                <div className="statistics-graph-header-wrapper">
                  <div className="statistics-graph-header">Time Spent</div>
                </div>
                <div className="statistics-graph"></div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="statistics-graph-wrapper">
                <div className="statistics-graph-header-wrapper">
                  <div className="statistics-graph-header">Mistakes Made</div>
                </div>
                <div className="statistics-graph"></div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="statistics-graph-wrapper">
                <div className="statistics-graph-header-wrapper">
                  <div className="statistics-graph-header">Words per Minute</div>
                </div>
                <div className="statistics-graph"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
