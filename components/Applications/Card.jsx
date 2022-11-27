import { useContext } from "react";
import { Gcontext } from "../../context/Gcontext";

const Card = () => {
  const timeout = () => setTimeout(() => console.log, 400);
  timeout();
  const {
    pendingLoanApplications,
    getPendingLoanApplications,
    handleApproveLoan,
    handleRejectLoan,
  } = useContext(Gcontext);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full h-full">
      <div className="flex items-center justify-between w-full p-4">
        <h1 className="text-2xl font-bold">Users</h1>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-300">
              <th className="p-2">UID</th>
              <th className="p-2">Name</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Intrest Rate</th>
              <th className="p-2">Guarantors</th>
              <th className="p-2">Action 1</th>
              <th className="p-2">Action 2</th>
              <th className="p-2"></th>
            </tr>
          </thead>
          <tbody>
            {/* check if pending loans exits then loop else display no table */}
            {pendingLoanApplications.length > 0 ? (
              pendingLoanApplications.map((application) => (
                <tr
                  key={application.loan_id}
                  className="border-b-2 border-gray-300"
                >
                  <td className="p-2">{application.loan_id}</td>
                  <td className="p-2">{application.user_name}</td>
                  <td className="p-2">{application.amount}</td>
                  <td className="p-2">{application.interest}</td>
                  <td className="p-2">{application.guarantors}</td>
                  <td className="p-2">
                    <button
                      onClick={() => handleApproveLoan(application.loan_id)}
                      className="flex items-center justify-center w-32 h-10 bg-black rounded-lg text-white"
                    >
                      Approve
                    </button>
                  </td>
                  <td className="p-2">
                    <button
                      onClick={() => handleRejectLoan(application.loan_id)}
                      className="flex items-center justify-center w-32 h-10 bg-red-400 rounded-lg text-white"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="border-b-2 border-gray-300">
                <td className="p-2">No pending loan applications</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Card;
