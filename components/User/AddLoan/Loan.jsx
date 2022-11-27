import { useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import GuarantorModal from "./GuarantorModal";

import { Gcontext } from "../../../context/Gcontext";
import { useContext } from "react";

const Loan = () => {
  const timeout = () => setTimeout(() => console.log, 400);
  timeout();
  const {
    showGurantor,
    setShowGuarantor,
    handleSubmitLoanForm,
    handleSelect,
    selectedInterest,
    setSelectedInterest,
    loanFormData,
    setLoanFormData,
    setShow,
    handleLoanIds,
    show,
    isAdded,
    setIsAdded,
  } = useContext(Gcontext);

  return (
    <div className="flex flex-col items-center justify-center  h-full">
      <div className="flex flex-col items-center justify-center w-full h-full p-4">
        <h1 className="text-xl font-semibold mb-4">Add Loan</h1>

        <form
          onSubmit={handleSubmitLoanForm}
          className="flex flex-col items-center justify-center w-full h-full p-4"
        >
          <input
            type="number"
            placeholder="Amount"
            className="w-full h-12 rounded-lg p-4 mb-4 bg-black text-white"
            onChange={(e) =>
              setLoanFormData({ ...loanFormData, amount: e.target.value })
            }
          />
          <div className="relative w-full mb-4">
            <div
              className="flex items-center justify-between w-full h-12 rounded-lg p-4 bg-black text-white"
              onClick={() => setShow(!show)}
            >
              <h1>{selectedInterest}</h1>
              <AiOutlineArrowDown />
            </div>
            {show && (
              <div className="absolute top-12 w-full bg-white rounded-lg shadow-lg">
                <div
                  className="flex items-center justify-between w-full h-12 rounded-lg p-4 bg-black text-white"
                  onClick={handleSelect}
                >
                  <h1>5%</h1>
                </div>
                <div
                  className="flex items-center justify-between w-full h-12 rounded-lg p-4 bg-black text-white"
                  onClick={handleSelect}
                >
                  <h1>10%</h1>
                </div>
                <div
                  className="flex items-center justify-between w-full h-12 rounded-lg p-4 bg-black text-white"
                  onClick={handleSelect}
                >
                  <h1>15%</h1>
                </div>
                <div
                  className="flex items-center justify-between w-full h-12 rounded-lg p-4 bg-black text-white"
                  onClick={handleSelect}
                >
                  <h1>20%</h1>
                </div>
              </div>
            )}
          </div>

          <input
            type="date"
            placeholder="Due Date"
            className="w-full h-12 rounded-lg p-4 mb-4 bg-black text-white"
            onChange={(e) =>
              setLoanFormData({ ...loanFormData, due_date: e.target.value })
            }
          />
          {/* A dropdown  */}

          <button
            type="submit"
            className="text-white bg-blue-500 rounded-lg p-4"
          >
            Add Loan
          </button>
        </form>
        {/* Add guarantor button  is gray if isAdded is false*/}
        <button
          className={`${
            isAdded ? "bg-blue-500" : "bg-gray-500"
          } text-white rounded-lg p-4 mt-4`}
          onClick={() => {
            handleLoanIds();
            setShowGuarantor(!showGurantor);
          }}
        >
          Add Guarantor
        </button>
      </div>
      <GuarantorModal show={showGurantor} setShow={setShowGuarantor} />
    </div>
  );
};

export default Loan;
