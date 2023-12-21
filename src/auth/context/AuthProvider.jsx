import { useReducer } from "react"
import { authContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"



const initialState = {
    logged: false,
}

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'))

    return {
        logged: !!user,
        user: user
    }
}

export const AuthProvider = ({ children }) => {


    const [authState, dispatch] = useReducer(authReducer, initialState, init);

    const login = (name = '') => {
        const user = { id: 'ABC', name }

        const action = {
            type: types.login,
            payload: user
        }

        localStorage.getItem('user', JSON.stringify(user))
        dispatch(action)
    }


    const logOut = (name = '') => {
    

        localStorage.removeItem('user')
        const action = {
            type: types.logout,
            
        }
        dispatch(action)

    }


    return (
        <authContext.Provider value={{
            ...authState,
            login: login,
            logOut: logOut
        }}>
            {children}
        </authContext.Provider>
    )

}
