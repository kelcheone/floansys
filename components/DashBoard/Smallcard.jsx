import React from "react";
/*
title="Total Users"
number="1,234"
color="bg-blue-500"
icon="bx bx-user"
*/
const Smallcard = ({ title, number, color, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-4">
      <div className="flex items-center justify-center rounded-full bg-[#f3f4f6] p-3">
        <i className={`${icon} text-2xl text-blue-500`}></i>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl font-semibold">{title}</h1>
        <h1 className="text-3xl font-semibold">{number}</h1>
      </div>
    </div>
  );
};

export default Smallcard;
