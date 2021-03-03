import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import loginSchema from "../../validators/loginSchema";
import getUser from "../../services/login";
import { Redirect } from "react-router-dom";
import useToken from "../../context/useToken";

const schema = yup.object().shape(loginSchema);

export default function LoginForm() {
  const [feedback, setFeedback] = useState({ status: null, message: "" });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const { token, setToken } = useToken();
  console.log("token", token);
  const onSubmit = async (data) => {
    const response = await getUser(data);
    if (response.error) {
      setFeedback({ status: "Error", message: response.error });
    } else {
      setFeedback({ status: "Success", message: response.message });
      localStorage.setItem("token", response.token);
      setToken(response.token);
    }
  };

  if (token) {
    return <Redirect to="/home" />;
  }
  return (
    <form
      className="form-container text-format"
      id="login-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2>Login here!</h2>
      {feedback.status && (
        <p className={feedback.status === "Error" ? "error" : "success"}>
          {feedback.message && feedback.status === "Success" ? (
            <Redirect to="/home" />
          ) : (
            feedback.message
          )}
        </p>
      )}
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
      <input type="submit" value="Login" className="submit-button" />
    </form>
  );
}
