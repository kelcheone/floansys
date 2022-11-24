// Handle authentication

import { useRouter } from "next/router";
import React, { createContext, useState, useEffect } from "react";

export const Gcontext = createContext();

let base_url = "http://localhost:8000";

export const GcontextProvider = (props) => {
  const router = useRouter();
  /**
     * first_name
last_name
national_id
phone_number
email
password
     */
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
    const res = await fetch(
      `http://localhost:8000/signin
    `,
      {
        method: "POST",
        body: JSON.stringify(loginData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res);
    if (res.ok) {
      const json = await res.json();
      localStorage.setItem("token", json.token);
      router.push("/user");
    } else {
      alert("Bad credentials");
    }
  }

  const handleChangeLogin = (e, name) => {
    setLoginData((prevState) => ({ ...prevState, [name]: e.target.value }));
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
      }}
    >
      {props.children}
    </Gcontext.Provider>
  );
};
