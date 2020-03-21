import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import '../SearchBar/SearchBar.css';
import  ToggleButton from '../ToggleButton/ToggleButton.js'
import SearchAdvanced from '../SearchAdvanced/SearchAdvanced';


function SearchBar(props) {

    const [inputValue, setInputValue] = useState('');

    const renderPlaces = () => 
    props.data.map((el) => {
        const name = el.name === inputValue;

        return name ? <div key={el.id}>
            <h3>{el.name}</h3>
        </div> : null
    })

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    return (<div className="search-bar__wrapper">
            <div className="search-bar__default">
                <Input className="search-bar__input" action='Wyszukaj' placeholder='Wpisz nazwę...' onChange={handleChange} value={inputValue} />
                <ToggleButton text={"Zmień kryteria wyszukiwania"} name={"angle down"} fn={() => console.log(2112)}/>
            </div>
            <SearchAdvanced />
            <Button className="search-advance__button">Zastosuj</Button>
            <div>
                {renderPlaces()}
            </div>
        </div>
    )
}

export default SearchBar