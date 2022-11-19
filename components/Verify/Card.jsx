let users = [
  {
    UID: 234,
    name: "Maxwell Lemasi",
    profileStatus: "77%",
  },
  {
    UID: 235,
    name: "Sanders Gate",
    profileStatus: "34%",
  },
  {
    UID: 236,
    name: "John Doe",
    profileStatus: "100%",
  },
];

const Card = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex items-center justify-between w-full p-4">
        <h1 className="text-2xl font-bold">Verify Users</h1>
        <button
          onClick={() => console.log("Verified all")}
          className="flex items-center justify-center w-32 h-10 bg-black rounded-lg text-white"
        >
          Verify All
        </button>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-300">
              <th className="p-2">UID</th>
              <th className="p-2">Name</th>
              <th className="p-2">Profile Status</th>
              <th className="p-2">verify </th>
              <th className="p-2">Reject</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr className="border-b-2 border-gray-300 text-center">
                <td className="p-2">{user.UID}</td>
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.profileStatus}</td>
                <td className="p-2">
                  <button className="flex items-center justify-center w-32 h-10 bg-blue-500 rounded-lg text-white">
                    Verify
                  </button>
                </td>
                <td className="p-2">
                  <button className="flex items-center justify-center w-32 h-10 bg-red-500 rounded-lg text-white">
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Card;
