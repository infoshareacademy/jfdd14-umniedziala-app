import React from "react";
import { useHistory } from "react-router-dom";
import { Input, Button, Form } from "semantic-ui-react";
import { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { logIn } from "../../services";
import { toast } from 'react-toastify';
import './Login.css';
import 'react-toastify/dist/ReactToastify.css';
import { css } from 'glamor';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userData = useContext(UserContext);
  const { setUserId } = userData;

  let history = useHistory(); 

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
        loginSuccess();
        history.push('/');
      })
      .catch((error) => {
        setUserId("");
        loginFail();
      });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="dashboard">
      <div className='loginTitle'>
        <h1 className='loginTitle_text'>
          Zaloguj się na swoje konto tripcity: 
        </h1>
      </div>
        <div className='loginForm'>
              <Input
                onChange={handleEmailChange}
                value={email}
                size="large"
                icon="mail"
                type="text"
                placeholder="Podaj email"
                autoComplete="username"
              />
              <Input
                onChange={handlePasswordChange}
                value={password}
                size="large"
                icon="key"
                placeholder="Podaj hasło"
                type="password"
                autoComplete="current-password"
              />
              <Button 
              basic color='blue' 
              onClick={() => handleClick(email, password, toast.success)}
              >Zaloguj</Button>
        </div>
      </div>
  );
}

export default Login;
