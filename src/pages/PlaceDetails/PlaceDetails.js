import React, { Component } from "react";
import "./PlaceDetails.css";
import {
  getAttractionById,
  getFavoriteAttractionIds,
  toggleFavorite,
} from "../../services";
import FavouriteToggle from "../../components/FavouriteToggle/FavouriteToggle";

class PlaceDetails extends Component {
  state = {
    attraction: null,
    favoriteAttractionIds: null,
  };

  componentDidMount() {
    const attractionId = this.props.match.params.id;

    getAttractionById(attractionId).then((attraction) => {
      this.setState({
        attraction,
      });
    });

    this.refreshFavorites();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.attractions === this.state.attractions) {
      this.refreshFavorites();
    }
  }

  toggleFavorite = () => {
    const attractionId = this.props.match.params.id;
    toggleFavorite(attractionId).then(this.refreshFavorites);
  };

  refreshFavorites = () => {
    getFavoriteAttractionIds().then((favoriteAttractionIds) => {
      this.setState({
        favoriteAttractionIds,
      });
    });
  };

  render() {
    const { attraction } = this.state;

    if (attraction === null) {
      return null;
    }

    const attractionId = this.props.match.params.id;
    const isFavorite =
      this.state.favoriteAttractionIds &&
      this.state.favoriteAttractionIds[attractionId];

    return (
      <main className="placeDetails">
        <div className="dashboard__placeDetails">
          <div className="dashboard__placeDetails--hero">
            <div className="image-wrapper">
              <img
                className="dashboard__placeDetails--image"
                src={attraction.img}
                alt="attractionImage"
              />
            </div>
            <div className="dashboard__placeDetails--right">
              <h2 className="dashboard__placeDetails--name">
                {attraction.name + " "}
                <FavouriteToggle
                  toggleFavorite={this.toggleFavorite}
                  isFavorite={isFavorite}
                />
              </h2>
              <h3 className="dashboard__placeDetails--location">
                {attraction.location}
              </h3>
              <h4 className="dashboard__placeDetails--type">
                {attraction.type}
              </h4>
              <p className="dashboard__placeDetails--priceRange">
                <i className="dollar sign icon"></i>
                {attraction.priceRange}
              </p>
            </div>
          </div>
          <div className="dashboard__placeDetails--description">
            <p>{attraction.descriptionLong}</p>
          </div>
        </div>
      </main>
    );
  }
}

export default PlaceDetails;
