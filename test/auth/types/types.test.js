import { types } from "../../../src/auth/types/types";

describe('test in types', () => {
    test('debe regreesar estos types', () => {


        expect(types).toEqual({
            login: '[auth] login',
            logOut: '[auth] logout'
        })
    })
});