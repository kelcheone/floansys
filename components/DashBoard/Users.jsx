import React from "react";

const Users = ({ title, number, color, icon, amount, smTitle }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#3099C6] rounded-lg shadow-lg p-4 mb-8">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl font-semibold text-white">{title}</h1>
        <h1 className="text-3xl font-semibold">{number}</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl font-semibold">{"20% YOY"}</h1>
      </div>
    </div>
  );
};

export default Users;
