import React from "react";

interface BaseButtonProps {
  children: React.ReactNode;
  onClick?: () => void; // Function that returns void
  className ?: string
}

export default function BaseButton({ children, onClick , className }: BaseButtonProps) {
  return (
    <button
      onClick={onClick} // Call handleShowMore when the button is clicked
      className={`flex gap-2 py-3 px-4 items-center justify-center rounded-2xl font-medium text-sm ${className}`}
    >
      {children}
    </button>
  );
}
