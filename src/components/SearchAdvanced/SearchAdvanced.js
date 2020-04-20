import React from "react";
import "../SearchAdvanced/SearchAdvanced.css";
import DropDownInput from "../DropDown/DropDown";
import Range from "../Range/Range";

function SearchAdvanced(props) {
  return (
    <div className="search-advanced__wrapper">
      <div className="search-advanced__fields">
        <DropDownInput
          text={"Kategoria:"}
          type={"-wybierz"}
          value={props.categoryValue}
          options={props.optionsCategory}
          label={"Wybierz kategorię"}
          onChange={props.onOptionCategoryChange}
        />
        <DropDownInput
          text={"Lokalizacja:"}
          type={"-wybierz"}
          value={props.locationValue}
          options={props.optionsLocation}
          label={"Wybierz lokalizację"}
          onChange={props.onOptionLocationChange}
        />
        <Range
          className={"range"}
          type={"range"}
          min={0}
          max={4}
          step={1}
          value={props.rangeValue}
          onChange={props.onRangeValueChange}
        />
        <button
          className="ui button search-advanced_clear-btn"
          onClick={props.onClick}
        >
          Wyczyść filtry
        </button>
      </div>
    </div>
  );
}

export default SearchAdvanced;
