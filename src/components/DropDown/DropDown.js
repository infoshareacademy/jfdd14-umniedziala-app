import React from "react";
import { Dropdown } from "semantic-ui-react";
import "../DropDown/DropDown.css";

function DropDownInput(props) {
  return (
    <div className={"drop-down__wrapper"}>
      <p className={"dropdown__text"}>{props.text}</p>
      <Dropdown
        placeholder={props.type}
        fluid
        multiple
        selection
        value={props.value}
        options={props.options}
        onChange={props.onChange}
      />
    </div>
  );
}

export default DropDownInput;
