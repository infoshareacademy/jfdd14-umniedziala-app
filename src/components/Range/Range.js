import React, { useState } from 'react';
import '../Range/Range.css'

function Range(props) {
    return (<div className="range__wrapper">
         <p>Cena:</p>
         <input className="slider" type="range" min='0' max="3" step="1"></input>
         <div className="slider__text">
            <p>0</p>
            <p>$</p>
            <p>$$</p>
            <p>$$$</p>
         </div>
    </div>)
}

export default Range