import React from "react";

const Button = ({ children }) => {
  return (
    <button className="flex items-center justify-between p-4 w-48 h-10 bg-[#181818] rounded-md text-white mb-3 active:bg-[#181818] hover:bg-[#181818] focus:outline-none ">
      {children}
    </button>
  );
};

export default Button;
