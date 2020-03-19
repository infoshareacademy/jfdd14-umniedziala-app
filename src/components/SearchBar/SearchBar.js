import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';
import '../SearchBar/SearchBar.css';
import  ToggleButton from '../ToggleButton/ToggleButton.js'


function SearchBar() {

    return (<div className="search-bar__wrapper">
        <Input className="search-bar__input" action='Wyszukaj' placeholder='Wpisz nazwę...' />
        <ToggleButton text={"Zmień kryteria wyszukiwania"}/>
    </div>
    )
}

export default SearchBar