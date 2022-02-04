import { NavLink } from "react-router-dom";
import React from "react";

function Navbar({ user }) {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
  return (
    <>
      <nav className="bg-white shadow-sm">
        <div className="max-w-8xl mx-auto  px-8">
          <div className="flex justify-between">
            <div className="flex space-x-4 flex-row  ">
              {/* Logo */}
              <div className="flex items-center py-6 px-2 text-gray-700 hover:text-gray-900">
                <NavLink to="/" className="flex flex-row ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-purple-700 mr-2 h-7 w-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                  <span className="font-bold text-xl md:text-2xl text-gradient ">DevHub</span>
                </NavLink>
              </div>
            </div>
            {user ? (
              <div className="py-7 text-xl font-medium">
                <NavLink
                  to="/login"
                  onClick={logout}
                  className="mr-4 text-white bg-red-500 hover:bg-red-400 py-2  px-2 rounded-md font-medium transition duration-200"
                >
                  Log out
                </NavLink>
                <NavLink
                  to="/categories"
                  className="text-white bg-purple-500 hover:bg-purple-400 rounded-md py-2 px-2 font-medium transition duration-200"
                >
                  Projects
                </NavLink>
              </div>
            ) : (
              <div className="py-7 text-xl font-medium">
               
                <NavLink
                  to="/login"
                  className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-1 md:py-2 px-4 rounded-sm text-white  transition duration-200 text-base md:text-xl"
                >
                  Login
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
