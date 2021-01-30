import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Import router
import { HashRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

// Import components
import Footer from "./components/footer";

// Import Provider
import {UserProvider} from "./context/userProvider";

// Import pages
import AlgorithmsPage from "./pages/algorithms";
import AlgorithmDetail from "./pages/algorithmDetail";
import AlgorithmDetailSpeed from "./pages/algorithmDetailSpeed";
import DataStructuresPage from "./pages/dataStructures";
import Landing from "./pages/landing";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import Statistics from "./pages/statistics";

function App() {
  // const [userObjectFromLogin, setUserObjectFromLogin] = useState({});
  
  return (
    <UserProvider>
      <div>
        <Router>
          <div className="body-wrapper">
            <Switch>
              <Route path="/" exact component={Landing}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/signup" component={SignUp}></Route>
              <Route path="/algorithms" exact component={AlgorithmsPage}></Route>
              <Route path="/algorithms/:name/statistics" component={Statistics}></Route>
              <Route path="/algorithms/speed/:name" component={AlgorithmDetailSpeed}></Route>
              <Route path="/datastructures" exact component={DataStructuresPage}></Route>
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
