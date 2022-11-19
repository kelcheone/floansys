import React from "react";
import Dropdown from "./Dropdown";

// creates a slighly different card from the SmallCard component
// The card is made up of a header  and besides it a dropdown
// bellow is the historical number of users and besides it is the amount transacted by the users

const MidCard = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-4 mb-8 w-full">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-xl font-semibold">Historical Users</h1>
        <Dropdown />
      </div>
      <div className="w-full mt-4 flex justify-evenly">
        <div>
          <h1 className="text-xl font-semibold">4</h1>
          <p>Total number of users</p>
        </div>
        <div>
          <h1 className="text-xl font-semibold">1,234</h1>
          <p>Total amount transacted</p>
        </div>
      </div>
    </div>
  );
};

export default MidCard;
