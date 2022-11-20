import { useState } from "react";

const LogInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold text-center mb-4">Welcome Back</h1>
      <h2 className="text-xl text-center mb-8">Log in to your account</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-black focus:text-white focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3  bg-black focus:text-white leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
        <a
          className="inilne-block align-baseline text-sm text-black hover:text-[#113c42] underline"
          href="#"
        >
          Forgot Password?
        </a>
        <div>
          <a
            className="inilne-block align-baseline  text-sm text-black hover:text-[#113c42] underline"
            href="/login"
          >
            Login as user
          </a>
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
