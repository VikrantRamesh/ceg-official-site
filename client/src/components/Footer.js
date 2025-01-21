import React from "react";
import CEGLogo from "../assets/images/CEG_col_2.png";

const CollegeFooter = () => {
  return (
    <footer className="bg-sky-950 text-white py-6 pt-12 mt-2">
      <div className="max-w-7xl mx-auto px-1">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 border-b border-gray-700 pb-6">
          {/* Address Section */}
          <div className="relative font-sans font-light">
            <h3 className="text-lg font-bold mb-2 ml-3">Address</h3>
            <p className="text-sm ml-3">
              CEG Campus, Guindy
              <br />
              Anna University, Chennai
              <br />
              Tamil Nadu 600025
            </p>
            <div className="hidden md:block absolute top-0 right-0 h-full border-r border-gray-600"></div>
          </div>

          {/* Location Link */}
          <div className="relative font-sans font-light">
            <h3 className="text-lg font-bold mb-2">Location</h3>
            <a
              href="https://www.google.com/maps/place/College+of+Engineering,+Guindy/@13.01094,80.2328713,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52679f0d20f797:0x59f9f10c66e02a19!8m2!3d13.01094!4d80.2354462!16zL20vMDN2a24x?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline text-sm"
            >
              View on Google Maps
            </a>
            <div className="hidden md:block absolute top-0 right-0 h-full border-r border-gray-600"></div>
          </div>

          {/* Contact Section */}
          <div className="relative font-sans font-light">
            <h3 className="text-lg font-bold mb-2">Contact</h3>
            <p className="text-sm">
              044 2235 8491
              <br />
              044 2235 8476 (UG)
              <br />
              044 2235 8478 (PG)
              <br />
              <a
                href="mailto:deanceg@annauniv.edu"
                className="text-blue-400 underline"
              >
                deanceg@annauniv.edu
              </a>
              <br />
              <a
                href="mailto:cegdeanoffice@gmail.com"
                className="text-blue-400 underline"
              >
                cegdeanoffice@gmail.com
              </a>
            </p>
            <div className="hidden md:block absolute top-0 right-0 h-full border-r border-gray-600"></div>
          </div>

          {/* Important Links Section */}
          <div className="relative font-sans font-light">
            <h3 className="text-lg font-bold mb-2">Important Links</h3>
            <ul className="text-sm">
              <li>
                <a href="/admissions" className="text-blue-400 underline">
                  Admissions
                </a>
              </li>
              <li>
                <a href="/departments" className="text-blue-400 underline">
                  Departments
                </a>
              </li>
              <li>
                <a href="/events" className="text-blue-400 underline">
                  Events
                </a>
              </li>
              <li>
                <a href="/contact-us" className="text-blue-400 underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-2 flex flex-col md:flex-row items-center justify-between pt-4">
          {/* University Logo */}
          <div>
            <img
              src={CEGLogo}
              alt="CEG Logo"
              className="mr-6 ml-6 mt-1 mb-1"
              style={{ height: "12vh" }}
            />
          </div>
          {/* Copyright */}
          <p className="text-xs font-light text-center md:text-left">
            © {new Date().getFullYear()} College of Engineering, Guindy. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default CollegeFooter;
