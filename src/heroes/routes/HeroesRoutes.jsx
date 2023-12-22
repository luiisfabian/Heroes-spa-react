import React from 'react'
import { Navbar } from '../../ui'
import { LoginPage } from '../../auth';
import { Navigate, Outlet, createBrowserRouter } from 'react-router-dom';
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages';

export const childrenHeroRoutes = [

    {
        path: "/*",
        element: <Navigate to={"/marvel"}/>,
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
        path: "/search",
        element: <SearchPage />,
    },
    {
        path: "/hero/:heroId",
        element: <HeroPage />,
    },
    // {
    //     path: "/*",
    //     element: <Navigate to={"/marvel"}/>
      
    // }
    // {
    //     path: "/search",
    //     element: <DcPage />,
    // },
    // {
    //     path: "/hero",
    //     element: <DcPage />,
    // },
    



];

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Outlet />

            </div>
        </>

    )
}
