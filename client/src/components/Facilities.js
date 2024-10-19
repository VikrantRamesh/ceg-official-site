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
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Icon styles for color customization
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
// Custom Next Arrow
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-0 top-0 h-full z-10 cursor-pointer bg-gray-700 text-white flex items-center justify-center shadow-lg hover:bg-gray-500 transition-all duration-300"
      onClick={onClick}
      // style={{ width: "50px", right: "20px" }} // Set a fixed width and adjust padding
    >
      <FaChevronRight size={30} />
    </div>
  );
};

// Custom Prev Arrow
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-0 top-0 h-full z-10 cursor-pointer bg-gray-700 text-white flex items-center justify-center shadow-lg hover:bg-gray-500 transition-all duration-300"
      onClick={onClick}
      // style={{ width: "50px", left: "20px" }} // Set a fixed width and adjust padding
    >
      <FaChevronLeft size={30} />
    </div>
  );
};


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
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    nextArrow: <NextArrow />, // Custom Next Arrow
    prevArrow: <PrevArrow />, // Custom Prev Arrow
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
    <>
      <hr className="h-1 mx-auto mb-2 border-0 rounded  bg-gray-800" />

      <h2 className="text-4xl font-bold mb-2 mt-2 text-center text-gray-800">FACILITIES</h2>
      <div className="mt-2 bg-gray-800">
      <Slider {...settings}>
        {sections.map((section, index) => (
          <div key={index} className="p-4">
            <Link to={section.path}>
              <div
                className="h-56 bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 ease-in-out transform hover:scale-110 text-center relative group"
              >
                {/* Icon */}
                <div
                  className="text-6xl mb-4 mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-white text-black transform transition-transform duration-300 ease-in-out"
                  style={iconStyles[index]}
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
                <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-orange-600">
                  {section.title}
                </h3>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
    </>
  );
};

export default Facilities;
