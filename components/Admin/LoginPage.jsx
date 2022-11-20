import React from "react";
import Card from "./Card";
import LogInForm from "./LogInForm";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#D8EBEC]">
      <Card>
        <LogInForm />
      </Card>
    </div>
  );
};

export default LoginPage;
