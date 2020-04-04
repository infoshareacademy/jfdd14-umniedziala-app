import React, { Component } from "react";

import FavListWithPagination from "../../components/FavListWithPagination/FavListWithPagination";

import "./FavouriteList.css";

class FavouriteList extends Component {
  render() {
    return (
      <FavListWithPagination
        itemNameForStorage="tripcity-lastViewedFavPage"
        defaultPage={localStorage.getItem("tripcity-lastViewedFavPage") || 1}
      />
    );
  }
}

export default FavouriteList;
