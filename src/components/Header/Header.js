import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import logo from '../../logo_white.png';
import LoginButton from '../LoginButton/LoginButton';
import './Header.css';

class Header extends Component {
    state = {
        menuOpen: false,
    };

    handleToggleMenuVisibility = () => {
        this.setState({ menuOpen: !this.state.menuOpen });
    }
   
    handleTextChange = (e) => {
        return this.setState({ [e.target.name]: e.target.value })
    };

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
                        {this.state.menuOpen ? <i className="fas fa-times header__icon" onClick={this.handleToggleMenuVisibility}></i> : <i className="fas fa-bars header__icon" onClick={this.handleToggleMenuVisibility}></i>}
                    </div>
                    {/* <LoginButton /> */}
                </header>
                <Sidebar
                    visibility={this.state.menuOpen ? "sidebar visible" : "sidebar"}
                    changeVisibility={this.handleToggleMenuVisibility}
                />
            </div>
        )
    }
}

export default Header;