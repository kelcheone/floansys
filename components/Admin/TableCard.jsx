// A scrollable table card to show loans of a given user
// styled with tailwindcss

import { useContext } from "react";
import { Gcontext } from "../../context/Gcontext";

const TableCard = () => {
  const timeout = () => setTimeout(() => console.log, 400);
  timeout();
  const { viewUserDetails, handleViewLoan } = useContext(Gcontext);
  return (
    // scrollable table div
    <div className="overflow-x-auto">
      <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center  font-sans overflow-hidden">
        <div className="w-full lg:w-5/6">
          <div className="bg-white shadow-md rounded my-6">
            <table className="min-w-max w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">ID</th>
                  <th className="py-3 px-6 text-left">Amount</th>
                  <th className="py-3 px-6 text-center">Status</th>
                  <th className="py-3 px-6 text-center">Date</th>
                  <th className="py-3 px-6 text-center">View</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {viewUserDetails && viewUserDetails.loans?.length > 0 ? (
                  viewUserDetails.loans.map((loan) => (
                    <tr
                      key={loan.loan_id}
                      className="border-b border-gray-200 hover:bg-gray-100"
                    >
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="font-medium">{loan.loan_id}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <span>{loan.amount}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <span
                          // if status is rejected, show red bg else green bg
                          className={
                            loan.status === "rejected"
                              ? "bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs"
                              : "bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs"
                          }
                        >
                          {loan.status}
                        </span>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex items-center justify-center">
                          <span>
                            {new Date(
                              Date.parse(loan.created_at)
                            ).toLocaleString("en-GB", {
                              timeZone: "Africa/Nairobi",
                            })}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div
                          onClick={() => handleViewLoan(loan.loan_id)}
                          className="flex item-center justify-center cursor-pointer"
                        >
                          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm2 0v10h10V5H5zm2 2h6v2H7V7zm0 3h6v2H7v-2zm0 3h6v2H7v-2z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="font-medium">No loans</span>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableCard;
