import React, {Component} from 'react';
import './AddNewPlace.css';
import { Button, Input} from 'semantic-ui-react';



function AddNewPlace() {
    return (
        <main className='dashboard'>
            <div class='addPlace'>
                <h1 class='addPlace__h1'>Dodaj swoje miejsce</h1>
                <div class='addPlace__name'>Nazwa:<br></br><Input></Input></div>
                <div class='addPlace__price'>Cena:<br></br><Input></Input></div>
                <div class='addPlace__category'>Kategoria:<br></br><Input></Input></div>
                <div class='addPlace__img'>Zdjęcie:<br></br><Input></Input></div>
                <div class='addPlace__location'>Lokalizacja:<br></br><Input></Input></div>
                <div class='addPlace__description'>Opis:<br></br><Input></Input></div>
                <Button center>Dodaj nowe miejsce</Button>
            </div>
        </main>
       
    )
}


export default AddNewPlace;