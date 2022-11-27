//  A modal that allows the user to pay a bill
// takes in the amount to pay and a loan id
//  there is a dropdown that allows the user to select a loan
// styled with tailwindcss

import { useState } from "react";
import { Gcontext } from "../../context/Gcontext";
import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";

const PaybillModal = () => {
  const timeout = () => setTimeout(() => console.log, 400);
  timeout();
  const {
    handlePaybillSubmit,
    showPaybillModal,
    setShowPaybillModal,
    paybillFormdata,
    setPaybillFormData,
    paidAmount,
    setPaidAmount,
    selectedLoanId,
    setSelectedLoanId,
    allLoan_ids,
  } = useContext(Gcontext);

  return (
    <div className="flex flex-col items-center justify-center bf">
      <button
        onClick={() => setShowPaybillModal(!showPaybillModal)}
        className="flex items-center justify-center w-1/2 h-12 bg-black rounded-[100000px] p-3 mt-4 ml-2 mr-2 cursor-pointer"
      >
        Pay Bill
      </button>
      <div
        className={`${
          showPaybillModal ? "block" : "hidden"
        } flex flex-col items-center justify-center w-full h-screen bg-black bg-opacity-50 absolute top-0 left-0`}
      >
        <div className="flex flex-col items-center justify-center w-1/2 h-3/4 bg-[#D8EBEC] rounded-lg">
          <div className="flex items-center justify-center w-full h-1/6">
            <h1 className="text-2xl font-bold">Pay Bill</h1>
            <AiOutlineClose
              onClick={() => setShowPaybillModal(!showPaybillModal)}
              className="text-2xl ml-4 cursor-pointer"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full h-4/6">
            <form
              onSubmit={handlePaybillSubmit}
              className="flex flex-col items-center justify-center w-full h-full"
            >
              <div className="flex flex-col items-center justify-center w-full h-1/3">
                <label htmlFor="amount" className="text-xl font-bold">
                  Amount
                </label>
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  value={paidAmount?.amount}
                  onChange={(e) => setPaidAmount(e.target.value)}
                  className="w-1/2 h-12 rounded-lg border-2 border-black"
                />
              </div>
              <div className="flex flex-col items-center justify-center w-full h-1/3">
                <label htmlFor="loanId" className="text-xl font-bold">
                  Loan Id
                </label>
                <select
                  name="loanId"
                  id="loanId"
                  value={selectedLoanId?.loanId}
                  onChange={(e) => setSelectedLoanId(e.target.value)}
                  className="w-1/2 h-12 rounded-lg border-2 border-black"
                >
                  <option value="1">Select Loan</option>

                  {allLoan_ids?.map((loan_id) => (
                    <option key={loan_id} value={loan_id}>
                      {loan_id}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center justify-center w-full h-1/3">
                <button
                  className="flex items-center justify-center w-1/2 h-12 bg-black rounded-[100000px] p-3 mt-4 ml-2 mr-2 cursor-pointer text-white"
                  onClick={() => {
                    // dont submit if the amount is empty and the loan id is not selected
                    if (
                      paidAmount?.amount === "" ||
                      selectedLoanId?.loanId === "" ||
                      selectedLoanId?.loanId === "1"
                    ) {
                      alert("Please enter the amount and select a loan id");
                    } else {
                      handlePaybillSubmit();
                      setShowPaybillModal(!showPaybillModal);
                    }
                  }}
                >
                  Pay Bill
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaybillModal;
