import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { authContext } from "../auth"

export const PrivateRoute = ({ children }) => {

    const { logged } = useContext(authContext)

    const { pathname, search } = useLocation();
    const lastPath = pathname + search;
    localStorage.setItem("lastPath", lastPath);
    console.log("render");
    return (logged) ? children : < Navigate to={"/login"} />
}
