import { fireEvent, render, screen } from "@testing-library/react";
import { authContext } from "../../../src/auth";
import { router } from "../../../src/router/AppRouter";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { Navbar } from "../../../src/ui";

describe('pruebas en Navbar.jsx', () => {
    const contextValue = {
        user: {
            name: 'John',
            logged: true
        },
        logOut: jest.fn()

    }

    const mockedUseNavigate = jest.fn()

    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => mockedUseNavigate,
    }))

    test('pruebas en el navbar que me diga el nombre del usuario logueado', () => {
        render(<authContext.Provider value={contextValue}>
            <MemoryRouter>
                <Navbar />
            </ MemoryRouter>

        </authContext.Provider>)

        expect(screen.getByText("John")).toBeTruthy();

    })
    test('debe llamar al logouth cuando se haga click en el boton', () => {
        render(<authContext.Provider value={contextValue}>
            <MemoryRouter>
                <Navbar />
            </ MemoryRouter>

        </authContext.Provider>)

        const logOuth = screen.getByRole('button');
            fireEvent.click(logOuth );

        expect(contextValue.logOut ).toHaveBeenCalled();
        expect(contextValue.logOut ).toHaveBeenCalledTimes(1);
        // expect(mockedUseNavigate).toHaveBeenCalledWith('/login', { replace: true })

    })
});
