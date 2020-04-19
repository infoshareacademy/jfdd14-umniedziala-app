import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function Auth(props) {
  const userData = useContext(UserContext);
  const { userId } = userData;

  return !userId ? null : props.children;
};

export default Auth;