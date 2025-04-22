import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CEGLogo from "../assets/images/CEG_logo.png";
import "../styles/NavBar.css";
import { useNavigate } from "react-router-dom";
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";

const DropdownMenu = ({
  label,
  items,
  link,
  currentTab,
  tabName,
  activeDropdown,
  setActiveDropdown,
  handleTabClick,
}) => (
  <div
    className="relative"
    onMouseEnter={() => setActiveDropdown(tabName)}
    onMouseLeave={() => setActiveDropdown(null)}
  >
    <button
      className={`flex my-1 items-center mr-3 text-black font-light hover:text-sky-800 transition-all hover:border-b-2 hover:border-sky-800 duration-100 focus:outline-none ${
        currentTab === tabName
          ? "text-sky-800 font-bold border-b-2 border-sky-800"
          : ""
      }`}
      onClick={() => {
        if (link) {
          window.location.href = link;
        }
      }}
    >
      {label}
      {items?.length > 0 && (
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      )}
    </button>
    {activeDropdown === tabName && items?.length > 0 && (
      <div
        className={`text-sm navbar-dropdown absolute left-1/2 transform -translate-x-1/2 ${
          tabName === "student-needs" || tabName === "about" ? "w-max" : "w-72"
        } bg-white text-black rounded shadow-lg z-50`}
      >
        {items.map((item) => (
          <a
            href={item.link} // Use the link property for navigation
            key={item.label} // Use the label as the key for unique identification
            className="block px-4 py-2 hover:bg-gray-200"
            onClick={() => handleTabClick(tabName)}
          >
            {item.label} {/* Display the label */}
          </a>
        ))}
      </div>
    )}
  </div>
);

