import React from "react";
import "./LoginPage.css";
import { Button } from "semantic-ui-react";

const LoginButton = () => {
  return (
    <div className="loginPage__dashboard">
      <div className="loginPage__header">
        <p>Zaloguj się, aby dodawać i zobaczyć swoje ulubione atrakcje</p>
      </div>
      <div className="loginPage__button">
        <Button basic color="blue" content="Zaloguj się" size="massive" />
      </div>
    </div>
  );
};

export default LoginButton;
