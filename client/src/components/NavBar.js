import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CEGLogo from "../assets/images/CEG_logo.png";
import "../styles/NavBar.css";
import { useNavigate } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  Fatwitter,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";

const XIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 1200 1227"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
      fill="#991b1b"
    />
  </svg>
);

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
      className={`flex items-center mr-3 text-black font-bold hover:text-red-800 transition-all hover:font-bold hover:border-b-4 hover:border-red-800 duration-100 focus:outline-none ${
        currentTab === tabName
          ? "text-red-800 font-bold border-b-4 border-red-800"
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
          tabName === "people" ? "w-40" : "w-72"
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
        className={`text-black font-bold mr-3 hover:text-red-800 transition-all hover:font-bold ${
          currentTab === tabName ? "text-red-800 " : ""
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

  // Define URL-to-tab mapping
  const urlToTabMap = {
    "/": "home",
    "/club": "club",
    "/club_home": "student-activity",
    "/club_landing": "student-activity",
    "/admin": "club_details",
    "/events": "student-activity",
    "/courses": "academics",
    "/departments": "academics",
    "/admin/events_update": "events_update",
    "/admin/admin_profile": "admin_profile",
    "/super_admin": "updates",
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
    {
      label: "People",
      tabName: "people",
      items: [
        { label: "Dean", link: "/dean" },
        { label: "Others", link: "/people" },
      ],
    },
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
        { label: "Curriculum and syllabi", link: "https://cac.annauniv.edu/" },
      ],
    },
    {
      label: "Students Activities",
      tabName: "student-activity",
      items: [
        { label: "Sport Board", link: "https://www.annauniv.edu/sports/" },
        {
          label: "YRC (Youth Red Cross)",
          link: "https://www.annauniv.edu/yrc/index.html",
        },
        {
          label: "NSS (National Service Scheme)",
          link: "/student-activities/nss",
        },
        {
          label: "NCC (National Cadet Corps)",
          link: "https://aunccarmy.vercel.app/",
        },
        {
          label: "NSO (National Sports Organisation)",
          link: "/student-activities/nso",
        },
        {
          label: "Students Quality Club",
          link: "/student-activities/quality-club",
        },
        { label: "Events and Festivals", link: "/events" },
        {
          label: "Clubs and Societies",
          link: "/club_home",
        },
        {
          label: "Green Brigade (Environmental Sustainability)",
          link: "/student-activities/green-brigade",
        },
      ],
    },
    {
      label: "Students Needs",
      tabName: "student-needs",
      items: [
        {
          label: "ACOE (Additional Controller of Examinations)",
          link: "/student-needs/aco",
        },
        {
          label: "Centre for e-Governance",
          link: "/student-needs/egovernance",
        },
        {
          label: "Centre for International Relations",
          link: "/student-needs/international-relations",
        },
        { label: "Alumni", link: "/student-needs/alumni" },
        { label: "Library", link: "/student-needs/library" },
        { label: "Placement Cell", link: "/student-needs/placement" },
        {
          label: "Centre for Student Affairs",
          link: "/student-needs/student-affairs",
        },
        {
          label: "CPDE (Centre for Professional Development Education)",
          link: "/student-needs/cpde",
        },
        { label: "Health Centre", link: "/student-needs/health-centre" },
        {
          label: "POSH (Prevention of Sexual Harassment Cell)",
          link: "/student-needs/posh",
        },
        { label: "SC/ST Cell", link: "/student-needs/scst-cell" },
        { label: "Logistics Centre", link: "/student-needs/logistics" },
        {
          label: "CIPR (Centre for Intellectual Property Rights)",
          link: "/student-needs/cipr",
        },
        {
          label: "Students Grievance Redressal",
          link: "/student-needs/grievance-redressal",
        },
        { label: "Anti Ragging", link: "/student-needs/anti-ragging" },
        {
          label: "Professional Ethics",
          link: "/student-needs/professional-ethics",
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
          link: "/research/centre-for-research",
        },
        {
          label: "Dedicated Research Centers",
          link: "/research/research-centers",
        },
      ],
    },
    {
      label: "Download Forms",
      tabName: "forms",
      items: [
        { label: "Discontinue", link: "/forms/discontinue" },
        { label: "No Dues", link: "/forms/no-dues" },
        { label: "TC Application", link: "/forms/tc-application" },
        { label: "Anti-Ragging Application", link: "/forms/anti-ragging" },
        { label: "On Duty Application Form", link: "/forms/on-duty" },
        { label: "Student Internship Application", link: "/forms/internship" },
        { label: "Condemnation Format", link: "/forms/condemnation" },
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
        { label: "Private/Alumni (UG)", link: "/scholarship/private-alumni" },
        { label: "Endowments (UG)", link: "/scholarship/endowments" },
        { label: "BC/MBC Regular (UG)", link: "/scholarship/bcmvc-ug" },
        { label: "BC/MBC Regular (PG)", link: "/scholarship/bcmvc-pg" },
        { label: "SC/ST Regular (UG)", link: "/scholarship/scst-ug" },
        { label: "SC/ST Regular (PG)", link: "/scholarship/scst-pg" },
        {
          label: "SC/ST (PMSS) Self-Support (UG)",
          link: "/scholarship/scst-pmss-ug",
        },
        {
          label: "SC/ST (PMSS) Self-Support (PG)",
          link: "/scholarship/scst-pmss-pg",
        },
        {
          label: "SC/ST Special Loan for Hostel Fee (UG/PG)",
          link: "/scholarship/scst-loan-hostel",
        },
      ],
    },
    {
      label: "CEG Hostel",
      tabName: "hostel",
      link: "/hostel",
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
    {
      label: "Logout",
      tabName: "logout",
      link: "/admin/admin_profile",
      items: null,
    },
  ];

  const superAdminMenuItems = [
    {
      label: "General & Student Updates",
      tabName: "updates",
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
      label: "Admin Profile",
      tabName: "uper_admin_profile",
      link: "/super_admin/admin_profile",
      items: null,
    },
    {
      label: "Logout",
      tabName: "logout",
      link: "/admin/admin_profile",
      items: null,
    },
  ];

  const isAdminPage = location.pathname.startsWith("/admin");
  const isSuperAdminPage = location.pathname.startsWith("/super_admin");
  let itemsToRender = isAdminPage ? adminMenuItems : menuItems;
  itemsToRender = isSuperAdminPage ? superAdminMenuItems : itemsToRender;

  return (
    <>
      <nav className="flex justify-between items-center p-1 bg-white shadow-md">
        <div className="flex items-center">
          <img
            src={CEGLogo}
            alt="CEG Logo"
            className="h-12 mr-6 ml-6 mt-3 mb-3"
            style={{ height: "7vh" }}
          />
          <div className="flex flex-col">
            <span className="lg:text-3xl md:text-2xl text-xl font-bold tracking-wider mb-1">
              CEG CAMPUS
            </span>
            <span className="lg:text-md text-sm text-center tracking-normal">
              Anna University, Chennai
            </span>
          </div>
        </div>

        {/* Social Icons for large screens */}
        <div className="hidden lg:flex items-center space-x-6 mr-8">
          <a
            href="https://www.facebook.com/CegChennai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-red-800 lg:text-3xl text-3xl transition-transform transform hover:scale-125" />
          </a>
          <a
            href="https://www.instagram.com/ceg_au/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-red-800 lg:text-3xl text-3xl transition-transform transform hover:scale-125" />
          </a>
          <a
            href="https://x.com/cegguindy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <XIcon className="text-red-800 lg:text-3xl text-3xl transition-transform transform hover:scale-125" />
          </a>
          <a
            href="https://www.linkedin.com/school/college-of-engineering-guindy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-red-800 lg:text-3xl text-3xl transition-transform transform hover:scale-125" />
          </a>
          <a href="tel:+91 044 2235 8491">
            <FaPhoneAlt className="text-red-800 lg:text-3xl text-3xl transition-transform transform hover:scale-125" />
          </a>
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
          {!isAdminPage && !isSuperAdminPage ? (
            <a
              href="/"
              className={`text-black font-bold mr-3 hover:text-red-800 transition-all hover:font-bold hover:border-b-4 hover:border-red-800 duration-100 ${
                currentTab === "home"
                  ? "text-red-800 font-bold border-b-4 border-red-800"
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
            {!isAdminPage && !isSuperAdminPage ? (
              <a
                href="#"
                className={`text-black font-bold mr-3 hover:text-red-800 transition-all hover:font-bold ${
                  currentTab === "home" ? "text-red-800 " : ""
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
              <a
                href="https://www.facebook.com/CegChennai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-red-800 text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/ceg_au/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-red-800 text-2xl" />
              </a>
              <a
                href="https://x.com/cegguindy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <XIcon className="text-red-800 text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/school/college-of-engineering-guindy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-red-800 text-2xl" />
              </a>
              <a href="tel:+1234567890">
                <FaPhoneAlt className="text-red-800 text-2xl" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
