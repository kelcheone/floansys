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
    const data = await res.json();
    console.log(data);

    setIsAdded(true);
    // send the request to the server
    // if the request is successful
    // close the modal
  };

  // upload loan

  ///////////////////////////////////////////////////////////////////////////

  ////////////Guarantor////////////////////
  const [showLoanId, setShowLoanId] = useState(false);
  const [guarantor, setGuarantor] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    national_id: "",
    is_user: false,
    loan_id: "",
  });

  const handleSelectLoanId = (loan_id) => {
    setGuarantor({ ...guarantor, loan_id: loan_id });
    setShowLoanId(false);
    console.log(loan_id);
  };
  const [Loan_ids, setLoan_ids] = useState([]);

  // Get loan_ids without guarantors
  const handleLoanIds = async () => {
    const res = await fetch("http://localhost:8000/guarantors/no", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    const loan_ids = data.map((item) => item.loan_id);
    setLoan_ids(loan_ids);

    console.log(Loan_ids);
    return data;
  };

  const handleSubmitGuarantorForm = (e) => {
    e.preventDefault();
    // send the request to the server
    const res = fetch("http://localhost:8000/guarantors", {
      method: "POST",
      body: JSON.stringify(guarantor),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    // if the request is successful

    // const data = res.json();
    console.log(res);

    // close the modal
    console.log(JSON.stringify(guarantor));

    setShowGuarantor(false);
  };

  ////////////////////////////////////////////////////

  ///////////////////////////AUTHENTICATION////////////////////////////////////

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
    const res = await fetch("http://localhost:8000/users/me", {
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
        showLoanId,
        setShowLoanId,
        handleSubmitGuarantorForm,
        handleSelectLoanId,
        guarantor,
        setGuarantor,
        handleLoanIds,
        Loan_ids,
      }}
    >
      {props.children}
    </Gcontext.Provider>
  );
};
