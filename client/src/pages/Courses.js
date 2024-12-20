import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/Courses.css";

const coursesData = [
  {
    department: "Civil Engineering",
    ug: [
      "B.E Civil Engineering (Tamil and English Medium)",
      "B.E Geo Informatics",
    ],
    pg: [
      "M.E. Structural Engineering",
      "M.E. Construction Engineering and Management",
      "M.E. Irrigation Water Management",
      "M.E. Hydrology and Water Resources Engineering",
      "M.E. Environmental Engineering",
      "M.E. Transportation Engineering",
      "M.E. Soil Mechanics and Foundation Engineering",
    ],
  },
  {
    department: "Mechanical Engineering",
    ug: [
      "B.E Mechanical Engineering (Tamil and English Medium)",
      "B.E Material Science and Engineering",
    ],
    pg: [
      "M.E. Internal Combustion Engineering",
      "M.E. Energy Engineering",
      "M.E. Thermal Engineering",
      "M.E. Engineering Design",
      "M.E. Manufacturing Systems and Management",
      "M.E. Product Design and Development",
      "M.E. Solar Energy",
    ],
  },
  {
    department: "Electrical Engineering",
    ug: ["B.E Electrical and Electronics Engineering"],
    pg: [
      "M.E. Power Systems Engineering",
      "M.E. Power Electronics and Drives",
      "M.E. Embedded System Technologies",
      "M.E. High Voltage Engineering",
      "M.E. Control and Instrumentation Engineering",
      "M.E. Power Engineering and Management",
    ],
  },
  {
    department: "Electronics and Communication Engineering",
    ug: [
      "B.E Electronics and Communication Engineering",
      "B.E Biomedical Engineering",
    ],
    pg: [
      "M.E. Communication Systems",
      "M.E. VLSI Design",
      "M.E. Medical Electronics",
      "M.E. Bio Medical Engineering",
      "M.E. Applied Electronics",
    ],
  },
  {
    department: "Computer Science and Engineering",
    ug: ["B.E Computer Science and Engineering"],
    pg: [
      "M.E. Computer Science and Engineering",
      "M.E. Software Engineering",
      "M.E. Computer Science and Engineering (Specialization in Operations Research)",
      "M.E. Computer Science and Engineering (Specialization in Big Data Analytics)",
    ],
  },
  {
    department: "Information Science and Technology",
    ug: ["B.Tech. Information Technology"],
    pg: [
      "M.Tech. Information Technology",
      "M.Tech. Information Technology (Specialization in Multimedia)",
      "M.C.A. Master of Computer Applications",
    ],
  },
  {
    department: "Management Studies",
    pg: [
      "M.B.A. Master of Business Administration",
      "M.B.A. Tourism Management",
    ],
  },
  {
    department: "Chemistry",
    pg: ["M.Sc. Applied Chemistry", "M.Tech. Polymer Science and Engineering"],
  },
  {
    department: "English",
    pg: ["M.Phil. English"],
  },
  {
    department: "Geology",
    pg: ["M.Sc. Applied Geology"],
  },
  {
    department: "Mathematics",
    pg: [
      "M.Sc. Applied Mathematics",
      "M.Phil. Mathematics",
      "M.Sc. Computer Science (Integrated Programme)",
      "M.Sc. Information Technology (Integrated Programme)",
    ],
  },
  {
    department: "Media Sciences",
    pg: [
      "M.Sc. Electronic Media",
      "M.Sc. Electronic Media (Integrated Programme)",
    ],
  },
  {
    department: "Medical Physics",
    pg: ["M.Sc. Medical Physics"],
  },
  {
    department: "Physics",
    pg: [
      "M.Sc. Materials Science",
      "M.Tech. Laser and Electro Optical Engineering",
      "M.Phil. Physics",
    ],
  },
];

const CoursesOffered = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");

  const filterCourses = (department, level) => {
    return coursesData
      .filter((course) =>
        department === "All" ? true : course.department === department
      )
      .map((course) => ({
        ...course,
        ug: course.ug || [], // Handle undefined `ug`
        pg: course.pg || [], // Handle undefined `pg`
      }))
      .map((course) => ({
        ...course,
        ug: level === "UG" || level === "All" ? course.ug : [],
        pg: level === "PG" || level === "All" ? course.pg : [],
      }));
  };

  const filteredCourses = filterCourses(selectedDepartment, selectedLevel);

  return (
    <div className="courses-page">
      <h1 className="course-title">Courses Offered</h1>
      <div className="filter-container">
        <select
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
          className="filter-dropdown"
        >
          <option value="All">All Departments</option>
          {coursesData.map((course) => (
            <option key={course.department} value={course.department}>
              {course.department}
            </option>
          ))}
        </select>
        <select
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
          className="filter-dropdown"
        >
          <option value="All">All Levels</option>
          <option value="UG">Undergraduate</option>
          <option value="PG">Postgraduate</option>
        </select>
      </div>
      <motion.div
        className="course-list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {filteredCourses.map((course) => (
          <motion.div
            key={course.department}
            className="course-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="department-title">{course.department}</h2>
            {course.ug.length > 0 && (
              <div className="course-section">
                <h3>Undergraduate Courses:</h3>
                <ul>
                  {course.ug.map((ugCourse) => (
                    <li key={ugCourse}>{ugCourse}</li>
                  ))}
                </ul>
              </div>
            )}
            {course.pg.length > 0 && (
              <div className="course-section">
                <h3>Postgraduate Courses:</h3>
                <ul>
                  {course.pg.map((pgCourse) => (
                    <li key={pgCourse}>{pgCourse}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CoursesOffered;
