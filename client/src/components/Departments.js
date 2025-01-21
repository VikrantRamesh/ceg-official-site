import React from "react";
import {
  FaWrench,
  FaLaptopCode,
  FaCog,
  FaIndustry,
  FaHardHat,
  FaPrint,
  FaInfoCircle,
  FaDesktop,
  FaLightbulb,
  FaBroadcastTower,
  FaCalculator,
  FaBook,
  FaFlask,
  FaGlobe,
  FaMicrophoneAlt,
  FaBusinessTime,
} from "react-icons/fa"; // Font Awesome Icons

const departments = [
  {
    name: "Civil Engineering",
    url: "https://www.auegov.ac.in/Department/civil",
    icon: <FaHardHat className="text-blue-600" />, // Replace with the icon and color of your choice
  },
  {
    name: "Mechanical Engineering",
    url: "https://www.auegov.ac.in/Department/mech",
    icon: <FaWrench className="text-red-600" />,
  },
  {
    name: "Manufacturing Engineering",
    url: "https://www.auegov.ac.in/Department/manuf",
    icon: <FaCog className="text-green-600" />,
  },
  {
    name: "Industrial Engineering",
    url: "https://www.auegov.ac.in/Department/indus",
    icon: <FaIndustry className="text-purple-600" />,
  },
  {
    name: "Mining Engineering",
    url: "https://www.auegov.ac.in/Department/mining",
    icon: <FaHardHat className="text-yellow-600" />,
  },
  {
    name: "Printing Technology",
    url: "https://www.auegov.ac.in/Department/print",
    icon: <FaPrint className="text-pink-600" />,
  },
  {
    name: "Information Science and Technology",
    url: "https://www.auegov.ac.in/Department/ist",
    icon: <FaInfoCircle className="text-indigo-600" />,
  },
  {
    name: "Computer Science and Engineering",
    url: "https://www.auegov.ac.in/Department/cse",
    icon: <FaLaptopCode className="text-teal-600" />,
  },
  {
    name: "Electrical and Electronics Engineering",
    url: "https://www.auegov.ac.in/Department/eee",
    icon: <FaLightbulb className="text-orange-600" />,
  },
  {
    name: "Electronics and Communication Engineering",
    url: "https://www.auegov.ac.in/Department/ece",
    icon: <FaBroadcastTower className="text-gray-600" />,
  },
  {
    name: "Department of Mathematics",
    url: "https://www.auegov.ac.in/Department/maths",
    icon: <FaCalculator className="text-blue-500" />,
  },
  {
    name: "Department of English",
    url: "https://www.auegov.ac.in/Department/english",
    icon: <FaBook className="text-red-500" />,
  },
  {
    name: "Department of Physics",
    url: "https://www.auegov.ac.in/Department/physics",
    icon: <FaFlask className="text-green-500" />,
  },
  {
    name: "Department of Chemistry",
    url: "https://www.auegov.ac.in/Department/chem",
    icon: <FaFlask className="text-purple-500" />,
  },
  {
    name: "Department of Geology",
    url: "https://www.auegov.ac.in/Department/geology",
    icon: <FaGlobe className="text-yellow-500" />,
  },
  {
    name: "Department of Media Science",
    url: "https://www.auegov.ac.in/Department/media",
    icon: <FaMicrophoneAlt className="text-pink-500" />,
  },
  {
    name: "Department of Management Studies",
    url: "https://www.auegov.ac.in/Department/mgmt",
    icon: <FaBusinessTime className="text-teal-500" />,
  },
];

const Departments = () => {
  return (
    <div className="p-6 pr-12 pl-12 pb-14">
      <h2 className="lg:text-5xl text-2xl font-bold mb-7 text-center text-sky-800 font-serif">DEPARTMENTS</h2>
      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4">
        {departments.map((department) => (
          <a
            key={department.name}
            href={department.url}
            className="block p-4 bg-gray-50 rounded shadow hover:bg-blue-50 hover:shadow-lg transition transform hover:scale-105 duration-200"
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold">{department.name}</span>
              <span>{department.icon}</span> {/* Icon for each department */}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Departments;
