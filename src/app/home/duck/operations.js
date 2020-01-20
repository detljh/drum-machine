import Creators from './actions.js';

const updateDisplay = (name) => {
    return (dispatch) => {
        dispatch(Creators.updateDisplay(name));
    }
}

export default {
    updateDisplay
};