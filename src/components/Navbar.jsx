import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
  { to: "/testimonials", label: "Testimonials" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-400 tracking-tight font-serif">
          Beyond Career
        </h1>
        {/* Hamburger for mobile */}
        <button
          className="sm:hidden text-yellow-400 focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"} />
          </svg>
        </button>
        {/* Desktop menu */}
        <ul className="hidden sm:flex gap-8 text-white font-semibold">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `transition-colors duration-200 px-4 py-2 rounded ${
                    isActive
                      ? "bg-yellow-400 text-blue-900 shadow font-bold"
                      : "hover:bg-blue-800 hover:text-yellow-300"
                  }`
                }
                end={link.to === "/"}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <ul className="sm:hidden flex flex-col gap-2 px-4 pb-4 text-white font-semibold bg-blue-900">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `block transition-colors duration-200 px-4 py-2 rounded ${
                    isActive
                      ? "bg-yellow-400 text-blue-900 shadow font-bold"
                      : "hover:bg-blue-800 hover:text-yellow-300"
                  }`
                }
                end={link.to === "/"}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;