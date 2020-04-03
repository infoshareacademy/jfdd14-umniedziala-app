import React, {Component} from 'react';
import '../PlaceList/PlaceList.css';
import SearchBar from '../../components/SearchBar/SearchBar.js';
import data from '../../data.js'
import attractionData from "../../attractionData";
import CardComponent from '../../components/Card/Card'

class PlaceList extends Component {
    
    render() {
        return (
        <main className="main">
            <div> 
                <SearchBar />
              {/*   <CardComponent
                    link={'/placeadded'}
                    image={attractionData['0'].img}
                    header={attractionData['0'].name}
                    meta={attractionData['0'].name}
                    description={attractionData['0'].descriptionLong.slice(0, 100) + "..."}
                    price={'Przedział cenowy: ' + attractionData['0'].priceRange}
                /> */}
            </div>
        </main>
        )
    }
}

export default PlaceList;