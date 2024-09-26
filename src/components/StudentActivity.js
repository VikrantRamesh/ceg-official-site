import React from "react";
import { Link } from "react-router-dom";

const activities = [
  {
    title: "National Sports Oraganisation (NSO)",
    imageUrl: require("../assets/images/NSO.png"),
    path: "/nso",
  },
  {
    title: "Festivals",
    imageUrl: require("../assets/images/Festival.jpg"),
    path: "/festivals",
  },
  {
    title: "Youth Red Cross (YRC)",
    imageUrl: require("../assets/images/YRC.jpg"),
    path: "/yrc",
  },
  {
    title: "National Service Scheme (NSS)",
    imageUrl: require("../assets/images/NSS.jpg"),
    path: "/nss",
  },
  {
    title: "National Cadet Corps (NCC)",
    imageUrl: require("../assets/images/NCC.png"),
    path: "https://aunccarmy.vercel.app/",
  },
];

const StudentActivity = () => {
  return (
    <div className="py-8 px-4">
      <h2 className="text-4xl font-bold mb-8 text-center">
        Student Activities
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {activities.map((activity, index) => (
          <Link key={index} to={activity.path} className="relative group block">
            <div className="bg-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform group-hover:scale-105">
              <img
                src={activity.imageUrl}
                alt={activity.title}
                className="w-full h-48 object-cover transition-transform transform group-hover:scale-110"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{activity.title}</h3>
              </div>
            </div>
            {/* Optional: Add a hover effect on title */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StudentActivity;
