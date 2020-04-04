import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './FavouriteCard.css';
import FavouriteToggle from '../FavouriteToggle/FavouriteToggle';

class FavouriteCard extends Component {

  render() {
    const { link, image, name, location, description, price, id } = this.props;

    return (
      <div className="favList__card">
        <Link to={link} className="favList__cardLink">
          <div className="favList__cardImgWrapper">
            <img src={image} alt={name} className="favList__cardImg" />
          </div>
        </Link>
        <div className="favList__cardInfo">
          <div className="favList__cardTitleBox">
            <Link to={link} className="favList__cardLink">
              <h3 className="favList__cardTitle">{`${name}, ${location}`}</h3>
            </Link>
            <FavouriteToggle
              id={id}
            />
          </div>
          <div>
            <h4 className="favList__cardPrice">{price}</h4>
            <p className="favList__cardDesc">{description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default FavouriteCard;