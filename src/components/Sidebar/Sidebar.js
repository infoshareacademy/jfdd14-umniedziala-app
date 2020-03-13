import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './Sidebar.css';

class Sidebar extends Component {
    static propTypes = {
        home: PropTypes.string.isRequired,
        allList: PropTypes.string.isRequired,
        favourite: PropTypes.string.isRequired,
        addNew: PropTypes.string.isRequired
    };
    static defaultProps = {
        home: "Strona główna",
        allList: "Wszystkie atrakcje",
        favourite: "Moje ulubione",
        addNew: "Dodaj własną atrakcję"
    };
    
    render() {
        return (
        <nav className="sidebar">
            <Link to="/" className="sidebar__link">{this.props.home}</Link>
            <Link to="/placelist" className="sidebar__link">{this.props.allList}</Link>
            <Link to="/placelist" className="sidebar__link">{this.props.favourite}</Link>
            <Link to="/addnewplace" className="sidebar__link">{this.props.addNew}</Link>
        </nav>
        )
    }
}

export default Sidebar;