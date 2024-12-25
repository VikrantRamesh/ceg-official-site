import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Updates from "./components/Updates";
// import Statistics from "./components/Statistics";
import AllDepartments from "./pages/Departments";
import Departments from "./components/Departments";
import VisionMission from "./components/VisionMission";
import StudentActivity from "./components/StudentActivity";
import DeanProfile from "./components/DeanProfile";
import Facilities from "./components/Facilities"; // Import Facilities
import au from "./assets/images/hexagon.png";
import Club from "./admin/pages/Club";
import ClubPage from "./pages/ClubPage";
import ClubHomePage from "./pages/ClubHomePage";
import CollegeFooter from "./components/Footer";
import AdminPage from "./pages/AdminClubPage";
import Events from "./pages/Events";
import CoursesOffered from "./pages/Courses";
import EventsPage from "./pages/EventsUpdatePage";
import UserProfile from "./pages/UserProfile";
import PeoplePage from "./pages/People";
import SuperAdminPage from "./pages/SuperAdminPage";
import EditClubsPage from "./pages/AdminEditClubs";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/club/*" element={<Club />} />
          <Route path="/club_home/*" element={<ClubHomePage />} />
          <Route path="/club_landing/:id" element={<ClubPage />} />
          <Route path="/admin/*" element={<AdminPage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/courses" element={<CoursesOffered />} />
          <Route path="/departments" element={<AllDepartments />} />
          <Route path="/admin/events_update" element={<EventsPage />} />
          <Route path="/admin/admin_profile" element={<UserProfile />} />
          <Route path="/super_admin/admin_profile" element={<UserProfile />} />
          <Route path="/super_admin" element={<SuperAdminPage />} />
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/super_admin/edit_clubs" element={<EditClubsPage />} />
          <Route
            path="/"
            element={
              <>
                <Updates />
                {/* <Statistics /> */}
                <VisionMission />
                <DeanProfile />
                <div
                  style={{
                    backgroundSize: "auto",
                    backgroundImage: `url(${au})`,
                    backgroundRepeat: "no-repeat",
                    // backgroundSize: "cover",
                    backgroundBlendMode: "difference",
                  }}
                >
                  <Departments />
                </div>
                <StudentActivity />
                <Facilities />
                <CollegeFooter />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
