import React, { Component } from "react";
import "./FavouriteList.css";
import attractionData from "../../attractionData";
import ListWithPagination from "../../components/ListWithPagination/ListWithPagination";

class FavouriteList extends Component {
  render() {
    return (
      <ListWithPagination
        list={attractionData.filter(attraction => {
            return attraction.favorite === true;
        })}
        itemNameForStorage="tripcity-lastViewedFavPage"
        defaultPage={localStorage.getItem("tripcity-lastViewedFavPage") || 1}
      />
    );
  }
}

export default FavouriteList;
