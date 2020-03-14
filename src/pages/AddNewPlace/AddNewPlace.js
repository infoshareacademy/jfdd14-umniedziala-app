import React, {Component} from 'react';
import './AddNewPlace.css';
import { Button, Input} from 'semantic-ui-react';



function AddNewPlace() {
    
    return (
        <main className='dashboard'>
            <div className='addPlace'>
                <h1 className='addPlace__h1'>Dodaj swoje miejsce</h1>
                <div className='addPlace__name'><span>Nazwa miejsca:</span><Input></Input></div>
                <div className='addPlace__price'><span>Cena:</span><Input></Input>(tanio, średnio, drogo)</div>
                <div className='addPlace__category'><span>Kategoria:</span><Input></Input></div>
                <div className='addPlace__img'><span>Zdjęcie:</span><Input></Input ></div>
                <div className='addPlace__location'><span>Lokalizacja:</span><Input></Input></div>
                <div className='addPlace__description'><span>Opis:</span><Input></Input></div>
                <Button>Dodaj nowe miejsce</Button>
            </div>
        </main>
       
    )
    }
    
    export default AddNewPlace;