// A modal  form to add a guarantor
// styled with tailwindcss
// form has:
// 1. first name
// 2. last name
// 3. phone number
// 4. email
// 5. national id
// 6. checkbox to confirm that the guarantor is a user
// 7. a button to submit the form

// Has a modal to drag and drop files

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
        <div className="flex flex-col items-center justify-center w-1/2 h-1/2 bg-white rounded-lg shadow-lg">
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
            <input
              type="text"
              placeholder="First Name"
              className="w-full h-12 rounded-lg p-4 mb-4"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full h-12 rounded-lg p-4 mb-4"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full h-12 rounded-lg p-4 mb-4"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              className="w-full h-12 rounded-lg p-4 mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="National Id"
              className="w-full h-12 rounded-lg p-4 mb-4"
              value={nationalId}
              onChange={(e) => setNationalId(e.target.value)}
            />
            <div className="flex items-center justify-between w-full mb-4">
              <h1 className="text-lg font-semibold">
                Is the guarantor a user?
              </h1>
              <input
                type="checkbox"
                className="w-6 h-6 rounded-lg"
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
