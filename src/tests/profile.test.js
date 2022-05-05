import {initialState} from "../store/profile/reducer";
import {updName} from "../store/profile/actions";

describe('изменение имени в  профиле', () => {
    it('вывод имени', () => {
        const name = "Nikita";
        const expected = initialState.name;
        const received = updName(name).payload;
        expect(received).toEqual(expected);
    });
});