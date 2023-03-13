import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('pruebas en 05-funciones', () => { 
    
    test('get user debe retornar un objeto', () => {
        
        const Testuser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect (Testuser).toEqual(user)
    })

    test('getUsuarioActivo', () => { 

        const name = "maicol";
        const user = getUsuarioActivo(name);

        const testObj = {
            uid: 'ABC567',
            username: name
        }

        expect (user).toStrictEqual(testObj)
     })

})