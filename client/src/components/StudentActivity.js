import React from "react";
import { Link } from "react-router-dom";

const activities = [
  {
    title: "National Sports Oraganisation (NSO)",
    imageUrl: require("../assets/images/NSO.png"),
    path: "/nso",
  },
  {
    title: "Events and Festivals",
    imageUrl: require("../assets/images/Festival.jpg"),
    path: "/events",
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

  {
    title: "Clubs and Socities",
    imageUrl: require("../assets/images/cs.png"),
    path: "/clubsandsocieties",
  },
  {
    title: "Sports Board",
    imageUrl: require("../assets/images/NSO.jpeg"),
    path: "/clubsandsocieties",
  },
];

const StudentActivity = () => {
  return (
    <div className="py-14 px-4 pb-16">
      <h2 className="text-5xl font-bold mb-9 text-center text-sky-800 font-serif">
        STUDENT ACTIVITIES
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {activities.map((activity, index) => (
          <Link key={index} to={activity.path} className="relative group block">
            <div className="bg-slate-100 rounded-lg shadow-lg overflow-hidden transition-transform transform group-hover:scale-105">
              <img
                src={activity.imageUrl}
                alt={activity.title}
                className="w-full h-48 object-cover transition-transform transform group-hover:scale-110"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium">{activity.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StudentActivity;
