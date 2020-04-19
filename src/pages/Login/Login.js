import React from "react";
import { Input, Button, Form } from "semantic-ui-react";
import { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { logIn } from "../../services";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from 'glamor';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userData = useContext(UserContext);
  const { setUserId } = userData;

  const loginSuccess = () => toast(
    "Zalogowano do Tripcity. Do zobaczenia na szlaku!", {
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
  const loginFail = () => toast(
    "Błąd logowania. Niepoprawny email lub hasło", {
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
  const handleClick = () => {
    logIn(email, password)
      .then(data => {
        setUserId(data.localId);
        //display toast: Zalogowano!
        loginSuccess()
        console.log('extra')
      })
      .catch((error) => {
        setUserId("");
        //display toast: Błąd logowania. Niepoprawny email lub hasło
        loginFail();
        console.log('dupa');

      });
    setEmail("");
    setPassword("");
  };

  return (
    // TODO: stylowanie widoku: RWD + fonty
    <div className="dashboard">
      <h2>
        Zaloguj się na swoje konto tripcity:
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
          <Button onClick={() => handleClick(email, password, toast.success)}>Zaloguj</Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Login;
