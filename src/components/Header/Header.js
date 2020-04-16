import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import logo from "../../logo_white.png";
import "./Header.css";

function Header() {
  const [menuOpen, setOpen] = useState(false);
  const searcherContent = useRef(null);

  const openHandler = () => {
    setOpen((state) => !state);
  };

  const handleClickOutside = (event) => {
    if (
      searcherContent.current &&
      !searcherContent.current.contains(event.target)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={searcherContent}>
      <header className="header">
        <div className="header__leftBox">
          <div className="header__imageBox">
            <img src={logo} alt="logo" className="header__image"></img>
          </div>
          <h1 className="header__title">
            <Link to="/" className="header__titleLink">
              tripcity
            </Link>
          </h1>
        </div>
        <div className="header__rightBox">
          {menuOpen ? (
            <i className="fas fa-times header__icon" onClick={openHandler}></i>
          ) : (
            <i className="fas fa-bars header__icon" onClick={openHandler}></i>
          )}
        </div>
      </header>
      <Sidebar
        visibility={menuOpen ? "sidebar visible" : "sidebar"}
        changeVisibility={openHandler}
      />
    </div>
  );
}

export default Header;
