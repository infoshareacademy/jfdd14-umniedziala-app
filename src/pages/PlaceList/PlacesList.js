import React, {Component} from 'react';
import '../PlaceList/PlaceList.css';
import SearchBar from '../../components/SearchBar/SearchBar.js';
import data from '../../data.js'

class PlaceList extends Component {
    

    render() {
        return <main className="main">
            <SearchBar />
        </main>
    }
}

export default PlaceList;