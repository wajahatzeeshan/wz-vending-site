// src/components/Sidebar.jsx
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:flex-col fixed md:w-64 h-full bg-gray-100 dark:bg-gray-800 shadow-lg p-6 z-40">
      <h1 className="text-2xl font-bold text-blue-600 mb-8 text-center">
        Zaroon Vending
      </h1>

      <nav className="flex flex-col gap-4">
        {[
          { path: "/", label: "Home" },
          { path: "/about", label: "About" },
          { path: "/services", label: "Services" },
          { path: "/contact", label: "Contact" },
        ].map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              isActive
                ? "text-blue-700 font-semibold border-l-4 border-blue-700 pl-4"
                : "text-gray-700 dark:text-gray-300 hover:text-blue-600 pl-4"
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <footer className="mt-auto text-xs text-center text-gray-500 dark:text-gray-400 pt-8">
        &copy; 2025 Zaroon Vending
      </footer>
    </aside>
  );
}