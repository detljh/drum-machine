import types from './types.js';

const updateDisplay = (name) => {
    return {
        type: types.UPDATE_DISPLAY,
        currentDisplay: name
    }
}

export default { 
    updateDisplay
};