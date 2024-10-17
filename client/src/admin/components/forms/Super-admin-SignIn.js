import React, { useState } from "react";

const SuperadminSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = {};

    if (!email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Invalid email format";
    }

    if (!password) {
      formErrors.password = "Password is required";
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      alert("Form submitted successfully!");
      setEmail("");
      setPassword("");
      setErrors({});
    }
  };

  const handleInputChange = (field, value) => {
    if (field === "email") setEmail(value);
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
                htmlFor="email"
                className="w-24 inline-block text-right mr-4 text-gray-500"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="login@cegtechforum.in"
                className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
              />
            </div>
            {errors.email && (
              <p className="text-sm text-red-500 text-right mb-2">
                {errors.email}
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
