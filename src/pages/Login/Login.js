import React from 'react';
import { Input, Button, Form } from 'semantic-ui-react';
import { useState, useContext} from 'react';
import { LoginToFirebase } from '../../contexts/LoginToFirebase';


function Login(){
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const FetchLoginToFirebase = useContext(LoginToFirebase)
        
        const handleEmailChanged = (e) => setEmail(e.target.value);
        const handlePasswordChanged = (e) => setPassword(e.target.value);
        
        return (
            <div className="dashboard">
                <h1>Zaloguj się do Tripcity aby
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
                        <Button onClick={FetchLoginToFirebase}>Zaloguj</Button>
                    </Form.Group>
                </Form>
            </div>
        )
}

export default Login;