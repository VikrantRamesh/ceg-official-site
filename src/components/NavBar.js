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
    if(tabName === 'home'){
      setIsMobileMenuOpen(false);
    }
    setActiveDropdown(null);
    
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
            <span className="lg:text-2xl text-xl font-bold tracking-wide">CEG CAMPUS</span>
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
              <div className="absolute left-1/2 transform -translate-x-1/2 w-48 bg-white text-black rounded shadow-lg z-50">
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
              <div className="absolute left-1/2 transform -translate-x-1/2  w-48 bg-white text-black rounded shadow-lg z-50">
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
              <div className="absolute left-1/2 transform -translate-x-1/2  w-72 bg-white text-black rounded shadow-lg z-50">
                <a href="#" className="block px-4 py-2 hover:bg-gray-200" onClick={() => handleTabClick('academics')}>Center for Admissions (UG/PG)</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200" onClick={() => handleTabClick('academics')}>Departments</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200" onClick={() => handleTabClick('academics')}>Courses Offered</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200" onClick={() => handleTabClick('academics')}>Curriculum and syllabi</a>
              </div>
            )}
          </div>

        </div>


        {/* Mobile hamburger menu */}
        <div className="space-y-1 group lg:hidden mr-6">
          <button className="focus:outline-none" onClick={toggleMobileMenu}>
            <span className="text-2xl">☰</span>
          </button>
        </div>
      </nav>

      <nav className="hidden lg:flex items-center p-1 shadow-md justify-center	bg-red-800 pt-2 pb-2" style={{ color: '#fff' }}>
        <div className="hidden lg:flex items-center space-x-4 mr-8 justify-end">
         
          <div 
            className="relative" 
            onMouseEnter={() => handleMouseEnter('student-activity')} 
            onMouseLeave={handleMouseLeave}
          >
            <button className={`flex items-center mr-3 border-b-4 border-red-800 text-white font-semibold  transition-all hover:font-bold hover:border-b-4 hover:border-white duration-100 focus:outline-none ${currentTab === 'student-activity' ? 'text-red-800 font-bold border-white' : ''}`}>
              Students Activities
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {activeDropdown === 'student-activity' && (
              <div className="absolute left-1/2 transform -translate-x-1/2 w-72 bg-white text-white rounded shadow-lg z-50">
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('student-activity')}>Sport Board</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('student-activity')}>YRC (Youth Red Cross)</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('student-activity')}>NSS (National Service Scheme)</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('student-activity')}>NCC (National Cadet Corps)</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('student-activity')}>NSO (National Sports Organisation)</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('student-activity')}>Students Quality Club</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('student-activity')}>Festivals</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('student-activity')}>CLubs and Societies</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('student-activity')}>Green Brigade (Environmental Sustainability)</a>            
              </div>
            )}
          </div>

          <div 
            className="relative" 
            onMouseEnter={() => handleMouseEnter('student-needs')} 
            onMouseLeave={handleMouseLeave}
          >
            <button className={`flex items-center mr-3 border-b-4 border-red-800 text-white font-semibold   transition-all hover:font-bold hover:border-b-4 hover:border-white duration-100 focus:outline-none ${currentTab === 'student-needs' ? 'text-red-800 font-bold border-b-4 border-white' : ''}`}>
              Students Needs
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* About Us Dropdown Menu */}
            {activeDropdown === 'student-needs' && (
              <div className="absolute left-1/2 transform -translate-x-1/2 w-96 bg-white text-white rounded shadow-lg z-50">
              <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('student-needs')}>ACOE (Additional Controller of Examinations)</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('student-needs')}>Centre for e-Governance</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('student-needs')}>Centre for International Relations</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('student-needs')}>Alumni</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('student-needs')}>Library</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('student-needs')}>Placement Cell</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('student-needs')}>Centre for Student Affairs</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('student-needs')}>CPDE (Centre for Professional Development Education)</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('student-needs')}>Health Centre</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('student-needs')}>POSH (Prevention of Sexual Harassment Cell)</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('student-needs')}>SC/ST Cell</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('student-needs')}>Logistics Centre</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('student-needs')}>CIPR (Centre for Intellectual Property Rights)</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('student-needs')}>Students Grievance Redressal</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('student-needs')}>Anti Ragging</a>
              <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('student-needs')}>Professional Ethics</a>
              </div>
            )}
          </div>

          <div 
            className="relative" 
            onMouseEnter={() => handleMouseEnter('research')} 
            onMouseLeave={handleMouseLeave}
          >
            <button className={`flex items-center mr-3 border-b-4 border-red-800 text-white font-semibold   transition-all hover:font-bold hover:border-b-4 hover:border-white duration-100 focus:outline-none ${currentTab === 'research' ? 'text-red-800 font-bold border-b-4 border-white' : ''}`}>
              Research
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {activeDropdown === 'research' && (
              <div className="absolute left-1/2 transform -translate-x-1/2 w-72 bg-white text-white rounded shadow-lg z-50">
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('research')}>Doing Research in CEG</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('research')}>Centre for Research in University</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('research')}>Dedicated Research Centers</a>
              </div>
            )}
          </div>

          <a href="https://ceg.annauniv.edu/ceghostel/" className={`text-white font-semibold  mr-3 border-b-4 border-red-800  transition-all hover:font-bold hover:border-b-4 hover:border-white duration-100 ${currentTab === 'hostel' ? 'text-red-800 font-bold border-b-4 border-white' : ''}`}>CEG Hostel</a>
         
          <div 
            className="relative" 
            onMouseEnter={() => handleMouseEnter('forms')} 
            onMouseLeave={handleMouseLeave}
          >
            <button className={`flex items-center mr-3 text-white font-semibold  border-b-4 border-red-800  transition-all hover:font-bold hover:border-b-4 hover:border-white duration-100 focus:outline-none ${currentTab === 'forms' ? 'text-red-800 font-bold border-b-4 border-white' : ''}`}>
            Download Forms
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* About Us Dropdown Menu */}
            {activeDropdown === 'forms' && (
              <div className="absolute left-1/2 transform -translate-x-1/2  w-72 bg-white text-white rounded shadow-lg z-50">
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('forms')}>Discontinue</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('forms')}>No Dues</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('forms')}>TC Application</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('forms')}>Anti-Ragging Application</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('forms')}>On Duty Application Form</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('forms')}>Student Internship Application</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('forms')}>Condemnation Format</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('forms')}>Monthly Progress Report for GATE Scholarship</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('forms')}>Course Discontinue Report of GATE Student</a>
              </div>
            )}
          </div>

          <div 
            className="relative" 
            onMouseEnter={() => handleMouseEnter('scholarship')} 
            onMouseLeave={handleMouseLeave}
          >
            <button className={`flex items-center mr-3 text-white font-semibold  border-b-4 border-red-800  transition-all hover:font-bold hover:border-b-4 hover:border-white duration-100 focus:outline-none ${currentTab === 'scholarship' ? 'text-red-800 font-bold border-b-4 border-white' : ''}`}>
            Scholarship
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* About Us Dropdown Menu */}
            {activeDropdown === 'scholarship' && (
              <div className="absolute left-1/2 transform -translate-x-1/2  w-72 bg-white text-white rounded shadow-lg z-50">
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('scholarship')}>Central Sector (UG/PG)</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('scholarship')}>Private/Alumni (UG)</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('scholarship')}>Endowments (UG)</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('scholarship')}>BC/MBC Regular (UG)</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('scholarship')}>BC/MBC Regular (PG)</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('scholarship')}>SC/ST Regular (UG)</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('scholarship')}>SC/ST Regular (PG)</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('scholarship')}>SC/ST (PMSS) Self-Support (UG)</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('scholarship')}>SC/ST (PMSS) Self-Support (PG)</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => handleTabClick('scholarship')}>SC/ST Special Loan for Hostel Fee (UG/PG)</a>
              </div>
            )}
          </div>

        </div>
      </nav>

     {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="top-full left-0 right-0 bg-slate-100 shadow-lg">
          <div className="flex flex-col space-y-2 p-4 items-baseline	">
            <a href="#" className={`text-black font-bold mr-3 hover:text-red-800 transition-all hover:font-bold ${currentTab === 'home' ? 'text-red-800 ' : ''}`} onClick={() => handleTabClick('home')}>Home</a>

            <button 
              className={`text-black font-bold mr-3 hover:text-red-800 transition-all hover:font-bold ${currentTab === 'about' ? 'text-red-800 ' : ''}`}
              onClick={() => handleTabClick('about')}
            >
              About Us
            </button>

            {currentTab === 'about' && (
              <div className="flex flex-col space-y-1 pl-6 items-baseline">
                <a href="#" className="block px-4 py-1 hover:bg-gray-200" onClick={() => {handleTabClick('about'); setIsMobileMenuOpen(false)}}>Profile</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200" onClick={() => {handleTabClick('about'); setIsMobileMenuOpen(false)}}>History</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200" onClick={() => {handleTabClick('about'); setIsMobileMenuOpen(false)}}>Mission & Vision</a>
              </div>
            )}

            
            
            <button 
              className={`text-black font-bold mr-3 hover:text-red-800 transition-all hover:font-bold ${currentTab === 'dean-desk' ? 'text-red-800 ' : ''}`}
              onClick={() => handleTabClick('dean-desk')}
            >
              Dean Desk
            </button>

            {currentTab === 'dean-desk' && (
              <div className="flex flex-col space-y-1 pl-6 items-baseline">
                <a href="#" className="block px-4 py-1 hover:bg-gray-200" onClick={() => {handleTabClick('dean-desk'); setIsMobileMenuOpen(false)}}>Dean Profile</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200" onClick={() => {handleTabClick('dean-desk'); setIsMobileMenuOpen(false)}}>Dean Office Staff Members</a>
              </div>
            )}
            

            <button 
              className={`text-black font-bold mr-3 hover:text-red-800 transition-all hover:font-bold ${currentTab === 'academics' ? 'text-red-800 ' : ''}`}
              onClick={() => handleTabClick('academics')}
            >
              Academics & Admissions
            </button>

            {currentTab === 'academics' && (
              <div className="flex flex-col space-y-1 pl-6 items-baseline">
                <a href="#" className="block px-4 py-1 hover:bg-gray-200" onClick={() => {handleTabClick('academics'); setIsMobileMenuOpen(false)}}>Center for Admissions (UG/PG)</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200" onClick={() => {handleTabClick('academics'); setIsMobileMenuOpen(false)}}>Departments</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200" onClick={() => {handleTabClick('academics'); setIsMobileMenuOpen(false)}}>Courses Offered</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200" onClick={() => {handleTabClick('academics'); setIsMobileMenuOpen(false)}}>Curriculum and syllabi</a>
              </div>
            )}

            <button className={`text-black font-bold mr-3 hover:text-red-800 transition-all hover:font-bold ${currentTab === 'student-activity' ? 'text-red-800 ' : ''}`}
              onClick={() => handleTabClick('student-activity')}>
              Students Activities
            </button>

            {currentTab === 'student-activity' && (
              <div className="flex flex-col space-y-1 pl-6 items-baseline">                
                <a href="#" className="block px-4 py-1 hover:bg-gray-200" onClick={() => {handleTabClick('student-activity'); setIsMobileMenuOpen(false)}}>Sport Board</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200" onClick={() => {handleTabClick('student-activity'); setIsMobileMenuOpen(false)}}>YRC (Youth Red Cross)</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200" onClick={() => {handleTabClick('student-activity'); setIsMobileMenuOpen(false)}}>NSS (National Service Scheme)</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200" onClick={() => {handleTabClick('student-activity'); setIsMobileMenuOpen(false)}}>NCC (National Cadet Corps)</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200" onClick={() => {handleTabClick('student-activity'); setIsMobileMenuOpen(false)}}>NSO (National Sports Organisation)</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200" onClick={() => {handleTabClick('student-activity'); setIsMobileMenuOpen(false)}}>Students Quality Club</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200" onClick={() => {handleTabClick('student-activity'); setIsMobileMenuOpen(false)}}>Festivals</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200" onClick={() => {handleTabClick('student-activity'); setIsMobileMenuOpen(false)}}>CLubs and Societies</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200" onClick={() => {handleTabClick('student-activity'); setIsMobileMenuOpen(false)}}>Green Brigade (Environmental Sustainability)</a>            
              </div>
            )}

            <button className={`text-black font-bold mr-3 hover:text-red-800 transition-all hover:font-bold ${currentTab === 'student-needs' ? 'text-red-800 ' : ''}`}
              onClick={() => handleTabClick('student-needs')}>
             Students Needs 
            </button>

            {currentTab === 'student-needs' && (
              <div className="flex flex-col space-y-1 pl-6 items-baseline">                
                  <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() =>{ handleTabClick('student-needs'); setIsMobileMenuOpen(false)}}>ACOE (Additional Controller of Examinations)</a>
                  <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() =>{ handleTabClick('student-needs'); setIsMobileMenuOpen(false)}}>Centre for e-Governance</a>
                  <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() =>{ handleTabClick('student-needs'); setIsMobileMenuOpen(false)}}>Centre for International Relations</a>
                  <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() =>{ handleTabClick('student-needs'); setIsMobileMenuOpen(false)}}>Alumni</a>
                  <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() =>{ handleTabClick('student-needs'); setIsMobileMenuOpen(false)}}>Library</a>
                  <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() =>{ handleTabClick('student-needs'); setIsMobileMenuOpen(false)}}>Placement Cell</a>
                  <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() =>{ handleTabClick('student-needs'); setIsMobileMenuOpen(false)}}>Centre for Student Affairs</a>
                  <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() =>{ handleTabClick('student-needs'); setIsMobileMenuOpen(false)}}>CPDE (Centre for Professional Development Education)</a>
                  <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() =>{ handleTabClick('student-needs'); setIsMobileMenuOpen(false)}}>Health Centre</a>
                  <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() =>{ handleTabClick('student-needs'); setIsMobileMenuOpen(false)}}>POSH (Prevention of Sexual Harassment Cell)</a>
                  <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() =>{ handleTabClick('student-needs'); setIsMobileMenuOpen(false)}}>SC/ST Cell</a>
                  <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() =>{ handleTabClick('student-needs'); setIsMobileMenuOpen(false)}}>Logistics Centre</a>
                  <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() =>{ handleTabClick('student-needs'); setIsMobileMenuOpen(false)}}>CIPR (Centre for Intellectual Property Rights)</a>
                  <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() =>{ handleTabClick('student-needs'); setIsMobileMenuOpen(false)}}>Students Grievance Redressal</a>
                  <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() =>{ handleTabClick('student-needs'); setIsMobileMenuOpen(false)}}>Anti Ragging</a>
                  <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() =>{ handleTabClick('student-needs'); setIsMobileMenuOpen(false)}}>Professional Ethics</a>
              </div>
            )}

            <button className={`text-black font-bold mr-3 hover:text-red-800 transition-all hover:font-bold ${currentTab === 'research' ? 'text-red-800 ' : ''}`}
              onClick={() => handleTabClick('research')}>
             Research 
            </button>

            {currentTab === 'research' && (
              <div className="flex flex-col space-y-1 pl-6 items-baseline">                
                 <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => {handleTabClick('research'); setIsMobileMenuOpen(false)}}>Doing Research in CEG</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => {handleTabClick('research'); setIsMobileMenuOpen(false)}}>Centre for Research in University</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => {handleTabClick('research'); setIsMobileMenuOpen(false)}}>Dedicated Research Centers</a>
              </div>
            )}
           

            <button className={`text-black font-bold mr-3 hover:text-red-800 transition-all hover:font-bold ${currentTab === 'forms' ? 'text-red-800 ' : ''}`}
              onClick={() => handleTabClick('forms')}>
             Download Forms 
            </button>

            {currentTab === 'forms' && (
              <div className="flex flex-col space-y-1 pl-6 items-baseline">                
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => {handleTabClick('forms'); setIsMobileMenuOpen(false)}}>Discontinue</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => {handleTabClick('forms'); setIsMobileMenuOpen(false)}}>No Dues</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => {handleTabClick('forms'); setIsMobileMenuOpen(false)}}>TC Application</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => {handleTabClick('forms'); setIsMobileMenuOpen(false)}}>Anti-Ragging Application</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => {handleTabClick('forms'); setIsMobileMenuOpen(false)}}>On Duty Application Form</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => {handleTabClick('forms'); setIsMobileMenuOpen(false)}}>Student Internship Application</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => {handleTabClick('forms'); setIsMobileMenuOpen(false)}}>Condemnation Format</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => {handleTabClick('forms'); setIsMobileMenuOpen(false)}}>Monthly Progress Report for GATE Scholarship</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => {handleTabClick('forms'); setIsMobileMenuOpen(false)}}>Course Discontinue Report of GATE Student</a>
              </div>
            )}

            <button className={`text-black font-bold mr-3 hover:text-red-800 transition-all hover:font-bold ${currentTab === 'scholarship' ? 'text-red-800 ' : ''}`}
              onClick={() => handleTabClick('scholarship')}>
                Scholarship
            </button>

            {currentTab === 'scholarship' && (
              <div className="flex flex-col space-y-1 pl-6 items-baseline">                
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => {handleTabClick('scholarship'); setIsMobileMenuOpen(false)}}>Central Sector (UG/PG)</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => {handleTabClick('scholarship'); setIsMobileMenuOpen(false)}}>Private/Alumni (UG)</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => {handleTabClick('scholarship'); setIsMobileMenuOpen(false)}}>Endowments (UG)</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => {handleTabClick('scholarship'); setIsMobileMenuOpen(false)}}>BC/MBC Regular (UG)</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => {handleTabClick('scholarship'); setIsMobileMenuOpen(false)}}>BC/MBC Regular (PG)</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => {handleTabClick('scholarship'); setIsMobileMenuOpen(false)}}>SC/ST Regular (UG)</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => {handleTabClick('scholarship'); setIsMobileMenuOpen(false)}}>SC/ST Regular (PG)</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => {handleTabClick('scholarship'); setIsMobileMenuOpen(false)}}>SC/ST (PMSS) Self-Support (UG)</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => {handleTabClick('scholarship'); setIsMobileMenuOpen(false)}}>SC/ST (PMSS) Self-Support (PG)</a>
                <a href="#" className="block px-4 py-1 hover:bg-gray-200 text-black" onClick={() => {handleTabClick('scholarship'); setIsMobileMenuOpen(false)}}>SC/ST Special Loan for Hostel Fee (UG/PG)</a>
              </div>
            )}
           


          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
