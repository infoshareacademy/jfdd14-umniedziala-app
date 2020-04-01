import React, { useEffect, useState } from 'react';
import '../SearchBar/SearchBar.css';
import ToggleButton from '../ToggleButton/ToggleButton.js'
import SearchAdvanced from '../SearchAdvanced/SearchAdvanced';
import { data } from '../../data.js'

function SearchBar() {

    const [inputValue, setInputValue] = useState('');
    const [results, setResults] = useState(data);
    const [isVisible, setIsVisible] = useState(false);
    const [categoryValue, setCategoryValue] = useState([]);
    const [locationValue, setLocationValue] = useState([]);
    const [rangeValue, setRangeValue] = useState('')

    console.log(rangeValue)

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

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const onOptionCategoryChange = (event, data1) => {
        console.log(data1.value)
        setCategoryValue(data1.value);
    }

    const onOptionLocationChange = (event, data) => {
        console.log(data.value)
        setLocationValue(data.value)
    };

    const onRangeValueChange = (event) => {
        const evt = event.target.value
        console.log(typeof event.target.value);
        if (evt === 0) {
            setRangeValue('darmowe')
        } else if (evt === '1') {
            setRangeValue('tanio')
        } else if (evt === '2') {
            setRangeValue('umiarkowanie')
        } else if (evt === '3') {
            setRangeValue('drogo')
        } else if (evt === '4') {
            setRangeValue('wszystkie')
        }
    } 

    const renderPlaces = (arr) => {
        return arr.map((el) => {
            return <div key={el.id}>
                <h3>{el.name}</h3>
                <p>{el.descriptionLong}</p>
                <br></br>
            </div>
        })
    }

    const filteredResults = (
        results
            .filter((el) => el.name.toLowerCase().includes(inputValue.toLowerCase()))
            .filter((el) => {
                const typeLowerCase = el && el.type && el.type.toLowerCase && el.type.toLowerCase()

                return (
                    categoryValue.length === 0 ?
                        true
                        :
                        categoryValue.find((categoryName) => {
                            const categoryNameLowerCase = categoryName && categoryName.toLowerCase && categoryName.toLowerCase()

                            return categoryNameLowerCase === typeLowerCase
                        })
                )
            })
            .filter((el) => {
                const typeLowerCase = el && el.location && el.location.toLowerCase && el.location.toLowerCase()

                return (
                    locationValue.length === 0 ?
                        true
                        :
                        locationValue.find((locationName) => {
                            const locationNameLowerCase = locationName && locationName.toLowerCase && locationName.toLowerCase()

                            return locationNameLowerCase === typeLowerCase
                        })
                )
            })
            .filter((el) => {
                if (!rangeValue || rangeValue === 'wszystkie') {
                    return el
                } else {
                   return el.priceRange.toLowerCase().includes(rangeValue.toLowerCase())
                }
            })
    )

    return (
        <div className="search-bar__wrapper">
            <div className="search-bar__default">
                <div className="ui icon input">
                    <input
                        className="search-bar__input"
                        type="text"
                        placeholder="Wyszukaj po nazwie atrakcji"
                        value={inputValue} onChange={handleChange}
                    />
                    <i aria-hidden="true" className="search icon"></i>
                </div>
                <ToggleButton
                    name={!isVisible ? "angle down" : "angle up"}
                    fn={changeVisibility}
                />
            </div>
            {
                !isVisible ?
                    null
                    :
                    <SearchAdvanced
                        optionsCategory={optionsCategory}
                        optionsLocation={optionsLocation}
                        onOptionCategoryChange={onOptionCategoryChange}
                        onOptionLocationChange={onOptionLocationChange}
                        categoryValue={categoryValue}
                        locationValue={locationValue}
                        rangeValue={rangeValue}
                        onRangeValueChange={onRangeValueChange}

                    />
            }
            <div className="search-bar_results">
                {renderPlaces(filteredResults)}
            </div>
        </div>
    )
}

export default SearchBar