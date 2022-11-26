import Button from "./Button";

import { Gcontext } from "../../context/Gcontext";
import { useContext } from "react";
import PaybillModal from "./PaybillModal";
import Image from "next/image";

const SideBar = () => {
  const {
    user,
    paidLoans,
    LoanDetails,
    showPaybillModal,
    setShowPaybillModal,
  } = useContext(Gcontext);
  return (
    <div className="flex flex-col mr-4 rounded-r-lg items-center justify-center w-full h-screen bg-sidebar">
      <div className="flex flex-col items-center justify-center w-full h-1/3">
        <Image
          className="w-24 h-24 rounded-full"
          src="https://picsum.photos/200"
          width={100}
          height={100}
          alt="user"
        />
        <h1 className="mt-2 text-2xl font-bold text-black">
          {user?.first_name} {user?.last_name}
        </h1>
        <p className="text-sm text-black">{user?.email}</p>
      </div>
      {/* amount owed */}
      <div className="text-black text-center">
        <h1 className="text-xl font-bold text-black">Amount Owed</h1>
        <p className="text-xl font-bold text-black">${LoanDetails.Balance}</p>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-1/3">
        <h1 className="text-xl font-bold text-black">Payment Dates</h1>
        <div className="flex flex-col items-center justify-center w-full h-2/3 px-5">
          {/* show the first 5 loans only */}
          {paidLoans?.slice(0, 5).map((loan) => (
            <div
              key={loan.id}
              className="flex flex-row items-center justify-between w-full h-1/5"
            >
              <p key={loan.id} className="text-sm text-black">
                {loan.date}
              </p>
              <p key={loan.id} className="text-sm text-black">
                ${loan.amount}
              </p>
            </div>
          ))}
          {/* if no loans */}
          {paidLoans?.length === 0 && (
            <p className="text-sm text-white">No Paid loans yet</p>
          )}
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-1/3">
        <Button
          // onclink reroute to payment page
          onClick={() => setShowPaybillModal(!showPaybillModal)}
          label="Pay Bill"
        />
      </div>

      {showPaybillModal && <PaybillModal />}
    </div>
  );
};

export default SideBar;
