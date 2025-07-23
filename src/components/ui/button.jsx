// placeholder for button.jsx
import React from "react";
import clsx from "clsx";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={clsx(
        "px-4 py-2 text-white font-medium rounded-lg transition-all",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
