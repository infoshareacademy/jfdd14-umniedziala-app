import React from 'react';
import { Input, Button, Form } from 'semantic-ui-react';
import { useState, useContext} from 'react';
import { SignInToFirebase } from '../../contexts/SignInToFirebase';

function SignInPage() {

    const [signInEmail, setSignInEmail] = useState('');
    const [signInPassword, setSignInPassword] = useState('');

    const FetchSignInToFirebase = useContext(SignInToFirebase);  //dane z use context

    const handleEmailChanged = (e) => setSignInEmail(e.target.value);
    const handlePasswordChanged = (e) => setSignInPassword(e.target.value);

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
                    <Button onClick={() => FetchSignInToFirebase(signInEmail, signInPassword)}>Zarejstruj</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default SignInPage;