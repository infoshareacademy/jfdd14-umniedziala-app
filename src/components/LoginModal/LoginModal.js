import React from 'react';
import './LoginModal.css'


const LoginModal = (props) => {

    return (
        <div className={props.visibility}>
            <div className="loginModal__content">
                <h4>{props.headerH4}</h4>
                <input
                    type='text'
                    name="LogInLogin"
                    value={props.loginValue}
                    onChange={props.onChange}
                >
                </input>
                <h4>{props.passwordH4}</h4>
                <input
                    type='text'
                    name="LogInPassword"
                    value={props.passwordValue}
                    onChange={props.onChange}
                >
                </input>
            </div>
        </div>
    )
}

export default LoginModal

