import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import FacebookButton from "../../components/FacebookButton/FacebookButton";
import "./Sidebar.css";
import { UserContext } from "../../contexts/UserContext";
import { logOut } from "../../services";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from 'glamor';

function Sidebar(props) {
  const userData = useContext(UserContext);
  const { userId, setUserId } = userData;

  let history = useHistory(); 

  const logoutSuccess = () => toast(
    "Wylogowano z Tripcity!", {
    className: css({
      background: 'white'
    }),
    bodyClassName: css({
      fontSize: '20px',
      color: 'var(--color-blue)'
    }),
    progressClassName: css({
      background: "var(--color-blue)"
    }),
    position: toast.POSITION.BOTTOM_LEFT,
  });

  const handleLogOutClick = () => {
    logOut();
    setUserId("");
    props.changeVisibility();
    logoutSuccess();
    history.push('/');
  };

  return (
    <div className={props.visibility}>
      <nav className="sidebar__nav">
        <Link to="/" className="sidebar__link" onClick={props.changeVisibility}>
          Strona główna
        </Link>
        <Link to="/placelist" className="sidebar__link" onClick={props.changeVisibility}>
          Wszystkie atrakcje
        </Link>
        <Link to="/myfavourites" className="sidebar__link" onClick={props.changeVisibility}>
          Moje ulubione
        </Link>
        <Link to="/addnewplace" className="sidebar__link" onClick={props.changeVisibility}>
          Dodaj własną atrakcję
        </Link>
        {!userId ?
          <Link to="/login" className="sidebar__link" onClick={props.changeVisibility}>
              Logowanie
          </Link>
          :
          <Link to="/" className="sidebar__link" onClick={handleLogOutClick}>
            Wyloguj mnie
          </Link>
        }
        {!userId ?
        <Link to="/register" className="sidebar__link" onClick={props.changeVisibility}>
            Rejestracja
        </Link>
        :
        null
        }
      </nav>
      <FacebookButton />
    </div>
  );

}

export default Sidebar;
