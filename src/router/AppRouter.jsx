import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { MarvelPage } from "../heroes/pages/MarvelPage";
import { DcPage } from "../heroes/pages/DcPage";
import { LoginPage } from "../auth/pages/LoginPage";
import { HeroesApp } from "../HeroesApp";


export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <MarvelPage />,
    },
    {
        path: "marvel",
        element: <MarvelPage />,
    },
    {
        path: "dc",
        element: <DcPage />,
    },
    {
        path: "login",
        element: <LoginPage />,
    },
]);
