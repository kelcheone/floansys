import React, { useContext } from "react";
import Dropdown from "./Dropdown";
import Chart from "./Chart";
import { GoPrimitiveDot } from "react-icons/go";
import { Gcontext } from "../../context/Gcontext";

const SummaryCard = () => {
  const timeout = () => setTimeout(() => console.log, 400);
  timeout();
  const { activePayments, defaultedLoans } = useContext(Gcontext);
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
          <h1 className="text-xl font-bold ml-2">Active Payments</h1>
        </div>
        <div className="w-full mt-4 flex justify-evenly">
          <div>
            <h1 className="text-xl font-bold">
              {Object.keys(activePayments).length > 0
                ? activePayments.accounts
                : 0}
            </h1>

            <p>Total number of active Payers</p>
          </div>
          <div>
            <h1 className="text-xl font-bold">
              {Object.keys(activePayments).length > 0
                ? activePayments.total_amount
                : 0}
            </h1>
            <p>Total amount of active payments</p>
          </div>
        </div>
      </div>
      <div className="w-full mt-4">
        <div className="flex flex-row items-center ">
          <div className="flex items-center  rounded-full bg-[#f3f4f6] p-3">
            <GoPrimitiveDot className="text-2xl text-yellow-400" />
          </div>
          <h1 className="text-xl font-bold ml-2">Defaulted</h1>
        </div>
        <div className="w-full mt-4 flex justify-between md:flex-row flex-col">
          <div className="mr-4">
            <div className="mb-4">
              <h1 className="text-xl font-bold">
                {Object.keys(defaultedLoans).length > 0
                  ? defaultedLoans.accounts
                  : 0}
              </h1>

              <p>Total number of active defaulters</p>
            </div>
            <div>
              <h1 className="text-xl font-bold">
                {Object.keys(defaultedLoans).length > 0
                  ? defaultedLoans.total_amount
                  : 0}
              </h1>
              <p>Total amount of defaulted payments</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center bg-[#19513066] rounded-lg shadow-lg p-4  h-full mt-4">
            <div className="flex flex-col items-center justify-center w-full mt-4 ">
              <Chart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
