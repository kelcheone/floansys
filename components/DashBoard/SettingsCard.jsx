import { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import ChangePasswordModal from "./ChangePasswordModal";

const SettingsCard = () => {
  let [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full ">
      <div className="flex flex-col items-center justify-center h-full bg-[#ACBFB7] rounded-lg shadow-lg">
        <div className="flex items-center justify-between w-full p-4">
          <h1 className="text-xl font-semibold">Settings</h1>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full p-4">
          <div
            onClick={() => setShowModal(true)}
            className="flex items-center justify-between bg-black text-white  w-full h-12 rounded-lg p-4 mb-4 cursor-pointer hover:bg-[#D8EBEC] hover:text-black"
          >
            <h1 className="text-lg font-semibold">Change Password</h1>
            <AiOutlineRight />
          </div>
          <div className="flex items-center justify-between bg-black text-white w-full h-12 rounded-lg p-4 mb-4 cursor-pointer hover:bg-[#D8EBEC] hover:text-black">
            <h1 className="text-lg font-semibold">Notification Settings</h1>
            <AiOutlineRight />
          </div>
          <div className="flex items-center justify-between bg-black text-white w-full h-12 rounded-lg p-4 mb-4 cursor-pointer hover:bg-[#D8EBEC] hover:text-black">
            <h1 className="text-lg font-semibold">Theme Settings</h1>
            <AiOutlineRight />
          </div>
        </div>
      </div>
      <ChangePasswordModal show={showModal} setShow={setShowModal} />
    </div>
  );
};

export default SettingsCard;
