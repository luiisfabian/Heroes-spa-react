import { PrivateRoute } from "../../src/router/PrivateRoute";
import { authContext } from "../../src/auth";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe('pruebas en PrivateRoute.jsx', () => {
    test('si esta autenticado, debe de mostrar el children y evaluacion del localStorage', () => {

        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                id: "ABC",
                name: "Fabian"
            }
        }

        render(<authContext.Provider value={contextValue}>
            <MemoryRouter>
                <PrivateRoute>
                    <h1>ruta Privada</h1>
                </  PrivateRoute >
            </ MemoryRouter>

        </authContext.Provider>)

        expect(screen.getByText("ruta Privada")).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalled();
        expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/");
    })
});