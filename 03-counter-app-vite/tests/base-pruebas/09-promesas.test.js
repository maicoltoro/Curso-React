import {getHeroById} from '../../src/base-pruebas/09-promesas'

describe('pruebas 09-promesas', () => { 
    
    test('getHeroeByIdAsync debe retornar una proemsa', (done) => { 
        
        const id = 1;
        getHeroById ( id )
            .then (hero => {
                done()
            })
     })
 })