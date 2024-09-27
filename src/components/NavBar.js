import React, { useState } from 'react';
import CEGLogo from '../assets/images/CEG_logo.png';
import AU_logo from '../assets/images/AU_logo.png';
import '../styles/NavBar.css';
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPhone
} from "react-icons/fa"; 

const DropdownMenu = ({ label, items, currentTab, tabName, activeDropdown, setActiveDropdown, handleTabClick }) => (
  <div 
    className="relative"
    onMouseEnter={() => setActiveDropdown(tabName)}
    onMouseLeave={() => setActiveDropdown(null)}
  >
    <button className={`flex items-center mr-3 text-black font-bold hover:text-red-800 transition-all hover:font-bold hover:border-b-4 hover:border-red-800 duration-100 focus:outline-none ${
      currentTab === tabName ? 'text-red-800 font-bold border-b-4 border-red-800' : ''
    }`}>
      {label}
      { items!=null && 
      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
      }
    </button>
    {activeDropdown === tabName && items!=null && (
      <div className={`text-sm navbar-dropdown absolute left-1/2 transform -translate-x-1/2 'w-max' ${ tabName === 'student-needs' ||  tabName === 'about'   ? 'w-max' : 'w-72'} bg-white text-black rounded shadow-lg z-50`}>
        {items.map((item) => (
          <a href="#" key={item} className="block px-4 py-2 hover:bg-gray-200" onClick={() => handleTabClick(tabName)}>
            {item}
          </a>
        ))}
      </div>
    )}
  </div>
);

