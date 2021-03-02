import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import loginSchema from "../../validators/loginSchema";

const schema = yup.object().shape(loginSchema);

export default function LoginForm() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form
        className="form-container text-format"
        id="login-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2>Login here!</h2>
        Email :{" "}
        <input
          type="email"
          name="email"
          className="input-field"
          ref={register}
        />
        <p>{errors.email?.message}</p>
        Password :{" "}
        <input
          type="password"
          name="password"
          className="input-field"
          ref={register}
        />
        {console.log("errors", errors)}
        <p>{errors.password?.message}</p>
        <input type="submit" value="Login" className="submit-button" />
      </form>
    </div>
  );
}
