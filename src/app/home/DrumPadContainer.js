import { connect } from 'react-redux';
import DrumPadComponent from './DrumPadComponent';
import { homeOperations } from './duck'; 

const mapStateToProps = (state) => {
    return {
        padStyle: state.home.padStyle,
        activePad: state.home.activePad
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateDisplay: (name) => {
            dispatch(homeOperations.updateDisplay(name));
        },
        updatePadStyle: (keyButton) => {
            dispatch(homeOperations.updatePadStyle(keyButton));
        }
    };
}

const DrumPadContainer = connect(mapStateToProps, mapDispatchToProps)(DrumPadComponent);

export default DrumPadContainer;