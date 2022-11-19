import React from "react";

const Verified = ({ title, number, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#3099C6] rounded-lg shadow-lg p-4 mb-8 max-w-fit">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl font-semibold">{title}</h1>
        <h1 className="text-3xl font-semibold">{number}</h1>
      </div>
    </div>
  );
};

export default Verified;
