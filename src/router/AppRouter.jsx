import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { LoginPage } from "../auth/index";
import { childrenHeroRoutes, HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const router = createBrowserRouter([
    {

        path: "/login",
        element: (<PublicRoute>
            <LoginPage />,

        </PublicRoute>),


    },
    {

        path: "/",
        element: (
            <PrivateRoute >
                <HeroesRoutes />
            </PrivateRoute >
        ),
        children: childrenHeroRoutes

    }

]);



export const AppRouter = () => {
    return (
        <RouterProvider router={router} />)
}

