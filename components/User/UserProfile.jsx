import SideBar from "./SideBar";
import UserContent from "./UserContent";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { Gcontext } from "../../context/Gcontext";
// import from jose to decode token

const User = () => {
  const timeout = () => setTimeout(() => console.log, 400);
  timeout();
  const {
    extractUserId,
    userDetails,
    getUserLoans,
    getUserLoanDetails,
    getTransactions,
    getPaidLoans,
    handleIfApprovedUser,
  } = useContext(Gcontext);
  const [showSidebar, setShowSidebar] = useState(false);
  useEffect(() => {
    extractUserId();
    userDetails();
    getUserLoans();
    getUserLoanDetails();
    getTransactions();
    getPaidLoans();
    handleIfApprovedUser();
  }, []);
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
        <UserContent />
      </div>
    </div>
  );
};

export default User;
