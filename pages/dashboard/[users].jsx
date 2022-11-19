// Style with tailwindcss
import React, { useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import SideBar from "../../components/DashBoard/SideBar";
import Card from "../../components/Users/Card";

const user = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex md:flex-row md:flex-nowrap flex-col flex-nowrap md:min-h-full h-full bg-background w-screen">
      <div
        onClick={() => setShowSidebar(!showSidebar)}
        className="flex items-center justify-center w-12 h-12 bg-black md:hidden rounded-[100000px] p-3 mt-4 ml-2 mr-2 cursor-pointer"
      >
        {showSidebar ? (
          <AiOutlineClose className="text-white" />
        ) : (
          <AiOutlineMenu className="text-white" />
        )}
      </div>
      <div
        className={`${
          showSidebar ? "block" : "hidden"
        } md:block md:w-1/4 w-full h-screen  rounded-r-lg items-center justify-center `}
      >
        <SideBar />
      </div>
      <div className="md:w-3/4 w-full h-full bg-background">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center md:space-x-4 md:space-y-0 space-y-4 p-4">
          <Card id="1" name="John Doe" email="jhon@df.io" role="Admin" />
        </div>
      </div>
    </div>
  );
};
export default user;
