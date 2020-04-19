import React, { Component } from "react";
import "./PlaceDetails.css";
import {
  getAttractionById,
  getFavoriteAttractionIds,
  toggleFavorite,
} from "../../services";
import FavouriteToggle from "../../components/FavouriteToggle/FavouriteToggle";
import { UserContext } from "../../contexts/UserContext";

class PlaceDetails extends Component {
  static contextType = UserContext;

  state = {
    attraction: null,
    favoriteAttractionIds: null,
  };

  toggleFavorite = (userId) => {
    const attractionId = this.props.match.params.id;
    toggleFavorite(attractionId, userId).then(this.refreshFavorites(userId));
  };

  refreshFavorites = (userId) => {
    getFavoriteAttractionIds(userId).then((favoriteAttractionIds) => {
      this.setState({
        favoriteAttractionIds,
      });
    });
  };

  componentDidMount() {
    const attractionId = this.props.match.params.id;
    const userId = this.context.userId;

    getAttractionById(attractionId).then((attraction) => {
      this.setState({
        attraction,
      });
    });

    this.refreshFavorites(userId);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.attractions === this.state.attractions) {
  //     this.refreshFavorites();
  //   }
  // }

  render() {
    const { attraction } = this.state;
    const userId = this.context.userId;

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
                {userId ? (
                  <FavouriteToggle
                    toggleFavorite={() => this.toggleFavorite(userId)}
                    isFavorite={isFavorite}
                  />
                ) : null}
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
