import React, {Component} from 'react';
import attractionData from "../../attractionData";
import CardComponent from '../../components/Card/Card'

class PlaceList extends Component {
    render() {
        return (
            <div>
            <CardComponent
            link={'/placeadded'}
            image={attractionData['0'].img}
            header={attractionData['0'].name}
            meta={attractionData['0'].name}
            description={attractionData['0'].descriptionLong.slice(0, 100) + "..."}
            price={"Przedział cenowy: " + " " + " " + attractionData['0'].priceRange}
            />
            </div>
        )
    }
}

export default PlaceList;