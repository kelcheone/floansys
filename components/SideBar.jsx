import Button from "./Button";

const data = {
  name: "John Doe",
  email: "johndoe@gmail.com",
  paymentDates: [
    {
      date: "01/01/2021",
      amount: "$100",
    },
    {
      date: "02/01/2021",
      amount: "$100",
    },
    {
      date: "03/01/2021",
      amount: "$100",
    },
  ],
  paymentAmount: "$300",
};

const SideBar = () => {
  return (
    <div className="flex flex-col mr-4 rounded-r-lg items-center justify-center w-full h-screen bg-sidebar">
      <div className="flex flex-col items-center justify-center w-full h-1/3">
        <img
          className="w-24 h-24 rounded-full"
          src="https://picsum.photos/200"
          alt="user"
        />
        <h1 className="mt-2 text-2xl font-bold text-black">{data.name}</h1>
        <p className="text-sm text-black">{data.email}</p>
      </div>
      {/* amount owed */}
      <div className="text-black text-center">
        <h1 className="text-xl font-bold text-black">Amount Owed</h1>
        <p className="text-xl font-bold text-black">{data.paymentAmount}</p>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-1/3">
        <h1 className="text-xl font-bold text-black">Payment Dates</h1>
        <div className="flex flex-col items-center justify-center w-full h-2/3 px-5">
          {data.paymentDates.map((paymentDate, index) => (
            <div
              key={index}
              className="flex items-center justify-between w-full h-1/3"
            >
              <p className="text-sm text-white">{paymentDate.date}</p>
              <p className="text-sm text-white">{paymentDate.amount}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-1/3">
        <Button label="Pay Bill" />
      </div>
    </div>
  );
};

export default SideBar;
