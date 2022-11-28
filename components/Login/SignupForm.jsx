import Link from "next/link";
import React, { useContext, useState } from "react";

import { Gcontext } from "../../context/Gcontext";

const SignupForm = () => {
  const timeout = () => setTimeout(() => console.log, 400);
  timeout();
  const { handleChange, handleSignup } = useContext(Gcontext);

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold text-center mb-2">Welcome</h1>
      <h2 className="text-xl text-center mb-8">Create your account</h2>
      <form onSubmit={(e) => handleSignup(e)}>
        <div className="flex flex-row mb-2">
          <div className="mb-2 mr-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-black focus:text-white focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={(e) => handleChange(e, "first_name")}
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-black focus:text-white focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={(e) => handleChange(e, "last_name")}
            />
          </div>
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-black focus:text-white focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e, "email")}
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            National ID
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-black focus:text-white focus:outline-none focus:shadow-outline"
            type="number"
            placeholder="ID Number"
            name="email"
            onChange={(e) => handleChange(e, "national_id")}
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Phone
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-black focus:text-white focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Phone"
            name="phone"
            onChange={(e) => handleChange(e, "phone_number")}
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-black focus:text-white focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e, "password")}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-[#5ECDDC] hover:bg-[#2a7a9c] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
      <div className="flex items-center justify-between mt-4">
        <p className="text-sm text-center text-gray-500">
          Already have an account?
        </p>

        <Link
          className="inilne-block align-baseline text-sm text-black hover:text-[#113c42] underline"
          href="/auth/login"
        >
          Log In
        </Link>
      </div>
    </div>
  );
};

export default SignupForm;
