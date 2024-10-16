import React, { useState } from "react";

const ClubSignin = () => {
  const [club, setClub] = useState("Select a club");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [errors, setErrors] = useState({});

  const clubOptions = ["Football Team", "Basketball Team", "Tennis Team"];

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = {};

    if (club === "Select a club") {
      formErrors.club = "Please select a club";
    }
    if (!email) {
      formErrors.email = "Email is required";
    }
    if (!password) {
      formErrors.password = "Password is required";
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log({ club, email, password });
      alert("Form submitted successfully!");

      setClub("Select a club");
      setEmail("");
      setPassword("");
      setErrors({});
    }
  };

  const handleInputChange = (field, value) => {
    if (field === "email") setEmail(value);
    if (field === "password") setPassword(value);
    if (field === "club") setClub(value);

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
                htmlFor="club"
                className="block mb-2 font-bold text-gray-600"
              >
                Select Club
              </label>
              <div className="dropdown inline-block relative w-full">
                <button
                  type="button"
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center w-full"
                >
                  <span className="mr-1">{club}</span>
                  <svg
                    className="fill-current h-4 w-4 ml-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </button>
                {showDropdown && (
                  <ul className="dropdown-menu absolute bg-white shadow rounded text-gray-700 pt-1 w-full">
                    {clubOptions.map((option, index) => (
                      <li key={index}>
                        <button
                          type="button"
                          className={`${
                            index === 0
                              ? "rounded-t"
                              : index === clubOptions.length - 1
                              ? "rounded-b"
                              : ""
                          } bg-gray-200 hover:bg-gray-400 py-2 px-4 w-full text-left`}
                          onClick={() => {
                            handleInputChange("club", option);
                            setShowDropdown(false);
                          }}
                        >
                          {option}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {errors.club && (
                <p className="text-sm text-red-400 mt-2">{errors.club}</p>
              )}
            </div>

            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 font-bold text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="login@cegtechform.in"
                className="border border-gray-300 shadow p-3 w-full rounded"
              />
              {errors.email && (
                <p className="text-sm text-red-400 mt-2">{errors.email}</p>
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
