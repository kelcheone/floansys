import React, { useContext, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Gcontext } from "../../../context/Gcontext";

const GuarantorModal = ({ show, setShow }) => {
  const {
    showLoanId,
    setShowLoanId,
    handleSelectLoanId,
    guarantor,
    setGuarantor,
    handleSubmitGuarantorForm,
    handleLoanIds,
    Loan_ids,
  } = useContext(Gcontext);

  useEffect(() => {
    handleLoanIds();
  }, []);

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
            onSubmit={handleSubmitGuarantorForm}
            className="flex flex-col items-center justify-center w-full h-full p-4"
          >
            <div className="flex flex-row items-center justify-between  w-full h-full p-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full h-12 rounded-lg p-4 mb-4 mr-2 bg-black text-white"
                onChange={(e) =>
                  setGuarantor({ ...guarantor, first_name: e.target.value })
                }
              />

              <input
                type="text"
                placeholder="Last Name"
                className="w-full h-12 rounded-lg p-4 mb-4 bg-black text-white"
                onChange={(e) =>
                  setGuarantor({ ...guarantor, last_name: e.target.value })
                }
              />
            </div>
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full h-12 rounded-lg p-4 mb-4 bg-black text-white"
              onChange={(e) =>
                setGuarantor({ ...guarantor, phone_number: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Email"
              className="w-full h-12 rounded-lg p-4 mb-4 bg-black text-white"
              onChange={(e) =>
                setGuarantor({ ...guarantor, email: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="National Id"
              className="w-full h-12 rounded-lg p-4 mb-4 bg-black text-white"
              onChange={(e) =>
                setGuarantor({ ...guarantor, national_id: e.target.value })
              }
            />
            <div className="flex items-center justify-between w-full mb-4">
              <h1 className="text-lg font-semibold">
                Is the guarantor a user?
              </h1>
              <input
                type="checkbox"
                className="w-6 h-6 rounded-lg "
                onChange={(e) =>
                  setGuarantor({ ...guarantor, is_user: e.target.checked })
                }
              />
            </div>
            <div className="relative w-full mb-4">
              <div
                className="flex items-center justify-between w-full h-12 rounded-lg p-4 bg-black text-white"
                onClick={() => setShowLoanId(!showLoanId)}
              >
                <h1>{Loan_ids.length > 0 ? Loan_ids[0] : "No Loans"}</h1>
                <AiOutlineArrowDown />
              </div>
              {showLoanId && (
                // loop through the loan ids and map to the select loan id
                <div className="absolute top-12 w-full h-20 overflow-y-scroll bg-black text-white rounded-lg shadow-lg">
                  {Loan_ids.map((loan_id) => (
                    <div
                      className="w-full h-12 p-4"
                      onClick={() => handleSelectLoanId(loan_id)}
                    >
                      {loan_id}
                    </div>
                  ))}
                </div>
              )}
            </div>

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
