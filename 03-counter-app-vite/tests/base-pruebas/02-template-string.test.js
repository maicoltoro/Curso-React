import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('prueba en 02-template-string', () => { 
    
    test('getSaludo debe  de retornar un saludo', () => { 

        const name = "maicol";
        const mensaje = getSaludo(name);

        expect (mensaje).toBe(`Hola ${name}`)
    })

})