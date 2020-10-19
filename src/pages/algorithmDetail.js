import React from "react";

// Import components
import Stars from "./../components/stars";

const AlgorithmDetail = (props) => {
  let name = "Bubble Sort";
  let difficulty = 2;
  let attempts = 1;
  let description = "Iterative Sorting Algorithm";
  let bigO = "nlogn";

  return (
    <div className="algo-detail-wrapper">
      <div className="algo-detail-header-wrapper">
        <div className="algo-detail-title-row-wrapper">
          <div className="d-flex justify-content-left">
            <div className="algo-detail-title-wrapper">
              <h2 className="algo-detail-title">Bubble Sort</h2>
            </div>
            <div className="algo-detail-difficulty-wrapper">
              <Stars numStars={difficulty}></Stars>
            </div>
          </div>
        </div>
        <div className="algo-detail-attributes-row-wrapper">
          <div className="d-flex justify-content-left">
            <div className="algo-detail-big-o-wrapper">
              <div className="algo-detail-big-o">O(nlogn)</div>
            </div>
            <div className="algo-detail-category-wrapper">
              <div className="algo-detail-category">Sorting</div>
            </div>
          </div>
        </div>
        <div className="algo-detail-description-row-wrapper">
          <div className="algo-detail-description-wrapper">
            <p className="algo-detail-description">
              Bubble Sort is an Iterative Sorting Algorithm. It has best case scenario of nLogN time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlgorithmDetail;
