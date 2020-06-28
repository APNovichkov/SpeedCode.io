import React from "react";
import logo from "./logo.svg";
import "./App.css";

// Import components
import Navbar from "./components/navbar";
import TestForm from "./components/testForm";
import MainWrapper from "./components/mainWrapper";
import LinksNavbar from "./components/linksNavbar";
import AlgoPageHeader from "./components/algoPageHeader";

function App() {
  return (
    <div>
      <Navbar />
      <LinksNavbar />
      <AlgoPageHeader />
      <MainWrapper>
        <TestForm />
      </MainWrapper>
    </div>
  );
}

export default App;
