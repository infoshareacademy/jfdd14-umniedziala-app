import React, { Component } from "react";
import "./ListWithPagination.css";
import { Card } from "semantic-ui-react";
import CardComponent from "../Card/Card";

class ListWithPagination extends Component {
  render() {
    return (
      <main className="dashboard__liasAll">
        <Card.Group centered itemsPerRow={2}>
          {this.props.list.map(attraction => {
            return <CardComponent
              key={attraction.id}
              link={`/placedetails/${attraction.id}`}
              image={attraction.img}
              meta={`${attraction.name}, ${attraction.location}`}
              description={attraction.descriptionLong.slice(0, 100) + "..."}
              price={"Przedział cenowy: " + attraction.priceRange}
            />
          })}
        </Card.Group>
      </main>
    );
  }
}

export default ListWithPagination;
