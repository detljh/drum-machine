import { connect } from 'react-redux';
import DrumPadComponent from './DrumPadComponent';
import { homeOperations } from './duck'; 

const mapDispatchToProps = (dispatch) => {
    return {
        updateDisplay: (name) => {
            dispatch(homeOperations.updateDisplay(name));
        }
    };
}

const DrumPadContainer = connect(null, mapDispatchToProps)(DrumPadComponent);

export default DrumPadContainer;