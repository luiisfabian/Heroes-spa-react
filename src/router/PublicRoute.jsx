import { useContext } from "react"
import { authContext } from "../auth"

export const PublicRoute = ({ children }) => {

    const { logged } = useContext(authContext);
    const lastPath = localStorage.getItem( "lastPath" ) || "/";

    return   (
        !logged ?  children : <Navigate to={ lastPath } />
    )      

}
