import Button from "./Button";
import UserCard from "./UserCard";

let user_loan_history = {
  borrow_date: "2021-01-01",
  amount: "$100",
  date_to_pay: "2021-01-01",
  amount_to_pay: "$100",
  amount_paid: "$100",
};

const UserContent = () => {
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
                  <td className="border-r-2 border-gray-300  px-4 py-2">1</td>
                  <td className="border-r-2 border-gray-300  px-4 py-2">
                    23 Months
                  </td>
                  <td className="border-r-2 border-gray-300  px-4 py-2">10%</td>
                  <td className="border-r-2 border-gray-300  px-4 py-2">
                    $100
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-center w-full h-2/3">
            <Button label="Add New Loan" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-1/3">
        <h1 className="text-2xl font-bold text-gray-700">Loan History</h1>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-center w-full h-full">
        <UserCard user_loan_history={user_loan_history} />

        <UserCard user_loan_history={user_loan_history} />
      </div>

      <div className="flex items-center justify-center w-full h-1/3">
        <Button label="More Statements" />
      </div>
    </div>
  );
};

export default UserContent;