const CollapsibleMenu = ({
  label,
  tabName,
  items,
  link,
  currentTab,
  handleTabClick,
  setIsMobileMenuOpen,
}) => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <button
        className={`text-black font-light mr-3 hover:text-sky-800 transition-all hover:font-bold ${
          currentTab === tabName ? "text-sky-800 " : ""
        }`}
        onClick={() => {
          if (link) {
            window.location.href = link;
          } else {
            handleTabClick(tabName);
          }
        }}
      >
        {label}
      </button>

      {currentTab === tabName && items?.length > 0 && (
        <div className="flex flex-col space-y-1 pl-6 items-baseline">
          {items.map((item) => (
            <a
              href={item.link || "#"}
              key={item.label}
              className="block px-4 py-1 hover:bg-gray-200 text-black"
              onClick={() => {
                if (item.link) navigate(item.link); // Navigate to the link if available
                handleTabClick(tabName);
                setIsMobileMenuOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const location = useLocation();
  const [currentTab, setCurrentTab] = useState("home");

  const urlToTabMap = {
    "/": "home",
    "/club": "club",
    "/club_home": "student-activity",
    "/club_landing": "student-activity",
    "/admin": "club_details",
    "/events": "student-activity",
    "/courses": "academics",
    "/admin/events_update": "events_update",
    "/admin/admin_profile": "admin_profile",
    // Super Admin URLs
    "/super_admin": "super_admin_dashboard",
    "/super_admin/admin_profile": "admin_profile",
    "/super_admin/edit_clubs": "edit_clubs",
  };

  // Update current tab based on URL
  useEffect(() => {
    // Find the matching tab from the map
    const newCurrentTab = urlToTabMap[location.pathname] || "home";
    setCurrentTab(newCurrentTab);
    console.log(location.pathname, newCurrentTab);
  }, [location]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleTabClick = (tabName) => {
    setCurrentTab(tabName);
    if (tabName === "home") {
      setIsMobileMenuOpen(false);
    }
    setActiveDropdown(null);
  };
  const menuItems = [
    // {
    //   label: "About Us",
    //   tabName: "about",
    //   items: [
    //     { label: "Profile", link: "/profile" },
    //     { label: "History", link: "/history" },
    //     { label: "Mission & Vision", link: "/mission-vision" },
    //   ],
    // },
    {
      label: "Academics & Admissions",
      tabName: "academics",
      items: [
        {
          label: "Center for Admissions (UG/PG)",
          link: "https://cfa.annauniv.edu/cfa/",
        },
        { label: "Departments", link: "/departments" },
        { label: "Courses Offered", link: "/courses" },
        { label: "Curriculum and syllabi", link: "/curriculum" },
      ],
    },
    {
      label: "Students Activities",
      tabName: "student-activity",
      items: [
        { label: "Sport Board", link: "https://ceg.annauniv.edu/sports.html" },
        { label: "YRC (Youth Red Cross)", link: "https://www.annauniv.edu/yrc/contacts.html" },
        {
          label: "NSS (National Service Scheme)",
          link: "https://ceg.annauniv.edu/NSS.html",
        },
        {
          label: "NCC (National Cadet Corps)",
          link: "https://aunccarmy.vercel.app/",
        },
        {
          label: "NSO (National Sports Organisation)",
          link: "https://ceg.annauniv.edu/sports.html",
        },
        {
          label: "Students Quality Club",
          link: "https://www.facebook.com/studentsqualitycouncil/",
        },
        { label: "Events and Festivals", link: "/events" },
        {
          label: "Clubs and Societies",
          link: "/club_home",
        },
        {
          label: "Green Brigade (Environmental Sustainability)",
          link: "https://reachgreenbrigade.wixsite.com/website",
        },
      ],
    },
    {
      label: "Students Needs",
      tabName: "student-needs",
      items: [
        {
          label: "ACOE (Additional Controller of Examinations)",
          link: "https://acoe.annauniv.edu/",
        },
        {
          label: "Centre for e-Governance",
          link: "https://www.auegov.ac.in/",
        },
        {
          label: "Centre for International Relations",
          link: "https://www.annauniv.edu/cir/",
        },
        { label: "Alumni", link: "https://www.aaceg.org/" },
        { label: "Library", link: "https://library.annauniv.edu/" },
        { label: "Placement Cell", link: "https://cuic.annauniv.edu/" },
        {
          label: "Centre for Student Affairs",
          link: "https://www.annauniv.edu/dsa/",
        },
        {
          label: "CPDE (Centre for Professional Development Education)",
          link: "https://www.annauniv.edu/cpde/",
        },
        { label: "Health Centre", link: "https://www.annauniv.edu/HealthCentre/services.html" },
        {
          label: "POSH (Prevention of Sexual Harassment Cell)",
          link: "https://www.annauniv.edu/POSH/index.php",
        },
        { label: "SC/ST Cell", link: "https://www.annauniv.edu/scstcell/index.html" },
        { label: "Logistics Centre", link: "https://annauniv.edu/logistics/index.php" },
        {
          label: "CIPR (Centre for Intellectual Property Rights)",
          link: "https://www.annauniv.edu/ipr/",
        },
        {
          label: "Students Grievance Redressal",
          link: "https://www.annauniv.edu/auccgrcell/",
        },
        { label: "Anti Ragging", link: "https://ceg.annauniv.edu/Anti%20Ragging.html" },
        {
          label: "Professional Ethics",
          link: "https://ceg.annauniv.edu/files/download_appforms/Professional%20Ethics.pdf",
        },
      ],
    },
    {
      label: "Research",
      tabName: "research",
      items: [
        { label: "Doing Research in CEG", link: "/research/doing-research" },
        {
          label: "Centre for Research in University",
          link: "https://cfr.annauniv.edu/research/academics/index.php",
        },
        {
          label: "Dedicated Research Centers",
          link: "https://cfr.annauniv.edu/research/academics/index.php",
        },
      ],
    },
    {
      label: "Download Forms",
      tabName: "forms",
      items: [
        { label: "Discontinue", link: "/updatesoon" },
        { label: "No Dues", link: "/updatesoon" },
        { label: "TC Application", link: "/updatesoon" },
        { label: "Anti-Ragging Application", link: "/updatesoon" },
        { label: "On Duty Application Form", link: "/updatesoon" },
        { label: "Student Internship Application", link: "/updatesoon" },
        { label: "Condemnation Format", link: "/updatesoon" },
        {
          label: "Monthly Progress Report for GATE Scholarship",
          link: "/forms/gate-progress",
        },
        {
          label: "Course Discontinue Report of GATE Student",
          link: "/forms/course-discontinue",
        },
      ],
    },
    {
      label: "Scholarship",
      tabName: "scholarship",
      items: [
        {
          label: "Central Sector (UG/PG)",
          link: "/scholarship/central-sector",
        },
        { label: "Private/Alumni (UG)", link: "/updatesoon" },
        { label: "Endowments (UG)", link: "/updatesoon" },
        { label: "BC/MBC Regular (UG)", link: "/updatesoon" },
        { label: "BC/MBC Regular (PG)", link: "/updatesoon" },
        { label: "SC/ST Regular (UG)", link: "/updatesoon" },
        { label: "SC/ST Regular (PG)", link: "/updatesoon" },
        {
          label: "SC/ST (PMSS) Self-Support (UG)",
          link: "/updatesoon",
        },
        {
          label: "SC/ST (PMSS) Self-Support (PG)",
          link: "/updatesoon",
        },
        {
          label: "SC/ST Special Loan for Hostel Fee (UG/PG)",
          link: "/updatesoon",
        },
      ],
    },
    {
      label: "CEG Hostel",
      tabName: "hostel",
      link: "https://ceghostel.in/",
      items: null,
    },
  ];
  const adminMenuItems = [
    {
      label: "Club Details",
      tabName: "club_details",
      link: "/admin",
      items: null,
    },
    {
      label: "Updates & Events",
      tabName: "events_update",
      link: "/admin/events_update",
      items: null,
    },
    {
      label: "Admin Profile",
      tabName: "admin_profile",
      link: "/admin/admin_profile",
      items: null,
    },
  ];
  const superAdminMenuItems = [
    {
      label: "General & Student Updates",
      tabName: "super_admin_dashboard",
      link: "/super_admin",
      items: null,
    },
    {
      label: "Edit Clubs",
      tabName: "edit_clubs",
      link: "/super_admin/edit_clubs",
      items: null,
    },
    {
      label: "Profile",
      tabName: "admin_profile",
      link: "/super_admin/admin_profile",
      items: null,
    },
  ];

  // Determine if the current page is an admin or super admin page
  const isAdminPage = location.pathname.startsWith("/admin");
  const isSuperAdminPage = location.pathname.startsWith("/super_admin");

  // Choose the correct menu items based on the page type
  const itemsToRender = isSuperAdminPage
    ? superAdminMenuItems
    : isAdminPage
    ? adminMenuItems
    : menuItems;

  return (
    <>
      <nav className="flex justify-between items-center p-1 bg-white shadow-md">
        <div className="flex items-center">
          <img
            src={CEGLogo}
            alt="CEG Logo"
            className="h-12 mr-5 ml-6 mt-3 mb-3"
            style={{ height: "7vh" }}
          />
          <div className="flex flex-col">
            <span className="lg:text-3xl md:text-2xl text-xl font-bold font-serif tracking-wider mb-1">
              CEG CAMPUS
            </span>
            <span className="lg:text-md text-sm text-center font-sans tracking-normal">
              Anna University, Chennai
            </span>
          </div>
        </div>

        {/* Social Icons for large screens */}
        <div className="hidden lg:flex items-center space-x-6 mr-8">
          <FaFacebook className="text-sky-800 lg:text-3xl text-3xl transition-transform transform hover:scale-125" />
          <FaYoutube className="text-sky-800 lg:text-3xl text-3xl transition-transform transform hover:scale-125" />
          <FaTwitter className="text-sky-800 lg:text-3xl text-3xl transition-transform transform hover:scale-125" />
          <FaInstagram className="text-sky-800 lg:text-3xl text-3xl transition-transform transform hover:scale-125" />
          <FaPhoneAlt className="text-sky-800 lg:text-2xl text-3xl transition-transform transform hover:scale-125" />
          <FaLinkedin className="text-sky-800 lg:text-3xl text-3xl transition-transform transform hover:scale-125" />
        </div>

        {/* Mobile hamburger menu */}
        <div className="space-y-1 group lg:hidden mr-6">
          <button className="focus:outline-none" onClick={toggleMobileMenu}>
            <span className="text-2xl">☰</span>
          </button>
        </div>
      </nav>

      {/*  border-t-2 border-gray-300 - removed from <div> on line 415 */}
      <nav>
        <div className="hidden lg:flex font-serif items-center p-1 shadow-md justify-evenly bg-white pt-1 pb-2">
          {!isAdminPage && !isSuperAdminPage ? (
            <a
              href="/"
              className={`text-black font-light mr-3 hover:text-sky-800 transition-all hover:border-b-2 hover:border-sky-800 duration-100 ${
                currentTab === "home"
                  ? "text-sky-800 font-light border-b-2 border-sky-800"
                  : ""
              }`}
              onClick={() => {
                handleTabClick("home");
              }}
            >
              Home
            </a>
          ) : (
            <></>
          )}
          {itemsToRender.map((menu) => (
            <DropdownMenu
              key={menu.tabName}
              label={menu.label}
              link={menu.link} // Pass the link for the main menu item
              items={
                menu.items
                  ? menu.items.map((item) => ({
                      label: item.label,
                      link: item.link, // Pass link for each item
                    }))
                  : []
              } // If items exist, map them, otherwise pass an empty array
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
            {!isAdminPage ? (
              <a
                href="/"
                className={`text-black font-light mr-3 hover:text-sky-800 transition-all hover:font-bold ${
                  currentTab === "home" ? "text-sky-800 " : ""
                }`}
                onClick={() => handleTabClick("home")}
              >
                Home
              </a>
            ) : (
              <></>
            )}
            {itemsToRender.map(({ label, tabName, items, link }) => (
              <CollapsibleMenu
                key={tabName}
                label={label}
                tabName={tabName}
                items={items}
                link={link}
                currentTab={currentTab}
                handleTabClick={handleTabClick}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              />
            ))}

            {/* Social Icons for mobile screens */}
            <div className="flex justify-center space-x-6 pt-4">
              <FaFacebook className="text-sky-800 text-2xl" />
              <FaYoutube className="text-sky-800 text-2xl" />
              <FaTwitter className="text-sky-800 text-2xl" />
              <FaInstagram className="text-sky-800 text-2xl" />
              <FaPhoneAlt className="text-sky-800 text-2xl" />
              <FaLinkedin className="text-sky-800 text-2xl" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
