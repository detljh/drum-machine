import React from 'react';
import './drum-pad.scss';

class DrumPadComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
     }
   
     componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
     }

    handleKeyDown(event) {
        console.log(event);
        if (event.keyCode === this.props.keyCode) {
            this.play();
        }
    }

    play() {
        this.props.updateDisplay(this.props.name);
        const audio = new Audio(this.props.audio);
        audio.play();
    }

    render() {
        return (
            <div className="drum-pad" onClick={this.play.bind(this)} >
                <audio src={this.props.audio} className="clip" id={this.props.keyButton} />
                {this.props.keyButton}
            </div>
        );
    }
}

export default DrumPadComponent;