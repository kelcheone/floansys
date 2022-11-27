import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useContext, useEffect, useState } from "react";
import { Gcontext } from "../../context/Gcontext";

import MyStatement from "../../components/User/LoanStatement/Statement";

const Statement = () => {
  const timeout = () => setTimeout(() => console.log, 400);
  timeout();
  const { handleLoanIds, getTransactions } = useContext(Gcontext);

  useEffect(() => {
    handleLoanIds();
    getTransactions();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-[#D8EBEC] p-16">
      <div className="flex items-center justify-between w-full p-4">
        <h1 className="text-xl font-semibold">Loan Statement</h1>
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
      <div className="flex flex-col items-center justify-center w-full h-full  rounded-lg shadow-lg p-16">
        <MyStatement />
      </div>
    </div>
  );
};

export default Statement;
