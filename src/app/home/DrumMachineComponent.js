import React from 'react';
import DrumPad from './DrumPadContainer';
import './drum-machine.scss';

const DrumMachineComponent = (props) => {
    return (
        <div id="drum-machine">
            <div id="drum-pads">
                {
                    props.audioData.map((e, index) => {
                        return (
                            <DrumPad key={index} keyButton={e.keyButton} audio={e.url} keyCode={e.keyCode} 
                                name={e.name} /> 
                        );
                    })
                }
                
            </div>
            <div id="display">
                {props.currentDisplay}
            </div>
        </div>
    );
}

export default DrumMachineComponent;