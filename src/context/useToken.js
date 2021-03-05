import { createContext, useState, useContext } from "react";
import getUser from "../services/login";
import newUser from "../services/signup";

const TokenContext = createContext({});

export function TokenProvider(props) {
  const [token, setToken] = useState(localStorage.getItem("token")); // move it to a dedicated component

  const auth = async (data, service) => {
    const serviceFunction = service === "login" ? getUser : newUser;

    const response = await serviceFunction(data);
    if (response.error) {
      return { status: "Error", message: response.error };
    } else {
      setToken(response.token);
      localStorage.setItem("token", response.token);
      return { status: "Success", message: response.message };
    }
  };

  return (
    <TokenContext.Provider value={{ token: token, auth: auth }}>
      {props.children}
    </TokenContext.Provider>
  );
}

export default function useToken() {
  return useContext(TokenContext);
}
