import { render } from "@testing-library/react"
import {Componente} from '../src/FirstApp'

describe('pruebas en FirstApp', () => { 
    
    // test('debes de hacer match con el snapshot', () => { 

    //     const title = "prueba test"
    //     const {container} = render(<Componente title = {title}/>)

    //     expect (container).toMatchSnapshot();
    // })

    test('debes de mostrar el titulo en un h1', () => { 

        const title = "prueba test"
        const {container, getByText,getByTestId} = render(<Componente title = {title}/>)
        //getAllByText devuelve un array de cuantos elementos hay
        expect(getByText(title)).toBeTruthy();

        expect(getByTestId('test-title').innerHTML).toBe(title )

    })
 })