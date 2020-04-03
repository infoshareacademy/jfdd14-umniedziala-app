import React, { Component } from "react";
import "./PlaceDetails.css";
import attractionData from "../../attractionData";
import FavouriteToggle from "../../components/FavouriteToggle/FavouriteToggle";

class PlaceDetails extends Component {
    render() {
        const attraction = attractionData.find(
            element => element.id === Number(this.props.match.params.id)
        );

        return (
            <main className="placeDetails">
                <div className="dashboard__placeDetails">
                    <div className="dashboard__placeDetails--hero">
                        <div className="image-wrapper">
                            <img
                                className="test"
                                src={attraction.img}
                                alt="attractionImage"
                            />
                        </div>
                        <div className="dashboard__placeDetails--right">
                            <h2 className="dashboard__placeDetails--name">
                                {attraction.name + " "}
                                <FavouriteToggle id={Number(this.props.match.params.id)} />
                            </h2>
                            <h3 className="dashboard__placeDetails--location">
                                {attraction.location}
                            </h3>
                            <p className="dashboard__placeDetails--type">
                                {attraction.type}
                            </p>
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
