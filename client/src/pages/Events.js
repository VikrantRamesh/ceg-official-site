import React from "react";
import "../styles/Events.css";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Agni",
      description:
        "Agni is an electrifying intra-college cultural extravaganza, packed with vibrant workshops and pro-nights, igniting the spark of creativity among students.",
      date: "NOV 8-10, 2024",
      image: "../assets/images/agni.jpg",
    },
    {
      id: 2,
      title: "Kurukshetra (K!)",
      description:
        "Kurukshetra, the premier inter-college techno-management festival, attracts thousands of students with challenging quizzes, workshops, and mind-bending games.",
      date: "January 20, 2024",
      image: "../assets/images/kurukshetra.jpg",
    },
    {
      id: 3,
      title: "Techofes",
      description:
        "Techofes is South India's largest cultural festival featuring thrilling pro-nights, dance competitions, and artistic showcases, all under the stars.",
      date: "February 10, 2024",
      image: "../assets/images/Techofes.jpg",
    },
    {
      id: 4,
      title: "Sangharsh",
      description:
        "Sangharsh is an annual musical fundraiser aimed at supporting social causes, blending talent and humanity for a greater impact.",
      date: "March 5, 2024",
      image: "../assets/images/sangharsh.jpg",
    },
  ];

  return (
    <div className="events-section">
      <h1 className="events-title">Explore Our Events</h1>
      <div className="events-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card animate-fade-in">
            <div className="event-image-wrapper">
              <img
                src={`${event.image}`}
                alt={event.title}
                className="event-image"
              />
            </div>
            <div className="event-details">
              <h2 className="event-name">{event.title}</h2>
              <p className="event-date">{event.date}</p>
              <p className="event-description">{event.description}</p>
              <button className="event-button">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
