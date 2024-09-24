import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import React, { useState } from "react";
import Updates from "./components/Updates";
import Statistics from "./components/Statistics";
import Departments from "./components/Departments";

function App() {
  const [currentTab, setCurrentTab] = useState("home");

  return (
    <div className="App">
      <NavBar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <Updates />

      {/* Place the new sections here */}
      <Statistics />
      <Departments />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
