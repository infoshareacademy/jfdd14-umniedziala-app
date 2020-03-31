import React, {useEffect, useState } from 'react';
import '../SearchBar/SearchBar.css';
import  ToggleButton from '../ToggleButton/ToggleButton.js'
import SearchAdvanced from '../SearchAdvanced/SearchAdvanced';
import {data} from '../../data.js'


function SearchBar() {

    const [inputValue, setInputValue] = useState('');
    const [results, setResults] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const [categoryValue, setCategoryValue] = useState([]);
    const [locationValue, setLocationValue] = useState([]);


    const optionsCategory = [
        { key: 'kultura', text: 'Kultura', value: 'Kultura' },
        { key: 'natura', text: 'Natura', value: 'Natura' },
        { key: 'restauracja', text: 'Restauracja', value: 'Restauracja' },
        { key: 'sport', text: 'Sport', value: 'Sport' },
      ]
    
      const optionsLocation = [
        { key: 'Gdańsk', text: 'Gdańsk', value: 'Gdańsk' },
        { key: 'Gdynia', text: 'Gdynia', value: 'Gdynia' },
        { key: 'Sopot', text: 'Sopot', value: 'Sopot' },
      ]
    

    const changeVisibility = () => setIsVisible(!isVisible);
    
  
    const getResults = () => {
        return setResults(data.filter((el) => el.name.toLowerCase().includes(inputValue.toLowerCase())
    ))
    }

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const onOptionCategoryChange = (event, data) => {
        console.log(data.value)
        setCategoryValue(data.value);
    };

    const onOptionLocationChange = (event, data) => {
        console.log(data.value)
        setLocationValue(data.value)};

    useEffect(() => {
        getResults();
    }, [inputValue]
    );

    const renderPlaces = (arr) => 
    arr.map((el) => {
        return<div key={el.id}>
            <h3>{el.name}</h3>
            <p>{el.descriptionLong}</p>
            <br></br>
        </div> 
    })


    return ( 
        <div className="search-bar__wrapper">
            <div className="search-bar__default">
            <div class="ui icon input">
                <input className="search-bar__input" type="text" placeholder="Wyszukaj po nazwie atrakcji" 
                value={inputValue} onChange={handleChange} />
                <i aria-hidden="true" class="search icon"></i>
            </div>
                <ToggleButton name={!isVisible ? "angle down" : "angle up"} fn={changeVisibility}/>
            </div>
                {
                !isVisible ? null : <SearchAdvanced optionsCategory={optionsCategory} 
                optionsLocation={optionsLocation} onOptionCategoryChange={onOptionCategoryChange} 
                onOptionLocationChange={onOptionLocationChange} categoryValue={categoryValue} locationValue={locationValue} /> 
                }
            <div className="search-bar_results">
                { inputValue === '' ? renderPlaces(data) : renderPlaces(results) }
            </div>
        </div>
    )
}

export default SearchBar