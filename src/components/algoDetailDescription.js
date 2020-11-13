import React from "react";

// Import components
import Stars from "./stars";

const AlgoDetailDescription = (props) => {
  let { name, difficulty, bigO, category, longDescription } = props;

  return (
    <div className="algo-detail-header-wrapper">
      <div className="algo-detail-title-row-wrapper">
        <div className="d-flex justify-content-left">
          <div className="algo-detail-title-wrapper">
            <h2 className="algo-detail-title">{name}</h2>
          </div>
          <div className="algo-detail-difficulty-wrapper">
            <Stars numStars={difficulty}></Stars>
          </div>
        </div>
      </div>
      <div className="algo-detail-attributes-row-wrapper">
        <div className="d-flex justify-content-left">
          <div className="algo-detail-big-o-wrapper">
            <div className="algo-detail-big-o">{bigO}</div>
          </div>
          <div className="algo-detail-category-wrapper">
            <div className="algo-detail-category">{category}</div>
          </div>
        </div>
      </div>
      <div className="algo-detail-description-row-wrapper">
        <div className="algo-detail-description-wrapper">
          <p className="algo-detail-description">{longDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default AlgoDetailDescription;
