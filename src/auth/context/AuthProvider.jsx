import { useReducer } from "react"
import { authContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"



const initialState = {
    logged: false,
}

export const AuthProvider = ({ children }) => {

    
    const [authState, dispatch] = useReducer(authReducer, initialState);

    const login = (name = '') => {
        const action = {
            type: types.login,
            payload: {
                id: 'ABC',
                name: name
            }
        }
        dispatch(action)
    }

    return (
        <authContext.Provider value={{
            ...authState,
            login: login
        }}>
            {children}
        </authContext.Provider>
    )

}
