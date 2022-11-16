import React from "react";
import Card from "./Card";
import SignupForm from "./SignupForm";

const SignupPage = () => {
  return (
    <div className="flex items-center justify-center h-full bg-[#D8EBEC]">
      <Card>
        <SignupForm />
      </Card>
    </div>
  );
};

export default SignupPage;
