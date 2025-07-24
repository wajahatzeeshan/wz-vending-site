// src/components/Layout.jsx
import  Sidebar  from "./Sidebar";
import  MobileNavbar  from "./MobileNavbar";
import  DarkModeToggle  from "./DarkModeToggle";
import  Outlet  from "react-router-dom";

export default function Layout() {
  return (
    <>
      {/* Mobile Top Bar (only on small screens) */}
      <MobileNavbar />

      {/* Main Layout Wrapper */}
      <div className="min-h-screen flex bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Sidebar (visible from md breakpoint upward) */}
        <Sidebar />

        {/* Main Page Content */}
        <div className="flex-1 ml-0 md:ml-64 flex flex-col">
          {/* Sticky Top Header */}
          <header className="top-bar flex justify-between items-center px-4 py-3 shadow-md bg-white dark:bg-gray-800 sticky top-0 z-50">
            <h1 className="text-lg font-bold text-blue-700">Zaroon Vending</h1>
            <DarkModeToggle />
          </header>

          {/* Injects page content based on route */}
          <main className="main-container p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}