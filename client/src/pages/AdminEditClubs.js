import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ClubsPage = () => {
  const [clubs, setClubs] = useState([
    {
      id: 1,
      name: "Tech Club",
      photo: "#", // Replace with actual image URL or file path
      isEditing: false,
      newPassword: "",
      username: "",
      confirmPassword: "",
      showNewPassword: false,
      showConfirmPassword: false,
    },
    {
      id: 2,
      name: "Drama Club",
      photo: "#", // Replace with actual image URL or file path
      isEditing: false,
      newPassword: "",
      username: "",
      confirmPassword: "",
      showNewPassword: false,
      showConfirmPassword: false,
    },
    {
      id: 3,
      name: "Art Club",
      photo: "#", // Replace with actual image URL or file path
      isEditing: false,
      newPassword: "",
      username: "",
      confirmPassword: "",
      showNewPassword: false,
      showConfirmPassword: false,
    },
    {
      id: 4,
      name: "Music Club",
      photo: "#", // Replace with actual image URL or file path
      isEditing: false,
      newPassword: "",
      username: "",
      confirmPassword: "",
      showNewPassword: false,
      showConfirmPassword: false,
    },
  ]);
  const [showNewClubForm, setShowNewClubForm] = useState(false);
  const [newClubData, setNewClubData] = useState({
    name: "",
    username: "",
    password: "",
  });

  const togglePasswordVisibility = (clubId, field) => {
    setClubs((prevClubs) =>
      prevClubs.map((club) =>
        club.id === clubId ? { ...club, [field]: !club[field] } : club
      )
    );
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this club?")) {
      setClubs((prevClubs) => prevClubs.filter((club) => club.id !== id));
    }
  };

  const handleStartEditing = (id) => {
    setClubs((prevClubs) =>
      prevClubs.map((club) =>
        club.id === id ? { ...club, isEditing: true } : club
      )
    );
  };

  const handleConfirmEdit = (id) => {
    setClubs((prevClubs) =>
      prevClubs.map((club) => {
        if (club.id === id) {
          if (club.newPassword === club.confirmPassword) {
            return {
              ...club,
              isEditing: false,
              username: "",
              newPassword: "",
              confirmPassword: "",
            };
          } else {
            alert("Passwords do not match.");
          }
        }
        return club;
      })
    );
  };

  const handleCancelEdit = (id) => {
    setClubs((prevClubs) =>
      prevClubs.map((club) => {
        if (club.id === id) {
          return {
            ...club,
            isEditing: false,
            username: "",
            newPassword: "",
            confirmPassword: "",
          };
        }
        return club;
      })
    );
  };

  const handleInputChange = (id, field, value) => {
    setClubs((prevClubs) =>
      prevClubs.map((club) =>
        club.id === id ? { ...club, [field]: value } : club
      )
    );
  };

  const handleAddNewClub = () => {
    setShowNewClubForm(true);
  };

  const handleNewClubInputChange = (field, value) => {
    setNewClubData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSaveNewClub = () => {
    if (!newClubData.name || !newClubData.username || !newClubData.password) {
      alert("All fields are required.");
      return;
    }

    setClubs((prevClubs) => [
      ...prevClubs,
      {
        id: Date.now(),
        name: newClubData.name,
        photo: "#", // Placeholder photo URL
        isEditing: false,
        newPassword: "",
        confirmPassword: "",
      },
    ]);

    setNewClubData({ name: "", username: "", password: "" });
    setShowNewClubForm(false);
  };

  return (
    <div className=" bg-gray-100 min-h-screen lg:px-8 py-8 px-3">
      <h1 className="text-4xl font-semibold text-center mb-8 text-red-800">
        Edit Clubs
      </h1>

      {/* Clubs List */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:gap-6 gap-2">
        {clubs.map((club) => (
          <div
            key={club.id}
            className="bg-white shadow-lg rounded-lg p-4 items-center space-x-4 grid grid-cols-12 justify-center"
            style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.35)" }}
          >
            <img
              src={club.photo}
              alt={club.name}
              className={`h-28 w-28 object-cover rounded-full border mx-auto ${
                club.isEditing ? "lg:col-span-3 col-span-6" : "col-span-4"
              }`}
            />
            <div
              className={` ${
                club.isEditing ? "lg:col-span-3 col-span-6" : "col-span-4"
              }`}
            >
              <h3 className="text-lg font-semibold ">{club.name}</h3>
            </div>
            {club.isEditing ? (
              <div className="col-span-12 lg:col-span-6 flex flex-col gap-2 mt-4">
                <input
                  type="text"
                  placeholder="Username"
                  value={club.username}
                  onChange={(e) =>
                    handleInputChange(club.id, "username", e.target.value)
                  }
                  className="px-2 py-1 border rounded-md w-full"
                />
                <div className="relative">
                  <input
                    type={club.showNewPassword ? "text" : "password"}
                    placeholder="New Password"
                    value={club.newPassword}
                    onChange={(e) =>
                      handleInputChange(club.id, "newPassword", e.target.value)
                    }
                    className="px-2 py-1 border rounded-md w-full"
                  />
                  <span
                    onClick={() =>
                      togglePasswordVisibility(club.id, "showNewPassword")
                    }
                    className="absolute right-2 top-2 cursor-pointer text-gray-500"
                  >
                    {club.showNewPassword ? (
                      <FaEye className="text-xl" />
                    ) : (
                      <FaEyeSlash className="text-xl" />
                    )}
                  </span>
                </div>
                <div className="relative">
                  <input
                    type={club.showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    value={club.confirmPassword}
                    onChange={(e) =>
                      handleInputChange(
                        club.id,
                        "confirmPassword",
                        e.target.value
                      )
                    }
                    className="px-2 py-1 border rounded-md w-full"
                  />
                  <span
                    onClick={() =>
                      togglePasswordVisibility(club.id, "showConfirmPassword")
                    }
                    className="absolute right-2 top-2 cursor-pointer text-gray-500"
                  >
                    {club.showConfirmPassword ? (
                      <FaEye className="text-xl" />
                    ) : (
                      <FaEyeSlash className="text-xl" />
                    )}
                  </span>
                </div>
                <div className="grid-cols-12 grid gap-2">
                  <button
                    onClick={() => handleConfirmEdit(club.id)}
                    className="px-4 py-2 col-span-6 bg-green-700 text-white rounded-md shadow-md hover:bg-green-900"
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => handleCancelEdit(club.id)}
                    className="px-4 py-2 col-span-6 bg-red-700 text-white rounded-md shadow-md hover:bg-red-800"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col space-y-2 col-span-4">
                <button
                  onClick={() => handleStartEditing(club.id)}
                  className="p-2 lg:px-4 lg:py-2 bg-blue-700 text-white rounded-md shadow-md max-w-28 lg:max-w-none hover:bg-blue-800"
                >
                  Change Credentials
                </button>
                <button
                  onClick={() => handleDelete(club.id)}
                  className="p-2 lg:px-4 lg:py-2 bg-red-700 text-white rounded-md shadow-md max-w-28 lg:max-w-none hover:bg-red-800"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Add New Club Button */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={handleAddNewClub}
          className="px-6 py-3 bg-green-700 text-white rounded-md shadow-lg hover:bg-green-900"
        >
          Add New Club
        </button>
      </div>

      {/* New Club Form */}
      {showNewClubForm && (
        <div className="mt-8 bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Add New Club
          </h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Club Name"
              value={newClubData.name}
              onChange={(e) => handleNewClubInputChange("name", e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="Username"
              value={newClubData.username}
              onChange={(e) =>
                handleNewClubInputChange("username", e.target.value)
              }
              className="w-full px-3 py-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="password"
              value={newClubData.password}
              onChange={(e) =>
                handleNewClubInputChange("password", e.target.value)
              }
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mt-4 flex justify-end space-x-2">
            <button
              onClick={() => setShowNewClubForm(false)}
              className="px-4 py-2 bg-red-700 text-white rounded-md shadow-md hover:bg-red-800"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveNewClub}
              className="px-4 py-2 bg-green-700 text-white rounded-md shadow-md hover:bg-green-900"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClubsPage;
