import React, { useState } from "react";
import { Input, Button, Form } from "semantic-ui-react";
import { register } from "../../services";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleClick = (email, password) => {
    register(email, password)
      .then(data => {
        //display toast: Rejestracja przebiegła pomyślnie. Zaloguj się na swoje konto
      })
      .catch(() => {
        //display toast: Nie udało się zarejestrować. Użyj innego adresu email lub hasła
      });
    setEmail("");
    setPassword("");
  };

  return (
    // TODO: stylowanie widoku: RWD + fonty
    <div className="dashboard">
      <h2>
        Utwórz konto w tripcity, aby dodawać własne miejsca do bazy i zarządzać ulubionymi atrakcjami:
      </h2>
      <Form>
        <Form.Group widths="equal">
          <Input
            onChange={handleEmailChange}
            value={email}
            size="large"
            icon="mail"
            placeholder="Podaj email"
          />
          <Input
            onChange={handlePasswordChange}
            value={password}
            size="large"
            icon="key"
            placeholder="Podaj hasło"
            type="password"
          />
          <Button
            onClick={() => handleClick(email, password)}
          >
            Zarejestruj
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Register;
