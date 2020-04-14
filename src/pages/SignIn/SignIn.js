import React from 'react';
import { Input, Button, Form } from 'semantic-ui-react';
import { useState, useContext} from 'react';

function SignIn() {

    const [signInEmail, setSignInEmail] = useState('');
    const [signInPassword, setSignInPassword] = useState('');

    const handleEmailChanged = (e) => setSignInEmail(e.target.value);
    const handlePasswordChanged = (e) => setSignInPassword(e.target.value);
    const signInToFirebase = () => (    //do poprawy
        console.log('zarejstrowano'));

    return (
        <div className="dashboard">
            <h1>Zarejstruj się do Tripcity aby
            <br></br>
                dodawać nowe miejsca oraz zapisywać swoje ulubione miejsca
            </h1>
            <Form >
                <Form.Group widths='equal'>
                    <Input
                        onChange={handleEmailChanged}
                        size='large'
                        icon='mail'
                        placeholder='Podaj email'
                    />
                    <Input
                        onChange={handlePasswordChanged}
                        size='large'
                        icon='search'
                        placeholder='Podaj hasło'
                    />
                    <Button onClick={signInToFirebase}>Zaloguj</Button>
                </Form.Group>
            </Form>
            <div>
                email: {signInEmail}
                password:{signInPassword}
            </div>
        </div>
    )
}

export default SignIn;