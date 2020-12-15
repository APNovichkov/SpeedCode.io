import React from "react";

// Import Components
import Stars from "./stars";

const ObjectDetailHeader = (props) => {
  let { name, attempts, difficulty, bigO, category, longDescription } = props;

  return (
    <div className="algo-detail-header-wrapper">
      <div className="algo-detail-title-row-wrapper">
        <div className="d-flex justify-content-left">
          <div className="algo-detail-title-wrapper">
            <h2 className="algo-detail-title">{name}</h2>
          </div>
          {/* <div className="algo-detail-difficulty-wrapper">
            <Stars numStars={difficulty}></Stars>
          </div> */}
        </div>
      </div>

      <div className="algo-detail-description-row-wrapper">
        <div className="algo-detail-description-wrapper">
          <p className="algo-detail-description">{longDescription}</p>
        </div>
      </div>
      <div className="algo-detail-attributes-row-wrapper">
        <div className="d-flex justify-content-left">
          <div className="algo-detail-badge-wrapper">
            <div className="algo-detail-difficuly algo-badge-card">
              <Stars numStars={difficulty}></Stars>
            </div>
          </div>
          <div className="algo-detail-badge-wrapper">
            <div className="algo-detail-attempts algo-badge-card">{attempts} attempts</div>
          </div>
          <div className="algo-detail-badge-wrapper">
            <div className="algo-detail-big-o algo-badge-card">{bigO}</div>
          </div>
          <div className="algo-detail-badge-wrapper">
            <div className="algo-detail-category algo-badge-card">{category}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjectDetailHeader;
