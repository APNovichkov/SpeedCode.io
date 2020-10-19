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

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <LinksNavbar />
        <div>
          <Link to="/algorithms"></Link>
        </div>
        <Switch>
          <Route path="/algorithms">
            <AlgorithmsPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
