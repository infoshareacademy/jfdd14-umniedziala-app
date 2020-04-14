import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import logo from '../../logo_white.png';
import LoginModal from '../LoginModal/LoginModal';
import SigInModal from '../SiginModal/SiginModal';
import LoginButton from '../LoginButton/LoginButton';
import './Header.css';

class Header extends Component {
    state = {
        menuOpen: false,
        LogInModal: false,
        SigInModal: false,
        LogInLogin: "",
        LogInPassword: "",
        SigInLogin: "",
        SigInPassword: "",

    };

    handleToggleMenuVisibility = () => {
        this.setState({ menuOpen: !this.state.menuOpen });
    }
    // handleToggleLogInVisibility = () => {
    //     this.setState({ LogInModal: !this.state.LogInModal });
    // }
    // handleToggleSigInVisibility = () => {
    //     this.setState({ SigInModal: !this.state.SigInModal });
    // }
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
                    <LoginButton
                        />
                    {/* <div className="modal">
                    <div className="modal_container">
                        {/* <LoginModal
                            visibility={this.state.LogInModal ? "loginModal visible" : "loginModal"}
                            headerH4={'Podaj login'}
                            passwordH4={'Podaj hasło'}
                            onChange={this.handleTextChange}
                            loginValue={this.state.LogInLogin}
                            passwordValue={this.state.LogInPassword}
                        />
                        <SigInModal
                            visibility={this.state.SigInModal ? "siginModal visible" : "siginModal"}
                            headerH4={'Podaj login'}
                            passwordH4={'Podaj hasło'}
                            onChange={this.handleTextChange}
                            loginValue={this.state.SigInLogin}
                            passwordValue={this.state.SigInPassword}
                        /> 
                    </div>
                </div> */}
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