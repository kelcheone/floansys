import React, { useState } from "react";

const SignupForm = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold text-center mb-2">Welcome</h1>
      <h2 className="text-xl text-center mb-8">Create your account</h2>
      <form onSubmit={handleSubmit}>
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
              value={user.firstName}
              onChange={handleChange}
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
              value={user.lastName}
              onChange={handleChange}
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
            value={user.email}
            onChange={handleChange}
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
            value={user.phone}
            onChange={handleChange}
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
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-black focus:text-white focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleChange}
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

        <a
          className="inilne-block align-baseline text-sm text-black hover:text-[#113c42] underline"
          href="/login"
        >
          Log In
        </a>
      </div>
    </div>
  );
};

export default SignupForm;
