import React from 'react';
import './SiginModal.css'


const SiginModal = (props) => {

    return (
        <div className={props.visibility}>
            <div className="siginModal__content">
                <h4>{props.headerH4}</h4>
                <input
                    type='text'
                    name="SigInLogin"
                    value={props.loginValue}
                    onChange={props.onChange}
                >
                </input>
                <h4>{props.passwordH4}</h4>
                <input
                    type='text'
                    name="SigInPassword"
                    value={props.passwordValue}
                    onChange={props.onChange}
                >
                </input>
            </div>
        </div>
    )
}

export default SiginModal

