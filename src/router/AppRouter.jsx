import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { LoginPage } from "../auth/index";
import { childrenHeroRoutes, HeroesRoutes } from "../heroes/routes/HeroesRoutes";

export const router = createBrowserRouter([
    {

        path: "/login",
        element: <LoginPage />,

    },
    {

        path: "/",
        element: <HeroesRoutes />,
        children: childrenHeroRoutes

    }

]);



export const AppRouter = () => {
    return (
        <RouterProvider router={router} />)
}

