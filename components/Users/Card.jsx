// UID
// Name
// Borrowed
// Paid
// Status
let users = [
  {
    UID: 34,
    name: "Osoro Brian",
    borrowed: 2000,
    paid: 1000,
    status: "Active",
  },
  {
    UID: 35,
    name: "Mercy Mwende",
    borrowed: 2000,
    paid: 1000,
    status: "Active",
  },
  {
    UID: 36,
    name: "John Doe",
    borrowed: 2000,
    paid: 1000,
    status: "Defaulted",
  },
];

const Card = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex items-center justify-between w-full p-4">
        <h1 className="text-2xl font-bold">All Users</h1>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-300">
              <th className="p-2">UID</th>
              <th className="p-2">Name</th>
              <th className="p-2">Borrowed</th>
              <th className="p-2">Paid</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr className="border-b-2 border-gray-300 text-center">
                <td className="p-2">{user.UID}</td>
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.borrowed}</td>
                <td className="p-2">{user.paid}</td>
                <td className="p-2">{user.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Card;
