import React, {useEffect ,useState } from 'react';
import { Icon } from 'semantic-ui-react';
import '../ToggleButton/ToggleButton.css'



function ToggleButton(props) {
    return <div className="toggle-button__wrapper">
         <p className="toggle-button__text">{props.text}</p>
         <Icon className="toggle-button__icon" name={props.name} onClick= {props.fn}></Icon>
    </div>

}

export default ToggleButton