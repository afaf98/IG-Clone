import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import profileSchema from "../../validators/profileSchema";
import loginSchema from "../../validators/loginSchema";

const schema = yup.object().shape({
  ...profileSchema,
  ...loginSchema,
});

export default function SignUpForm() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <form
        className="form-container text-format"
        id="signup-form"
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
        <p id="firstNameError">{errors.firstName?.message}</p>
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
        <input type="submit" className="submit-button" value="Signup" />
      </form>
    </div>
  );
}
