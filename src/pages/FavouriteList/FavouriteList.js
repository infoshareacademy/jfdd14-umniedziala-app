import React, { Component } from "react";
import "./FavouriteList.css";
import data from "../../data";
import FavListWithPagination from "../../components/FavListWithPagination/FavListWithPagination";


class FavouriteList extends Component {
  state = {
    attractionList: []
  }

  componentDidMount() {
    this.setState({attractionList: JSON.parse(localStorage.getItem("attractionData")) || data});
  }

  render() {
    return (
      <FavListWithPagination
        list={this.state.attractionList.filter(attraction => {
            return attraction.favorite === true;
        })}
        itemNameForStorage="tripcity-lastViewedFavPage"
        defaultPage={localStorage.getItem("tripcity-lastViewedFavPage") || 1}
      />
    );
  }
}

export default FavouriteList;
