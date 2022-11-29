import { useContext } from "react";
import { Gcontext } from "../../../context/Gcontext";
let data = [
  {
    id: 1,
    borrowdate: "2021-07-01",
    amount: 10000,
    repaymentdate: "2021-07-31",
    status: "pending",
    amountrepaid: 0,
  },
  {
    id: 2,
    borrowdate: "2021-07-01",
    amount: 10000,
    repaymentdate: "2021-07-31",
    status: "pending",
    amountrepaid: 0,
  },
  {
    id: 3,
    borrowdate: "2021-07-01",
    amount: 10000,
    repaymentdate: "2021-07-31",
    status: "pending",
    amountrepaid: 0,
  },
  {
    id: 4,
    borrowdate: "2021-07-01",
    amount: 10000,
    repaymentdate: "2021-07-31",
    status: "pending",
    amountrepaid: 0,
  },
];

const MyStatement = () => {
  const timeout = () => setTimeout(() => console.log, 400);
  timeout();
  const { transactions } = useContext(Gcontext);
  return (
    <div className="flex flex-col items-center justify-center w-full h-full m-7 bg-green-500">
      <div className="flex flex-col items-center justify-center w-full h-full bg-[#ACBFB7]">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-300">
              <th className="p-2">Id</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Dates</th>
              <th className="p-2">Type</th>
            </tr>
          </thead>
          <tbody>
            {transactions?.map((el) => (
              <tr
                key={el.id}
                className="border-b-2 border-gray-300 text-center"
              >
                <td key={el.id} className="p-2">
                  {el.transaction_id}
                </td>
                <td key={el.id} className="p-2">
                  {el.amount}
                </td>
                <td className="p-2">{el.date}</td>
                <td key={el.id} className="p-2">
                  {el.transaction_type}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyStatement;
