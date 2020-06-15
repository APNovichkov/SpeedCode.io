import React from "react";

const MainWrapper = (props) => {
  return (
    <div className="container main-wrapper">
      <div className="text-center">{props.children}</div>
    </div>
  );
};

export default MainWrapper;
