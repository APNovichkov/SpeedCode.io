import React from "react";

const BasicSpinner = (props) => {
  let { spinnerClass } = props;

  return (
    <div className={`spinner-border ${spinnerClass}`} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default BasicSpinner;
