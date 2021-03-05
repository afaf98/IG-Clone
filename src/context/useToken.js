import { createContext, useState, useContext } from "react";
import getUser from "../services/login";

const TokenContext = createContext({});

export function TokenProvider(props) {
  const [token, setToken] = useState(localStorage.getItem("token")); // move it to a dedicated component

  const login = async (data) => {
    const response = await getUser(data);
    if (response.error) {
      return { status: "Error", message: response.error };
    } else {
      localStorage.setItem("token", response.token);
      setToken(response.token);
      return { status: "Success", message: response.message };
    }
  };

  return (
    <TokenContext.Provider value={{ token: token, login: login }}>
      {props.children}
    </TokenContext.Provider>
  );
}

export default function useToken() {
  return useContext(TokenContext);
}
