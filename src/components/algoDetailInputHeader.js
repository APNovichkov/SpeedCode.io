import React from "react";

const AlgoDetailInputHeader = (props) => {
  return (
    <div className="algo-detail-input-header-wrapper">
      <div className="algo-detail-input-header">
        <div className="d-flex justify-content-between">
          <div className="algo-detail-options-wrapper">
            <div className="row algo-detail-options-row">
              <div className="col-md-9">
                <div className="algo-detail-language-type">
                  Python <span className="fas fa-angle-down"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlgoDetailInputHeader;
