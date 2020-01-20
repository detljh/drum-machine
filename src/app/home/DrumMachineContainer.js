import { connect } from 'react-redux';
import DrumMachineComponent from './DrumMachineComponent';

const mapStateToProps = (state) => {
    return {
        audioData: state.home.audioData,
        currentDisplay: state.home.currentDisplay
    };
}

const DrumMachineContainer = connect(mapStateToProps, null)(DrumMachineComponent);

export default DrumMachineContainer;