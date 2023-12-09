import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { MarvelPage } from "../heroes/pages/MarvelPage";
import { DcPage } from "../heroes/pages/DcPage";
import { LoginPage } from "../auth/pages/LoginPage";
import { HeroesApp } from "../HeroesApp";

import { Navbar } from "../ui";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        children:[
            {
                path: "/",
                element: <MarvelPage />,
            },
            {
                path: "/marvel",
                element: <MarvelPage />,
            },
            {
                path: "/dc",
                element: <DcPage />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
        ] 
    }
    
]);

import React from 'react'

export const AppRouter = () => {
    return (
        <RouterProvider router={router} />)
}

