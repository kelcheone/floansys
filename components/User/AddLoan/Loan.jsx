// Allows a user to add loans.
// It is composed of:
// 1. A form to add a loan
// 2. A modal to add a guarantor
// 3. A modal to add a file

import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import GuarantorModal from "./GuarantorModal";
import AddFile from "./AddFile";

const Loan = () => {
  const [show, setShow] = useState(false);
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // send the request to the server
    // if the request is successful
    // close the modal
  };

  return (
    <div className="flex flex-col items-center justify-center  h-full">
      <div className="flex flex-col items-center justify-center w-full h-full p-4">
        <h1 className="text-xl font-semibold mb-4">Add Loan</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center w-full h-full p-4"
        >
          <input
            type="number"
            placeholder="Amount"
            className="w-full h-12 rounded-lg p-4 mb-4 bg-black text-white"
          />
          <input
            type="text"
            placeholder="Loan Interest"
            className="w-full h-12 rounded-lg p-4 mb-4 bg-black text-white"
          />

          <div className="flex items-center justify-between w-full mb-4">
            <h1 className="text-xl font-semibold">Guarantor</h1>
            <button
              className="text-white bg-blue-500 rounded-lg p-4"
              onClick={() => setShow(true)}
            >
              Add Guarantor
            </button>
          </div>
          <div className="w-full  mb-4">
            <h1 className="text-xl font-semibold">File</h1>
            <AddFile setFile={setFile} />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-500 rounded-lg p-4"
          >
            Add Loan
          </button>
        </form>
      </div>

      <GuarantorModal show={show} setShow={setShow} />
    </div>
  );
};

export default Loan;
