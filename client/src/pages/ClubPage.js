import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

  const ClubPage = () => {
    return (
      <div style={styles.page}>
        <div style={styles.clubInfo} className="mx-20">
          {/* Logo Section */}
          <div style={styles.logoSection}>
            <img src={clubLogo} alt="Club Logo" style={styles.logo} />
            <a
              href="https://auceg.acm.org/"
              style={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-md px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Website
              </button>
            </a>
            <a
              href="https://twitter.com"
              style={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-md px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Socials
              </button>
            </a>
          </div>

          {/* Club Details */}
          <div style={styles.details}>
            <h2 className="text-3xl my-4">ACM-CEG</h2>
            <p className="font-normal">
              The ACM-CEG Student Chapter, initiated in 2004, aims to instill an
              unwavering enthusiasm for computer science in students. The club
              provides a plethora of networking opportunities and helps to seek
              advice from the top experts in the field. The club has been steadily
              working to inculcate an unalloyed interest in Computer Science in
              students and consequently, stimulating the advancement of computer
              science as a whole.
            </p>

            {/* Members Section */}
            <div style={styles.members}>
              <h3 className="font-semibold text-xl">Members</h3>
              <div style={styles.memberList}>
                <div style={styles.member}>
                  <span style={styles.memberName}>Ansh Bomb</span>
                  <span style={styles.memberPosition}>President</span>
                </div>
                <div style={styles.member}>
                  <span style={styles.memberName}>Shiyam Ganesh T</span>
                  <span style={styles.memberPosition}>Vice President</span>
                </div>
                <div style={styles.member}>
                  <span style={styles.memberName}>Krishna Kumar GR</span>
                  <span style={styles.memberPosition}>Human Resources</span>
                </div>
                <div style={styles.member}>
                  <span style={styles.memberName}>Varsha Mohan</span>
                  <span style={styles.memberPosition}>Contents & Design</span>
                </div>
                <div style={styles.member}>
                  <span style={styles.memberName}>Hemanth Palani</span>
                  <span style={styles.memberPosition}>Technical Design</span>
                </div>
              </div>
            </div>

          {/* Events Section */}
          <div style={styles.events}>
            <h3 className="font-semibold text-xl mb-2">Events & Updates</h3>
            <ul className="space-y-1 list-disc list-inside">
              <li className="font-normal pt-1">
                Prodigy, an annual state-level technical event organized by the
                ACM-CEG chapter at Anna University, is a pioneering initiative
                designed exclusively for students in grades 9-12.
              </li>
              <li className="font-normal pt-1">
                Empowerment takes center stage at "CodHer," our exclusive
                women-only hackathon designed to inspire and motivate female
                developers to actively engage in the dynamic world of
                hackathons. Providing a dedicated platform for female talent,
                CodHer is a showcase of skills, innovation, and collaboration.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

  const styles = {
    page: {
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f5f5f5",
      minHeight: "100vh",
    },
    clubInfo: { display: "flex", gap: "20px", alignItems: "flex-start" },
    logoSection: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "10px",
    },
    logo: {
      width: "25vh",
      height: "25vh",
      borderRadius: "50%",
      objectFit: "contain",
      border: "2px solid #ddd",
    },
    link: {
      margin: "5px 0",
      color: "#007BFF",
      textDecoration: "none",
      fontWeight: "bold",
      transition: "color 0.3s",
    },
    details: {
      flex: 1,
      backgroundColor: "#ffffff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    members: { margin: "20px 10px", marginTop: "30px" }, // Added margin to the entire section
    memberList: { display: "flex", gap: "20px", marginTop: "10px" },
    member: {
      backgroundColor: "#f4f4f4",
      padding: "10px 15px",
      borderRadius: "5px",
      textAlign: "center",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.2s",
    },
    memberName: {
      fontWeight: "bold",
      fontSize: "16px",
      display: "block",
    },
    memberPosition: {
      fontSize: "12px",
      color: "#888",
      marginTop: "5px",
      display: "block",
    },
    events: {
      marginTop: "20px",
      overflow: "auto",
      backgroundColor: "#f9f9f9",
      padding: "10px",
      borderRadius: "5px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      resize: "vertical",
      minHeight: "100px",
      maxHeight: "400px",
    },
  };

  // Adding hover effect dynamically for members
  styles.member[":hover"] = { transform: "scale(1.05)" };

  export default ClubPage;
