import { useState } from "react";

import { AiOutlineClose } from "react-icons/ai";

const EditModal = ({ user, show, setShow }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState(user.role);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, role);
  };

  return (
    <div
      className={`${
        show ? "block" : "hidden"
      } fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50`}
    >
      <div className="flex items-center justify-center w-full h-full">
        <div className="bg-white w-1/2 h-1/2 rounded-lg">
          <div className="flex items-center justify-between p-4">
            <h1 className="text-xl font-semibold">Edit User</h1>
            <AiOutlineClose
              className="text-2xl cursor-pointer"
              onClick={() => setShow(false)}
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center space-y-4 p-4"
          >
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-3/4 p-2 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-3/4 p-2 border border-gray-300 rounded-lg"
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
              className="w-3/4 p-2 bg-blue-500 text-white rounded-lg"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
