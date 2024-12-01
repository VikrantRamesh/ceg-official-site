import React, { useState } from 'react';
import clubLogo from '../assets/images/acm-ceg-logo.png'

const ClubPage = () => {
  const [boxHeight, setBoxHeight] = useState(200);

  const handleResize = (e) => {
    const newHeight = e.target.value;
    setBoxHeight(newHeight);
  };

  return (
    <div style={styles.page}>
      <div style={styles.clubInfo}>
        {/* Logo Section */}
        <div style={styles.logoSection}>
          <img src={clubLogo} alt="Club Logo" style={styles.logo} />
          <a href="https://auceg.acm.org/" style={styles.link} target="_blank" rel="noopener noreferrer">
            Website
          </a>
          <a href="https://twitter.com" style={styles.link} target="_blank" rel="noopener noreferrer">
            Socials
          </a>
        </div>

        {/* Club Details */}
        <div style={styles.details}>
          <h2>ACM-CEG</h2>
          <p>
            Description of the club goes here. It includes what the club does and its mission. Add more details about the
            club's objectives and key activities.
          </p>

          {/* Members Section */}
          <div style={styles.members}>
            <h3>Members</h3>
            <div style={styles.memberList}>
              <div style={styles.member}>Member 1</div>
              <div style={styles.member}>Member 2</div>
              <div style={styles.member}>Member 3</div>
            </div>
          </div>

          {/* Events Section */}
          <div style={{ ...styles.events, height: `${boxHeight}px` }}>
            <h3>Events & Updates</h3>
            <p>Details about recent events and updates go here. Add upcoming events or announcements.</p>
          </div>

          {/* Height Adjuster */}
          <input
            type="range"
            min="100"
            max="400"
            value={boxHeight}
            onChange={handleResize}
            style={styles.slider}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: { padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5', minHeight: '100vh' },
  clubInfo: { display: 'flex', gap: '20px', alignItems: 'flex-start' },
  logoSection: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' },
  logo: { width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #ddd' },
  link: { margin: '5px 0', color: '#007BFF', textDecoration: 'none', fontWeight: 'bold', transition: 'color 0.3s' },
  details: { flex: 1, backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' },
  members: { marginTop: '20px' },
  memberList: { display: 'flex', gap: '10px', marginTop: '10px' },
  member: {
    backgroundColor: '#f4f4f4',
    padding: '10px 15px',
    borderRadius: '5px',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
  },
  memberHover: {
    transform: 'scale(1.05)',
  },
  events: {
    marginTop: '20px',
    overflow: 'auto',
    backgroundColor: '#f9f9f9',
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  slider: { marginTop: '10px', width: '100%' },
};

// Adding hover effect dynamically for members
styles.member[':hover'] = styles.memberHover;

export default ClubPage;
