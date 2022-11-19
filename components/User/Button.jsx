import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <button
      className="px-4 py-2 text-sm font-bold text-white bg-black rounded hover:bg-gray-700"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
