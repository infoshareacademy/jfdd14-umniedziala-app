import React, {Component} from 'react';
import './NewPlaceAdded.css';
import { Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';


class NewPlaceAdded extends Component {
    render() {
        return (
        <div className='newPlaceAdded'>
            <div className='newPlaceAdded__text'>
                Gratulacje!
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                Twoje miejsce zostało dodane! 
            </div>
            <div className='newPlaceAdded__buttons--placeDecription'>
                <Link to="/addnewplace">   
                    <Button size='large'> Dodaj kolejne miejsce</Button>
                </Link>
             </div>    
            <div className='newPlaceAdded__buttons--placeList'>
                <Link to="/placelist">
                    <Button size='large'>Przejdź do listy miejsc</Button>
                </Link>
            </div>
        </div>
        )
    }
}

export default NewPlaceAdded;