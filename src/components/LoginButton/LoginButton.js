import React from 'react';
import { Button } from 'semantic-ui-react';

function LoginButton(props) {

    return (
    <div>
        <Button onClick={props.changeLogInVisibility} >Zaloguj się</Button>
        <Button onClick={props.changeSignInVisibility}>Zarejstruj się</Button>
    </div>    
    )

}

export default LoginButton;