import React from 'react';
import DrumPad from './DrumPadContainer';
import './drum-machine.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDrum } from '@fortawesome/free-solid-svg-icons';


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
            <div id="display-box">
                <div id="logo">
                    <FontAwesomeIcon icon={faDrum} />
                    Drum Machine
                </div>
                <div id="display">
                    <p id="audio-name">{props.currentDisplay}</p>
                </div>
            </div> 
        </div>
    );
}

export default DrumMachineComponent;