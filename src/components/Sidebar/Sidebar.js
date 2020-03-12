import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

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
        addNew: "Dodaj własną"
    };
    
    render() {
        return (
        <nav>
            <Link to="/">{this.props.home}</Link>
            <Link to="/placelist">{this.props.allList}</Link>
            <Link to="/placelist">{this.props.favourite}</Link>
            <Link to="/addnewplace">{this.props.addNew}</Link>
        </nav>
        )
    }
}

export default Sidebar;