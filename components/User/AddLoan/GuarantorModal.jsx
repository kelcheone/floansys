import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import AddFile from "./AddFile";

const GuarantorModal = ({ show, setShow }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [isUser, setIsUser] = useState(false);
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // send the request to the server
    // if the request is successful
    // close the modal
    setShow(false);
  };

  return (
    <div
      className={`${
        show ? "block" : "hidden"
      } fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50`}
    >
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-col items-center justify-center w-1/2  bg-[#ACBFB7] rounded-lg shadow-lg">
          <div className="flex items-center justify-between w-full p-4">
            <h1 className="text-xl font-semibold">Add Guarantor</h1>
            <AiOutlineClose
              className="text-black cursor-pointer"
              onClick={() => setShow(false)}
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center w-full h-full p-4"
          >
            <div className="flex flex-row items-center justify-between  w-full h-full p-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full h-12 rounded-lg p-4 mb-4 mr-2 bg-black text-white"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />

              <input
                type="text"
                placeholder="Last Name"
                className="w-full h-12 rounded-lg p-4 mb-4 bg-black text-white"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full h-12 rounded-lg p-4 mb-4 bg-black text-white"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              className="w-full h-12 rounded-lg p-4 mb-4 bg-black text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="National Id"
              className="w-full h-12 rounded-lg p-4 mb-4 bg-black text-white"
              value={nationalId}
              onChange={(e) => setNationalId(e.target.value)}
            />
            <div className="flex items-center justify-between w-full mb-4">
              <h1 className="text-lg font-semibold">
                Is the guarantor a user?
              </h1>
              <input
                type="checkbox"
                className="w-6 h-6 rounded-lg "
                checked={isUser}
                onChange={(e) => setIsUser(e.target.checked)}
              />
            </div>
            <AddFile file={file} setFile={setFile} />
            <button
              type="submit"
              className="w-full h-12 rounded-lg bg-blue-500 text-white font-semibold"
            >
              Add Guarantor
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GuarantorModal;
