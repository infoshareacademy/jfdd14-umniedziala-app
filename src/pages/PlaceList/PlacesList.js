import React, { Component } from "react";
import "../PlaceList/PlaceList.css";
import SearchBar from "../../components/SearchBar/SearchBar.js";

class PlaceList extends Component {
  render() {
    return (
      <main className="main">
        <div>
          <SearchBar />
        </div>
      </main>
    );
  }
}

export default PlaceList;
