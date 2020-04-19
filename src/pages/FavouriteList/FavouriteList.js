import React, { Component } from "react";
import FavListWithPagination from "../../components/FavListWithPagination/FavListWithPagination";
import "./FavouriteList.css";

class FavouriteList extends Component {
  state = {
    userId: "jYGN6TYDxWR0FgqrVTYdjvJoA9M3",
  };

  render() {
    return (
      <FavListWithPagination
        userId={this.state.userId}
        itemNameForStorage="tripcity-lastViewedFavPage"
        defaultPage={localStorage.getItem("tripcity-lastViewedFavPage") || 1}
      />
    );
  }
}

export default FavouriteList;
