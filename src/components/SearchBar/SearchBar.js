import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import '../SearchBar/SearchBar.css';
import  ToggleButton from '../ToggleButton/ToggleButton.js'
import SearchAdvanced from '../SearchAdvanced/SearchAdvanced';


function SearchBar() {

    return (<div className="search-bar__wrapper">
            <div className="search-bar__default">
                <Input className="search-bar__input" action='Wyszukaj' placeholder='Wpisz nazwę...' />
                <ToggleButton text={"Zmień kryteria wyszukiwania"} name={"angle down"} fn={() => console.log(2112)}/>
            </div>
            <SearchAdvanced />
            <Button className="search-advance__button">Zastosuj</Button>
        </div>
    )
}

export default SearchBar