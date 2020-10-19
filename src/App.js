import React from "react";
import logo from "./logo.svg";
import "./App.css";

// Import router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Import components
import Navbar from "./components/navbar";
import LinksNavbar from "./components/linksNavbar";

// Import pages
import AlgorithmsPage from "./pages/algorithms";
import AlgorithmDetail from "./pages/algorithmDetail";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <LinksNavbar />
        {/* <div>
          <Link to="/algorithms"></Link>
        </div> */}
        <Switch>
          <Route path="/algorithms" exact component={AlgorithmsPage}></Route>
          <Route path="/algorithms/bubblesort" component={AlgorithmDetail}></Route>
          <Route path="/algorithms/mergesort" component={AlgorithmDetail}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
