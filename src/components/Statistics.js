import React from "react";

const Statistics = () => {
  return (
    <div
      className="relative bg-gray-800 py-16"
      style={{
        backgroundImage: `url("https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-dark.png")`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10 p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-white">
          <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-6 text-center shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
            <h1 className="text-5xl font-bold">06</h1>
            <p className="text-lg">Research Centres</p>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-6 text-center shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
            <h1 className="text-5xl font-bold">61Cr+</h1>
            <p className="text-lg">R&D Grants</p>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-6 text-center shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
            <h1 className="text-5xl font-bold">3615+</h1>
            <p className="text-lg">Publications</p>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-6 text-center shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
            <h1 className="text-5xl font-bold">18/8</h1>
            <p className="text-lg">Patents Published/Granted</p>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-6 text-center shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
            <h1 className="text-5xl font-bold">95.6K+</h1>
            <p className="text-lg">Books RF ID - Automation</p>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-6 text-center shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
            <h1 className="text-5xl font-bold">32</h1>
            <p className="text-lg">Student Clubs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;

// import React from "react";

// const Statistics = () => {
//   return (
//     <div
//       className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-16"
//     >
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black opacity-20"></div>

//       <div className="relative z-10 p-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-white">
//           <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-6 text-center shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
//             <h1 className="text-5xl font-bold">06</h1>
//             <p className="text-lg">Research Centres</p>
//           </div>
//           <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-6 text-center shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
//             <h1 className="text-5xl font-bold">61Cr+</h1>
//             <p className="text-lg">R&D Grants</p>
//           </div>
//           <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-6 text-center shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
//             <h1 className="text-5xl font-bold">3615+</h1>
//             <p className="text-lg">Publications</p>
//           </div>
//           <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-6 text-center shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
//             <h1 className="text-5xl font-bold">18/8</h1>
//             <p className="text-lg">Patents Published/Granted</p>
//           </div>
//           <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-6 text-center shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
//             <h1 className="text-5xl font-bold">95.6K+</h1>
//             <p className="text-lg">Books RF ID - Automation</p>
//           </div>
//           <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-6 text-center shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
//             <h1 className="text-5xl font-bold">32</h1>
//             <p className="text-lg">Student Clubs</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Statistics;
