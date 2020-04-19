import React, { useState } from "react";
import { Input, Button, Form } from "semantic-ui-react";
import { register } from "../../services";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from 'glamor';

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const RegSuccess = () => toast(
    "Rejestracja przebiegła pomyślnie. Zaloguj się na swoje konto", {
    className: css({
      background: 'white'
    }),
    bodyClassName: css({
      fontSize: '20px',
      color: 'var(--color-blue)'
    }),
    progressClassName: css({
      background: "var(--color-blue)"
    }),
    position: toast.POSITION.BOTTOM_LEFT,
  });

  const RegFail = () => toast(
    "Nie udało się zarejestrować. Użyj innego adresu email lub hasła", {
    className: css({
      background: 'white'
    }),
    bodyClassName: css({
      fontSize: '20px',
      color: 'var(--color-blue)'
    }),
    progressClassName: css({
      background: "var(--color-blue)"
    }),
    position: toast.POSITION.BOTTOM_LEFT,
  });
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleClick = (email, password) => {
    register(email, password)
      .then(data => {
        RegSuccess();
      })
      .catch(() => {
        RegFail();
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
