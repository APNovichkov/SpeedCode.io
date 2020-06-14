import React from "react";

const TestForm = (props) => {
  return (
    <div className="row">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <div className="test-form">
          <form action="test">
            <div className="form-group">
              <label for="name">Full Name</label>
              <input id="name" name="name" type="text"></input>
            </div>
          </form>
        </div>
      </div>
      <div className="col-md-1"></div>
    </div>
  );
};

export default TestForm;
