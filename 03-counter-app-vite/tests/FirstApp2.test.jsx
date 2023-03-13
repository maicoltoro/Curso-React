import { render,screen } from "@testing-library/react"
import {Componente} from '../src/FirstApp'

describe('pruebas en FirstApp', () => { 
    
    const title = "prueba test"


    test('debes de hacer match con el snapshot', () => { 

        const {container} = render(<Componente title = {title}/>)
        expect (container).toMatchSnapshot();
    })

    test('debes de mostrar el mensaje', () => { 

        render(<Componente title = {title}/>)
        expect(screen.getByText(title)).toBeTruthy();
    })

    test('debes de mostrar el titulo en un h1', () => { 

        render(<Componente title = {title}/>)
        //console.log(screen.getByRole("heading",{level: 1}))
        expect(screen.getByRole('heading',{ level :1 }).innerHTML).toContain(title);
    })

 })