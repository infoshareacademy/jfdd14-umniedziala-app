import React from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import LoginView from "../LoginView/LoginView";

function Auth(props) {
  const userData = useContext(UserContext);
  const { userId } = userData;

  return <>{!userId ? <LoginView /> : props.children}</>;
}

export default Auth;
