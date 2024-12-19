import React from "react";
import "../styles/Events.css";
import technofes from "../assets/images/Techofes.jpg";
import agni from "../assets/images/agni.jpg";
import kurukshetra from "../assets/images/kurukshetra.JPG";
import Sangharsh from "../assets/images/sangarsh.jpg";
import vyuhaa from "../assets/images/vyuhaa.JPG";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Agni",
      description:
        "Agni is an electrifying intra-college cultural extravaganza, packed with vibrant workshops and pro-nights, igniting the spark of creativity among students.",
      date: "NOV 8-10, 2024",
      image: agni,
    },
    {
      id: 2,
      title: "Kurukshetra (K!)",
      description:
        "Kurukshetra, the premier inter-college techno-management festival, attracts thousands of students with challenging quizzes, workshops, and mind-bending games.",
      date: "January 20, 2024",
      image: kurukshetra,
    },
    {
      id: 3,
      title: "Techofes",
      description:
        "Techofes is South India's largest cultural festival featuring thrilling pro-nights, dance competitions, and artistic showcases, all under the stars.",
      date: "February 10, 2024",
      image: technofes,
    },
    {
      id: 4,
      title: "Sangharsh",
      description:
        "Sangharsh is an annual musical fundraiser aimed at supporting social causes, blending talent and humanity for a greater impact.",
      date: "March 5, 2024",
      image: Sangharsh,
    },
    {
      id: 5,
      title: "Vyuhaa",
      description:
        "Vyuhaa is a magnificent techno-management fest exclusively hosted for students of the University Department campuses of Anna University. instilling an incandescent fervor for technology among incoming college freshmen",
      date: "October 5, 2024",
      image: vyuhaa,
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
