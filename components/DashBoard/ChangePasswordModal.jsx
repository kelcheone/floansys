// A modal to change the admin password
// styled with tailwindcss

import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const ChangePasswordModal = ({ show, setShow }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      // send the request to the server
      // if the request is successful
      // close the modal
      setShow(false);
    }
  };

  return (
    <div
      className={`${
        show ? "block" : "hidden"
      } fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50`}
    >
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-col items-center justify-center w-1/2 h-1/2 bg-white rounded-lg shadow-lg">
          <div className="flex items-center justify-between w-full p-4">
            <h1 className="text-xl font-semibold">Change Password</h1>
            <AiOutlineClose
              className="text-black cursor-pointer"
              onClick={() => setShow(false)}
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center w-full h-full p-4"
          >
            <input
              type="password"
              placeholder="Old Password"
              className="w-full h-12 rounded-lg p-4 mb-4"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="New Password"
              className="w-full h-12 rounded-lg p-4 mb-4"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full h-12 rounded-lg p-4 mb-4"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-full h-12 rounded-lg bg-black text-white font-semibold"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};


export default ChangePasswordModal;