import React, { useState } from 'react';
import '../Range/Range.css';
import { Label } from 'semantic-ui-react';

//'darmowe' 'tanio' 'umiarkowanie' 'drogo'

function Range(props) {

    /* const [rangeValue, setRangeValue] = useState('')

    const onRangeValueChange = (event) => {
        const evt = event.target.value
        console.log(typeof event.target.value);
        if (evt === 0) {
            setRangeValue('darmowe')
        } else if (evt === '1') {
            setRangeValue('tanio')
        } else if (evt === '2') {
            setRangeValue('umiarkowanie')
        } else if (evt === '3') {
            setRangeValue('drogo')
        } else if (evt === '4') {
            setRangeValue('wszystkie')
        }
    } 
    console.log(rangeValue) */

    return (
        <div className="range__wrapper">
            <input 
                className={props.className}
                type={props.type}
                min={props.min}
                max={props.max}
                step={props.step}
                value={props.value}
                onChange={props.onChange}
                
            />
            <div className="slider__text">
                <p>Darmowe</p>
                <p>Tanio</p>
                <p>Umiarkowanie</p>
                <p>Drogo</p>
                <p>Wszystkie</p>

            </div>

        </div>
    )
}

export default Range 