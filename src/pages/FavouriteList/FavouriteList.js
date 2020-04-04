import React, { Component } from "react";
import "./FavouriteList.css";
import attractionData from "../../attractionData";
import FavListWithPagination from "../../components/FavListWithPagination/FavListWithPagination";


class FavouriteList extends Component {
  state = {
    refreshToggle: false
  }

  refresh = () => this.setState({ refreshToggle: !this.state.refreshToggle });

  render() {
    return (
      <FavListWithPagination
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
