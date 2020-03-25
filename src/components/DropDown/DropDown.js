import React, { useState } from 'react';
import { Dropdown, Label } from 'semantic-ui-react';
import '../DropDown/DropDown.css'

function DropDownInput(props) {
    return (<div className="drop-down__wrapper">
        <Label pointing="below">{props.label}</Label>
        <Dropdown placeholder={props.type} fluid multiple selection options={props.options} />
    </div>)
}

export default DropDownInput