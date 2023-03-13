describe('pruebas en DemoComponent', () => {

    test('esta prueba no debe de fallar', () =>{
    
        const mensaje = "hola mundo";
    
        const mensaje2 = mensaje.trim();
    
        expect (mensaje).toBe(mensaje2)
    
    })
})