import { types } from "../types/types";


// const initialState = {
//     logged: false,
//     user: {}
// }


export const authReducer = (state = {}, action) => {



    switch (action.type) {
        case types.login:
            return {
                ...state, 
                logged: true,
                user: action.payload
            };
            
        case types.logOut:
            return {
                logged: false,
            }
        default: return state
    }
}
