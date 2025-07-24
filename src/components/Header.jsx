// src/components/Header.jsx
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  return (
    <div className="top-bar flex justify-between items-center px-4 py-3 shadow-md bg-white dark:bg-gray-800 sticky top-0 z-50">
      <h1 className="text-lg font-bold">Zaroon Vending</h1>
      <DarkModeToggle />
    </div>
  );
}