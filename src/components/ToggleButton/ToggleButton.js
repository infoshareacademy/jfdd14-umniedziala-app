import React, {useEffect ,useState } from 'react';
import { Icon } from 'semantic-ui-react';
import '../ToggleButton/ToggleButton.css'



function ToggleButton(props) {
    return <div className="toggle-button__wrapper" onClick= {props.fn}>
         <p className="toggle-button__text">{props.text}</p>
         <Icon className="toggle-button__icon" name={props.name} ></Icon>
    </div>

}

export default ToggleButton