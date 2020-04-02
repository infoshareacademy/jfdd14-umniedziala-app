import React, { Component } from "react";
import attractionData from "../../attractionData";
import ListWithPagination from "../../components/ListWithPagination/ListWithPagination";

class PlaceList extends Component {
  render() {
    return <ListWithPagination list={attractionData} />;
  }
}

export default PlaceList;
