import React, {Component} from 'react';
import './FavouriteToggle.css';
import atractionData from '../../atractionData';

class FavouriteToggle extends Component {
  state = {
    list: atractionData,
    object: atractionData.find(el => el.id === this.props.id),
    favStatus: false
  };

  heartFull = <i className="fas fa-heart dashboardFavourite__icon"></i>;
  heartEmpty = <i className="far fa-heart dashboardFavourite__icon"></i>;

  toggleOnClick = () => {
    this.setState({ favStatus: !this.state.favStatus });
    const listModified = [...this.state.list];
    listModified.forEach(el => {
      if (el.id === this.props.id) {
        el.favorite = !el.favorite;
      };
    });
    localStorage.setItem("atractionData", JSON.stringify(listModified));
  }

  componentDidMount() {
    this.setState({ favStatus: this.state.object.favorite });
  };

  render() {
    const heartIcon = this.state.favStatus ? this.heartFull : this.heartEmpty;

    return (
      <div>
        <p>{this.state.object.name}</p>
        <span onClick={this.toggleOnClick}>{heartIcon}</span>
      </div>
    )
  }
}

export default FavouriteToggle;