// Style with tailwindcss
import React, { useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import MidCard from "../components/DashBoard/MidCard";

import SideBar from "../components/DashBoard/SideBar";
import Smallcard from "../components/DashBoard/Smallcard";
import SummaryCard from "../components/DashBoard/SummaryCard";

// Dashboard component that is composed of two sections
// 1. Sidebar
// 2. Main Content
// The sidebar is hidden on mobile devices and is shown on desktop devices
// The sidebar is shown on mobile devices when the menu icon is clicked
// The sidebar is hidden on mobile devices when the close icon is clicked

// The main content is shown on both mobile and desktop devices

// The main component  contains two sections one side to hold the summary card + mid card
// The other side to hold the small cards
// It should pass the data to the cards as props
// Style with tailwindcss

const dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex md:flex-row md:flex-nowrap flex-col flex-nowrap h-screen bg-background w-screen">
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
        } md:block md:w-1/4 w-full h-screen  rounded-r-lg items-center justify-center bg-sidebar`}
      >
        <SideBar />
      </div>
      <div className="md:w-3/4 w-full h-screen bg-background">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center md:space-x-4 md:space-y-0 space-y-4 p-4">
          <SummaryCard />
          <MidCard
            title="Total Users"
            number="1,234"
            color="bg-blue-500"
            icon="bx bx-user"
          />
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center md:space-x-4 md:space-y-0 space-y-4 p-4">
          <Smallcard
            title="Total Users"
            number="1,234"
            color="bg-blue-500"
            icon="bx bx-user"
          />
          <Smallcard
            title="Total Users"
            number="1,234"
            color="bg-blue-500"
            icon="bx bx-user"
          />
          <Smallcard
            title="Total Users"
            number="1,234"
            color="bg-blue-500"
            icon="bx bx-user"
          />
        </div>
      </div>
    </div>
  );
};
export default dashboard;
