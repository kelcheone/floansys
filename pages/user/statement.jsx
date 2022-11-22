import React from "react";

import Statement from "../../components/User/LoanStatement/Statement";

const statement = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-[#D8EBEC] p-16">
      <div className="flex items-center justify-between w-full p-4">
        <h1 className="text-xl font-semibold">Loan Statement</h1>
        <a href="/user" className="text-blue-500">
          <img
            src="https://i.imgur.com/6VBx3io.png"
            alt="user"
            className="w-10 h-10 rounded-full"
          />
        </a>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full  rounded-lg shadow-lg p-16">
        <Statement />
      </div>
    </div>
  );
};

export default statement;
