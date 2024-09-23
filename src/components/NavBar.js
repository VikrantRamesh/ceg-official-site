import React, { useState } from 'react';
import CEGLogo from '../assets/images/CEG_col.png';

const Navbar = ({ currentTab, setCurrentTab }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleTabClick = (tabName) => {
    setCurrentTab(tabName);
    setIsMobileMenuOpen(false);
    if(tabName == 'home'){
      setActiveDropdown(null);
    }
  };

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <nav className="flex justify-between items-center p-1 bg-white shadow-md" style={{ color: '#7d2329' }}>
        <div className="flex items-center">
          <img src={CEGLogo} alt="CEG Logo" className="h-12 mr-6 ml-6 mt-1 mb-2" style={{ height: '8vh' }} />
          <div className="flex flex-col">
            <span className="text-xl font-bold">CEG CAMPUS</span>
            <span className="text-sm">Anna University, Chennai</span>
            <span className="text-xs">(AISHE Code: C-25072)</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-4 mr-8">
          <a href="#" className={`text-black font-bold mr-3 hover:text-red-800 transition-all hover:font-bold hover:border-b-4 hover:border-red-800 duration-100 ${currentTab === 'home' ? 'text-red-800 font-bold border-b-4 border-red-800' : ''}`} onClick={() => handleTabClick('home')}>Home</a>

          <div 
            className="relative" 
            onMouseEnter={() => handleMouseEnter('about')} 
            onMouseLeave={handleMouseLeave}
          >
            <button className={`flex items-center mr-3 text-black font-bold hover:text-red-800 transition-all hover:font-bold hover:border-b-4 hover:border-red-800 duration-100 focus:outline-none ${currentTab === 'about' ? 'text-red-800 font-bold border-b-4 border-red-800' : ''}`}>
              About Us
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* About Us Dropdown Menu */}
            {activeDropdown === 'about' && (
              <div className="absolute left-1/2 transform -translate-x-1/2 w-48 bg-white text-black rounded shadow-lg">
                <a href="#" className="block px-4 py-2 hover:bg-gray-200" onClick={() => handleTabClick('about')}>Profile</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200" onClick={() => handleTabClick('about')}>History</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200" onClick={() => handleTabClick('about')}>Mission & Vision</a>
              </div>
            )}
          </div>

          <div 
            className="relative" 
            onMouseEnter={() => handleMouseEnter('dean-desk')} 
            onMouseLeave={handleMouseLeave}
          >
            <button className={`flex items-center mr-3 text-black font-bold hover:text-red-800 transition-all hover:font-bold hover:border-b-4 hover:border-red-800 duration-100 focus:outline-none ${currentTab === 'dean-desk' ? 'text-red-800 font-bold border-b-4 border-red-800' : ''}`}>
            Dean Desk
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* About Us Dropdown Menu */}
            {activeDropdown === 'dean-desk' && (
              <div className="absolute left-1/2 transform -translate-x-1/2  w-48 bg-white text-black rounded shadow-lg">
                <a href="#" className="block px-4 py-2 hover:bg-gray-200" onClick={() => handleTabClick('dean-desk')}>Dean Profile</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200" onClick={() => handleTabClick('dean-desk')}>Dean Office Staff Members</a>
              </div>
            )}
          </div>

          <div 
            className="relative" 
            onMouseEnter={() => handleMouseEnter('academics')} 
            onMouseLeave={handleMouseLeave}
          >
            <button className={`flex items-center mr-3 text-black font-bold hover:text-red-800 transition-all hover:font-bold hover:border-b-4 hover:border-red-800 duration-100 focus:outline-none ${currentTab === 'academics' ? 'text-red-800 font-bold border-b-4 border-red-800' : ''}`}>
            Academics & Admissions
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* About Us Dropdown Menu */}
            {activeDropdown === 'academics' && (
              <div className="absolute left-1/2 transform -translate-x-1/2  w-72 bg-white text-black rounded shadow-lg">
                <a href="#" className="block px-4 py-2 hover:bg-gray-200" onClick={() => handleTabClick('academics')}>Center for Admissions (UG/PG)</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200" onClick={() => handleTabClick('academics')}>Departments</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200" onClick={() => handleTabClick('academics')}>Courses Offered</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200" onClick={() => handleTabClick('academics')}>Curriculum and syllabi</a>
              </div>
            )}
          </div>

        </div>



        <div className="space-y-1 group lg:hidden">
          <button className="focus:outline-none" onClick={toggleMobileMenu}>
            <span className="text-2xl">☰</span>
          </button>
        </div>
      </nav>

     {/* Mobile Menu */}
{isMobileMenuOpen && (
  <div className="top-full left-0 right-0 bg-white shadow-lg">
    <div className="flex flex-col space-y-2 p-4">
      <a href="#" className="text-black font-bold hover:text-red-800 transition-all duration-100" onClick={() => handleTabClick('home')}>Home</a>
      <a href="#" className="text-black font-bold hover:text-red-800 transition-all duration-100" onClick={() => handleTabClick('about')}>About</a>

      <div className="flex flex-col">
        <button 
          className={`flex items-center text-black font-bold hover:text-red-800 transition-all duration-100 focus:outline-none ${currentTab === 'services' ? 'text-red-800 font-bold' : ''}`} 
          onClick={() => handleTabClick('services')}
        >
          Services
        </button>

        {/* Services Subsection */}
        {currentTab === 'services' && (
          <div className="flex flex-col space-y-1 pl-4">
            <a href="#" className="block text-black hover:bg-gray-200 p-2">Service 1</a>
            <a href="#" className="block text-black hover:bg-gray-200 p-2">Service 2</a>
            <a href="#" className="block text-black hover:bg-gray-200 p-2">Service 3</a>
          </div>
        )}
      </div>
      
    </div>
  </div>
)}
    </>
  );
};

export default Navbar;
