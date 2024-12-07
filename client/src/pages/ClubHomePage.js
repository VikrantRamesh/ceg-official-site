import axios from "axios";
import React, { useState, useEffect } from "react";
const ClubHomePage = () => {
  // Sample club data with links
  //let clubs = [
  //   { name: "NSS", icon: "🤝", link: "/nss" },
  //   { name: "NSO", icon: "🏀", link: "/nso" },
  //   { name: "YRC", icon: "⛑️", link: "/yrc" },
  //   { name: "NCC", icon: "🪖", link: "/ncc" },
  //   { name: "SAAS", icon: "🎨", link: "/saas" },
  //   { name: "ACM-CEG", icon: "💻", link: "/acm_ceg" },
  //   { name: "CSAU", icon: "💽", link: "/csau" },
  //   { name: "CSEA", icon: "🎓", link: "/csea" },
  //   { name: "Rotaract", icon: "🙂", link: "/rotaract-club" },
  //   { name: "GuindyTimes", icon: "📰", link: "/guindytimes" },
  //   { name: "Castle Red", icon: "♟️", link: "/castlered" },
  //   { name: "Shruthilaya", icon: "🎶", link: "/shruthilaya" },
  //   { name: "Saptham", icon: "🥻", link: "/saptham" },
  //   { name: "CTF", icon: "👩🏽‍💻", link: "/ctf" },
  //   { name: "AUSEC", icon: "👨🏽‍💼", link: "/ausec" },
  //   { name: "Theatron", icon: "🎬", link: "/theatron" },
  //   { name: "Pixels", icon: "📸", link: "/pixels" },
  //   { name: "Astro", icon: "🚀", link: "/astro" },
  //   { name: "Robotics", icon: "🤖", link: "/robotics" },
  //   { name: "EQ", icon: "💌", link: "/eq" },
  //   { name: "Siruthuligal", icon: "🤗", link: "/siruthuligal" },
  //   { name: "Madhavam", icon: "🪔", link: "/madhavam" },
  //   { name: "CEG Spartanz", icon: "🕺🏽", link: "/spartanz" },
  //   { name: "Literary", icon: "📚", link: "/literary" },
  //   { name: "LEO", icon: "🦁", link: "/leo" },
  //   { name: "Green Brigade", icon: "🌳", link: "/greenbrigade" },
  //   { name: "Aakrithi", icon: "🪆", link: "/aakrithi" },
  //   { name: "SCI", icon: "💡", link: "/sci" },
  //   { name: "SQC", icon: "📈", link: "/sqc" },
  //   { name: "BeatFreaks", icon: "💃🏽", link: "/beatfreaks" },
  //   { name: "Quizzers Anonymous", icon: "❓", link: "/quizzers" },
  // ];

  const [clubs, setClubs] = useState([]); // State to hold the list of clubs
  const [error, setError] = useState(null); // State to handle errors

  // Fetch clubs when the component mounts
  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const response = await axios.get("/api/club/all-clubs");
        setClubs(response.data); // Update state with fetched data
      } catch (err) {
        console.error("Error fetching clubs:", err.message);
        setError("Failed to fetch clubs. Please try again later."); // Set error message
      }
    };

    fetchClubs();
  }, []);
  

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Clubs and Societies</h1>
      <div style={styles.grid}>
        {clubs.map((club, index) => (
          <a href={`/club_landing/${club.id}`} key={index} style={styles.cardWrapper}>
            <div style={styles.card}>
              <div style={styles.icon}>{club.icon}</div>
              <p style={styles.name}>{club.name}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#f7f9fc",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontFamily: "verdana",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "1.8rem",
    marginBottom: "20px",
    color: "#000",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    padding: "20px",
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "pointer",
  },
  cardHover: {
    transform: "scale(1.05)",
    boxShadow: "0 6px 10px rgba(0, 0, 0, 0.15)",
  },
  icon: {
    fontSize: "2.5rem",
    marginBottom: "10px",
  },
  name: {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#555",
  },
};

export default ClubHomePage;
