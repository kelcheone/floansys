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
      } catch (err) {
        throw new Error("Invalid token");
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
    setUser(data);
  };

  ///////////////////////////////USER LOANS////////////////////////////////////
  const [userLoans, setUserLoans] = useState([]);

  const getUserLoans = async () => {
    const res = await fetch("http://localhost:8000/loans/my-loans", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();

    setUserLoans(data);
  };
  ////////////////user Loan details/////////////////////
  const [LoanDetails, setLoanDetatils] = useState([]);

  const getUserLoanDetails = async () => {
    const res = await fetch("http://localhost:8000/loans/details", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    setLoanDetatils(data);

    return data;
  };

  /////////////////////////////Transactions////////////////////////////////////
  const [transactions, setTransactions] = useState([]);

  const getTransactions = async () => {
    const res = await fetch("http://localhost:8000/transactions/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    const new_data = data?.map((item) => {
      const date = new Date(Date.parse(item.transaction_date)).toLocaleString(
        "en-GB",
        {
          timeZone: "Africa/Nairobi",
        }
      );
      return { ...item, date };
    });
    console.log(new_data);
    setTransactions(new_data);
  };

  ///////////////////////////Paid Loans///////////////////////////////////////
  const [paidLoans, setPaidLoans] = useState([]);

  const getPaidLoans = async () => {
    const res = await fetch("http://localhost:8000/transactions/paid", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const data = await res.json();
    // change date format in the data
    // if data exists
    if (data.length > 0) {
      const new_data = data?.map((item) => {
        const date = new Date(Date.parse(item.transaction_date)).toDateString();
        return { ...item, date };
      });

      setPaidLoans(new_data);
    }
  };

  //////////////////////////////Pay Loan///////////////////////////////////////
  const [showPaybillModal, setShowPaybillModal] = useState(false);
  const [paidAmount, setPaidAmount] = useState(0);
  const [selectedLoanId, setSelectedLoanId] = useState(0);
  // const [paybillFormData, setPaybillFormData] = useState({
  //   amount: "",
  //   loan_id: 0,
  // });

  const handlePaybillSubmit = (e) => {
    console.log({ paidAmount, selectedLoanId });

    const res = fetch("http://localhost:8000/loans/pay", {
      method: "PATCH",
      body: JSON.stringify({ amount: paidAmount, loan_id: selectedLoanId }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log(res);
    // alert("Payment Successful");
    setShowPaybillModal(false);
  };

  // from userLoans extract loan_ids
  const allLoan_ids = userLoans?.map((item) => item.loan_id);

  //////////////////////////ADMIN OPERATIONS///////////////////////////////////
  const [activePayments, setActivePayments] = useState({
    accounts: 0,
    total_amount: 0,
  });
  user;

  const getActivePayments = async () => {
    const res = await fetch("http://localhost:8000/admin/active-users-count", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    setActivePayments(data);
  };

  const [defaultedLoans, setDefaultedLoans] = useState({
    accounts: 0,
    total_amount: 0,
  });

  const getDefaultedLoans = async () => {
    const res = await fetch(
      "http://localhost:8000/admin/defaulted-users-count",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    const data = await res.json();
    setDefaultedLoans(data);
  };

  const [totalLoans, setTotalLoans] = useState({
    accounts: 0,
    total_amount: 0,
  });

  const getTotalLoans = async () => {
    const res = await fetch("http://localhost:8000/admin/all-loans-count", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    setTotalLoans(data);
  };

  const [pendingLoans, setPendingLoans] = useState({
    accounts: 0,
    total_amount: 0,
  });
  const getPendingLoans = async () => {
    const res = await fetch("http://localhost:8000/admin/pending-count", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    setPendingLoans(data);
  };

  const [unverifiedUsersCount, setUnverifiedUsersCount] = useState({
    accounts: 0,
  });

  const getUnverifiedUsersCount = async () => {
    const res = await fetch("http://localhost:8000/admin/unverified-count", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    setUnverifiedUsersCount(data);
  };

  const [allUsersCount, setAllUsersCount] = useState({ accounts: 0 });

  const getAllUsersCount = async () => {
    const res = await fetch("http://localhost:8000/admin/all-users-count", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    setAllUsersCount(data);
  };

  const [pendingLoanApplications, setPendingLoanApplications] = useState([]);
  const getPendingLoanApplications = async () => {
    const res = await fetch("http://localhost:8000/admin/pending-loans", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    setPendingLoanApplications(data);
  };

  const handleApproveLoan = async (loan_id) => {
    const res = await fetch(
      `http://localhost:8000/admin/approve-loan/${loan_id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await res.json();
  };

  const handleRejectLoan = async (loan_id) => {
    const res = await fetch(
      `http://localhost:8000/admin/reject-loan/${loan_id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await res.json();
  };

  const [AllUnverifiedUsers, setAllUnverifiedUsers] = useState([]);

  const getAllUnverifiedUsers = async () => {
    const res = await fetch(
      "http://localhost:8000/admin/all-unverified-users",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await res.json();
    console.log(data);
    setAllUnverifiedUsers(data);
  };

  const handleVerifyUser = async (user_id) => {
    const res = await fetch(
      `http://localhost:8000/admin/verify-user/${user_id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await res.json();
  };

  const handleVerifyAllUsers = async () => {
    const res = await fetch("http://localhost:8000/admin/verify-all-users", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
  };

  const handleRejectVerification = async (user_id) => {
    const res = await fetch(
      `http://localhost:8000/admin/reject-verification/${user_id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await res.json();
  };
  const [allUsers, setAllUsers] = useState([]);

  const getAllUsers = async () => {
    const res = await fetch("http://localhost:8000/admin/all-users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    setAllUsers(data);
  };

  const handleViewUser = async (user_id) => {
    // route to view page
    router.push(`/dashboard/user/${user_id}`);
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
        getUserLoans,
        userLoans,
        getUserLoanDetails,
        LoanDetails,
        getTransactions,
        transactions,
        getPaidLoans,
        paidLoans,
        showPaybillModal,
        setShowPaybillModal,
        handlePaybillSubmit,
        paidAmount,
        setPaidAmount,
        selectedLoanId,
        setSelectedLoanId,
        allLoan_ids,
        getActivePayments,
        activePayments,
        getDefaultedLoans,
        defaultedLoans,
        getTotalLoans,
        totalLoans,
        getPendingLoans,
        pendingLoans,
        getUnverifiedUsersCount,
        unverifiedUsersCount,
        getAllUsersCount,
        allUsersCount,
        getPendingLoanApplications,
        pendingLoanApplications,
        handleApproveLoan,
        handleRejectLoan,
        getAllUnverifiedUsers,
        AllUnverifiedUsers,
        handleVerifyUser,
        handleVerifyAllUsers,
        handleRejectVerification,
        getAllUsers,
        allUsers,
        handleViewUser,
      }}
    >
      {props.children}
    </Gcontext.Provider>
  );
};
