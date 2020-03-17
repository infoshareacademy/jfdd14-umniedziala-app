import React, {Component} from 'react';
import FavBarChart from '../../components/FavBarChart/FavBarChart';
import './Home.css';

class Home extends Component {
    render() {
        return( 
        <main className="dashboard">
            <div className="dashboard__chart">
                <h3 className="dashboard__chartTitle">Najpopularniejsze atrakcje:</h3>
                <FavBarChart />
            </div>
            <div className="dashboard__chart">
                <h3 className="dashboard__chartTitle">Podział wg miast:</h3>
                <FavBarChart />
            </div>
        </main>
        )
    }
}

export default Home;