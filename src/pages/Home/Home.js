import React, {Component} from 'react';
import './Home.css';
import AddNewPlace from '../AddNewPlace/AddNewPlace';

class Home extends Component {
    render() {
        return( 
        <main className="dashboard">
            <AddNewPlace />
        </main>
        )
    }
}

export default Home;