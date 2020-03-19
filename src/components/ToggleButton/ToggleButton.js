import React, { useState } from 'react';
import '../ToggleButton/ToggleButton.css'


function ToggleButton(props) {

    return <div className="toggle-button__wrapper">
         <p className="toggle-button__text">{props.text}</p>
    </div>

}

export default ToggleButton