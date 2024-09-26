import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {
  FaUniversity,
  FaGlobe,
  FaUserGraduate,
  FaBook,
  FaBriefcase,
  FaUserShield,
  FaHospital,
  FaFileContract,
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Icon styles for color customization
const iconStyles = [
  { color: "#FF5733" }, // ACOE (Red/Orange)
  { color: "#33B5FF" }, // e-Governance (Blue)
  { color: "#FF33C4" }, // International Relations (Pink)
  { color: "#FFBB33" }, // Library (Yellow/Orange)
  { color: "#33FF6B" }, // Placement Cell (Green)
  { color: "#FF6F33" }, // Health Centre (Dark Orange)
  { color: "#FF5733" }, // SC/ST Cell (Red/Orange)
  { color: "#33D4FF" }, // POSH (Light Blue)
];

const Facilities = () => {
  const sections = [
    { title: "ACOE", path: "/acoe", icon: <FaUniversity /> },
    {
      title: "Centre for e-Governance",
      path: "/e-governance",
      icon: <FaGlobe />,
    },
    {
      title: "Centre for International Relations",
      path: "/international-relations",
      icon: <FaUserGraduate />,
    },
    { title: "Library", path: "/library", icon: <FaBook /> },
    { title: "Placement Cell", path: "/placement-cell", icon: <FaBriefcase /> },
    { title: "Health Centre", path: "/health-centre", icon: <FaHospital /> },
    { title: "SC/ST Cell", path: "/sc-st-cell", icon: <FaFileContract /> },
    { title: "POSH", path: "/posh", icon: <FaUserShield /> },
  ];

  // Slick settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-8 px-4">
      <h2 className="text-4xl font-bold mb-8 text-center">Facilities</h2>
      <Slider {...settings}>
        {sections.map((section, index) => (
          <div key={index} className="p-4">
            <Link to={section.path}>
              <div
                className="bg-gradient-to-r from-teal-400 to-cyan-500
text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-500 ease-in-out transform hover:scale-110 hover:rotate-2 text-center relative group"
                // Added gradient, shadow, and transition for a modern look
              >
                {/* Icon */}
                <div
                  className="text-6xl mb-4 mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-white text-black transform transition-transform duration-300 ease-in-out group-hover:animate-bounce"
                  style={iconStyles[index]} // Apply different color to each icon
                >
                  {section.icon}
                </div>

                {/* Animated Dots */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="animate-pulse absolute top-0 left-1/2 h-2 w-2 bg-white rounded-full"></div>
                  <div className="animate-pulse absolute right-1/2 bottom-0 h-2 w-2 bg-white rounded-full"></div>
                  <div className="animate-pulse absolute top-1/2 right-0 h-2 w-2 bg-white rounded-full"></div>
                  <div className="animate-pulse absolute bottom-1/2 left-0 h-2 w-2 bg-white rounded-full"></div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-yellow-300">
                  {section.title}
                </h3>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Facilities;
