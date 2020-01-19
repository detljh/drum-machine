import React from 'react';
import DrumPad from './DrumPadComponent';
import './drum-machine.scss';

const DrumMachineComponent = (props) => {
    return (
        <div id="drum-machine">
            <div id="drum-pads">
                <DrumPad keyButton='Q' onClick={props.handleClick}/>
                <DrumPad keyButton='W'/>
                <DrumPad keyButton='E'/>
                <DrumPad keyButton='A'/>
                <DrumPad keyButton='S'/>
                <DrumPad keyButton='D'/>                    
                <DrumPad keyButton='Z'/>
                <DrumPad keyButton='X'/>
                <DrumPad keyButton='C'/>   
            </div>
            <div id="display">
                audio name
            </div>
        </div>
    );
}

export default DrumMachineComponent;