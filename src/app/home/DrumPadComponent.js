import React from 'react';
import './drum-pad.scss';

const DrumPadComponent = (props) => {
    return (
        <div className="drum-pad">
            <audio src={props.audio} className="clip" id={props.keyButton} />
            {props.keyButton}
        </div>
    );
}

export default DrumPadComponent;