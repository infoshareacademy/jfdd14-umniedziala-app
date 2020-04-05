import React, { Component } from "react";
import { getAttractionsAsArray } from "../../services";
import ListWithPagination from "../../components/ListWithPagination/ListWithPagination";

class PlaceList extends Component {
  state = {
    attractions: [],
  };

  componentDidMount() {
    getAttractionsAsArray().then((attractions) => {
      this.setState({
        attractions,
      });
    });
  }

  // componentDidUpdate() {
  //   getAttractionsAsArray().then((attractions) => {
  //     this.setState({
  //       attractions,
  //     });
  //   });
  // }

  render() {
    const { attractions } = this.state
    return (
      <ListWithPagination
        list={attractions}
        itemNameForStorage="tripcity-lastViewedPage"
        defaultPage={localStorage.getItem("tripcity-lastViewedPage") || 1}
      />
    );
  }
}

export default PlaceList;
