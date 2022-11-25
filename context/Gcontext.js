// Handle authentication

import { useRouter } from "next/router";
import React, { createContext, useState, useEffect } from "react";
import { parseJwt } from "../lib/utils";

export const Gcontext = createContext();

let base_url = "http://localhost:8000/auth";
const loanUrl = "http://localhost:8000/loans";

export const GcontextProvider = (props) => {
  const [user, setUser] = useState(null);
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

  // Loans///////////////////////////////////////////////////////////////////////////////

  const [showGurantor, setShowGuarantor] = useState(false);
  const [loanFormData, setLoanFormData] = useState({
    // turn amount to float
    amount: "",
    interest: "",
    due_date: "",
  });
  const [show, setShow] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState(
    "Select Loan Interest"
  );
  const [isAdded, setIsAdded] = useState(false);

  const handleSelect = (e) => {
    setSelectedInterest(e.target.innerText);
    setLoanFormData({ ...loanFormData, interest: e.target.innerText });

    setShow(false);
  };

  const handleSubmitLoanForm = async (e) => {
    e.preventDefault();
    let newObject = {
      // turn amount to float
      amount: parseFloat(loanFormData.amount),
      interest: parseFloat(loanFormData.interest),
      due_date: loanFormData.due_date,
    };
    console.log(JSON.stringify(newObject));
    const res = await fetch(loanUrl, {
      method: "POST",
      // convert amount and interest to float

      body: JSON.stringify(newObject),

      headers: {
        "Content-Type": "application/json",
        // get token from storage
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    setIsAdded(true);
    // send the request to the server
    // if the request is successful
    // close the modal
  };

  // upload loan

  ///////////////////////////////////////////////////////////////////////////

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
      // store token in local storage
      localStorage.setItem("token", json.token);

      // get user id from token
      const token = json.token;
      // decode token and redirect to user with user id
      try {
        const decoded = parseJwt(token);
        console.log(decoded);
      } catch (err) {
        console.log(err);
      }

      router.push("/user");
    } else {
      alert("Bad credentials");
    }
    return res;
  }

  const handleChangeLogin = (e, name) => {
    setLoginData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };
  // Extract user id from token in the local storage
  const extractUserId = () => {
    const token = document.cookie.split("=")[2];
    const decoded = parseJwt(token);

    console.log(decoded);
  };

  const userDetails = async () => {
    const res = await fetch("http://localhost:8000/users/1", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    console.log(data);
    setUser(data);
  };

  return (
    <Gcontext.Provider
      value={{
        FormData,
        user,
        loginData,
        setFormData,
        handleSignup,
        handleChange,
        handleLogin,
        handleChangeLogin,
        extractUserId,
        userDetails,
        showGurantor,
        setShowGuarantor,
        loanFormData,
        setLoanFormData,
        show,
        setShow,
        selectedInterest,
        setSelectedInterest,
        handleSelect,
        handleSubmitLoanForm,
        isAdded,
        setIsAdded,
      }}
    >
      {props.children}
    </Gcontext.Provider>
  );
};
