import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Header extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
    };
    static defaultProps = {
        logoUrl: "",
        title: "tripcity"
    };
    
    render() {
        return (
        <header>
            <h1><Link to="/">{this.props.title}</Link></h1>
        </header>
        )
    }
}

export default Header;