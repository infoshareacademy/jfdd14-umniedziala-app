import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

function LoginButton(props) {
  return (
    <div>
      <Link to="/login">
        <Button>Zaloguj się</Button>
      </Link>
      <Link to="/register">
        <Button>Zarejstruj się</Button>
      </Link>
    </div>
  );
}

export default LoginButton;
