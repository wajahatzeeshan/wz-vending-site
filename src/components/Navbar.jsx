// src/components/Layout.jsx
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex">
      <Navbar />
      <main className="flex-grow p-6">
        <Outlet />
      </main>
    </div>
  );
}