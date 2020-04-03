import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Sidebar.css';

class Sidebar extends Component {
    render() {
        return (
        <nav className={this.props.visibility}>
            <Link to="/" className="sidebar__link" onClick={this.props.changeVisibility}>Strona główna</Link>
            <Link to="/placelist" className="sidebar__link" onClick={this.props.changeVisibility}>Wszystkie atrakcje</Link>
            <Link to="/myfavourites" className="sidebar__link" onClick={this.props.changeVisibility}>Moje ulubione</Link>
            <Link to="/addnewplace" className="sidebar__link" onClick={this.props.changeVisibility}>Dodaj własną atrakcję</Link>
        </nav>
        )
    }
}

export default Sidebar;