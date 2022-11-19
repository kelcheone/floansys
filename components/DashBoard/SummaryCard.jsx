import React from "react";
import Dropdown from "./Dropdown";
import Chart from "./Chart";
import { GoPrimitiveDot } from "react-icons/go";

let data = {
  ActivePayments: {
    title: "Active Payments",
    number: "1,234",
    amount: "1,234",
    color: "bg-blue-500",
    icon: "bx bx-user",
  },
  Defaulted: {
    title: "Defaulted",
    number: "1,234",
    amount: "1,234",
    color: "bg-blue-500",
    icon: "bx bx-user",
  },
};

// Creates a larger card with  made up of different components
// the card is made up of  header with green icon to show the active payments and the dropdown
// Bellow the header is a breakdown of the active payments.
// then  another header with yellow icon to show the defaulted payments.
// Bellow the header is a breakdown of the defaulted payments.
// besides  the default payments, is the chart.
// bellow the chart is the total amount of payments.
const SummaryCard = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-4 w-full h-full">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-xl font-semibold">Summary</h1>
        <Dropdown />
      </div>
      <div className="w-full">
        <div className="flex flex-row items-center justify-center">
          <div className="flex items-center justify-center rounded-full bg-[#f3f4f6] p-3">
            <GoPrimitiveDot className="text-2xl text-green-400" />
          </div>
          <h1 className="text-xl font-semibold ml-2">Active Payments</h1>
        </div>
        <div className="w-full mt-4 flex justify-evenly">
          <div>
            <h1 className="text-xl font-semibold">4</h1>

            <p>Total number of active Payers</p>
          </div>
          <div>
            <h1 className="text-xl font-semibold">1,234</h1>
            <p>Total amount of active payments</p>
          </div>
        </div>
      </div>
      <div className="w-full mt-4">
        <div className="flex flex-row items-center justify-center">
          <div className="flex items-center justify-center rounded-full bg-[#f3f4f6] p-3">
            <GoPrimitiveDot className="text-2xl text-yellow-400" />
          </div>
          <h1 className="text-xl font-bold ml-2">Defaulted</h1>
          {/* number of defaulted users with small desciption */}
        </div>
        <div className="w-full mt-4 flex justify-evenly">
          <div>
            <h1 className="text-xl font-semibold">4</h1>

            <p>Total number of active defaulters</p>
          </div>
          <div>
            <h1 className="text-xl font-semibold">1,234</h1>
            <p>Total amount of defaulted payments</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-green-400 rounded-lg shadow-lg p-4 w-full h-full mt-4">
        <div className="flex flex-col items-center justify-center w-full mt-4 ">
          <Chart />
        </div>
      </div>
      {/* <Chart /> */}
      <div className="flex flex-row items-center justify-between w-full mt-4">
        <div className="flex flex-row items-center justify-center">
          <div className="flex items-center justify-center rounded-full bg-[#f3f4f6] p-3">
            <GoPrimitiveDot className="text-2xl text-green-400" />
          </div>
          <h1 className="text-xl font-semibold ml-2">Total Amount</h1>
        </div>
        <h1 className="text-xl font-semibold">1,234</h1>
      </div>
    </div>
  );
};

export default SummaryCard;
