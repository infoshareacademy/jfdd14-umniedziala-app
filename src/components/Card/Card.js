import React from "react";
import { Card } from "semantic-ui-react";
import "./Card.css";
import { Link } from "react-router-dom";

const CardComponent = (props) => (
  <div className="cardComponent">
    <Link to={props.link}>
      <Card
        image={props.image}
        meta={props.meta}
        description={props.description}
        extra={props.price}
        className="cardView"
      />
    </Link>
  </div>
);

export default CardComponent;

// przykładowe uzycie elementu card
/* <CardComponent
            link={'/placeadded'}
            image={atractionData['0'].img}
            meta={`${atractionData['0'].name}, ${atractionData['0'].location}`} // wyświetlają się dwie pozycje (name + lokacja)
            description={atractionData['0'].descriptionLong.slice(0, 100) + "..."}
            price={"Przedział cenowy: " + " " + " " + atractionData['0'].priceRange}
          /> */
