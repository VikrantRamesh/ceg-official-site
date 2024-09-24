import React from "react";
import { FaBullseye, FaLightbulb } from "react-icons/fa";
import au from "../assets/images/au.jpg";

const VisionMission = () => {
  return (
    <div
      className="relative bg-cover bg-center py-16"
      style={{ backgroundImage: `url(${au})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Vision Section */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 shadow-lg rounded-lg flex flex-col justify-between min-h-[300px] transform hover:scale-105 transition duration-300">
            <div>
              <div className="flex items-center mb-4">
                <FaBullseye className="text-5xl text-white mr-4" />
                <h2 className="text-3xl font-bold text-white">Vision</h2>
              </div>
              <p className="text-lg text-white">
                The vision of Anna University is to be a world-class institution
                by producing professionals with high technical knowledge,
                professional skills, and ethical values. Anna University shall
                be recognized as a leader in technical education.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 shadow-lg rounded-lg flex flex-col justify-between min-h-[300px] transform hover:scale-105 transition duration-300">
            <div>
              <div className="flex items-center mb-4">
                <FaLightbulb className="text-5xl text-white mr-4" />
                <h2 className="text-3xl font-bold text-white">Mission</h2>
              </div>
              <ul className="list-disc list-inside text-lg text-white">
                <li>
                  Setting up a Global University Network Campus embodying ideals
                  of an open, democratic global society.
                </li>
                <li>
                  Expanding global participation across continents with
                  satellite-based education and digital libraries.
                </li>
                <li>
                  Enriching national and international character with a focus on
                  diversity and inclusion.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
