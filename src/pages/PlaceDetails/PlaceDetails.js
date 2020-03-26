import React, { Component } from "react";
// import data from "../../data";
import "./PlaceDetails.css";

// const atractionData = JSON.parse(localStorage.getItem("atractionData")) || data;

class PlaceDetails extends Component {
    render() {
        return (
            <main className="placeDetails__dasboard">
                    <h1 className="placeDetails__dasboard--h1">Dodaj swoją atrakcję</h1>
                    <p>this shit isnt working</p>
            </main>
        );
    }
}

export default PlaceDetails;

/* <CardComponent
link={'/placeadded'}
image={atractionData['0'].img}
//header={atractionData['0'].name}
meta={atractionData['0'].name}
description={atractionData['0'].descriptionLong.slice(0, 100) + "..."}
price={"Przedział cenowy: " + " " + " " + atractionData['0'].priceRange}
/> */
