import React, { useState } from "react";
import axios from 'axios';

const ClubSignin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formErrors = {};

    if (!username) {
      formErrors.username = "User name is required";
    }
    if (!password) {
      formErrors.password = "Password is required";
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
        try {
          // Send POST request to backend
          const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, {
            username,
            password,
          });
          
          //redirect after successful login
          if(response.status === 200){
            alert("redirect"); //replace with redirect logic
          }

          setUsername("");
          setPassword("");
          setErrors({});
        } catch (error) {
          console.error("Error submitting form:", error);
          if( error.response.status === 401 ){
            alert("Invalid Username or Password");
          }
          else if( error.response.status === 500){
            alert("Server error");
          }
          else {
            alert("Unkown error occured");
          }
        }
    }
  };

  const handleInputChange = (field, value) => {
    if (field === "username") setUsername(value);
    if (field === "password") setPassword(value);

    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: "",
    }));
  };

  return (
    <div>
      <div className="w-full">
        <h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-10">
          Club Sign in
        </h2>
        <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="username"
                className="block mb-2 font-bold text-gray-600"
              >
                User Name
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => handleInputChange("username", e.target.value)}
                placeholder="User Name"
                className="border border-gray-300 shadow p-3 w-full rounded"
              />
              {errors.username && (
                <p className="text-sm text-red-400 mt-2">{errors.username}</p>
              )}
            </div>

            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 font-bold text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                placeholder="Password"
                className="border border-gray-300 shadow p-3 w-full rounded"
              />
              {errors.password && (
                <p className="text-sm text-red-400 mt-2">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClubSignin;
