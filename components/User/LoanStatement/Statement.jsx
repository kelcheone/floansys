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

const Statement = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full m-7 bg-green-500">
      <div className="flex flex-col items-center justify-center w-full h-full bg-[#ACBFB7]">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-300">
              <th className="p-2">Borrow Date</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Repayment Date</th>
              <th className="p-2">Status</th>
              <th className="p-2">Amount Repaid</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="border-b-2 border-gray-300 text-center"
              >
                <td className="p-2">{item.borrowdate}</td>
                <td className="p-2">{item.amount}</td>
                <td className="p-2">{item.repaymentdate}</td>
                <td className="p-2">{item.status}</td>
                <td className="p-2">{item.amountrepaid}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Statement;
