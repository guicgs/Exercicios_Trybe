// define ADD, addMessage(), messageReducer(), and store here:
const ADD = 'ADD';

function addMessage(message) {
 return {
     type: ADD,
     message,
 }
}

const messageReducer = (state = [], action) => {
    switch(action.type) {
        case ADD: return [...state, action.message]
    }
    return state;
}

const store = Redux.createStore(messageReducer);
