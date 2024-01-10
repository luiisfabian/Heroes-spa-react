import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AppRouter } from "../../src/router/AppRouter";
import { authContext } from "../../src/auth";


describe('test en AppRouter', () => {
    test('Debe de mostrar el login sus no esta autenticado', () => {
        const contextValue = {
            user: {
                logged: false
            }
        }

        render(
                <authContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/marvel']}>


                    <AppRouter />

                    </ MemoryRouter>

                </authContext.Provider>

        )


        screen.debug();
        expect(screen.getB('LoginPage')).toBeTruthy();
        // expect(screen.getAllByAltText('LoginPage').length).toBe(2);
    })
});