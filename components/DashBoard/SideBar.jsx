// This is a sidebar component that holds the navigation links in button to different pages
// the component is styled with tailwindcss
import { RiDashboardFill } from "react-icons/ri";
import { GoVerified } from "react-icons/go";
import { FaUsers } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";

import Button from "./Button";

const SideBar = () => {
  return (
    <div className=" md:py-16 py-16 md:flex-col  flex-row items-center justify-center">
      <div className="flex flex-col  items-center justify-center bg-black rounded-lg md:m-10 md:p-8 p-4">
        <Button>
          <div className="flex items-center justify-between bg-red font-bold">
            <RiDashboardFill className="mr-2  text-[#5ECDDC]" />
            Dashboard
          </div>
        </Button>
        <Button>
          <div className="flex items-center justify-between  bg-red font-bold">
            <HiDocumentText className="mr-2 text-[#5ECDDC]" />
            Applications
          </div>
        </Button>
        <Button>
          <div className="flex items-center justify-between bg-red font-bold">
            <GoVerified className="mr-2 text-[#5ECDDC]" />
            Verify User
          </div>
        </Button>
        <Button>
          <div className="flex items-center justify-between bg-red font-bold">
            <FaUsers className="mr-2 text-[#5ECDDC]" />
            Users onsdfgs
          </div>
        </Button>
        <Button>
          <div className="flex items-center justify-between bg-red font-bold ">
            <IoMdSettings className="mr-2 text-[#5ECDDC]" />
            Settings
          </div>
        </Button>
      </div>
    </div>
  );
};

export default SideBar;
