import {TOGGLE_LIKE, TOGGLE_NAME} from "./actions";

const initialState = {
    showName: false,
    name: 'Nikita'
}

const profileReducer = (state = initialState, action ) => {
    switch (action.type) {
        case TOGGLE_NAME:
            return {
                ...state,
                showName: !state.showName,
                data: action.payload
            };
        default:
            return state;
        case TOGGLE_LIKE:
            return {
                ...state,
                showLike: !state.showLike,
                data: action.payload
            };
    }
}

export default profileReducer;