import { useState } from "react";

import { AiOutlineClose } from "react-icons/ai";

const AddUser = ({ showAddUser, setShowAddUser }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Admin");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, phone, password, role);
  };

  return (
    <div
      className={`${
        showAddUser ? "block" : "hidden"
      } fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50`}
    >
      <div className="flex items-center justify-center w-full h-full">
        <div className="bg-[#ACBFB7] w-1/2 h-full rounded-lg">
          <div className="flex items-center justify-between p-4">
            <h1 className="text-xl font-semibold">Add User</h1>
            <AiOutlineClose
              className="text-2xl cursor-pointer"
              onClick={() => setShowAddUser(false)}
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center space-y-4 p-4"
          >
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-3/4 p-2 border border-gray-300 rounded-lg"
              placeholder="First Name"
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-3/4 p-2 border border-gray-300 rounded-lg"
              placeholder="Last Name"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-3/4 p-2 border border-gray-300 rounded-lg"
              placeholder="Email"
            />
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-3/4 p-2 border border-gray-300 rounded-lg"
              placeholder="Phone Number"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-3/4 p-2 border border-gray-300 rounded-lg"
              placeholder="Password"
            />
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-3/4 p-2 border border-gray-300 rounded-lg"
            >
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
            <button
              type="submit"
              className="w-3/4 p-2 bg-black text-white rounded-lg"
            >
              Add User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
