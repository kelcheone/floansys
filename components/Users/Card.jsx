import { useState } from "react";
import EditModal from "../../components/Users/EditModal";
import AddUser from "./AddUser";

let users = [
  {
    UID: 1,
    name: "John Doe",
    amount: "100000",
    intrestRate: "10%",
    guarantors: "2",
  },
  {
    UID: 2,
    name: "Mark Oj",
    amount: "197000",
    intrestRate: "3.4%",
    guarantors: "1",
  },
  {
    UID: 3,
    name: "Vicky Oj",
    amount: "23450",
    intrestRate: "5.4%",
    guarantors: "3",
  },
];

const Card = () => {
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showAddUser, setShowAddUser] = useState(false);
  const [options, setOptions] = useState(["Edit", "Delete"]);
  const [selected, setSelected] = useState("Edit");
  const toggle = () => setIsOpen(!isOpen);
  const handleSelect = (e) => {
    if (e.target.value === "Edit") {
      setShowModal(true);
    } else {
      console.log("Delete");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex items-center justify-between w-full p-4">
        <h1 className="text-2xl font-bold">Users</h1>
        <button
          onClick={() => setShowAddUser(true)}
          className="flex items-center justify-center w-32 h-10 bg-black rounded-lg text-white"
        >
          Add User
        </button>
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
            {users.map((user) => (
              <tr className="border-b-2 border-gray-300 text-center">
                <td className="p-2">{user.UID}</td>
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.amount}</td>
                <td className="p-2">{user.intrestRate}</td>
                <td className="p-2">{user.guarantors}</td>
                <td className="p-2">
                  <button
                    onClick={() => setShowModal(true)}
                    className="flex items-center justify-center w-32 h-10 bg-green-500 rounded-lg text-white"
                  >
                    Edit
                  </button>
                </td>
                <td className="p-2">
                  <button
                    onClick={() => console.log("Delete")}
                    className="flex items-center justify-center w-32 h-10 bg-red-500 rounded-lg text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <AddUser showAddUser={showAddUser} setShowAddUser={setShowAddUser} />
      <EditModal show={showModal} setShow={setShowModal} user={users[0]} />
    </div>
  );
};

export default Card;
