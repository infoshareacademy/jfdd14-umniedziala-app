import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../logo_white.png';
import './Header.css';

class Header extends Component {
    
    render() {
        return (
        <header className="header">
            <div className="header__imageBox">
                <img src={logo} alt="logo" className="header__image"></img>
            </div>
            <h1 className="header__title"><Link to="/" className="header__titleLink">tripcity</Link></h1>
        </header>
        )
    }
}

export default Header;