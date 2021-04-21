import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import useToken from "../../context/useToken";
import { useHistory } from "react-router";

export default function PrivateRoute({ path, children, ...props }) {
  const { token, checkToken, logout } = useToken();
  const history = useHistory();

  useEffect(() => {
    async function isValidToken() {
      const response = await checkToken();
      if (response.status !== 200) {
        logout();
        history.push("/login");
      }
    }
    isValidToken();
  }, [checkToken, history, logout]);

  if (!token) {
    return <Redirect to="/login" />;
  }

  return (
    <Route path={path} {...props}>
      {children}
    </Route>
  );
}
