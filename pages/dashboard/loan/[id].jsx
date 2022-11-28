import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const URL = process.env.NEXT_PUBLIC_API_URL;

const Loan = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState("");

  const handleLoan = async (id) => {
    const res = await fetch(`${URL}/admin/loan-details/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    setData(data);
    console.log(data);
  };

  useEffect(
    () => {
      if (!router.isReady) return;
      handleLoan(id);
      console.log(id);
    },
    [id],
    router.isReady
  );

  return (
    <div>
      <div className="flex  bg-background flex-col items-center justify-center min-h-screen py-2">
        <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-3xl font-bold">Loan</h1>
          <div className="flex flex-row items-center justify-center w-full flex-1 px-20 text-center">
            <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
              <h1 className="text-xl font-bold">Amount</h1>
              <h1 className="text-xl font-bold">Interest</h1>
              <h1 className="text-xl font-bold">Paid</h1>
              <h1 className="text-xl font-bold">Status</h1>
            </div>
            <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
              <h1 className="text-xl font-bold">
                {data.amount ? data.amount : "Loading..."}
              </h1>
              <h1 className="text-xl font-bold">
                {data.interest ? data.interest : "Loading..."}
              </h1>
              <h1 className="text-xl font-bold">
                {data.paid || data.paid == 0 ? data.paid : "Loading..."}
              </h1>
              <h1 className="text-xl font-bold">
                {data.status ? data.status : "Loading..."}
              </h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-xl font-bold">Guarantors</h1>
          <div className="flex items-center justify-center w-full flex-1 px-20 text-center">
            <table className="table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Phone</th>
                  <th className="px-4 py-2">Is Customer</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.guarantors && data.guarantors.length > 0 ? (
                  data.guarantors.map((guarantor) => (
                    <tr
                      key={guarantor.id}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-600"
                    >
                      <td className="border px-4 py-2">
                        {guarantor.first_name} {guarantor.last_name}
                      </td>
                      <td className="border px-4 py-2">
                        {guarantor.guarantor_id}
                      </td>
                      <td className="border px-4 py-2">{guarantor.email}</td>
                      <td className="border px-4 py-2">
                        {guarantor.phone_number}
                      </td>
                      <td className="border px-4 py-2">
                        {guarantor.is_customer ? "Yes" : "No"}
                      </td>
                      <td className="border px-4 py-2">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          View
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="border px-4 py-2">No Guarantors</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loan;
