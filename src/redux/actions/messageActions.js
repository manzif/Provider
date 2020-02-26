import { NEW_MESSAGE } from './types'

export const addMessage = (messageData) => dispatch => {
    fetch('https://nameless-springs-87911.herokuapp.com/api/messages', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(messageData)
        })
        .then(res => res.json())
        .then(message => dispatch({
            type: NEW_MESSAGE,
            payload: message
    }));
}
