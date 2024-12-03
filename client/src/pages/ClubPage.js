import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ClubPage = () => {
  const { id } = useParams(); // Extract the dynamic part of the URL
  const [clubDetails, setClubDetails] = useState(null); // State to store club details
  const [memberDetails, setMemberDetails] = useState([]); // Default to empty array if members data is empty
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Function to fetch club details
    const fetchClubDetails = async () => {
      try {
        const response = await axios.get(`/api/club/club-info/${id}`);
        setClubDetails(response.data); // Store the data in state
        if (response.data.members) {
          // Only parse if members data exists
          setMemberDetails(JSON.parse(response.data.members)); 
        }
      } catch (err) {
        console.error("Error fetching club details:", err.message);
        setError("Failed to fetch club details. Please try again later.");
      }
    };
    fetchClubDetails();
  }, [id]); // Run this effect whenever `id` changes


  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!clubDetails) {
    return <div>Loading...</div>; // Display a loading message while fetching data
  }

  return (
    <div style={styles.page}>
      <div style={styles.clubInfo} className="mx-20">
        {/* Logo Section */}
        <div style={styles.logoSection}>
          <img src={clubDetails.logo_path} alt="Club Logo" style={styles.logo} />
          <a
            href={clubDetails.website}
            style={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-md px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-md px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Socials
            </button>
          </a>
        </div>

        {/* Club Details */}
        <div style={styles.details}>
          <h2 className="text-3xl my-4">ACM-CEG</h2>
          <p className="font-normal">
            {clubDetails.description}
          </p>

          {/* Members Section */}
          <div style={styles.members}>
            <h3 className="font-semibold text-xl">Members</h3>
            <div style={styles.memberList}>
              {memberDetails.length > 0 ? (
                memberDetails.map((member, index) => (
                  <div style={styles.member} key={index}>
                    <span style={styles.memberName}>{member.name}</span>
                    <span style={styles.memberPosition}>{member.role}</span>
                  </div>
                ))
              ) : (
                <p>No members available.</p>
              )}
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
  members: { margin: "20px 10px", marginTop: "30px" },
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

export default ClubPage;
