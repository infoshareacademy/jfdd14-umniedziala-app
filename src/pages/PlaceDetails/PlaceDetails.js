import React, { Component } from "react";
// import attractionData from '../../attractionData';
import "./PlaceDetails.css";
import attractionData from "../../attractionData";

class PlaceDetails extends Component {
    state = {
        listOfAll: [...attractionData]
    };

    // getData = () => {
    //     this.setState({
    //         listOfAll: [...data]
    //     })
    // }
    render() {
        const attraction = this.state.listOfAll[0];
        return (
            <main className="placeDetails">
                <div className="dashboard__placeDetails">
                    <div className="dashboard__placeDetails--hero">
                        <div className="image-wrapper">
                            <img src={attraction.img} alt="attractionImage" />
                        </div>
                        <div className="dashboard__placeDetails--right">
                            <h2 className="dashboard__placeDetails--image">
                                {attraction.name}
                            </h2>
                            <h3 className="dashboard__placeDetails--location">
                                {attraction.location}
                            </h3>
                            <p className="dashboard__placeDetails--type">
                                {attraction.type}
                            </p>
                            <p className="dashboard__placeDetails--priceRange">
                                {attraction.priceRange}
                            </p>
                            <p className="dashboard__placeDetails--favourite">
                                {attraction.favourite}
                            </p>
                        </div>
                    </div>
                    <div className="ashboard__placeDetails--description">
                        <p>{attraction.descriptionLong}</p>
                    </div>
                </div>
            </main>
        );
    }
}

export default PlaceDetails;

/* 
<CardComponent
link={'/placeadded'}
image={atractionData['0'].img}
//header={atractionData['0'].name}
meta={atractionData['0'].name}
description={atractionData['0'].descriptionLong.slice(0, 100) + "..."}
price={"Przedział cenowy: " + " " + " " + atractionData['0'].priceRange}
/>  */
