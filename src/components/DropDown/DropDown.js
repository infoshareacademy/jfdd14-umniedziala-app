import React, { useState } from 'react';
import { Dropdown } from 'semantic-ui-react';
import '../DropDown/DropDown.css'

function DropDownInput(props) {
    return (<div className="drop-down__wrapper">
         <Dropdown placeholder={props.type} fluid multiple selection options={props.options} />
    </div>)
}

export default DropDownInput