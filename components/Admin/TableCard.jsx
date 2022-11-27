// A scrollable table card to show loans of a given user
// styled with tailwindcss

import { useContext } from "react";
import { Gcontext } from "../../context/Gcontext";

const TableCard = () => {
  const { viewUserDetails } = useContext(Gcontext);
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
                        <div className="flex item-center justify-center">
                          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
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

                {/* <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="font-medium">1</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                      <span>100000</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                      pending
                    </span>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <div className="flex item-center justify-center">
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-edit"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#718096"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 3v4h4" />
                          <path d="M19 20v-13a2 2 0 0 0 -2 -2h-13l-3 3v13a2 2 0 0 0 2 2h13a2 2 0 0 0 2 -2" />
                          <path d="M16 3.13a2 2 0 0 1 2.867 2.867l-11 11a2 2 0 0 1 -2.867 -2.867z" />
                        </svg>
                      </div>
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-trash"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#718096"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <line x1="4" y1="7" x2="20" y2="7" />
                          <line x1="10" y1="11" x2="10" y2="17" />
                          <line x1="14" y1="11" x2="14" y2="17" />
                          <path d="M5 7v-2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v2" />
                          <path d="M10 11v6m4 -6v6" />
                        </svg>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                      <span className="font-medium">2</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                      <span>200000</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                      approved
                    </span>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <div className="flex item-center justify-center">
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-edit"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#718096"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 3v4h4" />
                          <path d="M19 20v-13a2 2 0 0 0 -2 -2h-13l-3 3v13a2 2 0 0 0 2 2h13a2 2 0 0 0 2 -2" />
                          <path d="M16 3.13a2 2 0 0 1 2.867 2.867l-11 11a2 2 0 0 1 -2.867 -2.867z" />
                        </svg>
                      </div>
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-trash"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#718096"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <line x1="4" y1="7" x2="20" y2="7" />
                          <line x1="10" y1="11" x2="10" y2="17" />
                          <line x1="14" y1="11 " x2="14" y2="17" />
                          <path d="M5 7v-2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v2" />
                          <path d="M10 11v6m4 -6v6" />
                        </svg>
                      </div>
                    </div>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableCard;
