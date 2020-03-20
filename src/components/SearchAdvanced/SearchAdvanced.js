import React, { useState } from 'react';
import '../SearchAdvanced/SearchAdvanced.css';
import  ToggleButton from '../ToggleButton/ToggleButton.js';
import DropDownInput from '../DropDown/DropDown';
import Range from '../Range/Range'

const optionsCategory = [
    { key: 'culture', text: 'Kultura', value: 'Kultura' },
    { key: 'nature', text: 'Natura', value: 'Natura' },
    { key: 'restaurant', text: 'Restauracja', value: 'Restauracja' },
    { key: 'sport', text: 'Sport', value: 'Sport' },
  ]

  const optionsLocation = [
    { key: 'Gdańsk', text: 'Gdańsk', value: 'Gdańsk' },
    { key: 'Gdynia', text: 'Gdynia', value: 'Gdynia' },
    { key: 'Sopot', text: 'Sopot', value: 'Sopot' },
  ]


function SearchAdvanced() {

    return (<div className="search-advanced__wrapper">
        {/* <ToggleButton text={"Schowaj"} name={"angle up"} fn={() => console.log(333)}/> */}
        <div className="search-advanced__fields">
            <DropDownInput type={'Kategoria'} options={optionsCategory} />
            <DropDownInput type={'Lokalizacja'} options={optionsLocation} />
            <Range />
        </div>
    </div>
    )
}

export default SearchAdvanced