const CollapsibleMenu = ({ label, tabName, items, currentTab, handleTabClick, setIsMobileMenuOpen }) => (
  <div className="w-full">
    <button 
      className={`text-black font-bold mr-3 hover:text-red-800 transition-all hover:font-bold ${currentTab === tabName ? 'text-red-800 ' : ''}`}
      onClick={() => handleTabClick(tabName)}
    >
      {label}
    </button>

    {currentTab === tabName && items?.length > 0 && (
      <div className="flex flex-col space-y-1 pl-6 items-baseline">
        {items.map((item, index) => (
          <a 
            href="#" 
            key={index} 
            className="block px-4 py-1 hover:bg-gray-200 text-black" 
            onClick={() => {
              handleTabClick(tabName);
              setIsMobileMenuOpen(false);
            }}
          >
            {item}
          </a>
        ))}
      </div>
    )}
  </div>
);

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

  const menuItems = [
    {
      label: 'About Us',
      tabName: 'about',
      items: ['Profile', 'History', 'Mission & Vision'],
    },
    {
      label: 'Dean Desk',
      tabName: 'dean-desk',
      items: ['Dean Profile', 'Dean Office Staff Members'],
    },
    {
      label: 'Academics & Admissions',
      tabName: 'academics',
      items: ['Center for Admissions (UG/PG)', 'Departments', 'Courses Offered', 'Curriculum and syllabi'],
    },
    {
      label: 'Students Activities',
      tabName: 'student-activity',
      items: [
        'Sport Board', 'YRC (Youth Red Cross)', 'NSS (National Service Scheme)', 
        'NCC (National Cadet Corps)', 'NSO (National Sports Organisation)', 
        'Students Quality Club', 'Festivals', 'Clubs and Societies', 
        'Green Brigade (Environmental Sustainability)'
      ],
    },
    {
      label: 'Students Needs',
      tabName: 'student-needs',
      items: [
        'ACOE (Additional Controller of Examinations)', 'Centre for e-Governance', 
        'Centre for International Relations', 'Alumni', 'Library', 
        'Placement Cell', 'Centre for Student Affairs', 
        'CPDE (Centre for Professional Development Education)', 'Health Centre', 
        'POSH (Prevention of Sexual Harassment Cell)', 'SC/ST Cell', 
        'Logistics Centre', 'CIPR (Centre for Intellectual Property Rights)', 
        'Students Grievance Redressal', 'Anti Ragging', 'Professional Ethics'
      ],
    },
    {
      label: 'Research',
      tabName: 'research',
      items: [
        'Doing Research in CEG', 'Centre for Research in University', 
        'Dedicated Research Centers'
      ],
    },
    {
      label: 'Download Forms',
      tabName: 'forms',
      items: [
        'Discontinue', 'No Dues', 'TC Application', 
        'Anti-Ragging Application', 'On Duty Application Form', 
        'Student Internship Application', 'Condemnation Format', 
        'Monthly Progress Report for GATE Scholarship', 
        'Course Discontinue Report of GATE Student'
      ],
    },
    {
      label: 'Scholarship',
      tabName: 'schaolarship',
      items: [
        'Central Sector (UG/PG)', 'Private/Alumni (UG)', 
        'Endowments (UG)', 'BC/MBC Regular (UG)', 
        'BC/MBC Regular (PG)', 'SC/ST Regular (UG)', 
        'SC/ST Regular (PG)', 'SC/ST (PMSS) Self-Support (UG)', 
        'SC/ST (PMSS) Self-Support (PG)', 
        'SC/ST Special Loan for Hostel Fee (UG/PG)'
      ],
    },
    {
      label: 'CEG Hostel',
      tabName: 'hostel',
      items: null, // No dropdown for hostel
    },
  ];

  return (
    <>
      <nav className="flex justify-between items-center p-1 bg-white shadow-md">
        <div className="flex items-center">
          <img src={CEGLogo} alt="CEG Logo" className="h-12 mr-6 ml-6 mt-3 mb-3" style={{ height: '7vh' }} />
          <div className="flex flex-col">
            <span className="lg:text-3xl text-2xl font-bold tracking-wider mb-1">CEG CAMPUS</span>
            <span className="text-md tracking-normal">Anna University, Chennai</span>
          </div>
          <img src={AU_logo} alt="CEG Logo" className="h-12 mr-6 ml-6 mt-3 mb-3" style={{ height: '7vh' }} />
        </div>
        
        {/* Social Icons for large screens */}
        <div className="hidden lg:flex items-center space-x-6 mr-8">
          <FaFacebook className="text-red-800 lg:text-3xl text-3xl transition-transform transform hover:scale-125" />
          <FaYoutube className="text-red-800 lg:text-3xl text-3xl transition-transform transform hover:scale-125" />
          <FaInstagram className="text-red-800 lg:text-3xl text-3xl transition-transform transform hover:scale-125" />
          <FaTwitter className="text-red-800 lg:text-3xl text-3xl transition-transform transform hover:scale-125" />
          <FaLinkedin className="text-red-800 lg:text-3xl text-3xl transition-transform transform hover:scale-125" />
          <FaPhone className="text-red-800 lg:text-3xl text-3xl transition-transform transform hover:scale-125" />
        </div>

        {/* Mobile hamburger menu */}
        <div className="space-y-1 group lg:hidden mr-6">
          <button className="focus:outline-none" onClick={toggleMobileMenu}>
            <span className="text-2xl">☰</span>
          </button>
        </div>
      </nav>
      
      <nav>
        <div className="hidden lg:flex items-center p-1 shadow-md justify-evenly  bg-white border-t-2 border-gray-300 pt-2 pb-2">
            <a href="#" className={`text-black font-bold mr-3 hover:text-red-800 transition-all hover:font-bold hover:border-b-4 hover:border-red-800 duration-100 ${
              currentTab === 'home' ? 'text-red-800 font-bold border-b-4 border-red-800' : ''
            }`} onClick={() => handleTabClick('home')}>
              Home
            </a>
          {menuItems.map((menu) => (
            <DropdownMenu
              key={menu.tabName}
              label={menu.label}
              items={menu.items}
              currentTab={currentTab}
              tabName={menu.tabName}
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
              handleTabClick={handleTabClick}
            />
          ))}
        </div>
      </nav>

     {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="top-full left-0 right-0 bg-slate-100 shadow-lg">
          <div className="flex flex-col space-y-2 p-4 items-baseline">
            <a href="#" className={`text-black font-bold mr-3 hover:text-red-800 transition-all hover:font-bold ${currentTab === 'home' ? 'text-red-800 ' : ''}`} onClick={() => handleTabClick('home')}>Home</a>
            
            {menuItems.map(({ label, tabName, items }) => (
              <CollapsibleMenu
                key={tabName}
                label={label}
                tabName={tabName}
                items={items}
                currentTab={currentTab}
                handleTabClick={handleTabClick}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              />
            ))}

            {/* Social Icons for mobile screens */}
            <div className="flex justify-center space-x-6 pt-4">
              <FaFacebook className="text-red-800 text-2xl" />
              <FaYoutube className="text-red-800 text-2xl" />
              <FaInstagram className="text-red-800 text-2xl" />
              <FaTwitter className="text-red-800 text-2xl" />
              <FaLinkedin className="text-red-800 text-2xl" />
              <FaPhone className="text-red-800 text-2xl" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
