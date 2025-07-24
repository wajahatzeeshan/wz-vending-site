import MobileNavbar from "./MobileNavbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <MobileNavbar />
      <main className="flex-grow p-6">
        <Outlet />
      </main>
    </div>
  );
}