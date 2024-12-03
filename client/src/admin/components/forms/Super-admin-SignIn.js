import React, { useState } from "react";
import axios from 'axios';

const SuperadminSignIn = () => {
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
    <div className="w-full">
      <h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-10">
        Club Sign in
      </h2>
      <div className="flex items-center justify-center">
        <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
          {/* <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
          Super Admin Sign In
        </h2> */}
          <form onSubmit={handleSubmit}>
            <div className="flex items-center mb-5">
              <label
                htmlFor="username"
                className="w-24 inline-block text-right mr-4 text-gray-500"
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
                className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
              />
            </div>
            {errors.username && (
              <p className="text-sm text-red-500 text-right mb-2">
                {errors.username}
              </p>
            )}

            <div className="flex items-center mb-5">
              <label
                htmlFor="password"
                className="w-24 inline-block text-right mr-4 text-gray-500"
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
                className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
              />
            </div>
            {errors.password && (
              <p className="text-sm text-red-500 text-right mb-2">
                {errors.password}
              </p>
            )}

            <div className="text-right">
              <button
                type="submit"
                className="py-2 px-4 bg-green-500 text-white font-bold rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SuperadminSignIn;
