import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Default.css';

class Default extends Component {
    render() {
        return (
        <main className="defaultPage">
            <h2 className="defaultPage__title">Hej, Podróżniczko / Podróżniku!</h2>
            <div className="defaultPage__text">
                <p>Tripcity nie ma takiej podstrony...</p>
                <Link to="/"><p className="defaultPage__link">Wróć na stronę główną</p></Link>
            </div>
        </main>
    )
    }
}

export default Default;