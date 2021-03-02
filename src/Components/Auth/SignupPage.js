import React from "react";
import SignUpForm from "./SignUpFrom";
import LoginForm from "./LoginForm";

import "./SignupPage.css";

export default function SignupPage() {
  return (
    <div className="signupPage">
      <SignUpForm />
      <LoginForm />
    </div>
  );
}
