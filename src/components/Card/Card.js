import React from 'react'
import { Card } from 'semantic-ui-react'
import './Card.css'



const CardComponent = (props) => (
    <div className="cardComponent">
    <Card
        href={props.link} // wstawić link do szczegółowego opisu. W ramach testów jest wrzucony link do placeadded (działa( przenosi) gdy się wciśnie na cały element)
        image={props.image}
        // header={props.name} //nie usuwać moeze jeszcze się to uda napwaić
        meta={props.meta}
        description={props.description}
        extra={props.price}
    />
    </div>
)

export default CardComponent;

// przykładowe uzycie elementu card
// <CardComponent
// link={'/placeadded'}
// image={atractionData['0'].img}
// //header={atractionData['0'].name}
// meta={atractionData['0'].name}
// description={atractionData['0'].descriptionLong.slice(0, 100) + "..."}
// price={"Przedział cenowy: " + " " + " " + atractionData['0'].priceRange}
// />