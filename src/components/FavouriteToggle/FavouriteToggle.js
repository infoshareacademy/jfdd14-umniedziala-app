import React, {Component} from 'react';
import './FavouriteToggle.css';
import attractionData from '../../attractionData';

class FavouriteToggle extends Component {
  state = {
    attractionList: attractionData,
    attractionFavouriteStatus: attractionData.find(el => el.id === this.props.id).favorite
  };

  heartFull = <i className="fas fa-heart dashboardFavourite__icon" />;
  heartEmpty = <i className="far fa-heart dashboardFavourite__icon" />;

  toggleClick = () => {
    const listModified = this.state.attractionList.map(
      el => 
        el.id !== this.props.id ?
          el 
          :
          { 
            ...el, 
            favorite: !el.favorite 
          }
    );
    this.setState({ attractionList: listModified });
    this.setState({ attractionFavouriteStatus: listModified.find(el => el.id === this.props.id).favorite });
    localStorage.setItem("attractionData", JSON.stringify(listModified));
  }

  render() {
    const heartIcon = this.state.attractionFavouriteStatus ? this.heartFull : this.heartEmpty;
    const tooltipText = this.state.attractionFavouriteStatus ? "usuń z ulubionych" : "dodaj do ulubionych";
    return (
      <span className="tooltip" onClick={this.toggleClick}>{heartIcon}
        <span className="tooltiptext">{tooltipText}</span>
      </span>
    )
  }
}

export default FavouriteToggle;

// props: id