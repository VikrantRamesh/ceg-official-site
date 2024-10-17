import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Updates from "./components/Updates";
import Statistics from "./components/Statistics";
import Departments from "./components/Departments";
import VisionMission from "./components/VisionMission";
import StudentActivity from "./components/StudentActivity";
import Facilities from "./components/Facilities";
import Club from "./admin/pages/Club";

function App() {
  const [currentTab, setCurrentTab] = useState("home");

  return (
    <Router>
      <div className="App">
        <NavBar currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <Routes>
        <Route path="/club/*" element={<Club />} />
          <Route
            path="/"
            element={
              <>
                <Updates />
                <VisionMission />
                <Statistics />
                <Departments />
                <StudentActivity />
                <Facilities />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
