import types from './types.js';


const data = require('../audio.json');
const INITIAL_STATE = {
    audioData: data
};

const homeReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case types.UPDATE_DISPLAY:
            return Object.assign({}, state, {
                currentDisplay: action.currentDisplay
            })
        default:       
            return state;
    };
};

export default homeReducer;