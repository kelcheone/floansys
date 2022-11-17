// Style with tailwindcss
import React, { useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import SideBar from "../components/DashBoard/SideBar";

const dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex  bg-[#D8EBEC]  md:flex-row md:flex-nowrap flex-col flex-nowrap h-screen  w-screen">
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
    </div>
  );
};
export default dashboard;
