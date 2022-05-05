
import profileReducer, {initialState} from "../store/profile/reducer";
import {TOGGLE_LIKE, TOGGLE_NAME, UPDATE_NAME} from "../store/profile/actions";

describe('profile reducer', () => {
    it('UPDATE_NAME', () => {
        const action = {
            type: UPDATE_NAME,
        }

        expect(profileReducer(initialState, action)).toEqual({
            ...initialState,
            name: action.payload
        })
    });
});

