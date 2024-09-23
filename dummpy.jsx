import React, { useState } from 'react';
import CEGLogo from '../assets/images/CEG_col.png';

const Navbar = () => {
    const [dropdown, setDropdown] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
  
    const handleMouseEnter = (menu) => {
      setDropdown(menu);
    };
  
    const handleMouseLeave = () => {
      setDropdown(null);
    };
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    const navItems = [
      { name: "ALVERNO NEWS", dropdown: ["News 1", "News 2", "News 3"] },
      { name: "ATHLETICS", dropdown: ["Team 1", "Team 2"] },
      { name: "VISIT", dropdown: ["Campus Tour", "Virtual Tour"] },
      { name: "EVENTS", dropdown: [] },
      { name: "ALUMNAE", dropdown: [] },
      { name: "GIVE", dropdown: [] },
    ];
  
    return (
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <a href="#" className="text-lg font-bold text-brown-700">
              <img
                src="https://example.com/logo.png"
                alt="Alverno College Logo"
                className="h-12"
              />
            </a>
            {/* Hamburger Menu (Mobile) */}
            <div className="block lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
            {/* Full Menu (Desktop) */}
            <div className="hidden lg:flex space-x-8">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href="#"
                    className={`text-gray-700 hover:underline hover:text-red-600 ${
                      dropdown === item.name ? "border-b-4 border-red-600" : ""
                    }`}
                  >
                    {item.name}
                  </a>
                  {dropdown === item.name && item.dropdown.length > 0 && (
                    <div className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                      <ul>
                        {item.dropdown.map((subItem, subIndex) => (
                          <li
                            key={subIndex}
                            className="px-4 py-2 hover:bg-gray-100 text-gray-700"
                          >
                            {subItem}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* Apply Now Button */}
            <a
              href="#"
              className="hidden lg:block bg-yellow-400 text-red-600 font-semibold px-4 py-2 rounded hover:bg-yellow-500"
            >
              APPLY NOW
            </a>
          </div>
          {/* Mobile Menu */}
          {menuOpen && (
            <div className="lg:hidden">
              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <div key={index} className="relative">
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:underline hover:text-red-600"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
                {/* Apply Now Button (Mobile) */}
                <a
                  href="#"
                  className="block bg-yellow-400 text-red-600 font-semibold px-4 py-2 rounded hover:bg-yellow-500"
                >
                  APPLY NOW
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    );
  };
export default Navbar;