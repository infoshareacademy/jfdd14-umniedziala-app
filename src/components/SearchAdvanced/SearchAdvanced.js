import React, { useState, useEffect } from 'react';
import '../SearchAdvanced/SearchAdvanced.css';
import DropDownInput from '../DropDown/DropDown';
import Range from '../Range/Range'


function SearchAdvanced(props) {

    return (<div className="search-advanced__wrapper">
        <div className="search-advanced__fields">
            <DropDownInput type={'Kategoria'} value={props.categoryValue} options={props.optionsCategory} label={'Wybierz kategorię'} onChange={props.onOptionCategoryChange}/>
            <DropDownInput type={'Lokalizacja'} value={props.locationValue} options={props.optionsLocation} label={'Wybierz lokalizację'} onChange={props.onOptionLocationChange}/>
            <Range />
        </div>
    </div>
    )
}

export default SearchAdvanced