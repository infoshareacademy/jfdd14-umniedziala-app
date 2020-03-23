import React, {useEffect, useState } from 'react';
import { Input } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import '../SearchBar/SearchBar.css';
import  ToggleButton from '../ToggleButton/ToggleButton.js'
import SearchAdvanced from '../SearchAdvanced/SearchAdvanced';
import {data} from '../../data.js'


function SearchBar() {

    const [inputValue, setInputValue] = useState('');
    const [categoryValue, setCategoryValue] = useState('');
    const [results, setResults] = useState([])

  
    const getResults = () => {
        return setResults(data.filter((el) => el.name.toLowerCase().includes(inputValue.toLowerCase())
    ))
    }

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    useEffect(() => {
        getResults();
    }, [inputValue]
    );

    const renderPlaces = (arr) => 
    arr.map((el) => {
        return<div key={el.id}>
            <h3>{el.name}</h3>
            <p>{el.descriptionLong}</p>
        </div> 
    })

    return ( 
        <div className="search-bar__wrapper">
            <div className="search-bar__default">
                <Input className="search-bar__input" placeholder='Wpisz nazwę atrakcji...' value={inputValue} onChange={handleChange}  />
                <ToggleButton text={"Zmień kryteria wyszukiwania"} name={"angle down"} fn={() => console.log(2112)}/>
            </div>
            <SearchAdvanced />
            <Button className="search-advance__button">Zastosuj</Button>
            <div>
                {inputValue === '' ? renderPlaces(data) : renderPlaces(results)}
            </div>
        </div>
    )
}

export default SearchBar