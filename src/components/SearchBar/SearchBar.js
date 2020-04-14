import React, { useState, useContext } from "react";
import "../SearchBar/SearchBar.css";
import ToggleButton from "../ToggleButton/ToggleButton.js";
import SearchAdvanced from "../SearchAdvanced/SearchAdvanced";
import ListWithPagination from "../../components/ListWithPagination/ListWithPagination";
import { AttractionsContext } from "../../contexts/AttractionsContext";

function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [categoryValue, setCategoryValue] = useState([]);
  const [locationValue, setLocationValue] = useState([]);
  const [rangeValue, setRangeValue] = useState("");

  const attractionData = useContext(AttractionsContext);
  const { attractionList } = attractionData;

  const optionsCategory = [
    { key: "kultura", text: "Kultura", value: "Kultura" },
    { key: "natura", text: "Natura", value: "Natura" },
    { key: "restauracja", text: "Restauracja", value: "Restauracja" },
    { key: "sport", text: "Sport", value: "Sport" },
  ];

  const optionsLocation = [
    { key: "Gdańsk", text: "Gdańsk", value: "Gdańsk" },
    { key: "Gdynia", text: "Gdynia", value: "Gdynia" },
    { key: "Sopot", text: "Sopot", value: "Sopot" },
  ];

  const showAdvancedSearch = () => setIsVisible(!isVisible);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onOptionCategoryChange = (event, data) => {
    setCategoryValue(data.value);
  };

  const onOptionLocationChange = (event, data) => {
    setLocationValue(data.value);
  };

  const rangeOptions = {
    darmowe: 0,
    tanio: 1,
    umiarkowanie: 2,
    drogo: 3,
    wszystkie: 4,
  };

  const getKeyByValue = (value) =>
    Object.keys(rangeOptions).find((key) => rangeOptions[key] === value);

  const onRangeValueChange = (event) => {
    const evt = event.target.value;
    setRangeValue(getKeyByValue(Number(evt)));
  };

  const filteredResults = attractionList
    .filter((el) => el.name.toLowerCase().includes(inputValue.toLowerCase()))
    .filter((el) => {
      const typeLowerCase =
        el && el.type && el.type.toLowerCase && el.type.toLowerCase();

      return categoryValue.length === 0
        ? true
        : categoryValue.find((categoryName) => {
            const categoryNameLowerCase =
              categoryName &&
              categoryName.toLowerCase &&
              categoryName.toLowerCase();

            return categoryNameLowerCase === typeLowerCase;
          });
    })
    .filter((el) => {
      const typeLowerCase =
        el &&
        el.location &&
        el.location.toLowerCase &&
        el.location.toLowerCase();

      return locationValue.length === 0
        ? true
        : locationValue.find((locationName) => {
            const locationNameLowerCase =
              locationName &&
              locationName.toLowerCase &&
              locationName.toLowerCase();

            return locationNameLowerCase === typeLowerCase;
          });
    })
    .filter((el) => {
      if (!rangeValue || rangeValue === "wszystkie") {
        return el;
      } else {
        return el.priceRange.toLowerCase().includes(rangeValue.toLowerCase());
      }
    });

  return (
    <div className="search-bar__wrapper">
      <div className="search-bar__default">
        <div className="ui icon input search-default__wrapper">
          <input
            className="search-bar__input"
            type="text"
            placeholder="Wpisz nazwę atrakcji"
            value={inputValue}
            onChange={handleInputChange}
          />
          <i aria-hidden="true" className="search icon"></i>
        </div>
        <ToggleButton
          name={!isVisible ? "angle down" : "angle up"}
          fn={showAdvancedSearch}
        />
      </div>
      {!isVisible ? null : (
        <SearchAdvanced
          optionsCategory={optionsCategory}
          optionsLocation={optionsLocation}
          onOptionCategoryChange={onOptionCategoryChange}
          onOptionLocationChange={onOptionLocationChange}
          categoryValue={categoryValue}
          locationValue={locationValue}
          rangeValue={rangeOptions[rangeValue]}
          onRangeValueChange={onRangeValueChange}
        />
      )}
      <div className="search-bar_results">
        {filteredResults.length === 0
          ?
          <h3>Brak wyników</h3>
          :
          <ListWithPagination
            list={filteredResults}
            itemNameForStorage="tripcity-lastViewedPage"
            defaultPage={localStorage.getItem("tripcity-lastViewedPage") || 1}
          />
        }
      </div>
    </div>
  );
}

export default SearchBar;
