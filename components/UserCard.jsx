const UserCard = ({ user_loan_history }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-5 bg-[#ACBFB7] m-2 rounded-md">
      <div className="flex flex-col items-center justify-center w-full h-2/3">
        <div className="flex md:items-center justify-between w-full h-1/3">
          <p className="text-sm text-black">Borrow Date</p>
          <p className="text-sm text-black">{user_loan_history.borrow_date}</p>
        </div>
        <div className="flex items-center justify-between w-full h-1/3">
          <p className="text-sm text-black">Amount</p>
          <p className="text-sm text-black">{user_loan_history.amount}</p>
        </div>
        <div className="flex items-center justify-between w-full h-1/3">
          <p className="text-sm text-black">Date to Pay</p>
          <p className="text-sm text-black">{user_loan_history.date_to_pay}</p>
        </div>
        <div className="flex items-center justify-between w-full h-1/3">
          <p className="text-sm text-black">Amount to Pay</p>
          <p className="text-sm text-black">
            {user_loan_history.amount_to_pay}
          </p>
        </div>
        <div className="flex items-center justify-between w-full h-1/3">
          <p className="text-sm text-black">Amount Paid</p>
          <p className="text-sm text-black">{user_loan_history.amount_paid}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
