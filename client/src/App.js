import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Updates from "./components/Updates";
import Statistics from "./components/Statistics";
import Departments from "./components/Departments";
import VisionMission from "./components/VisionMission";
import StudentActivity from "./components/StudentActivity";
import DeanProfile from "./components/DeanProfile";
import Facilities from "./components/Facilities"; // Import Facilities
import au from "./assets/images/hexagon.jpg";
import Club from "./admin/pages/Club";
import ClubPage from "./pages/ClubPage";
import ClubHomePage from "./pages/ClubHomePage";


function App() {
  const [currentTab, setCurrentTab] = useState("home");

  return (
    <Router>
      <div className="App">
        <NavBar currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <Routes>
        <Route path="/club/*" element={<Club />} />
        <Route path="/club_home/*" element={<ClubHomePage />} />
        <Route path="/club_landing/*" element={<ClubPage />} />
          <Route
            path="/"
            element={
              <>
                <Updates />
                <Statistics />
                <DeanProfile />
                <div
                 style={{ backgroundImage: `url(${au})`,
                          backgroundRepeat:'no-repeat',
                          backgroundSize: 'cover',
                          backgroundBlendMode: 'difference'
                           }}
                >
                  <VisionMission />
                  <Departments />
                </div>
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
