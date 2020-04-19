import React from 'react'
import { Card } from 'semantic-ui-react'
import './Card.css'



const CardComponent = (props) => (
    <div className="cardComponent">
    <Card
        href={props.link}
        image={props.image}
        meta={props.meta}
        description={props.description}
        extra={props.price}
        className="cardView"
    />
    </div>
)

export default CardComponent;
