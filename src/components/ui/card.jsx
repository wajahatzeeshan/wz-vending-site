// placeholder for card.jsx
import React from "react";

export function Card({ children }) {
  return (
    <div className="bg-white shadow-md rounded-xl border border-gray-200">
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}
