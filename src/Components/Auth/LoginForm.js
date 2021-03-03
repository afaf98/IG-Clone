import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import loginSchema from "../../validators/loginSchema";
import getUser from "../../databaseCalls/login";
import { Redirect } from "react-router-dom";

const schema = yup.object().shape(loginSchema);

export default function LoginForm() {
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    const response = await getUser(data);
    if (response.error) {
      setError(response.error);
      setStatus(response.status);
    } else {
      setStatus(response.status);
      setMessage(response.message);
    }
  };

  return (
    <form
      className="form-container text-format"
      id="login-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2>Login here!</h2>
      <p className={!message ? "display-none" : "error"}>
        {message ? <Redirect to="/home" /> : "Check out what's new today!"}
      </p>
      Email :{" "}
      <input type="email" name="email" className="input-field" ref={register} />
      <p>{errors.email?.message}</p>
      Password :{" "}
      <input
        type="password"
        name="password"
        className="input-field"
        ref={register}
      />
      <p>{errors.password?.message}</p>
      <p className={error ? "error" : "display-none"}>{error}</p>
      <input type="submit" value="Login" className="submit-button" />
    </form>
  );
}
