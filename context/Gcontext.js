// Handle authentication

import { useRouter } from "next/router";
import React, { createContext, useState, useEffect } from "react";

export const Gcontext = createContext();

let base_url = "http://localhost:8000/auth";

export const GcontextProvider = (props) => {
  const router = useRouter();
  const [FormData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    national_id: "",
    phone_number: "",
    password: "",
  });

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };
  // handle signup
  const handleSignup = async (e) => {
    e.preventDefault();
    console.log(FormData);

    const res = await fetch(`${base_url}/signup`, {
      method: "POST",
      body: JSON.stringify(FormData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);

    // const data = await res.json();
    if (res.status !== 201 || !res) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("Registration Successful");
      router.push("/auth/login");
    }
  };

  async function handleLogin(e) {
    e.preventDefault();
    console.log(loginData);
    const res = await fetch(`${base_url}/signin`, {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);
    if (res.ok) {
      const json = await res.json();
      // set token as cookie
      document.cookie = `token=${json.token}; path=/`;
      router.push("/user");
    } else {
      alert("Bad credentials");
    }
  }

  const handleChangeLogin = (e, name) => {
    setLoginData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };
  // Extract user id from token in the local storage
  const extractUserId = () => {
    const token = localStorage.getItem("token");
    console.log(token);
  };

  return (
    <Gcontext.Provider
      value={{
        FormData,
        loginData,
        setFormData,
        handleSignup,
        handleChange,
        handleLogin,
        handleChangeLogin,
        extractUserId,
      }}
    >
      {props.children}
    </Gcontext.Provider>
  );
};
