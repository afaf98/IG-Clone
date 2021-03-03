//save token in local storage
// get the token from local storage
// create a state where to store the token
// export a function that permit to use the token all around the app till is it valid
import { createContext, useState, useContext } from "react";

const TokenContext = createContext({});

export function TokenProvider(props) {
  const [token, setToken] = useState(localStorage.getItem("token")); // move it to a dedicated component

  return (
    <TokenContext.Provider value={{ token: token, setToken: setToken }}>
      {props.children}
    </TokenContext.Provider>
  );
}

export default function useToken() {
  return useContext(TokenContext);
}
