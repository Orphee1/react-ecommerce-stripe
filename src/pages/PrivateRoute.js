import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { useUserContext } from "../context/user_context";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children, ...rest }) => {
  // const { myUser } = useUserContext();
  const { user } = useAuth0();
  return (
    <Route
      {...rest}
      render={() => {
        // return myUser ? children : <Redirect to="/"></Redirect>;
        return user ? children : <Redirect to="/"></Redirect>;
      }}
    ></Route>
  );
};
export default PrivateRoute;
