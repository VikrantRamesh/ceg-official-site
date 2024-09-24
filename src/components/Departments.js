import React from "react";

const departments = [
  {
    name: "Civil Engineering",
    url: "https://www.auegov.ac.in/Department/civil",
  },
  {
    name: "Mechanical Engineering",
    url: "https://www.auegov.ac.in/Department/mech",
  },
  {
    name: "Manufacturing Engineering",
    url: "https://www.auegov.ac.in/Department/manuf",
  },
  {
    name: "Industrial Engineering",
    url: "https://www.auegov.ac.in/Department/indus",
  },
  {
    name: "Mining Engineering",
    url: "https://www.auegov.ac.in/Department/mining",
  },
  {
    name: "Printing Technology",
    url: "https://www.auegov.ac.in/Department/print",
  },
  {
    name: "Information Science and Technology",
    url: "https://www.auegov.ac.in/Department/ist",
  },
  {
    name: "Computer Science and Engineering",
    url: "https://www.auegov.ac.in/Department/cse",
  },
  {
    name: "Electrical and Electronics Engineering",
    url: "https://www.auegov.ac.in/Department/eee",
  },
  {
    name: "Electronics and Communication Engineering",
    url: "https://www.auegov.ac.in/Department/ece",
  },
  {
    name: "Department of Mathematics",
    url: "https://www.auegov.ac.in/Department/maths",
  },

  {
    name: "Department of English",
    url: "https://www.auegov.ac.in/Department/english",
  },
  {
    name: "Department of Physics",
    url: "https://www.auegov.ac.in/Department/physics",
  },
  {
    name: "Department of Chemistry",
    url: "https://www.auegov.ac.in/Department/chem",
  },
  {
    name: "Department of Geology",
    url: "https://www.auegov.ac.in/Department/geology",
  },
  {
    name: "Department of Media Science",
    url: "https://www.auegov.ac.in/Department/media",
  },
  {
    name: "Department of Management Studies",
    url: "https://www.auegov.ac.in/Department/mgmt",
  },
];

const Departments = () => {
  return (
    <div className="p-6 bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Departments</h2>
      <div className="grid grid-cols-2 gap-4">
        {departments.map((department) => (
          <a
            key={department.name}
            href={department.url}
            className="block p-4 bg-gray-100 rounded hover:bg-gray-200 transition"
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold">{department.name}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Departments;
