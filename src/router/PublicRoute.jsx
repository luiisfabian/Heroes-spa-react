import { useContext } from "react"
import { authContext } from "../auth"
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {

    const { logged } = useContext(authContext);
    const lastPath = localStorage.getItem( "lastPath" ) || "/";

    return   (
        !logged ?  children : <Navigate to={ lastPath } />
    )      

}
