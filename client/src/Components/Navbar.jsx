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
                  <span className="font-bold text-xl md:text-2xl text-gradient ">Codyfy</span>
                </NavLink>
              </div>
            </div>
        
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
