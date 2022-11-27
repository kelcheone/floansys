import { useContext } from "react";
import { Gcontext } from "../../context/Gcontext";

const Card = () => {
  const timeout = () => setTimeout(() => console.log, 400);
  timeout();
  const { allUsers, handleViewUser } = useContext(Gcontext);
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
              <th className="p-2">View</th>
            </tr>
          </thead>
          <tbody>
            {allUsers && allUsers.length > 0 ? (
              allUsers.map((user) => (
                <tr key={user.user_id} className="border-b-2 border-gray-300">
                  <td className="p-2">{user.user_id}</td>
                  <td className="p-2">{user.name}</td>
                  <td className="p-2">{user.Borrowed}</td>
                  <td className="p-2">{user.paid}</td>
                  <td className="py-3 px-6 text-center">
                    <span
                      // if approved is true, then show the green bg else if rejected is true, then show the red bg else show the yellow bg
                      className={`${
                        user.status === "approved"
                          ? "bg-green-500 text-white px-3 py-1 rounded-full text-xs"
                          : user.status === "rejected"
                          ? "bg-red-500 text-white px-3 py-1 rounded-full text-xs"
                          : "bg-yellow-500 text-white px-3 py-1 rounded-full text-xs"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="p-2">
                    <button
                      onClick={() => handleViewUser(user.user_id)}
                      className="bg-blue-500 text-white p-2 rounded-lg"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="p-2">No Users</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Card;
