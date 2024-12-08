import React, { useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const UserProfile = () => {
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const handleSubmit = async () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("New password and confirm password do not match.");
      return;
    }

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/club/change-password`,
        {
          currentPassword: passwordData.currentPassword,
          newPassword: passwordData.newPassword,
        },
        { withCredentials: true }
      );
      alert("Password changed successfully!");
    } catch (error) {
      console.error("Error changing password: ", error);
      alert("Failed to change password. Please try again.");
    }
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6  max-w-screen-lg mx-auto">
        Change Password
      </h1>

      <form
        className="bg-white shadow-md rounded p-6 space-y-4  max-w-screen-lg mx-auto"
        onSubmit={(e) => e.preventDefault()}
      >
        <div>
          <label className="block mb-1">Current Password</label>
          <div className="relative">
            <input
              type={showPassword.currentPassword ? "text" : "password"}
              name="currentPassword"
              value={passwordData.currentPassword}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <span
              onClick={() => togglePasswordVisibility("currentPassword")}
              className="absolute right-2 top-2 cursor-pointer text-gray-500"
            >
              {showPassword.currentPassword ? (
                <FaEye className="text-xl" />
              ) : (
                <FaEyeSlash className="text-xl" />
              )}
            </span>
          </div>
        </div>
        <div>
          <label className="block mb-1">New Password</label>
          <div className="relative">
            <input
              type={showPassword.newPassword ? "text" : "password"}
              name="newPassword"
              value={passwordData.newPassword}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <span
              onClick={() => togglePasswordVisibility("newPassword")}
              className="absolute right-2 top-2 cursor-pointer text-gray-500"
            >
              {showPassword.newPassword ? (
                <FaEye className="text-xl" />
              ) : (
                <FaEyeSlash className="text-xl" />
              )}
            </span>
          </div>
        </div>
        <div>
          <label className="block mb-1">Confirm New Password</label>
          <div className="relative">
            <input
              type={showPassword.confirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={passwordData.confirmPassword}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <span
              onClick={() => togglePasswordVisibility("confirmPassword")}
              className="absolute right-2 top-2 cursor-pointer text-gray-500"
            >
              {showPassword.confirmPassword ? (
                <FaEye className="text-xl" />
              ) : (
                <FaEyeSlash className="text-xl" />
              )}
            </span>
          </div>
        </div>
        <div className="text-right mt-4">
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Change Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserProfile;
