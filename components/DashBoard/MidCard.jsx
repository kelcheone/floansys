import React, { useContext } from "react";
import Dropdown from "./Dropdown";

import { Gcontext } from "../../context/Gcontext";

const MidCard = () => {
  const timeout = () => setTimeout(() => console.log, 400);
  timeout();
  const { totalLoans } = useContext(Gcontext);
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-4 mb-8 w-full">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-xl font-semibold">Historical Users</h1>
        <Dropdown />
      </div>
      <div className="w-full mt-4 flex justify-evenly">
        <div>
          <h1 className="text-xl font-semibold">
            {Object.keys(totalLoans).length > 0 ? totalLoans.accounts : 0}
          </h1>
          <p>Total number of users</p>
        </div>
        <div>
          <h1 className="text-xl font-semibold">
            {Object.keys(totalLoans).length > 0 ? totalLoans.total_amount : 0}
          </h1>
          <p>Total amount transacted</p>
        </div>
      </div>
    </div>
  );
};

export default MidCard;
