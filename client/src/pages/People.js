// Install tailwindcss if not already set up in your React app
// Refer to https://tailwindcss.com/docs/installation

import React, { useState } from "react";

const PeoplePage = () => {
  const [activeTab, setActiveTab] = useState("Main Office");
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (index) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const peopleData = {
    "Main Office": [
      {
        section: "PA TO DEAN",
        members: [
          {
            name: "P. Princy",
            role: "Professional Assistant II",
            phone: "044-2235 8491",
            image: "#", // Replace with actual image URL or file path
          },
        ],
      },
      {
        section: "TAPAL",
        members: [
          {
            name: "S. Petchimuthu",
            role: "Peon",
            phone: "044-2235 8491",
            image: "#", // Replace with actual image URL or file path
          },
        ],
      },
      {
        section: "SUPPORTING STAFF",
        members: [
          {
            name: "K. Vijayakumari",
            role: "Peon",
            phone: "044-2235 8491",
            image: "#", // Replace with actual image URL or file path
          },
          {
            name: "S. Ganesan",
            role: "Peon Cum Driver",
            phone: "044-2235 8491",
            image: "#", // Replace with actual image URL or file path
          },
        ],
      },
    ],
    "Students Section": [
      {
        section: "SECTION HEAD",
        members: [
          {
            name: "Dr. Priya Sethuraman",
            role: "Deputy Registrar",
            phone: "044-2235 8483",
            image: "", // Replace with actual image URL or file path
          },
        ],
      },
      {
        section: "ACADEMIC",
        members: [
          {
            name: "N. Renuka",
            role: "Professional Assistant II",
            phone: "044-2235 8476 / 8477",
            image: "#", // Replace with actual image URL or file path
          },
          {
            name: "P. Revathy",
            role: "Professional Assistant III",
            phone: "044-2235 8469",
            image: "#", // Replace with actual image URL or file path
          },
          {
            name: "S. Suseela",
            role: "Assistant",
            phone: "044-2235 8478",
            image: "#", // Replace with actual image URL or file path
          },
          {
            name: "G. Manjula",
            role: "Lab Assistant",
            phone: "044-2235 8475",
            image: "#", // Replace with actual image URL or file path
          },
        ],
      },
      {
        section: "TC, TRAVEL & SCHOLARSHIP",
        members: [
          {
            name: "P. Thomas",
            role: "Junior Assistant",
            phone: "044-2235 8473",
            image: "#", // Replace with actual image URL or file path
          },
          {
            name: "M. Murali",
            role: "Professional Assistant I",
            phone: "044-2235 8477",
            image: "#", // Replace with actual image URL or file path
          },
        ],
      },
      {
        section: "SUPPORTING STAFF",
        members: [
          {
            name: "M. Thenmozhi",
            role: "Peon",
            phone: "044-2235 8475",
            image: "#", // Replace with actual image URL or file path
          },
          {
            name: "C. Jaganathan",
            role: "Peon",
            phone: "044-2235 8475",
            image: "#", // Replace with actual image URL or file path
          },
        ],
      },
    ],
    "Finance Section": [
      {
        section: "SECTION HEAD",
        members: [
          {
            name: "P.V. Prasannakumari",
            role: "Superintendent",
            phone: "044-2235 8473",
            image: "#", // Replace with actual image URL or file path
          },
        ],
      },
      {
        section: "FINANCE & PURCHASE",
        members: [
          {
            name: "M. Hemadevi",
            role: "Assistant",
            phone: "044-2235 8480",
            image: "#", // Replace with actual image URL or file path
          },
          {
            name: "T. Devi",
            role: "Professional Assistant II",
            phone: "044-2235 8503",
            image: "#", // Replace with actual image URL or file path
          },
          {
            name: "S. Jeevakumar",
            role: "Professional Assistant III",
            phone: "044-2235 8482",
            image: "#", // Replace with actual image URL or file path
          },
          {
            name: "K. Radhai",
            role: "Lab Assistant",
            phone: "044-2235 8487",
            image: "#", // Replace with actual image URL or file path
          },
        ],
      },
      {
        section: "AUDITORIUM",
        members: [
          {
            name: "P. Manoth Kumar",
            role: "Peon",
            phone: "044-2235 8475",
            image: "#", // Replace with actual image URL or file path
          },
          {
            name: "M. Kesavaraman",
            role: "Peon",
            phone: "044-2235 8475",
            image: "#", // Replace with actual image URL or file path
          },
        ],
      },
      {
        section: "SUPPORTING STAFF",
        members: [
          {
            name: "V. Latha",
            role: "Peon",
            phone: "044-2235 8475",
            image: "#", // Replace with actual image URL or file path
          },
        ],
      },
    ],
    "CEM Cell": [
      {
        section: "FACULTY IN-CHARGE",
        members: [
          {
            name: "Dr. S. Jayalakshmi",
            role: "Professor",
            phone: "044-2235 8494",
            image: "#", // Replace with actual image URL or file path
          },
          {
            name: "Dr. M. Vijayalakshmi",
            role: "Assistant Professor (Sr. Gr.)",
            phone: "044-2235 8495",
            image: "#", // Replace with actual image URL or file path
          },
        ],
      },
      {
        section: "MAINTENANCE",
        members: [
          {
            name: "R. Anandan",
            role: "Professional Assistant III",
            phone: "044-2235 8494",
            image: "#", // Replace with actual image URL or file path
          },
          {
            name: "T. Gnanaprakash",
            role: "Professional Assistant III",
            phone: "044-2235 8495",
            image: "#", // Replace with actual image URL or file path
          },
        ],
      },
    ],
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-semibold text-center mb-8 text-red-800">
        People
      </h1>
      {/* Tabs */}
      <div className="flex justify-center mb-8 space-x-0">
        {Object.keys(peopleData).map((tab, index) => (
          <div key={tab} className="flex items-center">
            <button
              className={`px-4 py-2 text-sm lg:text-lg rounded-lg font-medium ${
                activeTab === tab
                  ? "bg-red-800 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => {
                setExpandedSections({});
                setActiveTab(tab);
              }}
            >
              {tab}
            </button>
            {/* Add vertical line unless it's the last tab */}
            {index < Object.keys(peopleData).length - 1 && (
              <div className="h-full border-l-2 border-gray-300 mx-2"></div>
            )}
          </div>
        ))}
      </div>

      {/* People List */}
      <div className="space-y-8">
        {peopleData[activeTab].map((section, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg px-4 py-2 mx-1 xl:mx-40 lg:mx-32 md:mx-24 lg:py-4 lg:px-6"
          >
            <button
              onClick={() => toggleSection(index)}
              className="w-full text-left text-xl font-bold bg-gray-200 text-red-800 py-2 px-4 rounded-md focus:outline-none"
            >
              {section.section}
            </button>

            <div
              className={`transition-all duration-300 overflow-hidden ${
                expandedSections[index] ? "max-h-screen" : "max-h-0"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-8 px-2 mt-2">
                {section.members.map((member, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg p-4 flex items-center space-x-4 my-2"
                    style={{
                      boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.35)",
                    }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="lg:w-36 lg:h-36 h-20 w-20 object-cover rounded-full border"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{member.name}</h3>
                      <p className="text-sm text-gray-600">{member.role}</p>
                      <p className="text-sm text-gray-600">{member.phone}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeoplePage;
