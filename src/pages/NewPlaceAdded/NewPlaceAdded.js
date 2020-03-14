import React, {Component} from 'react';
import './NewPlaceAdded.css';
import { Button} from 'semantic-ui-react';


class NewPlaceAdded extends Component {
    render() {
        return (
        <div className='newPlaceAdded'>
            <div className='dnewPlaceAdded__text'>
                Gratulacje!
                    <br></br>
                    <br></br>
                Twoje miejsce zostało dodane! 
                    <br></br>
                    <br></br>
            </div>
            <div className='newPlaceAdded__buttons'>    
                <Button>Przejdź do opisu miejsca</Button>
                    <br></br>
                    <br></br>
                <Button>Przejdź do listy miejsc</Button>
            </div>
        </div>
        )
    }
}

export default NewPlaceAdded;