import React, { Component } from "react";

import FavListWithPagination from "../../components/FavListWithPagination/FavListWithPagination";

import "./FavouriteList.css";

class FavouriteList extends Component {
  state = {
    userId: "jYGN6TYDxWR0FgqrVTYdjvJoA9M3",
  };

  render() {
    return this.state.userId ? (
      <FavListWithPagination
        userId={this.state.userId}
        itemNameForStorage="tripcity-lastViewedFavPage"
        defaultPage={localStorage.getItem("tripcity-lastViewedFavPage") || 1}
      />
    ) : (
      <p className="notLoggedText">
        Zaloguj się aby wyświetlić Twoje ulubione aktrakcje
      </p>
    );
  }
}

export default FavouriteList;
