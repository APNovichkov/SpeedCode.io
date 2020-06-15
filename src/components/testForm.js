import React from "react";

const TestForm = (props) => {
  return (
    <div className="row">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <div className="test-form">
          <form action="test">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <div className="form-group">
                  <label for="name">Full Name</label>
                  <input id="name" class="form-control" name="name" type="text"></input>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-warning">
                    Submit
                  </button>
                </div>
              </div>
              <div className="col-md-4"></div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-md-1"></div>
    </div>
  );
};

export default TestForm;
