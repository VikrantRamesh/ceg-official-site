import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../styles/Statistics.css'

const Statistics = () => {
  const [statistics, setStatistics] = useState([]);

  useEffect(() => {
      const fetchUpdates = async () => {
          try {
              const response = await axios.get(`${process.env.REACT_APP_API_URL}/landing/statistics`);
              const stats = response.data;
              setStatistics(stats);
          } catch (error) {
              console.log(error.message);
          }
      };
      fetchUpdates();
  }, []);

  return (
    <div
      className="relative bg-sky-blue py-2"
    >
      {/* Dark overlay */}
      {/* <div className="dark-overlay absolute inset-0 bg-black opacity-40"></div> */}

      <div className="relative z-10 p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-black">
          <div className="bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg p-6 text-center shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
            <h1 className="text-5xl font-bold">{statistics.research_centres}</h1>
            <p className="text-md font-serif  mt-3">Research Centres</p>
          </div>
          <div className="bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg p-6 text-center shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
            <h1 className="text-5xl font-bold">{statistics.rd_grants}</h1>
            <p className="text-md font-serif mt-3">R&D Grants</p>
          </div>
          <div className="bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg p-6 text-center shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
            <h1 className="text-5xl font-bold">{statistics.publications}</h1>
            <p className="text-md font-serif  mt-3">Publications</p>
          </div>
          <div className="bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg p-6 text-center shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
            <h1 className="text-5xl font-bold">{statistics.patents_pub_gra}</h1>
            <p className="text-md font-serif  mt-3">Patents</p>
          </div>
          <div className="bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg p-6 text-center shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
            <h1 className="text-5xl font-bold">{statistics.books_rfid_auto}</h1>
            <p className="text-md font-serif  mt-3">Books RF ID - Automation</p>
          </div>
          <div className="bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg p-6 text-center shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
            <h1 className="text-5xl font-bold">{statistics.student_clubs}</h1>
            <p className="text-md font-serif  mt-3">Student Clubs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
