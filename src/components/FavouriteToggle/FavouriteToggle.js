import React, { Component } from "react";
import "./FavouriteToggle.css";

const heartFull = <i className="fas fa-heart dashboardFavourite__icon" />;
const heartEmpty = <i className="far fa-heart dashboardFavourite__icon" />;

class FavouriteToggle extends Component {
  handleClick = () => {
    this.props.toggleFavorite();
  };

  render() {
    const { isFavorite } = this.props;
    const heartIcon = isFavorite ? heartFull : heartEmpty;
    const tooltipText = isFavorite
      ? "usuń z ulubionych"
      : "dodaj do ulubionych";
      
    return (
      <span className="tooltip" onClick={this.handleClick}>
        {heartIcon}
        <span className="tooltiptext">{tooltipText}</span>
      </span>
    );
  }
}

export default FavouriteToggle;

// props: id
