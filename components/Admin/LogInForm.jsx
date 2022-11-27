import Link from "next/link";
import { useContext } from "react";

import { Gcontext } from "../../context/Gcontext";

const LogInForm = () => {
  const timeout = () => setTimeout(() => console.log, 400);
  timeout();
  const { handleChangeLogin, handleLogin } = useContext(Gcontext);

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold text-center mb-4">Welcome Back</h1>
      <h2 className="text-xl text-center mb-8">Log in to your account</h2>
      <form onSubmit={(e) => handleLogin(e)}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-black focus:text-white focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email"
            onChange={(e) => handleChangeLogin(e, "username")}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3  bg-black focus:text-white leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Password"
            onChange={(e) => handleChangeLogin(e, "password")}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-[#5ECDDC] hover:bg-[#2a7a9c] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Log In
          </button>
        </div>
      </form>
      <div className="flex items-center justify-between mt-4">
        <Link
          className="inilne-block align-baseline text-sm text-black hover:text-[#113c42] underline"
          href="#"
        >
          Forgot Password?
        </Link>
        <div>
          <Link
            className="inilne-block align-baseline  text-sm text-black hover:text-[#113c42] underline"
            href="#"
          >
            Admin Login
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <p className="text-sm text-center text-gray-500">
          Don't have an account?
        </p>
        <Link
          className="inilne-block align-baseline text-sm text-black hover:text-[#113c42] underline"
          href="/auth/signup"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LogInForm;
