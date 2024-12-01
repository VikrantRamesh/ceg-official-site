import React from 'react';

const ClubHomePage = () => {
  // Sample club data
  const clubs = [
    { name: 'NSS', icon: '🤝' },
    { name: 'NSO', icon: '🏀' },
    { name: 'YRC', icon: '⛑️' },
    { name: 'NCC', icon: '🪖' },
    { name: 'ACM-CEG', icon: '💻' },
    { name: 'CSAU', icon: '🧠' },
    { name: 'CSEA', icon: '👨‍🦱' },
    { name: 'Rotaract Club', icon: '🙂' },
    { name: 'GuindyTimes', icon: '📰' },
    { name: 'Castle Red', icon: '♟️' },
    { name: 'Shruthilaya', icon: '🎶' },
    { name: 'Saptham', icon: '🪭' },
    { name: 'CTF', icon: '👩🏽‍💻' },
    { name: 'BeatFreaks', icon: '💃🏽' },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Clubs and Societies</h1>
      <div style={styles.grid}>
        {clubs.map((club, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.icon}>{club.icon}</div>
            <p style={styles.name}>{club.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f7f9fc',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontFamily: 'verdana',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '1.8rem',
    marginBottom: '20px',
    color: '#000',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    padding: '20px',
    transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer',
  },
  cardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 10px rgba(0, 0, 0, 0.15)',
  },
  icon: {
    fontSize: '2.5rem',
    marginBottom: '10px',
  },
  name: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#555',
  },
};

export default ClubHomePage;