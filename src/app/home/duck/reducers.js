import types from './types.js';


const data = require('./audio.json');
const INITIAL_STATE = {
    audio_data: data
};

const homeReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case types.DRUM_PRESS:
            return Object.assign({}, state, {
                audio_object: action.audio
            })
        default:       
            return state;
    };
};

export default homeReducer;