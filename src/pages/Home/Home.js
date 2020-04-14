import React, {Component} from 'react';
import FavBarChart from '../../components/FavBarChart/FavBarChart';
import './Home.css';
import CategoryPieChart from '../../components/CityPieChart/CategoryPieChart';

class Home extends Component {

    render() {
        return( 
        <main className="dashboard">
            <div className="dashboard__chart">
                <h3 className="dashboard__chartTitle">Podział wg zakresu cenowego i lokalizacji:</h3>
                <FavBarChart />
            </div>
            <div className="dashboard__chart">
                <h3 className="dashboard__chartTitle">Ilość atrakcji - kategorie:</h3>
                <CategoryPieChart />
            </div>
        </main>
        )
    }
}

export default Home;