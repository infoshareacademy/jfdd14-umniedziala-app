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
