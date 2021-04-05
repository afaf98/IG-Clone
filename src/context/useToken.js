import {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";
import getUser from "../services/login";
import newUser from "../services/signup";
import axios from "axios";
import { useHistory } from "react-router";

const TokenContext = createContext({});

export function TokenProvider(props) {
  const [token, setToken] = useState(localStorage.getItem("token")); // move it to a dedicated component
  const history = useHistory();

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
  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const checkToken = useCallback(async () => {
    try {
      const response = await axios({
        method: "get",
        headers: {
          authorization: `Bearer ${token}`,
        },
        url: `${process.env.REACT_APP_DEV_SERVER}/checktoken`,
      });
      return response;
    } catch (error) {
      return error.response;
    }
  }, [token]);

  useEffect(() => {
    async function isValidToken() {
      const response = await checkToken();
      if (response.status !== 200) {
        logout();
        history.push("/login");
      }
    }
    if (token) {
      isValidToken();
    }
  }, [token, history, checkToken]);

  return (
    <TokenContext.Provider
      value={{
        token: token,
        auth: auth,
        logout: logout,
        checkToken: checkToken,
      }}
    >
      {props.children}
    </TokenContext.Provider>
  );
}

export default function useToken() {
  return useContext(TokenContext);
}
