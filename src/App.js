import React from "react";
import logo from "./logo.svg";
import "./App.css";

import TestForm from "./components/testForm";
import MainWrapper from "./components/mainWrapper";

function App() {
  return (
    <MainWrapper>
      <TestForm />
    </MainWrapper>
  );
}

export default App;
