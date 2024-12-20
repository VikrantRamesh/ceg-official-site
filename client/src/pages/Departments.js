import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link
import "../styles/AllDepartments.css";
import departmentsData from "../StaticData/AllDepartmentData";

const AllDepartments = () => {
  const [selectedFaculty, setSelectedFaculty] = useState("All");

  const filterDepartments = (faculty) => {
    return departmentsData.filter((data) =>
      faculty === "All" ? true : data.faculty === faculty
    );
  };

  const filteredDepartments = filterDepartments(selectedFaculty);

  return (
    <div className="departments-page">
      {/* Image with Gradient */}
      <div className="header-image mb-8">
        <div className="header-content">
          <h1 className="title font-extrabold">DEPARTMENTS</h1>
          <div className="department-filter-container">
            <select
              value={selectedFaculty}
              onChange={(e) => setSelectedFaculty(e.target.value)}
              className="department-filter-dropdown"
            >
              <option value="All">All Faculties</option>
              {departmentsData.map((data) => (
                <option key={data.faculty} value={data.faculty}>
                  {data.faculty}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Departments List */}
      <motion.div
        className="departments-list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {filteredDepartments.map((data) => (
          <motion.div
            key={data.faculty}
            className="department-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Make each faculty a clickable link */}
            <h2 className="faculty-title">{data.faculty}</h2>

            {Array.isArray(data.departments) && data.departments.length > 0 && (
              <div className="section">
                <h3>Departments:</h3>
                <ul className="font-medium underline">
                  {data.departments.map((dept) => (
                    <li key={dept.link}>
                      <a href={dept.link}>{dept.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {Array.isArray(data.centres) && data.centres.length > 0 && (
              <div className="section">
                <h3>Centres/Institute:</h3>
                <ul className="font-medium underline">
                  {data.centres.map((centre) => (
                    <li key={centre.link || centre}>
                      {centre.link ? (
                        <a href={centre.link}>{centre.name}</a>
                      ) : (
                        centre
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {Array.isArray(data.divisions) && data.divisions.length > 0 && (
              <div className="section">
                <h3>Divisions:</h3>
                <ul className="font-medium underline">
                  {data.divisions.map((division) => (
                    <li key={division.link || division}>
                      {division.link ? (
                        <a href={division.link}>{division.name}</a>
                      ) : (
                        division
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {Array.isArray(data.workshops) && data.workshops.length > 0 && (
              <div className="section">
                <h3>Workshops:</h3>
                <ul className="font-medium underline">
                  {data.workshops.map((workshop) => (
                    <li key={workshop.link || workshop}>
                      {workshop.link ? (
                        <a href={workshop.link}>{workshop.name}</a>
                      ) : (
                        workshop
                      )}
                    </li>
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

export default AllDepartments;
