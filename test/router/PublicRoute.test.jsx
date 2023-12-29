import { render, screen } from "@testing-library/react";
import { PublicRoute } from "../../src/router/PublicRoute";
import { authContext } from "../../src/auth";
import { MemoryRouter, Route, Router, Routes } from "react-router-dom";

describe('test in PublicRoute.jsx', () => {
    test('si no esta autenticado, debe de mostrar el children', () => {
        const contextValue = {
            logged: false
        }

        render(<authContext.Provider value={contextValue}>
            <PublicRoute>
                <h1>ruta publica</h1>
            </  PublicRoute >
        </authContext.Provider>)

        expect(screen.getByText("ruta publica")).toBeTruthy();
    })

    test('debe de navegar si esta autenticado', () => {
        const contextValue = {
            logged: true,
            user: {
                "name": "FAbian",
                "id": "123"
            }
        }

        render(
            <MemoryRouter initialEntries={['/login']}>

                <authContext.Provider value={contextValue}>
                    <Routes>
                        <Route element={<PublicRoute />}>
                            <Route path="login" element={<h1>PUBLIC ROUTE</h1>} />
                        </Route>
                        <Route path="marvel" element={<h1>MARVEL Comics</h1>} />


                    </Routes>
           
                </authContext.Provider>
            </MemoryRouter>
        )

        screen.debug();
        expect(screen.getByText("MARVEL Comics")).toBeTruthy();



    })
});