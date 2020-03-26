import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import logo from '../../logo_white.png';
import './Header.css';

class Header extends Component {
    state = { menuOpen: false };
    
    changeMenuVisibility = () => {
        this.setState({menuOpen: !this.state.menuOpen});
    };

    handleToggleClick = () => {
        this.changeMenuVisibility();
    }

    render() {
        return (
            <div>
                <header className="header">
                    <div className="header__leftBox">
                        <div className="header__imageBox">
                            <img src={logo} alt="logo" className="header__image"></img>
                        </div>
                        <h1 className="header__title"><Link to="/" className="header__titleLink">tripcity</Link></h1>
                    </div>
                    <div className="header__rightBox">
                        {this.state.menuOpen ? <i className="fas fa-times header__icon" onClick={this.handleToggleClick}></i> : <i className="fas fa-bars header__icon" onClick={() => this.changeMenuVisibility()}></i> }
                    </div>
                </header>
                <Sidebar visibility={this.state.menuOpen ? "sidebar visible" : "sidebar"} />
            </div>
        )
    }
}

export default Header;