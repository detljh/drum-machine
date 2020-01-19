import types from './types.js';

const handleClick = (audio) => {
    return {
        type: types.DRUM_PRESS,
        audio: audio
    }
}

export default { 
    handleClick
};