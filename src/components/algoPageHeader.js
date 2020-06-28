import React from "react";

const AlgoPageHeader = (props) => {
  return (
    <div className="algo-page-header-wrapper container">
      <div className="row">
        <div className="col-md-4">
          <h2 className="algo-page-header-text">Choose an Algorithm</h2>
        </div>
        <div className="col-md-1 algo-page-category-link-wrapper">
          <p className="algo-page-category-link">Sorting</p>
        </div>
        <div className="col-md-1 algo-page-category-link-wrapper">
          <p className="algo-page-category-link">Graphs</p>
        </div>
        <div className="col-md-1 algo-page-category-link-wrapper">
          <p className="algo-page-category-link">Trees</p>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default AlgoPageHeader;
