import React, { useState } from "react";
import axios from "axios";
import bcrypt from "bcryptjs";
import { Redirect, Link } from "react-router-dom";

// Import Components
import LandingNavbar from "./../components/landingNavbar";

// Import Utils
import { getLoginUrl } from "./../utils/urlUtils";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginSuccessfull, setIsLoginSuccessful] = useState(false);
  const [isLoginError, setIsLoginError] = useState(false);

  const [userObject, setUserObject] = useState({});

  const handleLogin = (event) => {
    event.preventDefault();

    console.log(`Logging in with username: ${username} and password: ${password}`);

    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt);

    console.log(`Logging in with username: ${username} and hashed password: ${passwordHash}`);

    const formBody = {
      username: username,
      password: password,
    };

    axios
      .post(getLoginUrl(), formBody)
      .then((res) => {
        console.log("Got Response from login: ", res.data);
        setUserObject(res.data.user_object);
        if (res.data.login_successfull) {
          setIsLoginSuccessful(true);
        } else {
          setIsLoginError(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (isLoginSuccessfull) {
    console.log("Returning Redirect");
    console.log("User object from login: ", userObject);

    return (
      <Redirect
        to={{
          pathname: "/algorithms",
          state: {
            from: "login",
            userObject: userObject
          },
        }}
      />
    );
  }

  return (
    <div>
      <LandingNavbar isLoginOrSignUp={true}></LandingNavbar>

      <div className="login-wrapper text-center">
        <div className="login-header">Log In</div>
        {isLoginError && <div className="login-error-wrapper">Invalid Credentials</div>}

        <div className="d-flex justify-content-center">
          <div className="login-form-wrapper">
            <form onSubmit={handleLogin}>
              <div className="login-input-wrapper">
                <input
                  type="text"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  id="username"
                  name="username"
                  class="form-control login-input"
                  placeholder="Username"
                ></input>
              </div>
              <div className="login-input-wrapper">
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
                    Login
                  </button>
                  <div className="login-sign-up-wrapper">
                    Don't have an account? <Link to="/signup">Sign Up</Link>
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

export default Login;
