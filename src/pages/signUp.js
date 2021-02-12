import React, { useState } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

// Import Components
import LandingNavbar from "./../components/landingNavbar";
import { getSignUpUrl } from "../utils/urlUtils";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isSignupSuccessfull, setIsSignupSuccessful] = useState(false);
  const [isUsernameTaken, setIsUsernameTaken] = useState(false);

  const handleSignUp = (event) => {
    event.preventDefault();

    const formBody = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: password,
    };

    console.log("Signing up with form: ", formBody);

    axios
      .post(getSignUpUrl(), formBody)
      .then((res) => {
        console.log("Got Response: ", res.data);

        if (res.data.isUsernameTaken) {
          setIsUsernameTaken(true);
        } else {
          setIsSignupSuccessful(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (isSignupSuccessfull) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <div className="signup-wrapper text-center">
        <LandingNavbar isLoginOrSignUp={true}></LandingNavbar>
        <div className="d-flex justify-content-center">
          <div className="signup-form-wrapper">
            <div className="login-header">Sign Up</div>
            <form onSubmit={handleSignUp}>
              <div className="login-input-wrapper text-left">
                <label for="username" className="signup-form-label">
                  Username*
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  id="username"
                  name="username"
                  class="form-control login-input"
                  placeholder="Username"
                ></input>
                {isUsernameTaken && <div className="signup-error-wrapper">Username is taken...</div>}
              </div>
              <div className="login-input-wrapper text-left">
                <label for="firstName" className="signup-form-label">
                  First Name*
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  id="firstName"
                  name="firstName"
                  class="form-control login-input"
                ></input>
              </div>
              <div className="login-input-wrapper text-left">
                <label for="lastName" className="signup-form-label">
                  Last Name*
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  id="lastName"
                  name="lastName"
                  class="form-control login-input"
                ></input>
              </div>
              <div className="login-input-wrapper text-left">
                <label for="firstName" className="signup-form-label">
                  Password*
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  id="password"
                  name="password"
                  class="form-control login-input"
                  placeholder="Password"
                ></input>
              </div>
              <div className="login-button-wrapper">
                <div className="d-flex justify-content-center">
                  <button type="submit" className="login-button btn">
                    Sign Up
                  </button>
                  <div className="login-sign-up-wrapper">
                    Have an account? <Link to="/login">Log In</Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
