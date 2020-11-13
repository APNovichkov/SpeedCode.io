import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Import router
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

// Import components
import Navbar from "./components/navbar";
import LinksNavbar from "./components/linksNavbar";

// Import pages
import AlgorithmsPage from "./pages/algorithms";
import AlgorithmDetail from "./pages/algorithmDetail";
import DataStructuresPage from "./pages/dataStructures";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <LinksNavbar />
        {/* <div>
          <Link to="/algorithms"></Link>
        </div> */}
        <div className="body-wrapper">
          <Switch>
            <Route path="/" exact>
              <Redirect to="/algorithms"></Redirect>
            </Route>
            <Route path="/algorithms" exact component={AlgorithmsPage}></Route>
            <Route path="/algorithms/bubblesort" render={() => <AlgorithmDetail hi={"HI"} />}></Route>
            <Route path="/algorithms/mergesort" component={AlgorithmDetail}></Route>
            <Route path="/datastructures" exact component={DataStructuresPage}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
