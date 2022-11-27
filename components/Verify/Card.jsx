import { useContext } from "react";
import { Gcontext } from "../../context/Gcontext";

const Card = () => {
  const {
    AllUnverifiedUsers,
    handleVerifyUser,
    handleVerifyAllUsers,
    handleRejectVerification,
  } = useContext(Gcontext);
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex items-center justify-between w-full p-4">
        <h1 className="text-2xl font-bold">Verify Users</h1>
        <button
          onClick={() => handleVerifyAllUsers()}
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
            {AllUnverifiedUsers && AllUnverifiedUsers.length > 0 ? (
              AllUnverifiedUsers.map((unverifiedUser) => (
                <tr
                  key={unverifiedUser.user_id}
                  className="border-b-2 border-gray-300"
                >
                  <td className="p-2">{unverifiedUser.user_id}</td>
                  <td className="p-2">{unverifiedUser.name}</td>
                  <td className="p-2">{unverifiedUser.profile_completed}</td>
                  <td className="p-2">
                    <button
                      onClick={() => handleVerifyUser(unverifiedUser.user_id)}
                      className="flex items-center justify-center w-20 h-10 bg-black rounded-lg text-white"
                    >
                      Verify
                    </button>
                  </td>
                  <td className="p-2">
                    <button
                      onClick={() =>
                        handleRejectVerification(unverifiedUser.user_id)
                      }
                      className="flex items-center justify-center w-20 h-10 bg-black rounded-lg text-white"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="border-b-2 border-gray-300">
                <td className="p-2">No unverified users</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Card;
