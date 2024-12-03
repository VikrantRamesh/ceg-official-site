import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ClubSignin from "../components/forms/Club-Signin";
import SuperadminSignIn from "../components/forms/Super-admin-SignIn";

const Club = () => {
  return (
    <div className="p-8">
      <nav>
        <ul className="flex justify-center space-x-4 mb-4">
          <li>
            <Link to="signin" className="text-blue-500 hover:underline">
              Club Sign In
            </Link>
          </li>
          <li>
            <Link to="superadmin" className="text-blue-500 hover:underline">
              Super Admin Sign In
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="signin" element={<ClubSignin />} />
        <Route path="superadmin" element={<SuperadminSignIn />} />
      </Routes>
    </div>
  );
};

export default Club;
