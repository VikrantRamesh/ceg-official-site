import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash, FaEdit, FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SuperAdminPage = () => {
  const [studentUpdates, setStudentUpdates] = useState([
    {
      id: 1,
      description: "New Student Orientation 2025.",
      link: "http://example.com/orientation",
      isEditing: false,
    },
    {
      id: 2,
      description: "B.E.B.Tech - Fee Structure 2024-2025",
      link: "https://ceg.annauniv.edu/files/dean/B.E.B.Tech%20-%20Fee%20Structure%202024-25%20.pdf",
      isEditing: false,
    },
  ]);

  const [generalUpdates, setGeneralUpdates] = useState([
    {
      id: 1,
      description: "Campus Renovation work in progress.",
      link: "http://example.com/renovation",
      isEditing: false,
    },
    {
      id: 2,
      description: "Holiday Hours announcement.",
      link: "",
      isEditing: false,
    },
  ]);

  const navigate = useNavigate();

  // Handle changes to updates
  const handleUpdateChange = (section, index, field, value) => {
    const updatedUpdates =
      section === "student" ? [...studentUpdates] : [...generalUpdates];
    updatedUpdates[index][field] = value;
    section === "student"
      ? setStudentUpdates(updatedUpdates)
      : setGeneralUpdates(updatedUpdates);
  };

  // Add new update
  const addUpdate = (section) => {
    const newUpdate = {
      id: Date.now(),
      description: "",
      link: "",
      isEditing: true,
    };
    section === "student"
      ? setStudentUpdates([...studentUpdates, newUpdate])
      : setGeneralUpdates([...generalUpdates, newUpdate]);
  };

  // Remove update
  const removeUpdate = (section, index) => {
    if (section === "student") {
      const updatedStudentUpdates = [...studentUpdates];
      updatedStudentUpdates.splice(index, 1);
      setStudentUpdates(updatedStudentUpdates);
    } else if (section === "general") {
      const updatedGeneralUpdates = [...generalUpdates];
      updatedGeneralUpdates.splice(index, 1);
      setGeneralUpdates(updatedGeneralUpdates);
    }
  };

  // Update the individual update
  const updateUpdate = async (section, index) => {
    const updatedUpdates =
      section === "student" ? [...studentUpdates] : [...generalUpdates];
    const updateToSave = updatedUpdates[index];

    // Check if description is empty
    if (!updateToSave.description.trim()) {
      alert("Description is required.");
      return;
    }

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/update/${section}`,
        {
          id: updateToSave.id,
          description: updateToSave.description,
          link: updateToSave.link,
        },
        { withCredentials: true }
      );

      if (response.data.id) {
        updatedUpdates[index].id = response.data.id;
        section === "student"
          ? setStudentUpdates(updatedUpdates)
          : setGeneralUpdates(updatedUpdates);
      }
    } catch (error) {
      console.error("Error updating update:", error);
    }
  };

  // Toggle edit mode
  const toggleEditMode = (section, index) => {
    const updatedUpdates =
      section === "student" ? [...studentUpdates] : [...generalUpdates];
    updatedUpdates[index].isEditing = !updatedUpdates[index].isEditing;
    section === "student"
      ? setStudentUpdates(updatedUpdates)
      : setGeneralUpdates(updatedUpdates);
  };

  return (
    <div className="p-2 pt-12 lg:pt-12 lg:p-10 bg-gray-100 min-h-screen grid grid-cols-12 gap-6">
      {/* Student Updates Section */}
      <div className="lg:col-span-6 col-span-12">
        <h1 className="text-3xl font-extrabold mb-6 flex justify-center text-red-800">
          Student Updates
        </h1>
        <div className="overflow-x-auto bg-white lg:p-6 p-2 rounded shadow-md">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100 ">
                <th className="px-4 py-2 text-left">Updates</th>
                <th className="px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="font-normal">
              {studentUpdates.map((update, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">
                    {update.isEditing ? (
                      <>
                        <textarea
                          value={update.description}
                          onChange={(e) =>
                            handleUpdateChange(
                              "student",
                              index,
                              "description",
                              e.target.value
                            )
                          }
                          placeholder="Updates"
                          className="w-full p-2 border border-gray-300 rounded"
                          required
                        />
                        <input
                          type="text"
                          value={update.link}
                          onChange={(e) =>
                            handleUpdateChange(
                              "student",
                              index,
                              "link",
                              e.target.value
                            )
                          }
                          placeholder="Optional Link"
                          className="w-full p-2 border border-gray-300 rounded"
                        />
                      </>
                    ) : (
                      <a href={update.link}>{update.description}</a>
                    )}
                  </td>
                  <td className="px-4 py-2 my-auto text-center items-center align-middle">
                    {update.isEditing ? (
                      <button
                        onClick={() => {
                          toggleEditMode("student", index);
                          updateUpdate("student", index);
                        }}
                        className="text-white bg-emerald-500 hover:bg-green-700 rounded p-2"
                      >
                        <FaCheck className="text-3xl" />
                      </button>
                    ) : (
                      <div className="flex flex-row justify-center">
                        <button
                          onClick={() => toggleEditMode("student", index)}
                          className="text-white bg-blue-500 hover:bg-blue-700 rounded p-2 mr-2"
                        >
                          <FaEdit className="text-xl" />
                        </button>
                        <button
                          onClick={() => removeUpdate("student", index)}
                          className="text-white bg-rose-500 hover:bg-red-700 rounded p-2"
                        >
                          <FaTrash className="text-xl" />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={() => addUpdate("student")}
            className="text-blue-500 hover:underline mt-4 px-4"
          >
            Add New Student Update
          </button>
        </div>
      </div>

      {/* General Updates Section */}
      <div className="lg:col-span-6 col-span-12">
        <h1 className="text-3xl font-extrabold flex justify-center text-red-800 mb-6">
          General Updates
        </h1>
        <div className="overflow-x-auto bg-white lg:p-6 p-2 rounded shadow-md">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Updates</th>
                <th className="px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="font-normal">
              {generalUpdates.map((update, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">
                    {update.isEditing ? (
                      <>
                        <textarea
                          value={update.description}
                          onChange={(e) =>
                            handleUpdateChange(
                              "general",
                              index,
                              "description",
                              e.target.value
                            )
                          }
                          placeholder="Updates"
                          className="w-full p-2 border border-gray-300 rounded"
                          required
                        />
                        <input
                          type="text"
                          value={update.link}
                          onChange={(e) =>
                            handleUpdateChange(
                              "general",
                              index,
                              "link",
                              e.target.value
                            )
                          }
                          placeholder="Optional Link"
                          className="w-full p-2 border border-gray-300 rounded"
                        />
                      </>
                    ) : (
                      <a href={update.link}>{update.description}</a>
                    )}
                  </td>
                  <td className="px-4 py-2 text-center items-center align-middle">
                    {update.isEditing ? (
                      <button
                        onClick={() => {
                          toggleEditMode("general", index);
                          updateUpdate("general", index);
                        }}
                        className="text-white bg-emerald-500 hover:bg-green-700 rounded p-2"
                      >
                        <FaCheck className="text-3xl" />
                      </button>
                    ) : (
                      <div className="flex flex-row justify-center">
                        <button
                          onClick={() => toggleEditMode("general", index)}
                          className="text-white bg-blue-500 hover:bg-blue-700 rounded p-2 mr-2"
                        >
                          <FaEdit className="text-xl" />
                        </button>
                        <button
                          onClick={() => removeUpdate("general", index)}
                          className="text-white bg-rose-500 hover:bg-red-700 rounded p-2"
                        >
                          <FaTrash className="text-xl" />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={() => addUpdate("general")}
            className="text-blue-500 hover:underline mt-4 px-4"
          >
            Add New General Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminPage;
