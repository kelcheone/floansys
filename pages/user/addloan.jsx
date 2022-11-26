import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Loan from "../../components/User/AddLoan/Loan";
import { Gcontext } from "../../context/Gcontext";
const AddLoan = () => {
  const { handleLoanIds } = useContext(Gcontext);

  useEffect(() => {
    handleLoanIds();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-[#D8EBEC] p-16">
      <div className="flex items-center justify-between w-full p-4">
        <h1 className="text-xl font-semibold">Add Loan</h1>
        <Link href="/user">
          <Image
            src="https://i.imgur.com/6VBx3io.png"
            alt="user"
            width={10}
            height={10}
            className="w-10 h-10 rounded-full"
          />
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full  rounded-lg shadow-lg ">
        <Loan />
      </div>
    </div>
  );
};

export default AddLoan;
