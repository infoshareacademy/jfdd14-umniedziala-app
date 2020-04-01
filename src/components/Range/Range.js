import React, { useState } from 'react';
import '../Range/Range.css';
import { Label } from 'semantic-ui-react';



function Range(props) {
    return (<div className="range__wrapper">
        <Label className='range__label' pointing='below'>Wybierze przedział cenowy</Label>
         <input className="slider" type="range" min='0' max="4" step="1"></input>
         <div className="slider__text">
            <p>Wszystkie</p>
            <p>0</p>
            <p>$</p>
            <p>$$</p>
            <p>$$$</p>
         </div>
    </div>)
}

export default Range