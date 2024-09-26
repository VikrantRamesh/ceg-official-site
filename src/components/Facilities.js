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

const iconStyles = [
  { color: "#FF5733" },
  { color: "#33B5FF" },
  { color: "#FF33C4" },
  { color: "#FFBB33" },
  { color: "#33FF6B" },
  { color: "#FF6F33" },
  { color: "#FF5733" },
  { color: "#33D4FF" },
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
    // Add more facilities as needed
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
                className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-110 hover:rotate-1 text-center" // Added rotation and scaling animation
              >
                {/* Icon */}
                <div
                  className="text-6xl mb-4 mx-auto flex items-center justify-center h-20 w-20 rounded-full transition-transform duration-300 ease-in-out"
                  style={iconStyles[index]}
                >
                  {section.icon}
                </div>
                {/* Title */}
                <h3 className="text-lg font-semibold">{section.title}</h3>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Facilities;
