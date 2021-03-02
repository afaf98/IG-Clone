import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./SignupPage.css";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

export default function SignupPage() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div className="signupPage">
      <form
        className="form-container text-format"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2>Signup here!</h2>
        First name:{" "}
        <input
          type="text"
          className="input-field"
          name="firstName"
          ref={register}
        />
        <p>{errors.firstName?.message}</p>
        Last name:{" "}
        <input
          type="text"
          className="input-field"
          name="lastName"
          ref={register}
        />
        <p>{errors.lastName?.message}</p>
        Email :{" "}
        <input
          type="email"
          className="input-field"
          name="email"
          ref={register}
        />
        <p>{errors.email?.message}</p>
        Password :{" "}
        <input
          type="password"
          className="input-field"
          name="password"
          ref={register}
        />
        <p>{errors.password?.message}</p>
        <input type="submit" className="submit-button" value="submit" />
      </form>
      <form className="form-container text-format">
        <h2>Login here!</h2>
        Email : <input type="text" className="input-field" />
        Password : <input type="text" className="input-field" />
        <input type="button" value="Submit" className="submit-button" />
      </form>
    </div>
  );
}
