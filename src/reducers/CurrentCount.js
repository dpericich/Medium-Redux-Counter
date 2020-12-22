import ActionTypes from '../actions/ActionTypes';

const initalState = {
    currentCount: 0,
}

export const currentCount = (state = initalState, action) => {
    switch(action.type) {
        case ActionTypes.INCREMENT:
            return { ...state, currentCount: state.currentCount + 1 }
        case ActionTypes.DECREMENT:
            return { ...state, currentCount: state.currentCount - 1 }
        case ActionTypes.RESET:
            return { ...state, currentCount: 0 }
        default: 
            return state;
    }
}

/// This works, but is bad because it directly modifies the state
// export const currentCount = (state = 0, action) => {
//     switch(action.type) {
//         case ActionTypes.INCREMENT:
//             return state + 1;
//         case ActionTypes.DECREMENT:
//             return state - 1;
//         case ActionTypes.RESET:
//             return state = 0;
//         default: 
//             return state;
//     }
// }