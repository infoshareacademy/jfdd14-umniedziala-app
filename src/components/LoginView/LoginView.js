import React from "react";
import "./LoginView.css";
import { Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const LoginView = () => {
  const history = useHistory();

  const handleLoginPage = () => {
    history.push("/login");
  };
  return (
    <div className="loginPage__dashboard">
      <div className="loginPage__header">
        <p>Zaloguj się, aby dodawać i zobaczyć swoje ulubione atrakcje</p>
      </div>
      <div className="loginPage__button">
        <Button
          basic
          color="blue"
          content="Zaloguj się"
          size="massive"
          onClick={handleLoginPage}
        />
      </div>
    </div>
  );
};

export default LoginView;
