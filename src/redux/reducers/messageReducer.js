import { NEW_MESSAGE } from '../actions/types'

const initialState = {
    messages: {}
};

export default function(state= initialState, action) {
    
    switch(action.type) {
        case NEW_MESSAGE:
            return {
                
                ...state,
                message: action.payload
            }
        default:
            return state;
    }
}
