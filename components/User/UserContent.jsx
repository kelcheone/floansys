import Link from "next/link";
import Button from "./Button";
import UserCard from "./UserCard";
import { Gcontext } from "../../context/Gcontext";
import { useContext, useEffect } from "react";

let user_loan_history = {
  created_at: "2021-01-01",
  amount: 800,
  due_date: "2021-01-01",
  paid: 100,
};

const UserContent = () => {
  const { userLoans, getUserLoanDetails, LoanDetails } = useContext(Gcontext);
  useEffect(() => {
    const data = getUserLoanDetails();
    console.log({ data });
  }, []);

  console.log(userLoans.length);
  const handleClick = () => {
    // link to add loan page
    console.log("clicked");
    return (
      <Link
        href={{
          pathname: "/user/addloan",
        }}
      >
        <a>Add Loan</a>
      </Link>
    );
  };
  return (
    <div className="flex flex-col items-center justify-center md:h-screen bg-background p-5">
      <div className="flex flex-col items-center justify-center w-full h-1/3">
        <h1 className="text-2xl font-bold text-gray-700">Loan Details</h1>
        <div className="flex md:flex-row flex-col items-center justify-center w-full h-2/3">
          <div className="flex flex-col items-center justify-center w-1/2 h-full p-5">
            {/* table with right borders only */}
            <table className="table-auto">
              <thead>
                <tr>
                  <th className="border-r-2 border-gray-300  px-4 py-2">
                    Loans
                  </th>
                  <th className="border-r-2 border-gray-300  px-4 py-2">
                    Time
                  </th>
                  <th className="border-r-2 border-gray-300  px-4 py-2">APR</th>
                  <th className="border-r-2 border-gray-300  px-4 py-2">
                    Balance
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-r-2 border-gray-300  px-4 py-2">
                    {Object.keys(LoanDetails)?.length > 0
                      ? LoanDetails.loans
                      : "No loans"}
                  </td>
                  <td className="border-r-2 border-gray-300  px-4 py-2">
                    {Object.keys(LoanDetails)?.length > 0
                      ? LoanDetails.time
                      : ""}
                    <span className="font-bold"> Months</span>
                  </td>
                  <td className="border-r-2 border-gray-300  px-4 py-2">
                    {Object.keys(LoanDetails)?.length > 0
                      ? LoanDetails.apr
                      : ""}
                    %
                  </td>
                  <td className="border-r-2 border-gray-300  px-4 py-2">
                    $
                    {Object.keys(LoanDetails)?.length > 0
                      ? LoanDetails.Balance
                      : ""}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-center w-full h-2/3">
            <button className="px-4 py-2 text-sm font-bold text-white bg-black rounded hover:bg-gray-700">
              <Link
                href={{
                  pathname: "/user/addloan",
                }}
              >
                Add New Loan
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-1/3">
        <h1 className="text-2xl font-bold text-gray-700">Loan History</h1>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-center w-full h-full">
        {userLoans.length >= 2 ? (
          userLoans.map((loan, index) => {
            if (index < 2) {
              return (
                <UserCard key={index} user_loan_history={loan} index={index} />
              );
            }
          })
        ) : (
          <>
            <UserCard user_loan_history={user_loan_history} />
            <UserCard user_loan_history={user_loan_history} />
          </>
        )}
      </div>

      <div className="flex items-center justify-center w-full h-1/3">
        <button className="px-4 py-2 text-sm font-bold text-white bg-black rounded hover:bg-gray-700">
          <Link
            href={{
              pathname: "/user/statement",
            }}
          >
            More Statements
          </Link>
        </button>
      </div>
    </div>
  );
};

export default UserContent;
