import { render, screen } from "@testing-library/react";
import { MemoryRouter, RouterProvider, createMemoryRouter } from "react-router-dom";
import { AppRouter, routes } from "../../src/router/AppRouter";
import { authContext } from "../../src/auth";


describe('test en AppRouter', () => {
    test("debe de mostrar el login si no esta autenticado", () => {
        const contextValue = {
            logged: false,
        };

        const router = createMemoryRouter(routes, {
            initialEntries: ["/marvel", "/login"],
            initialIndex: 1,
        });

        render(
            <authContext.Provider value={contextValue}>
                <RouterProvider router={router} />
            </authContext.Provider>
        );

        expect(screen.getAllByText('LoginPage')).toBeTruthy();
    });


    test("debe de mostrar el componente de marvel si esta autenticado", () => {
        const contextValue = {
            logged: true,
            user: {
                "name": "FAbian",
                "id": "123"
            }
        }

        const router = createMemoryRouter(routes, {
            initialEntries: ["/marvel", "/login"],
            initialIndex: 1,
        });

        render(
            <authContext.Provider value={contextValue}>
                <RouterProvider router={router} />
            </authContext.Provider>
        );

            screen.debug();
        expect(screen.getAllByText('MARVEL')).toBeTruthy();



    });
});