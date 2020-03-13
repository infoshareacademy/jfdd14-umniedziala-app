import React, {Component} from 'react';
import './AddNewPlace.css';
import { Button, Input} from 'semantic-ui-react';



function AddNewPlace() {
    return (
        <main className='dashboard'>
            <h1>Nareszcie coś się wyświetla</h1>
            <div>Nazwa:

            </div>
            <div>Cena:
            <Input></Input>
            </div>
            <div>
                Kategoria:

            </div>
            <div>
                Zdjęcie:

            </div>
            <div>
                Lokalizacja:

            </div>
            <div>
                Opis:

            </div>
            <Button>Dodaj nowe miejsce</Button>
        </main>
       
    )
}


export default AddNewPlace;