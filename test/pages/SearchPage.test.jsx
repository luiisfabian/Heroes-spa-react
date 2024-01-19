import { fireEvent, render, screen } from "@testing-library/react";
import { SearchPage } from "../../src/heroes/pages/SearchPage";
import { MemoryRouter } from "react-router-dom";


const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}))

describe('test in SearchPage', () => {
    test('debe mostrarse correctamente con los valores por defecto', () => {
        // beforeEach(() => jest.clearAllMocks())

        const { container } = render(
            <MemoryRouter>,
                <SearchPage />
            </MemoryRouter>
        )
        // expect(container).toMatchSnapshot()
        expect(screen.getByText('Search')).toBeTruthy()
        expect(screen.getByText('Search a Hero!')).toBeTruthy()
    })

    test('debe mostrar batman y con el input del valor del query string', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>,
                <SearchPage />
            </MemoryRouter>
        )
        const input = screen.getByRole('textbox');
        expect(input.value).toBe("batman")

        const img = screen.getByRole('img');

        expect(img.src).toContain("http://localhost/assets/heroes/dc-batman.jpg")

        const alert = screen.getByLabelText('alert-danger');
        expect(alert.style.display).toBe('none')
    })

    test('debe de mostrar un error si no se encuentra el herue', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>,
                <SearchPage />
            </MemoryRouter>
        )
        const alert = screen.getByLabelText('alert-danger');
        expect(alert.style.display).toBe('')
        // expect(input.value).toBe("No hero Result")
    })
    test('debe de llamar al navigate a una pestaña nueva', () => {
        const inputValue = 'superman'
        render(
            <MemoryRouter initialEntries={['/search']}>,
                <SearchPage />
            </MemoryRouter>
        )
        // screen.debug()
        const input = screen.getByRole('textbox')

        fireEvent.change(input, { name: 'searchText', value: inputValue })
        const form = screen.getByRole('form')
        fireEvent.submit(form)
        expect( mockedUseNavigate ).toHaveBeenCalledWith(`?q=${ inputValue }`)
    
    
    })
});