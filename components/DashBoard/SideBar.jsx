import { RiDashboardFill } from "react-icons/ri";
import { GoVerified } from "react-icons/go";
import { FaUsers } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";

import Button from "./Button";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className=" md:py-16 py-16   md:flex-row items-center justify-center">
      <div className="flex flex-col  items-center justify-center bg-black rounded-lg md:m-10 md:p-8 p-4">
        <Button>
          <div className="flex items-center justify-between bg-red font-bold">
            <RiDashboardFill className="mr-2  text-[#5ECDDC]" />
            <Link href="/dashboard">Dashboard</Link>
          </div>
        </Button>
        <Button>
          <div className="flex items-center justify-between  bg-red font-bold">
            <HiDocumentText className="mr-2 text-[#5ECDDC]" />
            <Link href="/dashboard/applications">Applications</Link>
          </div>
        </Button>
        <Button>
          <div className="flex items-center justify-between bg-red font-bold">
            <GoVerified className="mr-2 text-[#5ECDDC]" />
            <Link href="/dashboard/verify">Verify User</Link>
          </div>
        </Button>
        <Button>
          <div className="flex items-center justify-between bg-red font-bold">
            <FaUsers className="mr-2 text-[#5ECDDC]" />
            <Link href="/dashboard/users">Users</Link>
          </div>
        </Button>
        <Button>
          <div className="flex items-center justify-between bg-red font-bold ">
            <IoMdSettings className="mr-2 text-[#5ECDDC]" />
            <Link href="/dashboard/settings">Settings</Link>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default SideBar;
