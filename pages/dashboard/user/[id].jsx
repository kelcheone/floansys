import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import TableCard from "../../../components/Admin/TableCard";
import { Gcontext } from "../../../context/Gcontext";
import EditModal from "../../../components/Applications/EditModal";

const URL = process.env.NEXT_PUBLIC_API_URL;

const Id = () => {
  const [showModal, setShowModal] = useState(false);
  const timeout = () => setTimeout(() => console.log, 400);
  timeout();
  const { setViewUserDetails } = useContext(Gcontext);
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState({});
  const handleUserDetails = async () => {
    const res = await fetch(`${URL}/admin/all-user-details/${id}`);
    const data = await res.json();
    console.log(data);
    setUser(data);
    setViewUserDetails(data);
  };

  useEffect(() => {
    if (!router.isReady) return;
    console.log(id);
    handleUserDetails();
  }, [id, router.isReady]);
  return (
    <div className="bg-background min-h-screen">
      {/* user details (name, etc) */}
      <div className="flex items-center justify-between px-4 py-4">
        <div className="text-black text-2xl font-bold">{user.name}</div>
        <div className="text-black text-2xl font-bold">{user.phone_number}</div>
        <div className="text-black text-2xl font-bold">{user.status}</div>
        <button
          onClick={() => {
            console.log("clicked");
            setShowModal(true);
          }}
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          Edit
        </button>
      </div>
      <TableCard />
      <EditModal show={showModal} setShow={setShowModal} />
    </div>
  );
};

export default Id;
