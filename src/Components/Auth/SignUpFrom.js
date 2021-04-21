import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import profileSchema from "../../validators/profileSchema";
import loginSchema from "../../validators/loginSchema";
import { Redirect } from "react-router-dom";
import useToken from "../../context/useToken";

const schema = yup.object().shape({
  ...profileSchema,
  ...loginSchema,
});

export default function SignUpForm() {
  const [feedback, setFeedback] = useState({ status: null, message: "" });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const { token, auth } = useToken();

  const onSubmit = async (data) => {
    const { status, message } = await auth(data, "signUp");
    setFeedback({ status: status, message: message });
  };

  if (token) {
    return <Redirect to="/home" />;
  }

  return (
    <form
      className="form-container text-format"
      id="signup-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2>Sign up here!</h2>
      {feedback.status && <p className="error">{feedback.message}</p>}
      <div className="name-input"> First name :</div>
      <input
        type="text"
        className="input-field"
        name="firstName"
        ref={register}
      />
      <p id="firstNameError">{errors.firstName?.message}</p>
      <div className="name-input"> Last name :</div>
      <input
        type="text"
        className="input-field"
        name="lastName"
        ref={register}
      />
      <p>{errors.lastName?.message}</p>
      <div className="name-input"> Email :</div>
      <input type="email" className="input-field" name="email" ref={register} />
      <p>{errors.email?.message}</p>
      <div className="name-input"> Password :</div>
      <input
        type="password"
        className="input-field"
        name="password"
        ref={register}
      />
      <p>{errors.password?.message}</p>
      <input type="submit" className="submit-button" value="Signup" />
    </form>
  );
}
