import React, { useContext, useEffect, useRef, useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import MidCard from "../../components/DashBoard/MidCard";

import SideBar from "../../components/DashBoard/SideBar";
import SummaryCard from "../../components/DashBoard/SummaryCard";
import SmCardRender from "../../components/DashBoard/SmCardRender";
import Applications from "../../components/DashBoard/Applications";
import Verified from "../../components/DashBoard/Verified";
import Users from "../../components/DashBoard/Users";
import { Gcontext } from "../../context/Gcontext";

const Dashboard = () => {
  // use ref to count rerenders
  const renderCount = useRef(0);
  renderCount.current = renderCount.current + 1;
  const timeout = () => setTimeout(() => console.log, 400);
  timeout();
  const {
    getActivePayments,
    getDefaultedLoans,
    getTotalLoans,
    getPendingLoans,
    getUnverifiedUsersCount,
    getAllUsersCount,
    unverifiedUsersCount,
    pendingLoans,
    allUsersCount,
  } = useContext(Gcontext);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    getActivePayments();
    getDefaultedLoans();
    getTotalLoans();
    getPendingLoans();
    getUnverifiedUsersCount();
    getAllUsersCount();
  }, []);

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
          <div className="md:w-full">
            <SummaryCard />
            <div className="flex flex-col md:flex-row md:justify-between md:items-center md:space-x-4 md:space-y-0 space-y-4 p-4">
              <MidCard />
            </div>
          </div>
          <div className="flex flex-col md:flex-col md:justify-between ">
            <SmCardRender>
              <Applications
                title="Applications"
                number={
                  Object.keys(pendingLoans).length > 0
                    ? pendingLoans.accounts
                    : 0
                }
                color="bg-blue-500"
                icon="bx bx-user"
                smTitle="Total amount"
                amount={
                  Object.keys(pendingLoans).length > 0
                    ? pendingLoans.total_amount
                    : 0
                }
              />
              <Verified
                title="Unverified Users"
                number={
                  Object.keys(unverifiedUsersCount).length > 0
                    ? unverifiedUsersCount.accounts
                    : "0"
                }
                color="bg-blue-500"
                icon="bx bx-user"
                smTitle="Total amount"
                amount="44400"
              />
              <Users
                title="Total Users"
                number={
                  Object.keys(allUsersCount).length > 0
                    ? allUsersCount.accounts
                    : 0
                }
                color="bg-blue-500"
                icon="bx bx-user"
                smTitle="Total amount"
                amount="44400"
              />
            </SmCardRender>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
