import { authReducer, types } from "../../../src/auth/";

describe('pruebas en authReducer', () => {
    const actionLogin = {
        type: types.login,
        payload: {
            name: "Ff",
            id: '123'
        }
    }

    const actionLogOut = {
        type: types.logOut,
        payload: {
            name: "Ff",
            id: '123'
        }
    }

    test('Debe Retornar el estado por defecto', () => {
        const stateReduce = authReducer({ logged: false }, {})

        expect(stateReduce).toEqual({ logged: false });
    })

    test('debe de (login) llamar al login y autenticar y establecer el user', () => {
        const state = authReducer({ logged: false }, actionLogin)
        expect(state).toEqual({
            logged: true,
            user: actionLogin.payload
        })
    })

    test('debe de (login) borrar en name del usuario y logged en false', () => {
        const newUser = {
            logged: true, user: {
                name: "Ff",
                id: '123'
            }
        }
        const state = authReducer(newUser, actionLogOut)
        expect(state).toEqual({ logged: false })
    })
});