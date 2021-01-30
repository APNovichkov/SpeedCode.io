import React from "react";

const STATIC_TEXT = {
  algo: {
    header: "Choose an Algorithm",
    subHeader:
      "See your progress, and practice SpeedCode algorithms to improve how fast you can write code, and memorize implementations of basic algorithms. Happy Coding!",
  },
  ds: {
    header: "Choose a Data Structure",
    subHeader:
      "Data Structures are the backbone to any algorithm, and much of any codebase relies on different data structures to solve interesting and difficult problems. Practice and memorize the most popular Data Structures with Speedcode!",
  },
};

const ObjectPageHeader = (props) => {
  let { objectType } = props;

  return (
    <div className="algo-page-header-wrapper">
      <div className="row">
        <div className="col-md-5">
          <h2 className="algo-page-header-text">{STATIC_TEXT[objectType]["header"]}</h2>
        </div>
      </div>
      <div>
        <p className="algo-page-subheader">{STATIC_TEXT[objectType]["subHeader"]}</p>
      </div>
    </div>
  );
};

export default ObjectPageHeader;
