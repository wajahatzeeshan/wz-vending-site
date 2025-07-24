// src/components/MobileNavbar.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden relative z-50">
      {/* Top Bar */}
      <div className="flex justify-between items-center bg-blue-600 text-white px-4 py-3 shadow">
        <span className="text-lg font-semibold">Zaroon Vending</span>
        <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Slide-In Menu */}
      <div
        className={`absolute top-14 left-0 w-full bg-white dark:bg-gray-800 shadow transition-transform duration-300 ${
          open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col py-4 text-center">
          {[
            { to: import.meta.env.BASE_URL + "", label: "Home" },
            { to: import.meta.env.BASE_URL + "about", label: "About" },
            { to: import.meta.env.BASE_URL + "services", label: "Services" },
            { to: import.meta.env.BASE_URL + "contact", label: "Contact" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "py-2 text-blue-600 font-semibold"
                  : "py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500"
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}