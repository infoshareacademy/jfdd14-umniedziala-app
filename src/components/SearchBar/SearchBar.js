import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import '../SearchBar/SearchBar.css';
import  ToggleButton from '../ToggleButton/ToggleButton.js'
import SearchAdvanced from '../SearchAdvanced/SearchAdvanced';
import {data} from '../../data.js'


function SearchBar(arr) {

    const [inputValue, setInputValue] = useState('');
    const [categoryValue, setCategoryValue] = useState('');
    const [results, setResults] = useState([])

    /* const renderPlaces = () => 
    props.data.map((el) => {
        const name = el.name === inputValue;

        return name ? <div key={el.id}>
            <h3>{el.name}</h3>
        </div> : null
    }) */

    const renderPlaces = (arr) => 
    arr.map((el) => {
        return<div key={el.id}>
            <h3>{el.name}</h3>
            <p>{el.descriptionLong}</p>
        </div> 
    })

    // const getResults = () => {
    //     setResults(data.filter((el) => {
    //        return el.name.toLowerCase().includes(inputValue.toLowerCase())
           
    // }))
    // }

    const getResults = () => {
        return setResults(data.filter((el) => el.name.toLowerCase().includes(inputValue.toLowerCase()).filter(el => el)
        
    ))
    }
    
console.log(results)


    const handleChange = (event) => {
        setInputValue(event.target.value);
        console.log(results);
        console.log(inputValue)
    }
    {getResults()}

    return ( 
        <div className="search-bar__wrapper">
            <div className="search-bar__default">
                <Input className="search-bar__input" action='Wyszukaj' placeholder='Wpisz nazwę...'  onChange={handleChange}  />
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